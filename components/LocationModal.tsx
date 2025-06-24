import React, { useState } from 'react';
import { 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription 
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ExternalLink, MapPin, Phone, Mail, X } from 'lucide-react';
import Image from 'next/image';

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

interface ImageModalProps {
  src: string;
  alt: string;
  isOpen: boolean;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ src, alt, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="relative max-w-[90vw] max-h-[90vh] bg-white border border-[var(--brand-accent-primary)]/20 shadow-luxury rounded-lg overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[var(--brand-text-primary)] hover:text-[var(--brand-accent-primary)] transition-colors z-10 bg-white/80 backdrop-blur-sm rounded-full p-2"
          aria-label="Close image"
        >
          <X size={20} />
        </button>
        <div className="relative">
          <Image
            src={src}
            alt={alt}
            width={1200}
            height={800}
            className="max-w-full max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      </div>
    </div>
  );
};

const z13Images = [
  '/images/z13/1.jpg', '/images/z13/2.jpg', '/images/z13/3.jpg', '/images/z13/4.jpg',
  '/images/z13/5.jpg', '/images/z13/6.jpg', '/images/z13/7.jpg', '/images/z13/8.jpg',
  '/images/z13/9.jpg', '/images/z13/10.jpg', '/images/z13/11.jpg', '/images/z13/12.jpg',
  '/images/z13/13.jpg', '/images/z13/14.jpg', '/images/z13/15.jpg', '/images/z13/16.jpg',
  '/images/z13/17.jpg', '/images/z13/18.jpg', '/images/z13/19.jpg', '/images/z13/20.jpg',
  '/images/z13/21.jpg', '/images/z13/22.jpg', '/images/z13/23.jpg', '/images/z13/24.jpg',
  '/images/z13/25.jpg', '/images/z13/26.jpg', '/images/z13/27.jpg'
];

