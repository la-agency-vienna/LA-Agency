import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { ContactEmail } from '@/components/emails/ContactEmail';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { name, email, message, senderEmail, section } = await request.json();

    // Support both formats (legacy and new)
    const contactName = name || 'Contact Form';
    const contactEmail = email || senderEmail;
    const contactMessage = message;

    // Enhanced validation
    if (!contactEmail || !contactMessage) {
      return NextResponse.json(
        { error: 'E-Mail und Nachricht sind erforderlich' },
        { status: 400 }
      );
    }

    // Improved email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(contactEmail)) {
      return NextResponse.json(
        { error: 'Ungültige E-Mail-Adresse' },
        { status: 400 }
      );
    }

    // Get current timestamp in Vienna timezone
    const timestamp = new Date().toLocaleString('de-AT', {
      timeZone: 'Europe/Vienna',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });

    // Send email using Resend with fallback HTML template
    const emailData = await resend.emails.send({
      from: 'L.A. Agency Contact <onboarding@resend.dev>',
      to: ['hello@la-agency-vienna.com'],
      subject: `Neue Kontaktanfrage von ${contactName} - ${timestamp}`,
      react: ContactEmail({ 
        name: contactName, 
        email: contactEmail, 
        message: contactMessage 
      }),
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Neue Kontaktanfrage</title>
          </head>
          <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f5f5f5;">
            <div style="max-width: 600px; margin: 40px auto; background-color: #ffffff; border-radius: 12px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); overflow: hidden;">
              
              <!-- Header -->
              <div style="background: linear-gradient(135deg, #B8860B 0%, #DAA520 100%); padding: 32px; text-align: center;">
                <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 600;">Neue Kontaktanfrage</h1>
                <p style="margin: 8px 0 0 0; color: #ffffff; opacity: 0.9; font-size: 14px;">L.A. Agency Wien</p>
              </div>
              
              <!-- Content -->
              <div style="padding: 32px;">
                
                <!-- Time Sent -->
                <div style="margin-bottom: 24px; padding: 16px; background-color: #f8fafc; border-radius: 8px; border-left: 4px solid #B8860B;">
                  <div style="font-size: 12px; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px;">Zeitpunkt</div>
                  <div style="font-size: 16px; font-weight: 500; color: #1e293b;">${timestamp}</div>
                </div>
                
                <!-- Contact Info -->
                <div style="margin-bottom: 24px; padding: 16px; background-color: #f8fafc; border-radius: 8px; border-left: 4px solid #10b981;">
                  <div style="font-size: 12px; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px;">Kontaktdaten</div>
                  <div style="font-size: 16px; font-weight: 500; color: #1e293b; margin-bottom: 8px;">
                    <strong>Name:</strong> ${contactName}
                  </div>
                  <div style="font-size: 16px; font-weight: 500; color: #1e293b;">
                    <strong>E-Mail:</strong> <a href="mailto:${contactEmail}" style="color: #B8860B; text-decoration: none;">${contactEmail}</a>
                  </div>
                </div>
                
                <!-- Message Content -->
                <div style="padding: 24px; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px;">
                  <div style="font-size: 12px; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 12px;">Nachricht</div>
                  <div style="font-size: 16px; line-height: 1.6; color: #334155; white-space: pre-wrap;">${contactMessage}</div>
                </div>
                
                ${section ? `
                <!-- Section Info -->
                <div style="margin-top: 24px; padding: 16px; background-color: #f1f5f9; border-radius: 8px; border-left: 4px solid #6366f1;">
                  <div style="font-size: 12px; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px;">Bereich</div>
                  <div style="font-size: 16px; font-weight: 500; color: #1e293b;">${section}</div>
                </div>
                ` : ''}
                
              </div>
              
              <!-- Footer -->
              <div style="padding: 24px 32px; background-color: #f8fafc; border-top: 1px solid #e2e8f0; text-align: center;">
                <p style="margin: 0; font-size: 14px; color: #64748b;">L.A. Agency Wien - Kontaktformular</p>
              </div>
              
            </div>
          </body>
        </html>
      `,
      text: `
        Neue Kontaktanfrage über die Website:
        
        Zeitpunkt: ${timestamp}
        Name: ${contactName}
        E-Mail: ${contactEmail}
        ${section ? `Bereich: ${section}` : ''}
        
        Nachricht:
        ${contactMessage}
      `,
    });

    if (emailData.error) {
      console.error('Resend error:', emailData.error);
      return NextResponse.json(
        { error: 'Fehler beim Versenden der E-Mail' },
        { status: 500 }
      );
    }

    return NextResponse.json({ 
      success: true, 
      message: 'E-Mail erfolgreich versendet',
      id: emailData.data?.id 
    });

  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Interner Serverfehler' },
      { status: 500 }
    );
  }
} 