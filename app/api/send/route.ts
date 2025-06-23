import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { ContactEmail } from '@/components/emails/ContactEmail';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    // Validate the data
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Alle Felder sind erforderlich' },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: 'Ungültige E-Mail-Adresse' },
        { status: 400 }
      );
    }

    // Send email using Resend
    const emailData = await resend.emails.send({
      from: 'L.A. Agency Contact <onboarding@resend.dev>',
      to: ['hello@la-agency.vienna'], // Replace with actual email
      subject: `Neue Kontaktanfrage von ${name}`,
      react: ContactEmail({ name, email, message }),
      text: `
        Neue Kontaktanfrage über die Website:
        
        Name: ${name}
        E-Mail: ${email}
        
        Nachricht:
        ${message}
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