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
    <div className="glass-card p-8">
      <h3 className="text-2xl font-bold text-white mb-6">Nachricht senden</h3>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-white font-medium mb-2">
            Name *
          </label>
          <Input
            id="name"
            type="text"
            placeholder="Ihr Name"
            {...register('name')}
            className={errors.name ? 'border-red-500' : ''}
          />
          {errors.name && (
            <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-white font-medium mb-2">
            E-Mail *
          </label>
          <Input
            id="email"
            type="email"
            placeholder="ihre.email@beispiel.com"
            {...register('email')}
            className={errors.email ? 'border-red-500' : ''}
          />
          {errors.email && (
            <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="message" className="block text-white font-medium mb-2">
            Nachricht *
          </label>
          <Textarea
            id="message"
            placeholder="Erzählen Sie uns von Ihrem Projekt..."
            rows={5}
            {...register('message')}
            className={errors.message ? 'border-red-500' : ''}
          />
          {errors.message && (
            <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>
          )}
        </div>

        <Button
          type="submit"
          size="lg"
          disabled={isSubmitting}
          className="w-full"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Wird versendet...
            </>
          ) : (
            <>
              <Send className="w-4 h-4 mr-2" />
              Nachricht senden
            </>
          )}
        </Button>
      </form>

      <p className="text-white/50 text-sm mt-4 text-center">
        * Pflichtfelder
      </p>
    </div>
  );
}; 