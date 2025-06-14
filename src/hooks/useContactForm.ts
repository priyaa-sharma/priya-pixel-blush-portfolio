
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export const useContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const submitContactForm = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      const { data: result, error } = await supabase.functions.invoke('send-contact-email', {
        body: {
          name: data.name,
          email: data.email,
          message: data.message,
        },
      });

      if (error) {
        throw error;
      }

      toast({
        title: "Message Sent! 💌",
        description: "Thank you for reaching out! I'll get back to you soon.",
      });

      return { success: true };
    } catch (error: any) {
      console.error('Error sending contact form:', error);
      toast({
        title: "Oops! Something went wrong",
        description: "Please try again or email me directly at priya.sharma6927@gmail.com",
        variant: "destructive",
      });
      return { success: false, error: error.message };
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    submitContactForm,
    isSubmitting,
  };
};
