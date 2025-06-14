
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Heart, Loader2 } from 'lucide-react';
import { useContactForm } from '@/hooks/useContactForm';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const { submitContactForm, isSubmitting } = useContactForm();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      return;
    }

    const result = await submitContactForm(formData);
    
    if (result.success) {
      // Reset form on success
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Card className="border-pink-200 bg-pink-50/90 backdrop-blur-sm">
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-pink-900 mb-2">Name</label>
            <Input 
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="border-pink-300 focus:border-pink-500 bg-pink-50" 
              placeholder="Your name"
              required
              disabled={isSubmitting}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-pink-900 mb-2">Email</label>
            <Input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border-pink-300 focus:border-pink-500 bg-pink-50" 
              placeholder="your.email@example.com"
              required
              disabled={isSubmitting}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-pink-900 mb-2">Message</label>
            <Textarea 
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="border-pink-300 focus:border-pink-500 min-h-32 bg-pink-50" 
              placeholder="Tell me about your project..."
              required
              disabled={isSubmitting}
            />
          </div>
          <Button 
            type="submit"
            disabled={isSubmitting || !formData.name || !formData.email || !formData.message}
            className="w-full bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Heart className="w-5 h-5 mr-2" />
                Send Message
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
