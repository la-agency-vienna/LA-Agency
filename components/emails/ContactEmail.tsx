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
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6', color: '#333' }}>
      <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
        {/* Header */}
        <div style={{ 
          background: 'linear-gradient(135deg, #ffb366, #ff9933)', 
          padding: '30px 20px', 
          borderRadius: '10px 10px 0 0',
          textAlign: 'center'
        }}>
          <h1 style={{ color: '#1a1a1a', margin: '0', fontSize: '28px', fontWeight: 'bold' }}>
            L.A. Agency Vienna
          </h1>
          <p style={{ color: '#1a1a1a', margin: '5px 0 0 0', fontSize: '16px' }}>
            Neue Kontaktanfrage
          </p>
        </div>

        {/* Content */}
        <div style={{ 
          background: '#ffffff', 
          padding: '30px', 
          borderRadius: '0 0 10px 10px',
          border: '1px solid #e5e5e5'
        }}>
          <h2 style={{ color: '#333', marginTop: '0', fontSize: '22px' }}>
            Kontaktdetails
          </h2>
          
          <div style={{ marginBottom: '20px' }}>
            <strong style={{ color: '#ffb366' }}>Name:</strong>
            <br />
            <span style={{ fontSize: '16px' }}>{name}</span>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <strong style={{ color: '#ffb366' }}>E-Mail:</strong>
            <br />
            <a href={`mailto:${email}`} style={{ 
              color: '#ff9933', 
              textDecoration: 'none',
              fontSize: '16px'
            }}>
              {email}
            </a>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <strong style={{ color: '#ffb366' }}>Nachricht:</strong>
            <br />
            <div style={{ 
              background: '#f8f9fa', 
              padding: '15px', 
              borderRadius: '8px',
              marginTop: '10px',
              borderLeft: '4px solid #ffb366'
            }}>
              <p style={{ margin: '0', fontSize: '16px', lineHeight: '1.6' }}>
                {message}
              </p>
            </div>
          </div>

          <div style={{ 
            marginTop: '30px', 
            padding: '20px', 
            background: '#f8f9fa', 
            borderRadius: '8px',
            borderLeft: '4px solid #ff9933'
          }}>
            <p style={{ margin: '0', fontSize: '14px', color: '#666' }}>
              <strong>Hinweis:</strong> Diese E-Mail wurde automatisch über das Kontaktformular der 
              L.A. Agency Vienna Website versendet.
            </p>
            <p style={{ margin: '10px 0 0 0', fontSize: '14px', color: '#666' }}>
              Zeitpunkt: {new Date().toLocaleString('de-AT')}
            </p>
          </div>
        </div>

        {/* Footer */}
        <div style={{ 
          textAlign: 'center', 
          marginTop: '20px', 
          fontSize: '12px', 
          color: '#999' 
        }}>
          <p style={{ margin: '0' }}>
            L.A. Agency Vienna | Wien, Österreich
          </p>
          <p style={{ margin: '5px 0 0 0' }}>
            Creating Moments. Building Brands.
          </p>
        </div>
      </div>
    </div>
  );
}; 