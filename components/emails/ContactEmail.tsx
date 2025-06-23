import React from 'react';

interface ContactEmailProps {
  name: string;
  email: string;
  message: string;
}

export const ContactEmail: React.FC<ContactEmailProps> = ({
  name,
  email,
  message,
}) => {
  const timestamp = new Date().toLocaleString('de-AT', {
    timeZone: 'Europe/Vienna',
    year: 'numeric',
    month: 'long', 
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });

  return (
    <div style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif', lineHeight: '1.6', color: '#333', backgroundColor: '#f8fafc' }}>
      <div style={{ maxWidth: '600px', margin: '0 auto', padding: '40px 20px' }}>
        
        {/* Header */}
        <div style={{ 
          background: 'linear-gradient(135deg, #B8860B 0%, #DAA520 100%)', 
          padding: '32px', 
          borderRadius: '12px 12px 0 0',
          textAlign: 'center',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
        }}>
          <h1 style={{ color: '#ffffff', margin: '0', fontSize: '24px', fontWeight: '600' }}>
            Neue Kontaktanfrage
          </h1>
          <p style={{ color: '#ffffff', margin: '8px 0 0 0', fontSize: '14px', opacity: '0.9' }}>
            L.A. Agency Vienna
          </p>
        </div>

        {/* Content */}
        <div style={{ 
          background: '#ffffff', 
          padding: '32px', 
          borderRadius: '0 0 12px 12px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
        }}>
          
          {/* Name */}
          <div style={{ marginBottom: '24px', padding: '20px', background: '#f8fafc', borderRadius: '8px', borderLeft: '4px solid #B8860B' }}>
            <div style={{ fontSize: '12px', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '8px', fontWeight: '500' }}>Name</div>
            <div style={{ fontSize: '18px', fontWeight: '600', color: '#1e293b' }}>{name}</div>
          </div>

          {/* Email */}
          <div style={{ marginBottom: '24px', padding: '20px', background: '#f8fafc', borderRadius: '8px', borderLeft: '4px solid #10b981' }}>
            <div style={{ fontSize: '12px', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '8px', fontWeight: '500' }}>Email</div>
            <div style={{ fontSize: '18px', fontWeight: '600' }}>
              <a href={`mailto:${email}`} style={{ 
                color: '#B8860B', 
                textDecoration: 'none'
              }}>
                {email}
              </a>
            </div>
          </div>

          {/* Message */}
          <div style={{ marginBottom: '24px', padding: '20px', background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '8px' }}>
            <div style={{ fontSize: '12px', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '12px', fontWeight: '500' }}>Message</div>
            <div style={{ fontSize: '16px', lineHeight: '1.6', color: '#334155', whiteSpace: 'pre-wrap' }}>
              {message}
            </div>
          </div>

          {/* Timestamp */}
          <div style={{ padding: '20px', background: '#f1f5f9', borderRadius: '8px', borderLeft: '4px solid #6366f1' }}>
            <div style={{ fontSize: '12px', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '8px', fontWeight: '500' }}>Timestamp</div>
            <div style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b' }}>{timestamp}</div>
          </div>
        </div>

        {/* Footer */}
        <div style={{ 
          textAlign: 'center', 
          marginTop: '24px', 
          fontSize: '14px', 
          color: '#64748b' 
        }}>
          <p style={{ margin: '0' }}>
            L.A. Agency Vienna - Kontaktformular
          </p>
        </div>
      </div>
    </div>
  );
}; 