const Z13Content: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  const handleImageClick = (src: string, alt: string) => {
    setSelectedImage({ src, alt });
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      {selectedImage && (
        <ImageModal
          src={selectedImage.src}
          alt={selectedImage.alt}
          isOpen={!!selectedImage}
          onClose={closeImageModal}
        />
      )}
      <div className="max-h-[80vh] overflow-y-auto scrollbar-luxury px-1">
      <div className="space-y-8">
        {/* Hero Section */}
        <div className="text-center space-y-6">
          <div className="relative h-32 flex items-center justify-center">
            <Image
              src="/images/z13/1.jpg"
              alt="Z13 Logo"
              width={200}
              height={80}
              className="object-contain cursor-pointer"
              onClick={() => handleImageClick("/images/z13/1.jpg", "Z13 Logo")}
              priority
            />
          </div>
          
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-light tracking-wider text-[var(--brand-text-primary)]">
              THE ART OF UNDERSTATEMENT
            </h1>
            <div className="w-24 h-px bg-[var(--brand-accent-primary)] mx-auto"></div>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="space-y-6">
          <h3 className="text-xl font-light tracking-wide text-[var(--brand-text-primary)] text-center">
            GALLERY
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {z13Images.slice(1).map((image, index) => (
              <div key={index} className="aspect-square overflow-hidden rounded-lg cursor-pointer">
                <Image
                  src={image}
                  alt={`Z13 Loft ${index + 2}`}
                  width={200}
                  height={200}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  onClick={() => handleImageClick(image, `Z13 Loft ${index + 2}`)}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Exceptional Blend Section */}
        <div className="text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-light tracking-wide text-[var(--brand-text-primary)]">
            EXCEPTIONAL BLEND OF TIMELESS<br />
            GRACE & URBAN SOPHISTICATION
          </h2>
        </div>

        {/* The Loft Section */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h3 className="text-xl font-light tracking-wide text-[var(--brand-text-primary)]">
              THE LOFT
            </h3>
            <div className="space-y-4 text-sm leading-relaxed text-[var(--brand-text-secondary)]">
              <p>
                HIDDEN IN THE HEART OF VIENNA&apos;S TRENDY 7TH DISTRICT LIES THE Z13 LOFT. DESIGNED BY THE RENOWNED ITALIAN ARCHITECT VINCENZO DE COTIIS, THIS UNIQUE DESIGNER LOFT SKILLFULLY COMBINES CRAFTSMANSHIP WITH PRACTICALITY.
              </p>
              <p>
                THE Z13 LOFT EMBODIES THE ESSENCE OF LUXURIOUS LIVING WITHOUT OSTENTATIOUS DISPLAYS. HERE, IMPERFECTION SEAMLESSLY MERGES WITH FORM AND FUNCTION TO CREATE AN EVENT SPACE THAT IS AS INVITING TO ITS GUESTS AS IT IS VISUALLY FASCINATING.
              </p>
            </div>
          </div>
          <div className="relative h-64">
            <Image
              src="/images/z13/2.jpg"
              alt="Z13 Interior"
              fill
              className="object-cover rounded-lg cursor-pointer"
              onClick={() => handleImageClick("/images/z13/2.jpg", "Z13 Interior")}
              loading="lazy"
            />
          </div>
        </div>

        {/* Quote Section */}
        <div className="text-center space-y-6 py-8">
          <blockquote className="text-lg md:text-xl font-light italic text-[var(--brand-text-primary)]">
            &quot;I ALWAYS LOOK IN TWO DIRECTIONS:<br />
            INTO THE PAST AND INTO THE FUTURE.&quot;
          </blockquote>
          <p className="text-sm tracking-wider text-[var(--brand-text-muted)]">
            VINCENZO DE COTIIS
          </p>
        </div>

        {/* The Designer Section */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="text-xl font-light tracking-wide text-[var(--brand-text-primary)]">
              THE DESIGNER
            </h3>
            <div className="space-y-4 text-sm leading-relaxed text-[var(--brand-text-secondary)]">
              <p>
                DE COTIIS WAS BORN IN 1958 IN GONZAGA, ITALY, AND STUDIED ARCHITECTURE AT THE POLITECNICO DI MILANO. HIS FORMATIVE YEARS WERE INFLUENCED BY THE ART AND ARCHITECTURAL MOVEMENTS OF THE 1960S AND 1970S, ESPECIALLY ARTE POVERA.
              </p>
              <p>
                VINCENZO DE COTIIS HAS ESTABLISHED HIMSELF AS ONE OF THE MOST RENOWNED CREATIVES OF OUR TIME. HIS WORKS, RANGING FROM EXQUISITE FURNITURE PIECES TO FASCINATING SCULPTURES, ADORN THE PRESTIGIOUS SPACES OF THE CARPENTER&apos;S WORKSHOP GALLERY, WHERE THEY ARE CELEBRATED AS MASTERPIECES OF CONTEMPORARY DESIGN.
              </p>
            </div>
          </div>
          <div className="relative h-64">
            <Image
              src="/images/z13/15.jpg"
              alt="Designer workspace"
              fill
              className="object-cover rounded-lg cursor-pointer"
              onClick={() => handleImageClick("/images/z13/15.jpg", "Designer workspace")}
              loading="lazy"
            />
          </div>
        </div>

        {/* The Design Section */}
        <div className="space-y-6">
          <h3 className="text-xl font-light tracking-wide text-[var(--brand-text-primary)]">
            THE DESIGN
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4 text-sm leading-relaxed text-[var(--brand-text-secondary)]">
              <p>
                ONE OF DE COTIIS&apos;S TRADEMARKS IS HIS ABILITY TO TRANSFORM RAW AND RECYCLED MATERIALS INTO UTTERLY CAPTIVATING PIECES. BY BLENDING SEEMINGLY CONTRASTING ELEMENTS LIKE ROUGH STONE, OXIDIZED METALS, MIRRORED SURFACES, AND ANTIQUE TEXTILES, HE CREATES A FASCINATING INTERPLAY OF TEXTURES, COLORS, AND SHAPES.
              </p>
              <p>
                IN HIS ARCHITECTURAL PROJECTS, DE COTIIS DEMONSTRATES SENSITIVITY TO THE EXISTING CONTEXT WHILE INFUSING IT WITH HIS OWN CREATIVE VISION. HIS DESIGNS SEAMLESSLY INTEGRATE INTO THEIR SURROUNDINGS, PAYING HOMAGE TO THE HISTORY AND CULTURE OF THE PLACE.
              </p>
            </div>
            <div className="relative h-64">
              <Image
                src="/images/z13/16.jpg"
                alt="Design details"
                fill
                className="object-cover rounded-lg cursor-pointer"
                onClick={() => handleImageClick("/images/z13/16.jpg", "Design details")}
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Layout Section */}
        <div className="space-y-6">
          <h3 className="text-xl font-light tracking-wide text-[var(--brand-text-primary)]">
            LAYOUT
          </h3>
          <div className="space-y-4 text-sm leading-relaxed text-[var(--brand-text-secondary)]">
            <p>
              STEP INTO THE ELECTRIFYING REALM OF Z13 LOFT, WHERE 350 SQUARE METERS IN VIENNA&apos;S HISTORIC 1070 DISTRICT TRANSFORM INTO A CANVAS FOR YOUR BOLDEST VISIONS. THIS EXTRAORDINARY SPACE IS YOUR PLAYGROUND, WHETHER YOU&apos;RE CONJURING MEDIA MAGIC, HOSTING CUTTING-EDGE WORKSHOPS, OR RAISING A GLASS AT AN ELEGANT SOIRÉE.
            </p>
            <p>
              WITH A TOUCH OF HISTORY Z13 SETS THE STAGE LIKE NO OTHER. YOUR GUESTS WILL ENJOY TO MAKE THEIR MARK AT Z13, WHERE POSSIBILITIES ARE LIMITLESS, AND THE SPOTLIGHT IS YOURS FOR THE TAKING.
            </p>
          </div>
          <div className="relative h-64">
            <Image
              src="/images/z13/4.jpg"
              alt="Floor plan"
              fill
              className="object-contain cursor-pointer"
              onClick={() => handleImageClick("/images/z13/4.jpg", "Floor plan")}
              loading="lazy"
            />
          </div>
        </div>

        {/* Main Room Section */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative h-64">
            <Image
              src="/images/z13/8.jpg"
              alt="Main room"
              fill
              className="object-cover rounded-lg cursor-pointer"
              onClick={() => handleImageClick("/images/z13/8.jpg", "Main room")}
              loading="lazy"
            />
          </div>
      <div className="space-y-6">
            <h3 className="text-xl font-light tracking-wide text-[var(--brand-text-primary)]">
              MAIN ROOM
            </h3>
            <div className="space-y-4 text-sm leading-relaxed text-[var(--brand-text-secondary)]">
              <p>
                UPON ENTERING THE DESIGNER LOFT, GUESTS STEP INTO THE MAIN ROOM SPANNING 141 M2. THIS SPACE FEATURES LARGE WINDOWS THAT FLOOD THE AREA WITH AMPLE NATURAL LIGHT.
              </p>
            </div>
            <div className="space-y-3">
              <h4 className="font-medium text-[var(--brand-text-primary)]">CONFIGURATIONS</h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div>GALA: 50 GUESTS</div>
                <div>BANQUET: 60 GUESTS</div>
                <div>COCKTAIL: 100 GUESTS</div>
                <div>THEATRE: 80 GUESTS</div>
              </div>
              <div className="pt-2">
                <div className="text-xs text-[var(--brand-text-muted)]">
                  MEASUREMENTS: 15 X 12,6 X 3,4 M | 141 M2
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Kitchen Section */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="text-xl font-light tracking-wide text-[var(--brand-text-primary)]">
              KITCHEN
            </h3>
            <div className="space-y-4">
              <p className="text-sm leading-relaxed text-[var(--brand-text-secondary)]">
                FULLY EQUIPPED DESIGNER KITCHEN BY GAGGENAU, INCLUDING
              </p>
              <ul className="space-y-2 text-xs text-[var(--brand-text-secondary)]">
                <li>• FOOD ELEVATOR</li>
                <li>• 4-BURNER STOVE</li>
                <li>• DISHWASHER</li>
                <li>• FRIDGE</li>
                <li>• FOOD AND DRINK STORAGE</li>
                <li>• DE&apos;LONGHI COFFEE MACHINE</li>
              </ul>
            </div>
          </div>
          <div className="relative h-64">
            <Image
              src="/images/z13/6.jpg"
              alt="Kitchen"
              fill
              className="object-cover rounded-lg cursor-pointer"
              onClick={() => handleImageClick("/images/z13/6.jpg", "Kitchen")}
              loading="lazy"
            />
          </div>
        </div>

        {/* Amenities Section */}
        <div className="space-y-6">
          <h3 className="text-xl font-light tracking-wide text-[var(--brand-text-primary)]">
            AMENITIES
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-medium text-[var(--brand-text-primary)]">WLAN (WI-FI):</h4>
                <p className="text-xs text-[var(--brand-text-secondary)]">HIGH-SPEED INTERNET FOR FAST AND RELIABLE CONNECTIVITY.</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium text-[var(--brand-text-primary)]">ADJUSTABLE LIGHTING:</h4>
                <p className="text-xs text-[var(--brand-text-secondary)]">MODERN LIGHTING SYSTEM THAT ALLOWS YOU TO CREATE THE PERFECT AMBIANCE.</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium text-[var(--brand-text-primary)]">FOOD ELEVATOR:</h4>
                <p className="text-xs text-[var(--brand-text-secondary)]">CONVENIENT FOOD ELEVATOR ENSURING SMOOTH CATERING SERVICE.</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-medium text-[var(--brand-text-primary)]">GAGGENAU KITCHEN:</h4>
                <p className="text-xs text-[var(--brand-text-secondary)]">FULLY EQUIPPED KITCHEN READY TO BRING YOUR CULINARY VISIONS TO LIFE.</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium text-[var(--brand-text-primary)]">LUXURIOUS BATHROOMS:</h4>
                <p className="text-xs text-[var(--brand-text-secondary)]">WELL-APPOINTED BATHROOMS AND GUEST TOILETS AT YOUR DISPOSAL.</p>
              </div>
            </div>
          </div>
          <div className="relative h-48">
            <Image
              src="/images/z13/3.jpg"
              alt="Amenities"
              fill
              className="object-cover rounded-lg cursor-pointer"
              onClick={() => handleImageClick("/images/z13/3.jpg", "Amenities")}
              loading="lazy"
            />
          </div>
        </div>

        {/* Z13 Ideal For / Facts Section */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-light tracking-wide text-[var(--brand-text-primary)]">
              Z13 IS IDEAL FOR
            </h3>
            <ul className="space-y-1 text-xs text-[var(--brand-text-secondary)]">
              <li>• FOTOSHOOTINGS</li>
              <li>• MEDIA & FILM & ADVERTISING</li>
              <li>• WORKSHOPS</li>
              <li>• SEMINARS</li>
              <li>• COOKING WORKSHOPS</li>
              <li>• DINNERS WITH STAR CHEFS</li>
              <li>• TASTINGS</li>
              <li>• EXCLUSIVE CELEBRATIONS</li>
              <li>• EXECUTIVE MEETINGS</li>
              <li>• PRODUCT LAUNCHES</li>
              <li>• PR EVENTS</li>
              <li>• TEMPORARY GALLERIES</li>
              <li>• COMPANY CELEBRATIONS</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-light tracking-wide text-[var(--brand-text-primary)]">
              FACTS
            </h3>
            <ul className="space-y-1 text-xs text-[var(--brand-text-secondary)]">
              <li>• DISTRICT: 1070, VIENNA</li>
              <li>• HISTORIC BUILDING</li>
              <li>• TYPE: LOFT</li>
              <li>• SIZE: 350 M2</li>
              <li>• 3 ROOMS</li>
              <li>• FLOOR: MEZZANINE</li>
              <li>• ELEVATOR: YES</li>
              <li>• FOOD ELEVATOR: YES</li>
              <li>• STORAGE SPACE: YES</li>
              <li>• HIGH VOLTAGE: YES</li>
              <li>• LOADING ZONE: YES</li>
              <li>• PARKING: PARKING LOTS ON THE STREET OR IN THE PARKING GARAGE GERNGROSS, ONE MINUTE&apos;S WALK</li>
            </ul>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-[var(--brand-accent-primary)]/5 p-6 rounded-lg">
          <div className="text-center space-y-4">
            <h3 className="text-lg font-light tracking-wide text-[var(--brand-text-primary)]">
              LIDIJA AJVAZI
            </h3>
            <p className="text-sm text-[var(--brand-text-secondary)]">
              LOFT Z13 EVENT MANAGEMENT
            </p>
            <div className="space-y-2 text-xs text-[var(--brand-text-secondary)]">
              <div className="flex items-center justify-center gap-2">
                <Phone className="w-3 h-3" />
                <span>+43 664 37 82 030</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Mail className="w-3 h-3" />
                <span>OFFICE@Z13LOFT.AT</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <MapPin className="w-3 h-3" />
                <span>ZOLLERGASSE 13/1, 1070 WIEN</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

const esterhagyImages = [
  '/images/esterhazy/1.jpg', '/images/esterhazy/2.jpg', '/images/esterhazy/3.jpg', '/images/esterhazy/4.jpg',
  '/images/esterhazy/5.jpg', '/images/esterhazy/6.jpg', '/images/esterhazy/7.jpg', '/images/esterhazy/8.jpg',
  '/images/esterhazy/9.jpg', '/images/esterhazy/10.jpg', '/images/esterhazy/11.jpg', '/images/esterhazy/12.jpg',
  '/images/esterhazy/13.jpg', '/images/esterhazy/14.jpg', '/images/esterhazy/15.jpg', '/images/esterhazy/16.jpg',
  '/images/esterhazy/17.jpg', '/images/esterhazy/18.jpg'
];

const EsterhagyContent: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  const handleImageClick = (src: string, alt: string) => {
    setSelectedImage({ src, alt });
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      {selectedImage && (
        <ImageModal
          src={selectedImage.src}
          alt={selectedImage.alt}
          isOpen={!!selectedImage}
          onClose={closeImageModal}
        />
      )}
      <div className="max-h-[80vh] overflow-y-auto scrollbar-luxury px-1">
      <div className="space-y-8">
        {/* Hero Section */}
        <div className="text-center space-y-6">
          <div className="relative h-32 flex items-center justify-center">
            <Image
              src="/images/esterhazy/1.jpg"
              alt="Palais Esterházy Logo"
              width={300}
              height={100}
              className="object-contain cursor-pointer"
              onClick={() => handleImageClick("/images/esterhazy/1.jpg", "Palais Esterházy Logo")}
              priority
            />
          </div>
          
          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl font-light tracking-wider text-[var(--brand-text-primary)]">
              Ein Meisterwerk der Eleganz
            </h1>
            <div className="w-24 h-px bg-[var(--brand-accent-primary)] mx-auto"></div>
            <p className="text-sm leading-relaxed text-[var(--brand-text-secondary)] max-w-2xl mx-auto">
              Willkommen im Palais Esterházy, wo Geschichte und Glamour nahtlos wie in einem sorgfältig inszenierten Film verschmelzen.
            </p>
          </div>
        </div>

        {/* Introduction */}
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4 text-sm leading-relaxed text-[var(--brand-text-secondary)]">
              <p>
                Im Laufe der Jahrhunderte wurde das Palais umgebaut und vereint heute eine faszinierende Mischung aus architektonischen Stilen wie Barock und Biedermeier. Besonders bekannt ist es für sein prächtiges Interieur. Dieses Anwesen ist ein lebendiges Zeugnis der Hingabe an Schönheit und Exzellenz und steht nun im Stadtpalais Esterházy zur Erkundung offen.
              </p>
              <p>
                Ob Hochzeit, exklusive Dinner, Firmenevent, Meeting, Pop-Up oder Medienproduktion. Das historische Flair des Palais macht Ihre Veranstaltung zu einem einzig-artigen Erlebnis.
              </p>
            </div>
            <div className="relative h-64">
              <Image
                src="/images/esterhazy/4.jpg"
                alt="Palais Esterházy Interior"
                fill
                className="object-cover rounded-lg cursor-pointer"
                onClick={() => handleImageClick("/images/esterhazy/4.jpg", "Palais Esterházy Interior")}
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Preise & Kapazitäten */}
        <div className="space-y-6">
          <h2 className="text-2xl font-light tracking-wide text-[var(--brand-text-primary)]">
            Preise & Kapazitäten
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4 text-sm leading-relaxed text-[var(--brand-text-secondary)]">
              <p>
                Für Ihre Veranstaltungen stehen Ihnen auf über <strong>1.100m², 11 prachtvolle Räume</strong> zur Verfügung, die von 34 m² bis 130 m² reichen und flexibel kombiniert werden können – ideal für 20 bis zu 300 Gäste.
              </p>
              <p>
                Mietpreise beginnen bereits bei <strong>€ 550</strong> pro Tag / Raum – das gesamte Palais kann ab <strong>€ 8.200</strong> pro Tag (10h) gemietet werden oder halbtags ab <strong>€ 4.100 (5h)</strong>.
              </p>
            </div>
            <div className="relative h-64">
              <Image
                src="/images/esterhazy/3.jpg"
                alt="Floor Plan"
                fill
                className="object-contain rounded-lg cursor-pointer"
                onClick={() => handleImageClick("/images/esterhazy/3.jpg", "Floor Plan")}
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Eventpakete */}
        <div className="space-y-6">
          <h2 className="text-2xl font-light tracking-wide text-[var(--brand-text-primary)]">
            Eventpakete
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[var(--brand-accent-primary)]/5 p-6 rounded-lg">
              <h3 className="text-lg font-medium text-[var(--brand-text-primary)] mb-4">Empfang Cocktail</h3>
              <p className="text-sm text-[var(--brand-text-secondary)] mb-2">Bar Salon + 1 Zimmer nach Wahl</p>
              <p className="text-lg font-light text-[var(--brand-accent-primary)]">ab 1.600 EUR</p>
            </div>
            <div className="bg-[var(--brand-accent-primary)]/5 p-6 rounded-lg">
              <h3 className="text-lg font-medium text-[var(--brand-text-primary)] mb-4">Gala-Dinner</h3>
              <p className="text-sm text-[var(--brand-text-secondary)] mb-2">Empire Saal + 2 Zimmer nach Wahl</p>
              <p className="text-lg font-light text-[var(--brand-accent-primary)]">ab 4.200 EUR</p>
            </div>
            <div className="bg-[var(--brand-accent-primary)]/5 p-6 rounded-lg">
              <p className="text-sm text-[var(--brand-text-secondary)]">
                Beide Pakete beinhalten eine perfekt abgestimmte Kombination von Räumen und Services, die Ihr Event unvergesslich machen.
              </p>
            </div>
          </div>
        </div>

        {/* Empire Saal */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative h-64">
            <Image
              src="/images/esterhazy/14.jpg"
              alt="Empire Saal"
              fill
              className="object-cover rounded-lg cursor-pointer"
              onClick={() => handleImageClick("/images/esterhazy/14.jpg", "Empire Saal")}
              loading="lazy"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-xl font-light tracking-wide text-[var(--brand-text-primary)]">
              Empire Saal
            </h3>
            <div className="space-y-4 text-sm leading-relaxed text-[var(--brand-text-secondary)]">
              <p>
                Eine majestätische Kulisse für große Events und glamouröse Feiern. Dieser opulente Raum beeindruckt mit seiner atemberaubenden Architektur und Weitläufigkeit.
              </p>
            </div>
            <div className="space-y-3">
              <h4 className="font-medium text-[var(--brand-text-primary)]">KONFIGURATIONEN</h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div>EMPFANG: 110 GÄSTE</div>
                <div>THEATER: 90 GÄSTE</div>
                <div>U-FORM: 40 GÄSTE</div>
                <div>GALA: 90 GÄSTE</div>
              </div>
              <div className="pt-2">
                <div className="text-xs text-[var(--brand-text-muted)]">
                  ABMESSUNGEN: 14 X 9 X 4,8 M | 130 M² | AB € 2.800
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Ahnengalerien */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="text-xl font-light tracking-wide text-[var(--brand-text-primary)]">
              Kleine Ahnengalerie
            </h3>
            <div className="space-y-4 text-sm leading-relaxed text-[var(--brand-text-secondary)]">
              <p>
                Kulinarische Erlebnisse in historischem Ambiente: Der charmante Charakter dieses historischen Raums bereichert jedes Essen und macht jede Mahlzeit zu einer genussvollen Reise durch die Zeit.
              </p>
            </div>
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div>EMPFANG: 30 GÄSTE</div>
                <div>THEATER: 24 GÄSTE</div>
                <div>U-FORM: 20 GÄSTE</div>
                <div>GALA: 16 GÄSTE</div>
              </div>
              <div className="text-xs text-[var(--brand-text-muted)]">
                10,8 X 5 X 4,8 M | 57 M² | AB € 750
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="text-xl font-light tracking-wide text-[var(--brand-text-primary)]">
              Große Ahnengalerie
            </h3>
            <div className="space-y-4 text-sm leading-relaxed text-[var(--brand-text-secondary)]">
              <p>
                Die Pracht dieser Galerie bietet eine exquisite Umgebung für feine Abendessen sowie Meetings und Workshops.
              </p>
            </div>
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div>EMPFANG: 30 GÄSTE</div>
                <div>THEATER: 30 GÄSTE</div>
                <div>GALA: 16 GÄSTE</div>
              </div>
              <div className="text-xs text-[var(--brand-text-muted)]">
                7,8 X 7,3 X 4,8 M | 60 M² | AB € 800
              </div>
            </div>
          </div>
        </div>

        {/* China Laque Zimmer */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative h-64">
            <Image
              src="/images/esterhazy/16.jpg"
              alt="China Laque Zimmer"
              fill
              className="object-cover rounded-lg cursor-pointer"
              onClick={() => handleImageClick("/images/esterhazy/16.jpg", "China Laque Zimmer")}
              loading="lazy"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-xl font-light tracking-wide text-[var(--brand-text-primary)]">
              China Laque Zimmer
            </h3>
            <div className="space-y-4 text-sm leading-relaxed text-[var(--brand-text-secondary)]">
              <p>
                Exotisches Flair trifft auf Exklusivität und bietet mit seinen zwei Räumen à 34m² ein einzigartiges Setting für Executive Meetings, Workshops oder Feiern. Dieses prachtvolle Zimmer beeindruckt durch seine denkmalgeschützten, goldverzierten Wandvertäfelungen, die eigens in Handarbeit angefertigt wurden.
              </p>
            </div>
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div>EMPFANG: 15 GÄSTE</div>
                <div>GALA: 10 GÄSTE</div>
              </div>
              <div className="text-xs text-[var(--brand-text-muted)]">
                6,7 X 4,3 M + 6,2 X 3,6 M | 2 X 34 M² | AB € 1.500
              </div>
            </div>
          </div>
        </div>

        {/* Bar Salon */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="text-xl font-light tracking-wide text-[var(--brand-text-primary)]">
              Bar Salon
            </h3>
            <div className="space-y-4 text-sm leading-relaxed text-[var(--brand-text-secondary)]">
              <p>
                Perfekt für stilvolle Empfänge mit Blick auf den Kohlmarkt. Hier können Sie mit Ihren Gästen und einem Gläschen Champagner den Abend auch gebührend ausklingen lassen. Nebenzimmer, wie der Rote-, Grüne, und Blaue (Derby) Salon lassen sich für Cocktailempfänge ideal kombinieren.
              </p>
            </div>
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div>EMPFANG: 40 GÄSTE</div>
              </div>
              <div className="text-xs text-[var(--brand-text-muted)]">
                10,7 X 6,3 X 4,8 M | 69 M² | AB € 950
              </div>
            </div>
          </div>
          <div className="relative h-64">
            <Image
              src="/images/esterhazy/17.jpg"
              alt="Bar Salon"
              fill
              className="object-cover rounded-lg cursor-pointer"
              onClick={() => handleImageClick("/images/esterhazy/17.jpg", "Bar Salon")}
              loading="lazy"
            />
          </div>
        </div>

        {/* Other Salons */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="text-xl font-light tracking-wide text-[var(--brand-text-primary)]">
              Roter Salon
            </h3>
            <div className="space-y-4 text-sm leading-relaxed text-[var(--brand-text-secondary)]">
              <p>
                Elegant und klassisch für besondere Anlässe. Ob Business Lunch oder Dinner Tafel, hier dinieren Sie in feinster Atmosphäre.
              </p>
            </div>
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div>EMPFANG: 35 GÄSTE</div>
                <div>THEATER: 30 GÄSTE</div>
                <div>U-FORM: 20 GÄSTE</div>
              </div>
              <div className="text-xs text-[var(--brand-text-muted)]">
                9,6 X 7,3 X 4,8 M | 69 M² | AB € 800
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="text-xl font-light tracking-wide text-[var(--brand-text-primary)]">
              Derby Salon
            </h3>
            <div className="space-y-4 text-sm leading-relaxed text-[var(--brand-text-secondary)]">
              <p>
                Ein Raum, der Geschichte und Moderne verbindet. Erleben Sie eine nahtlose Fusion historischer Eleganz und zeitgemäßer Annehmlichkeiten in diesem vielseitigen Veranstaltungsort.
              </p>
            </div>
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div>EMPFANG: 40 GÄSTE</div>
                <div>THEATER: 40 GÄSTE</div>
                <div>GALA: 30 GÄSTE</div>
              </div>
              <div className="text-xs text-[var(--brand-text-muted)]">
                10,2 X 5,8 X 4,8 M | 65 M² | AB € 800
              </div>
            </div>
          </div>
        </div>

        {/* More Salons */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="text-xl font-light tracking-wide text-[var(--brand-text-primary)]">
              Grüner Salon
            </h3>
            <div className="space-y-4 text-sm leading-relaxed text-[var(--brand-text-secondary)]">
              <p>
                Ideal für exklusive Meetings, Lesungen, Tastings und private Veranstaltungen. Dieser Raum kombiniert traditionellen Charme mit modernem Komfort - perfekt für elegante Zusammenkünfte.
              </p>
            </div>
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div>EMPFANG: 38 GÄSTE</div>
              </div>
              <div className="text-xs text-[var(--brand-text-muted)]">
                10,3 X 6,2 X 4,8 M | 65 M² | AB € 800
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="text-xl font-light tracking-wide text-[var(--brand-text-primary)]">
              Jagd Salon
            </h3>
            <div className="space-y-4 text-sm leading-relaxed text-[var(--brand-text-secondary)]">
              <p>
                Der Salon überzeugt durch seinen klassisch gediegenen Flair und kombiniert mit Eleganz und Charme.
              </p>
            </div>
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div>EMPFANG: 30 GÄSTE</div>
                <div>THEATER: 30 GÄSTE</div>
                <div>GALA: 20 GÄSTE</div>
              </div>
              <div className="text-xs text-[var(--brand-text-muted)]">
                9,2 X 5,9 X 4,8 M | 55 M² | AB € 650
              </div>
            </div>
          </div>
        </div>

        {/* Spiele Salon */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative h-64">
            <Image
              src="/images/esterhazy/11.jpg"
              alt="Spiele Salon"
              fill
              className="object-cover rounded-lg cursor-pointer"
              onClick={() => handleImageClick("/images/esterhazy/11.jpg", "Spiele Salon")}
              loading="lazy"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-xl font-light tracking-wide text-[var(--brand-text-primary)]">
              Spiele Salon
            </h3>
            <div className="space-y-4 text-sm leading-relaxed text-[var(--brand-text-secondary)]">
              <p>
                Wo klassisches Vergnügen auf gehobene Atmosphäre trifft. Genießen Sie zeitlose Spiele (Snooker, Poker etc.) in einer eleganten und einladenden Umgebung.
              </p>
            </div>
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div>EMPFANG: 36 GÄSTE</div>
              </div>
              <div className="text-xs text-[var(--brand-text-muted)]">
                9 X 10,2 X 4,8 M | 89 M² | AB € 950
              </div>
            </div>
          </div>
        </div>

        {/* Ausstattung & Cateringpartner */}
        <div className="space-y-6">
          <h2 className="text-2xl font-light tracking-wide text-[var(--brand-text-primary)]">
            Ausstattung & Cateringpartner
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4 text-sm leading-relaxed text-[var(--brand-text-secondary)]">
              <p>
                Jeder Raum im Palais erzählt seine eigene Geschichte, während das Palais Esterházy zugleich modernste Annehmlichkeiten bietet. Dazu zählen eine neu ausgestattete Cateringküche, eine moderne Bar, großzügige Lagerräume und Anliefermöglichkeiten – perfekt für einen reibungslosen Veranstaltungsablauf.
              </p>
              <p>
                Unser Palais überzeugt nicht nur durch das einzigartige Ambiente, sondern auch durch die außergewöhnlichen kulinarischen Erlebnisse, die wir mit unseren renommierten Catering-Partnern realisieren können.
              </p>
            </div>
            <div className="relative h-64">
              <Image
                src="/images/esterhazy/7.jpg"
                alt="Catering Partners"
                fill
                className="object-contain rounded-lg cursor-pointer"
                onClick={() => handleImageClick("/images/esterhazy/7.jpg", "Catering Partners")}
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Equipment Details */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-light tracking-wide text-[var(--brand-text-primary)]">
              AUSSTATTUNG
            </h3>
            <div className="space-y-3 text-xs text-[var(--brand-text-secondary)]">
              <div>
                <strong>Tische:</strong> 25 gesamt (5 Stehtische, 2 Rechteckig 180x120cm, 5 Rund 180cm Ø, 3 Rund 150cm Ø, 10 Eckig 95x95cm)
              </div>
              <div>
                <strong>Sessel:</strong> 169 gesamt (42 mit Hussen, 23 ohne Hussen, 59 Goldene, 45 Schwarze)
              </div>
              <div>
                <strong>Weiteres Equipment:</strong> LCD Screen 85&quot;, Mikrophon, Musikanlage, 2 Lautsprecher, 2 Aufzüge, 2 Flipcharts, Kleiderständer, Geschirr
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-light tracking-wide text-[var(--brand-text-primary)]">
              CATERING PARTNER
            </h3>
            <div className="grid grid-cols-2 gap-2 text-xs text-[var(--brand-text-secondary)]">
              <div>• MOTTO Catering</div>
              <div>• Barbara</div>
              <div>• Marco Simonis</div>
              <div>• Naked Kitchen</div>
              <div>• From Franz</div>
              <div>• Trabitsch</div>
              <div>• Brok Catering</div>
              <div>• So Aventure</div>
            </div>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="space-y-6">
          <h3 className="text-xl font-light tracking-wide text-[var(--brand-text-primary)] text-center">
            GALERIE
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {esterhagyImages.slice(1).map((image, index) => (
              <div key={index} className="aspect-square overflow-hidden rounded-lg cursor-pointer">
                <Image
                  src={image}
                  alt={`Palais Esterházy ${index + 2}`}
                  width={200}
                  height={200}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  onClick={() => handleImageClick(image, `Palais Esterházy ${index + 2}`)}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-[var(--brand-accent-primary)]/5 p-6 rounded-lg">
          <div className="text-center space-y-4">
            <h3 className="text-lg font-light tracking-wide text-[var(--brand-text-primary)]">
              LIDIJA AJVAZI
            </h3>
            <p className="text-sm text-[var(--brand-text-secondary)]">
              Event Manager
            </p>
            <div className="space-y-2 text-xs text-[var(--brand-text-secondary)]">
              <div className="flex items-center justify-center gap-2">
                <Phone className="w-3 h-3" />
                <span>+43 664 37 82 030</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Mail className="w-3 h-3" />
                <span>events@rennverein.at</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <MapPin className="w-3 h-3" />
                <span>Wallnerstraße 4, 1010 Wien, Goldenes Quartier</span>
              </div>
            </div>
            <div className="pt-4 space-y-2 text-xs text-[var(--brand-text-muted)]">
              <div>• Garage &quot;Am Hof&quot; (2 Minuten zu Fuß)</div>
              <div>• U-Bahn U3 Herrengasse (1 Minute zu Fuß)</div>
              <div>• Flughafen Wien Schwechat (30min)</div>
              <div>• Hauptbahnhof Wien (18min)</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export const LocationModal: React.FC<LocationModalProps> = ({ location }) => {
  return (
    <DialogContent className="max-w-4xl max-h-[90vh] p-0 bg-white border border-[var(--brand-accent-primary)]/20 shadow-luxury">
      <DialogHeader className="p-6 pb-0">
        <DialogTitle className="text-2xl font-light tracking-wide text-[var(--brand-text-primary)]">
          {location.title}
        </DialogTitle>
      </DialogHeader>
      
      <div className="px-6 pb-6">
        {location.id === 'loft-z13' ? <Z13Content /> : <EsterhagyContent />}
      </div>
    </DialogContent>
  );
}; 