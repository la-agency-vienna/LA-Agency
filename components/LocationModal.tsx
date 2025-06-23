import React from 'react';
import { 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription 
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ExternalLink, MapPin, Star } from 'lucide-react';

interface Location {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  websiteUrl: string;
  features: string[];
}

interface LocationModalProps {
  location: Location;
}

export const LocationModal: React.FC<LocationModalProps> = ({ location }) => {
  return (
    <DialogContent className="max-w-2xl">
      <DialogHeader>
        <DialogTitle className="text-2xl text-[#ffb366]">
          {location.title}
        </DialogTitle>
      </DialogHeader>
      
      <div className="space-y-6">
        {/* Image Placeholder */}
        <div className="aspect-video bg-gradient-to-br from-[#ffb366]/20 to-[#ff9933]/20 rounded-xl flex items-center justify-center">
          <div className="text-center">
            <div className="text-4xl font-bold text-[#ffb366]/40 mb-2">
              {location.title.split(' ')[0].charAt(0)}
            </div>
            <p className="text-white/40 text-sm">Bild wird geladen...</p>
          </div>
        </div>

        {/* Description */}
        <DialogDescription className="text-white/80 text-base leading-relaxed">
          {location.description}
        </DialogDescription>

        {/* Features */}
        <div>
          <h4 className="text-white font-semibold mb-3 flex items-center">
            <Star className="w-4 h-4 mr-2 text-[#ffb366]" />
            Highlights
          </h4>
          <div className="grid grid-cols-2 gap-2">
            {location.features.map((feature) => (
              <div key={feature} className="flex items-center text-white/70">
                <div className="w-2 h-2 bg-[#ffb366] rounded-full mr-3"></div>
                {feature}
              </div>
            ))}
          </div>
        </div>

        {/* Location Info */}
        <div className="flex items-center text-white/60">
          <MapPin className="w-4 h-4 mr-2" />
          <span>Wien, Österreich</span>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 pt-4">
          <Button
            asChild
            size="lg"
            className="flex-1"
          >
            <a 
              href={location.websiteUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Website besuchen
            </a>
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            className="flex-1"
            onClick={() => {
              // Close modal and scroll to contact
              const contactElement = document.getElementById('contact');
              if (contactElement) {
                contactElement.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Verfügbarkeit anfragen
          </Button>
        </div>
      </div>
    </DialogContent>
  );
}; 