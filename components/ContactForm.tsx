'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Send, Loader2 } from 'lucide-react';

const contactSchema = z.object({
  name: z.string().min(2, 'Name muss mindestens 2 Zeichen lang sein'),
  email: z.string().email('Bitte geben Sie eine gültige E-Mail-Adresse ein'),
  message: z.string().min(10, 'Nachricht muss mindestens 10 Zeichen lang sein'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast({
          title: "Nachricht erfolgreich versendet!",
          description: "Wir werden uns schnellstmöglich bei Ihnen melden.",
          variant: "success",
        });
        reset();
      } else {
        throw new Error('Fehler beim Versenden');
      }
    } catch (error) {
      toast({
        title: "Fehler beim Versenden",
        description: "Bitte versuchen Sie es später erneut oder kontaktieren Sie uns direkt.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="glass-contact-card">
      <h3 className="heading-card text-center lg:text-left" 
          style={{ marginBottom: 'clamp(1.5rem, 3vw, 2rem)' }}>
        Vertrauliche Anfrage
      </h3>
      <div className="luxury-line-left" style={{ marginBottom: 'clamp(1.5rem, 3vw, 2rem)' }} />
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-subtle text-left" 
                 style={{ marginBottom: 'clamp(0.5rem, 1vw, 0.75rem)', fontSize: 'clamp(0.875rem, 2vw, 1rem)' }}>
            Name *
          </label>
          <Input
            id="name"
            type="text"
            placeholder="Ihr Name"
            {...register('name')}
            className={errors.name ? 'border-red-400 focus:border-red-400 focus:ring-red-400/50' : ''}
            style={{ fontSize: 'clamp(0.875rem, 2vw, 1rem)', padding: 'clamp(0.75rem, 2vw, 1rem)' }}
          />
          {errors.name && (
            <p className="text-red-400 font-light text-left" 
               style={{ fontSize: 'clamp(0.75rem, 1.5vw, 0.875rem)', marginTop: 'clamp(0.25rem, 0.5vw, 0.5rem)' }}>
              {errors.name.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-subtle text-left" 
                 style={{ marginBottom: 'clamp(0.5rem, 1vw, 0.75rem)', fontSize: 'clamp(0.875rem, 2vw, 1rem)' }}>
            E-Mail Adresse *
          </label>
          <Input
            id="email"
            type="email"
            placeholder="ihre.email@beispiel.com"
            {...register('email')}
            className={errors.email ? 'border-red-400 focus:border-red-400 focus:ring-red-400/50' : ''}
            style={{ fontSize: 'clamp(0.875rem, 2vw, 1rem)', padding: 'clamp(0.75rem, 2vw, 1rem)' }}
          />
          {errors.email && (
            <p className="text-red-400 font-light text-left" 
               style={{ fontSize: 'clamp(0.75rem, 1.5vw, 0.875rem)', marginTop: 'clamp(0.25rem, 0.5vw, 0.5rem)' }}>
              {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="message" className="block text-subtle text-left" 
                 style={{ marginBottom: 'clamp(0.5rem, 1vw, 0.75rem)', fontSize: 'clamp(0.875rem, 2vw, 1rem)' }}>
            Vertrauliche Nachricht *
          </label>
          <Textarea
            id="message"
            placeholder="Erzählen Sie uns diskret von Ihrem Projekt..."
            rows={6}
            {...register('message')}
            className={errors.message ? 'border-red-400 focus:border-red-400 focus:ring-red-400/50' : ''}
            style={{ fontSize: 'clamp(0.875rem, 2vw, 1rem)', padding: 'clamp(0.75rem, 2vw, 1rem)' }}
          />
          {errors.message && (
            <p className="text-red-400 font-light text-left" 
               style={{ fontSize: 'clamp(0.75rem, 1.5vw, 0.875rem)', marginTop: 'clamp(0.25rem, 0.5vw, 0.5rem)' }}>
              {errors.message.message}
            </p>
          )}
        </div>

        <div className="flex justify-center" style={{ marginTop: 'clamp(2rem, 4vw, 3rem)' }}>
          <Button
            type="submit"
            size="lg"
            disabled={isSubmitting}
            className="btn-luxury-filled"
            style={{ 
              fontSize: 'clamp(0.875rem, 2vw, 1rem)',
              minWidth: 'clamp(12rem, 30vw, 16rem)',
              justifyContent: 'center'
            }}
          >
            {isSubmitting ? (
              <>
                <Loader2 
                  style={{ 
                    width: 'clamp(1rem, 2vw, 1.125rem)', 
                    height: 'clamp(1rem, 2vw, 1.125rem)', 
                    marginRight: 'clamp(0.5rem, 1vw, 0.75rem)' 
                  }} 
                  className="animate-spin" 
                />
                Wird versendet...
              </>
            ) : (
              <>
                <Send 
                  style={{ 
                    width: 'clamp(1rem, 2vw, 1.125rem)', 
                    height: 'clamp(1rem, 2vw, 1.125rem)', 
                    marginRight: 'clamp(0.5rem, 1vw, 0.75rem)' 
                  }} 
                />
                Senden
              </>
            )}
          </Button>
        </div>
      </form>

      <p className="text-[var(--brand-text-muted)] text-center font-light tracking-wide" 
         style={{ fontSize: 'clamp(0.75rem, 1.5vw, 0.875rem)', marginTop: 'clamp(1.5rem, 3vw, 2rem)' }}>
        * Pflichtfelder - Alle Anfragen werden diskret behandelt
      </p>
    </div>
  );
}; 