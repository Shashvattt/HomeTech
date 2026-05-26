/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { 
  Sparkles, 
  Tv, 
  Volume2, 
  Layers, 
  Lightbulb, 
  Sliders, 
  Phone, 
  MapPin, 
  Star, 
  CheckCircle2, 
  ArrowRight, 
  ChevronRight, 
  ShieldCheck, 
  Cpu, 
  Menu,
  X,
  Clock,
  ExternalLink,
  ChevronDown,
  Info
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Interfaces for our interactive components
interface Testimonial {
  name: string;
  role: string;
  time: string;
  text: string;
  rating: number;
  avatarChar: string;
}

interface ServiceItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

export default function App() {
  // Mobile navigation toggle
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Interactive Ambience Simulator State
  const [currentScene, setCurrentScene] = useState<'morning' | 'sunset' | 'cinema' | 'midnight'>('sunset');

  // Interactive Savings Calculator State
  const [houseSize, setHouseSize] = useState<number>(4500);
  const [zonesCount, setZonesCount] = useState<number>(32);
  const [techTier, setTechTier] = useState<'proprietary' | 'optimized'>('optimized');
  const [cablePhilosophy, setCablePhilosophy] = useState<'centralized' | 'boundary'>('boundary');

  const calculation = useMemo(() => {
    // Math references based on authentic ultra-luxury home installation benchmarks
    const proprietarySwitchRate = 480; // Cost per premium keypad + central driver licensing
    const optimizedSwitchRate = 85;    // Back-of-plate dynamic smart relay + design standard plates
    const proprietaryLicenseBase = 4500;
    const optimizedBase = 1200;

    const centralizedCableRate = 3.60; // Copper load cable + redundant star conduits tracking back per sqft
    const boundaryCableRate = 1.25;     // Localised sub-segments connecting to compact remote hubs

    // Bloated central luxury standard
    const proprietarySwitchTotal = (zonesCount * proprietarySwitchRate) + proprietaryLicenseBase;
    const legacyCableTotal = houseSize * centralizedCableRate;
    const legacyGrandTotal = proprietarySwitchTotal + legacyCableTotal;

    // Selected setup calculations
    const selectedSwitchRate = techTier === 'proprietary' ? proprietarySwitchRate : optimizedSwitchRate;
    const selectedBase = techTier === 'proprietary' ? proprietaryLicenseBase : optimizedBase;
    const selectedSwitchTotal = (zonesCount * selectedSwitchRate) + selectedBase;

    const selectedCableRate = cablePhilosophy === 'centralized' ? centralizedCableRate : boundaryCableRate;
    const selectedCableTotal = houseSize * selectedCableRate;
    const selectedGrandTotal = selectedSwitchTotal + selectedCableTotal;

    const netSavings = Math.max(0, legacyGrandTotal - selectedGrandTotal);
    const switchSavings = Math.max(0, proprietarySwitchTotal - selectedSwitchTotal);
    const cableSavings = Math.max(0, legacyCableTotal - selectedCableTotal);
    
    // Calculates estimated savings in copper raw weight reduction (0.048 kg metric savings per sqft)
    const copperSavedKg = cablePhilosophy === 'boundary' ? Math.round(houseSize * 0.048) : 0;
    const savingsPercent = legacyGrandTotal > 0 ? Math.round((netSavings / legacyGrandTotal) * 100) : 0;

    return {
      legacyGrandTotal,
      selectedGrandTotal,
      netSavings,
      switchSavings,
      cableSavings,
      copperSavedKg,
      savingsPercent
    };
  }, [houseSize, zonesCount, techTier, cablePhilosophy]);



  // Lead Consulting Form State
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [selectedService, setSelectedService] = useState('Whole-Home Automation');
  const [additionalNotes, setAdditionalNotes] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);



  // Quick info alert bar state
  const [showAlert, setShowAlert] = useState(true);

  // Authenticated Testimonials Data formatted with Quiet Luxury aesthetics
  const clientReviews: Testimonial[] = [
    {
      name: "Pragya Parakh",
      role: "Premium Homeowner",
      time: "2 weeks ago",
      rating: 5,
      avatarChar: "P",
      text: "Really impressed with Hometech Automation! Their Team is highly professional, knowledgeable, and attentive to details. The installation was smooth, and everything works seamlessly!"
    },
    {
      name: "Laksh Manjre",
      role: "Luxury Penthouse Client",
      time: "A year ago",
      rating: 5,
      avatarChar: "L",
      text: "A very good and best place to set up your dream house….at first i was so confused that how should i design lights according to my wall color but then home tech automation helped me to make my home smarter and now it is completely automatic. I m very grateful for this."
    },
    {
      name: "Indra Jain",
      role: "Estate Developer",
      time: "2 years ago",
      rating: 5,
      avatarChar: "I",
      text: "Arham is a very knowledgeable, humble and honest entrepreneur. He has guided me very well on cables, switches and other home automation requirements and helped save cost during structural wiring."
    },
    {
      name: "Sakshi Mahendra",
      role: "Villa Design Patron",
      time: "6 months ago",
      rating: 5,
      avatarChar: "S",
      text: "Your electronic automation solutions are fantastic! They make complex tasks feel so simple and hassle-free. It’s exciting to see how much easier and smarter life can be. Great work!"
    },
    {
      name: "Nandani Mehta",
      role: "Smart Apartment Resident",
      time: "8 months ago",
      rating: 5,
      avatarChar: "N",
      text: "Your automation in electronics is amazing! It makes everything so simple and efficient, like bringing the future into our daily lives. It’s amazing how smooth and smart it all feels."
    }
  ];

  // Core Service Offerings (Highlighting High-end, structured Switches, Cables and Cost-optimization)
  const premiumServices: ServiceItem[] = [
    {
      id: "lighting",
      icon: <Lightbulb className="w-6 h-6 text-champagne-500" />,
      title: "Architectural Smart Lighting & Shades",
      description: "Custom lighting scenes designed precisely to complement your wall colors and interior art pieces. Automated, silent motorized drapes synchronized with daylight patterns.",
      features: [
        "Tunable circadian lighting rhythm",
        "Soft-start accent dimming controls",
        "Color temperature matching for fine paint",
        "Whisper-silent roll shades integration"
      ]
    },
    {
      id: "infrastructure",
      icon: <Layers className="w-6 h-6 text-champagne-500" />,
      title: "Designer Switches & Structured Cabling",
      description: "Guided design on structural cables and micro-volt switches. We optimize switches, high-grade audio lines, and CAT9 nodes to secure your visual ceiling from clutter.",
      features: [
        "Gold, brush-brass & slate tactile plates",
        "Structured cable planning saves up to 30% cost",
        "Centralized low-voltage panel distribution",
        "Arham's certified system reliability blueprints"
      ]
    },
    {
      id: "acoustics",
      icon: <Volume2 className="w-6 h-6 text-champagne-500" />,
      title: "Invisible Audio & Central Media Control",
      description: "Immersive soundscapes that exist without visible wires or audio boxes. Direct single-pane interfaces coordinate televisions, projection screens, and background lounge audio.",
      features: [
        "Hidden plaster-over wall transducers",
        "Dolby Atmos immersive cinematic tunings",
        "Single central app for multi-room control",
        "AirPlay 2 & high-resolution wireless stream"
      ]
    },
    {
      id: "comfort",
      icon: <Cpu className="w-6 h-6 text-champagne-500" />,
      title: "Intelligent Climate & Access Security",
      description: "Zoned thermodynamic controllers adjust heat, air filtration, and cooling automatically upon arrival. Multi-credential modern access keys keep security invisible yet resolute.",
      features: [
        "Geofence cooling prior to arrival",
        "Hands-free biometric secure smart entries",
        "Zero-latency fire & moisture flow sensors",
        "Consolidated single-dashboard iPad stations"
      ]
    }
  ];

  // Ambience Simulator Scenarios Styling
  const sceneData = {
    morning: {
      title: "Morning Rise",
      time: "07:30 AM",
      description: "Drapes silently slide to 30%, bathing the breakfast counter in golden daylight. Soft ambient lighting matches the crisp daylight blue. Thermostat relaxes to 23°CI.",
      overlayClass: "bg-amber-500/10 backdrop-brightness-110 shadow-[inset_0_0_80px_rgba(251,191,36,0.15)]",
      temperatureText: "23°C • Ambient Gentle",
      imageUrl: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200",
      statusText: "Shades: 30% Open • Acoustics: Warm Acoustic Jazz 10% • Lights: Circadian Match"
    },
    sunset: {
      title: "Sunset Lounge",
      time: "06:15 PM",
      description: "Lighting mimics the warm ochre tones of sunset, glowing elegantly from architectural wall recesses. Motorized blackout drapes glide closed for serene privacy.",
      overlayClass: "bg-orange-500/20 backdrop-brightness-95 shadow-[inset_0_0_100px_rgba(249,115,22,0.2)]",
      temperatureText: "22°C • Soft Comfort",
      imageUrl: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&q=80&w=1200",
      statusText: "Shades: Fully Sealed • Acoustics: Chill Lounge Lounge • Lights: Golden Brass 20%"
    },
    cinema: {
      title: "Dolby Cinema Preset",
      time: "08:45 PM",
      description: "Zero glare. Secondary lights dim to absolute zero as warm spotlight tracks guide lookups. Soundbars and subwoofer calibrate to pure deep theater acoustics.",
      overlayClass: "bg-indigo-950/40 backdrop-brightness-50 shadow-[inset_0_0_120px_rgba(49,46,129,0.35)]",
      temperatureText: "21°C • Theater Chill",
      imageUrl: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1200",
      statusText: "Screens: Engaged • Sound: Atmos 3D Audio Activated • Lights: Royal Indigo Accent 3%"
    },
    midnight: {
      title: "Midnight Safe Pathway",
      time: "02:00 AM",
      description: "Restful dark. Ultra-low floor lights illuminate pathways softly if midnight movement is detected, preventing eye shock. Perfect safety combined with quietude.",
      overlayClass: "bg-blue-950/60 backdrop-brightness-35 shadow-[inset_0_0_140px_rgba(15,23,42,0.5)]",
      temperatureText: "22.5°C • Eco Night",
      imageUrl: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=1200",
      statusText: "Perimeters: Guarded • Pathway: Active 1% Warmth • Main Panel: Silent Mode"
    }
  };



  // Pre-formatted message logic
  const formattedWhatsAppMessage = useMemo(() => {
    return `Hello Hometech Automation,\n\nI would like to request a site call and audit for my home. Here are my details:\n\n• Name: ${fullName}\n• Phone: ${phoneNumber}\n• Email: ${emailAddress || 'Not Provided'}\n• Scope: ${selectedService}\n• Additional Parameters: ${additionalNotes || 'Standard modern integration'}\n\nPlease coordinate my site audit. Thank you!`;
  }, [fullName, phoneNumber, emailAddress, selectedService, additionalNotes]);

  const whatsappUrl = useMemo(() => {
    return `https://wa.me/917709464471?text=${encodeURIComponent(formattedWhatsAppMessage)}`;
  }, [formattedWhatsAppMessage]);

  // Handle lead consultation booking
  const handleConsultationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phoneNumber) {
      alert("Please enter at least your name and phone number for consulting reservation.");
      return;
    }
    setFormSubmitted(true);
    setCopied(false);
  };

  // Helper to scroll to search criteria
  const scrollToId = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div id="hometech-root" className="min-h-screen bg-champagne-50 text-charcoal-900 selection:bg-champagne-300 selection:text-charcoal-950 font-sans flex flex-col transition-colors duration-500">
      
      {/* Alert Ribbon for Address / Direct Number */}
      {showAlert && (
        <div id="hometech-alert-bar" className="bg-charcoal-900 text-champagne-100 px-4 py-2 text-xs md:text-sm flex items-center justify-between border-b border-champagne-700/20 z-50">
          <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="bg-champagne-500 text-charcoal-950 text-[10px] font-bold px-1.5 py-0.5 rounded tracking-widest uppercase">Direct Lead Line</span>
              <span className="font-light">Premium Smart Home Consulting is online for Nagpur & surrounding estates.</span>
            </div>
            <div className="flex items-center gap-4">
              <a 
                href="tel:+917709464471" 
                id="call-now-ribbon"
                className="flex items-center gap-1.5 text-champagne-300 hover:text-white font-medium transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>+91 77094 64471</span>
              </a>
              <button 
                onClick={() => setShowAlert(false)}
                className="text-charcoal-450 hover:text-white pb-0.5"
                title="Dismiss message"
              >
                &times;
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Luxury Sticky Header with Glassmorphism */}
      <header id="hometech-header" className="sticky top-0 bg-champagne-50/90 backdrop-blur-md border-b border-champagne-200/50 z-40 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Logo Brand with Playfair Display and elegant layout */}
          <div className="flex flex-col cursor-pointer" onClick={() => scrollToId('hero-section')}>
            <span className="font-serif text-xl tracking-widest font-semibold text-charcoal-900 flex items-center gap-1">
              HOMETECH <span className="text-champagne-500 text-xs font-light tracking-normal block ml-1 font-sans">automation</span>
            </span>
            <span className="text-[9px] text-charcoal-450 uppercase tracking-widest font-light -mt-1 hidden sm:block">
              Nagpur's Quiet Luxury Engineers
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-medium tracking-widest uppercase text-charcoal-600">
            <button onClick={() => scrollToId('curated-portfolio')} className="hover:text-champagne-600 transition-colors cursor-pointer">Ambience</button>
            <button onClick={() => scrollToId('premium-services')} className="hover:text-champagne-600 transition-colors cursor-pointer">Services</button>
            <button onClick={() => scrollToId('client-stories')} className="hover:text-champagne-600 transition-colors cursor-pointer">Stories</button>
            <button onClick={() => scrollToId('contact-reserve')} className="hover:text-champagne-600 transition-colors cursor-pointer">Consulting</button>
          </nav>

          {/* Call and Book CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <a 
              href="tel:+917709464471" 
              id="header-call-btn"
              className="px-4 py-2 border border-champagne-300 hover:border-champagne-500 rounded-full text-xs font-medium tracking-widest uppercase transition-all duration-300 flex items-center gap-2 text-charcoal-800"
            >
              <Phone className="w-3.5 h-3.5 text-champagne-500" />
              <span>Call 77094 64471</span>
            </a>
            <button 
              onClick={() => scrollToId('contact-reserve')}
              className="bg-charcoal-900 text-champagne-100 px-5 py-2.5 rounded-full text-xs font-medium tracking-widest uppercase hover:bg-champagne-600 hover:text-white transition-all duration-300 shadow-sm"
            >
              Book Audit
            </button>
          </div>

          {/* Mobile Menu Icon */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="md:hidden p-2 text-charcoal-800"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-champagne-100/95 border-b border-champagne-300/40 divide-y divide-champagne-200"
            >
              <div className="flex flex-col p-6 space-y-4 text-sm font-medium tracking-wider text-charcoal-800">
                <button onClick={() => scrollToId('curated-portfolio')} className="text-left py-2 hover:text-champagne-600">Ambient Showcase</button>
                <button onClick={() => scrollToId('premium-services')} className="text-left py-2 hover:text-champagne-600">The Comfort Suite</button>
                <button onClick={() => scrollToId('client-stories')} className="text-left py-2 hover:text-champagne-600">Kind Words</button>
                <button onClick={() => scrollToId('contact-reserve')} className="text-left py-2 hover:text-champagne-600">Request Custom Estimate</button>
                
                <div className="pt-4 flex flex-col gap-3">
                  <a 
                    href="tel:+917709464471" 
                    id="mobile-call-btn"
                    className="w-full text-center py-3 bg-champagne-200/80 text-charcoal-900 rounded-lg font-medium flex items-center justify-center gap-2 leading-none"
                  >
                    <Phone className="w-4 h-4 text-champagne-600" />
                    <span>Call: +91 77094 64471</span>
                  </a>
                  <button 
                    onClick={() => scrollToId('contact-reserve')}
                    className="w-full text-center py-3 bg-charcoal-900 text-champagne-100 rounded-lg font-medium"
                  >
                    Request Free Site Consultation
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Single Page Layout */}
      <main className="flex-grow">
        
        {/* HERO SECTION: Artistic, Elegant, Quiet Luxury */}
        <section id="hero-section" className="relative min-h-[90vh] flex items-center justify-center py-16 px-6 lg:px-12 overflow-hidden bg-gradient-to-b from-champagne-100 via-champagne-50 to-champagne-100">
          
          {/* Subtle elegant background elements */}
          <div className="absolute right-0 top-1/4 w-[35rem] h-[35rem] rounded-full bg-olive-100/30 blur-3xl -z-10 pointer-events-none"></div>
          <div className="absolute left-10 bottom-10 w-[25rem] h-[25rem] rounded-full bg-champagne-200/50 blur-3xl -z-10 pointer-events-none"></div>

          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column Text details: Generous Whitespace focus */}
            <div className="lg:col-span-6 flex flex-col space-y-8 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-olive-100 text-olive-700 text-xs tracking-widest font-semibold uppercase rounded-full w-fit">
                <Sparkles className="w-3.5 h-3.5" />
                <span>INTELLIGENT RESIDENCES</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.08] text-charcoal-900">
                Technology, <br />
                <span className="italic font-normal text-champagne-650">Artfully Concealed.</span>
              </h1>

              <p className="text-charcoal-600 text-base sm:text-lg font-light leading-relaxed max-w-xl">
                We craft bespoke home automation, sensory lighting, and high-fidelity acoustics for Nagpur’s finest residences. 
                Experience a home which mirrors your lifestyle quietly and saves cable overhead beautifully.
              </p>

              {/* Quiet Luxury CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
                <button 
                  onClick={() => scrollToId('contact-reserve')}
                  className="bg-charcoal-900 text-white hover:bg-champagne-600 hover:text-white px-8 py-4 rounded-full text-xs font-semibold tracking-widest uppercase transition-all duration-300 text-center shadow-lg shadow-charcoal-900/10"
                >
                  Book Private Site Audit
                </button>
              </div>

              {/* Humble Client Metric Validation */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-champagne-300/40">
                <div>
                  <div className="font-serif text-4xl font-semi text-charcoal-900">77094</div>
                  <div className="text-[10px] text-charcoal-450 uppercase tracking-widest font-normal mt-1">NAGPUR HOTLINE</div>
                </div>
                <div>
                  <div className="font-serif text-4xl font-semi text-charcoal-900">100%</div>
                  <div className="text-[10px] text-charcoal-450 uppercase tracking-widest font-normal mt-1">SEAMLESS RATING</div>
                </div>
                <div>
                  <div className="font-serif text-4xl font-semi text-charcoal-900">30%</div>
                  <div className="text-[10px] text-charcoal-450 uppercase tracking-widest font-normal mt-1">CABLE RE-USE SAVINGS</div>
                </div>
              </div>
            </div>

            {/* Right Column Interactive Ambience Preview */}
            <div id="curated-portfolio" className="lg:col-span-6 flex flex-col space-y-6">
              
              {/* Main Image Container simulating circadian lighting change */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group border border-champagne-200/50">
                <img 
                  src={sceneData[currentScene].imageUrl} 
                  alt="Modern Luxury Interior Display" 
                  className="w-full h-[32rem] object-cover transition-transform duration-1000 group-hover:scale-102"
                />
                
                {/* Simulated colored light overlay based on state */}
                <div className={`absolute inset-0 transition-all duration-1000 ${sceneData[currentScene].overlayClass}`}></div>

                {/* Simulated Time & Temp Display Widget */}
                <div className="absolute top-6 left-6 bg-charcoal-900/80 backdrop-blur-md px-4 py-2.5 rounded-lg text-champagne-50 border border-champagne-400/20 text-left transition-all duration-500">
                  <div className="text-[10px] tracking-widest text-champagne-400 font-bold uppercase flex items-center gap-1">
                    <Clock className="w-3 h-3 text-champagne-400" />
                    <span>Live Ambience</span>
                  </div>
                  <div className="font-serif text-xl font-medium tracking-serif mt-0.5">{sceneData[currentScene].title}</div>
                  <div className="text-xs text-champagne-200/70 mt-1 flex items-center gap-1.5 font-light">
                    <span>{sceneData[currentScene].time}</span>
                    <span>•</span>
                    <span>{sceneData[currentScene].temperatureText}</span>
                  </div>
                </div>

                {/* Bottom interactive feedback banner */}
                <div className="absolute bottom-6 left-6 right-6 bg-charcoal-950/90 backdrop-blur-md p-4 rounded-xl text-left border border-white/10 transition-all duration-300">
                  <p className="text-xs text-champagne-300 line-clamp-2 italic font-light leading-relaxed">
                    "{sceneData[currentScene].description}"
                  </p>
                  <p className="text-[10px] text-olive-350 tracking-wider font-mono mt-2 uppercase flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse inline-block mr-1"></span>
                    {sceneData[currentScene].statusText}
                  </p>
                </div>
              </div>

              {/* Ambient Selectors with high-contrast UI pill items */}
              <div className="bg-champagne-100 border border-champagne-300/60 rounded-xl p-3 flex flex-wrap gap-2 items-center justify-between">
                <span className="text-[10px] text-charcoal-450 uppercase tracking-widest font-semibold ml-2">Ambient Scenarios:</span>
                <div className="flex flex-wrap gap-1">
                  {(['morning', 'sunset', 'cinema', 'midnight'] as const).map((scene) => (
                    <button
                      key={scene}
                      onClick={() => setCurrentScene(scene)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium tracking-wide transition-all duration-300 uppercase cursor-pointer ${
                        currentScene === scene 
                          ? 'bg-charcoal-900 text-champagne-100 shadow-sm font-semibold' 
                          : 'bg-white/50 text-charcoal-600 hover:bg-champagne-200'
                      }`}
                    >
                      {scene}
                    </button>
                  ))}
                </div>
              </div>

            </div>

          </div>

          {/* Scroll Down Indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 cursor-pointer opacity-70 hover:opacity-100 transition-opacity duration-300" onClick={() => scrollToId('premium-services')}>
            <span className="text-[10px] tracking-widest text-charcoal-450 uppercase font-light">Explore</span>
            <ChevronDown className="w-4 h-4 text-champagne-650 animate-bounce" />
          </div>
        </section>

        {/* REASSURANCE RIBBON ON SAVINGS */}
        <section className="bg-champagne-200/40 py-8 border-y border-champagne-300/30">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <ShieldCheck className="w-8 h-8 text-olive-600 shrink-0" />
              <div>
                <h4 className="text-xs tracking-widest font-bold uppercase text-charcoal-800">Authentic Materials Only</h4>
                <p className="text-xs text-charcoal-500 font-light mt-0.5">Approved electrical cables, designer switches, premium hardware panels.</p>
              </div>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-3">
              <Sliders className="w-8 h-8 text-champagne-600 shrink-0" />
              <div>
                <h4 className="text-xs tracking-widest font-bold uppercase text-charcoal-800">Uncompromising Integrity</h4>
                <p className="text-xs text-charcoal-500 font-light mt-0.5 font-sans">Honest consultations. Save overhead cost on secondary wires.</p>
              </div>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-3">
              <Phone className="w-8 h-8 text-olive-600 shrink-0" />
              <div>
                <h4 className="text-xs tracking-widest font-bold uppercase text-charcoal-800">Prompt & Knowledgeable</h4>
                <p className="text-xs text-charcoal-500 font-light mt-0.5">Highly professional installation with neat layouts & zero clutter.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CURATED SERVICE PORTFOLIO */}
        <section id="premium-services" className="py-24 px-6 bg-champagne-50">
          <div className="max-w-7xl mx-auto">
            
            {/* Header section focusing on clean typography and generous spacing */}
            <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
              <span className="text-champagne-600 text-xs tracking-widest font-bold uppercase">TAILORED HOME ARCHITECTURE</span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-charcoal-900 leading-tight">
                Our Signature Automation Offerings
              </h2>
              <div className="w-16 h-[2px] bg-champagne-400 mx-auto my-4"></div>
              <p className="text-charcoal-500 text-sm font-light leading-relaxed max-w-2xl mx-auto">
                No cluttered wall boxes. We integrate technology behind premium paints and gold textures, utilizing strategic cabling that minimizes redundant switches.
              </p>
            </div>

            {/* 3-Column Grid for Services with customized design aspects */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {premiumServices.map((service, index) => (
                <div 
                  key={service.id}
                  className="bg-white border border-champagne-200/70 p-8 rounded-2xl flex flex-col space-y-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-left"
                >
                  <div className="p-3 bg-champagne-50 w-fit rounded-xl border border-champagne-100">
                    {service.icon}
                  </div>

                  <div className="space-y-3">
                    <h3 className="font-serif text-xl font-medium tracking-tight text-charcoal-900">
                      {service.title}
                    </h3>
                    <p className="text-charcoal-500 text-xs font-light leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="w-full border-t border-champagne-100/80 pt-4 mt-auto">
                    <ul className="space-y-2">
                      {service.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2 text-[10px] text-charcoal-600">
                          <CheckCircle2 className="w-3.5 h-3.5 text-olive-500 shrink-0 mt-0.5" />
                          <span className="font-light">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* Accent Banner detailing Arham's guidance */}
            <div className="mt-16 bg-olive-700 text-champagne-100 rounded-3xl p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 text-left">
              <div className="space-y-3 max-w-2xl">
                <span className="text-[10px] tracking-widest text-olive-200 font-bold uppercase block">
                  Signature Cost Optimization Blueprint
                </span>
                <h3 className="font-serif text-2xl lg:text-3xl text-white font-medium tracking-tight">
                  "Save up to 30% of unnecessary cable & premium luxury switch overheads."
                </h3>
                <p className="text-xs text-olive-150 font-light leading-relaxed">
                  As our clients share, proprietary luxury switches can easily bloat your dream home expenses. By integrating micro smart relays directly behind traditional designer switch plates, Arham guides your electrical contractor to skip high-markup proprietary modules while preserving 100% smart functionality.
                </p>
              </div>
              <button 
                onClick={() => scrollToId('contact-reserve')}
                className="bg-champagne-300 text-charcoal-900 hover:bg-white hover:text-charcoal-950 whitespace-nowrap px-8 py-4 rounded-full text-xs font-semibold tracking-widest uppercase transition-all duration-300"
              >
                Schedule Structural Cable Guide
              </button>
            </div>

          </div>
        </section>


        {/* INTERACTIVE CABLE AND SWITCHWARE SAVINGS CALCULATOR */}
        <section id="savings-calculator" className="py-24 px-6 bg-charcoal-900 text-white border-t border-charcoal-800 relative overflow-hidden text-left">
          {/* Visual gradient background pulses */}
          <div className="absolute left-1/4 top-1/4 w-[35rem] h-[35rem] rounded-full bg-champagne-300/5 blur-3xl pointer-events-none -z-10" />
          <div className="absolute right-1/4 bottom-1/4 w-[25rem] h-[25rem] rounded-full bg-olive-500/5 blur-3xl pointer-events-none -z-10" />

          <div className="max-w-7xl mx-auto">
            {/* Elegant Header */}
            <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
              <span className="text-champagne-300 text-xs tracking-widest font-bold uppercase block">FINANCIAL & MATERIAL OPTIMIZATION</span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white leading-tight font-medium">
                Cable & Switchware Savings Calculator
              </h2>
              <div className="w-16 h-[2px] bg-champagne-400 mx-auto my-4"></div>
              <p className="text-charcoal-300 text-xs sm:text-sm font-light leading-relaxed max-w-2xl mx-auto text-center">
                Play with our interactive design matrix. Instantly quantify the savings achieved by routing localized boundary-hub cables and replacing high-markup proprietary switches with Hometech smart modules behind designer faceplates.
              </p>
            </div>

            {/* Split layout: Controls / Analysis */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch mt-8 text-left">
              
              {/* Controls Column (lg:col-span-5) */}
              <div className="lg:col-span-5 bg-charcoal-950/40 border border-charcoal-800/80 p-8 rounded-3xl flex flex-col justify-between space-y-8">
                
                {/* 1. Size Slider */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <label className="text-[11px] font-mono tracking-wider font-bold text-champagne-200 uppercase">1. RESIDENCE TOTAL AREA</label>
                    <span className="text-xs font-serif text-white font-medium bg-charcoal-800 px-2.5 py-0.5 rounded border border-charcoal-700/60">
                      {new Intl.NumberFormat('en-IN').format(houseSize)} Sq Ft
                    </span>
                  </div>
                  <input 
                    type="range" 
                    min="800" 
                    max="12000" 
                    step="100"
                    value={houseSize} 
                    onChange={(e) => setHouseSize(Number(e.target.value))}
                    className="w-full accent-champagne-400 bg-charcoal-800 h-1 rounded-lg cursor-pointer transition-all"
                  />
                  <div className="flex justify-between text-[10px] text-charcoal-405 font-light">
                    <span>800 Sq Ft (Luxury Suite)</span>
                    <span>12,000 Sq Ft (Grand Estate)</span>
                  </div>
                </div>

                {/* 2. Zones Slider */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <label className="text-[11px] font-mono tracking-wider font-bold text-champagne-200 uppercase">2. LIGHTING & CONTROL ZONES</label>
                    <span className="text-xs font-serif text-white font-medium bg-charcoal-800 px-2.5 py-0.5 rounded border border-charcoal-700/60">
                      {zonesCount} Active Zones
                    </span>
                  </div>
                  <input 
                    type="range" 
                    min="12" 
                    max="40" 
                    step="2"
                    value={zonesCount} 
                    onChange={(e) => setZonesCount(Number(e.target.value))}
                    className="w-full accent-champagne-400 bg-charcoal-800 h-1 rounded-lg cursor-pointer transition-all"
                  />
                  <div className="flex justify-between text-[10px] text-charcoal-405 font-light">
                    <span>12 Channels</span>
                    <span>40 Channels (Full Automation)</span>
                  </div>
                </div>

                {/* 3. Tech Tier Selector Buttons */}
                <div className="space-y-3">
                  <label className="text-[11px] font-mono tracking-wider font-bold text-champagne-200 uppercase block">3. SWITCHWARE PARADIGM</label>
                  <p className="text-[10px] text-charcoal-400 font-light leading-snug">
                    Compare Lutron/Crestron proprietary custom automation protocols vs standard designer switches upgraded with smart relays.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                    <button
                      type="button"
                      onClick={() => setTechTier('proprietary')}
                      className={`p-4 rounded-xl border text-left flex flex-col justify-between h-24 transition-all duration-300 cursor-pointer ${
                        techTier === 'proprietary' 
                          ? 'border-red-500 bg-red-950/10 shadow-md shadow-red-500/5'
                          : 'border-charcoal-800 bg-charcoal-900/40 hover:bg-charcoal-800/50 hover:border-charcoal-700'
                      }`}
                    >
                      <span className="text-[9px] font-mono uppercase text-red-400 tracking-wider font-bold">Proprietary Brand</span>
                      <div>
                        <div className="text-xs font-medium text-white font-serif">Luxury Custom Keypads</div>
                        <p className="text-[8px] text-charcoal-400 font-light truncate mt-0.5">Heavy dealer markup & software fees</p>
                      </div>
                    </button>
                    <button
                      type="button"
                      onClick={() => setTechTier('optimized')}
                      className={`p-4 rounded-xl border text-left flex flex-col justify-between h-24 transition-all duration-300 cursor-pointer ${
                        techTier === 'optimized' 
                          ? 'border-olive-400 bg-olive-950/20 shadow-md shadow-olive-500/5'
                          : 'border-charcoal-800 bg-charcoal-900/40 hover:bg-charcoal-800/50 hover:border-charcoal-700'
                      }`}
                    >
                      <span className="text-[9px] font-mono uppercase text-olive-400 tracking-wider font-bold">Hometech Optimized</span>
                      <div>
                        <div className="text-xs font-medium text-white font-serif">Smart Hidden Relays</div>
                        <p className="text-[8px] text-charcoal-400 font-light truncate mt-0.5">100% smart behavior behind normal plates</p>
                      </div>
                    </button>
                  </div>
                </div>

                {/* 4. Cabling Philosophy Selector Buttons */}
                <div className="space-y-3">
                  <label className="text-[11px] font-mono tracking-wider font-bold text-champagne-200 uppercase block">4. CABLING LAYOUT SCHEME</label>
                  <p className="text-[10px] text-charcoal-400 font-light leading-snug">
                    Compare centralized home-runs back to main panel vs smart localized boundary-hub topology.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                    <button
                      type="button"
                      onClick={() => setCablePhilosophy('centralized')}
                      className={`p-4 rounded-xl border text-left flex flex-col justify-between h-24 transition-all duration-300 cursor-pointer ${
                        cablePhilosophy === 'centralized' 
                          ? 'border-red-500 bg-red-950/10 shadow-md shadow-red-500/5'
                          : 'border-charcoal-800 bg-charcoal-900/40 hover:bg-charcoal-800/50 hover:border-charcoal-700'
                      }`}
                    >
                      <span className="text-[9px] font-mono uppercase text-red-400 tracking-wider font-bold">Star Central wired</span>
                      <div>
                        <div className="text-xs font-medium text-white font-serif">Centralized Home-Run</div>
                        <p className="text-[8px] text-charcoal-400 font-light truncate mt-0.5">Heavier conduits + bloated copper runs</p>
                      </div>
                    </button>
                    <button
                      type="button"
                      onClick={() => setCablePhilosophy('boundary')}
                      className={`p-4 rounded-xl border text-left flex flex-col justify-between h-24 transition-all duration-300 cursor-pointer ${
                        cablePhilosophy === 'boundary' 
                          ? 'border-olive-400 bg-olive-950/20 shadow-md shadow-olive-500/5'
                          : 'border-charcoal-800 bg-charcoal-900/40 hover:bg-charcoal-800/50 hover:border-charcoal-700'
                      }`}
                    >
                      <span className="text-[9px] font-mono uppercase text-olive-400 tracking-wider font-bold">Boundary Localized</span>
                      <div>
                        <div className="text-xs font-medium text-white font-serif">Boundary-Hub Topology</div>
                        <p className="text-[8px] text-charcoal-400 font-light truncate mt-0.5">Saves copper, labor and conduit markup</p>
                      </div>
                    </button>
                  </div>
                </div>

              </div>

              {/* Financial & Material Blueprint Analysis (lg:col-span-7) */}
              <div className="lg:col-span-7 space-y-6 flex flex-col justify-between">
                
                {/* Visual Blueprint Diagram Frame */}
                <div className="bg-charcoal-950 p-6 rounded-3xl border border-charcoal-800/80 shadow-xl space-y-4">
                  <div className="flex items-center justify-between border-b border-charcoal-800 pb-3">
                    <div className="flex items-center gap-2">
                      <Layers className="w-4 h-4 text-champagne-300 animate-pulse" />
                      <span className="text-[10px] font-mono tracking-widest text-charcoal-400 uppercase font-bold">Live Architectural Wiring Preview</span>
                    </div>
                    <span className="text-[9px] font-bold text-olive-400 bg-olive-950/20 border border-olive-900/30 px-2 py-0.5 rounded uppercase">
                      {cablePhilosophy === 'boundary' ? 'Boundary hub active' : 'star home-run active'}
                    </span>
                  </div>

                  {/* Dynamic Interactive SVG */}
                  <div className="bg-charcoal-900/60 p-4 rounded-2xl border border-charcoal-850 flex items-center justify-center min-h-[180px]">
                    {cablePhilosophy === 'centralized' ? (
                      <svg viewBox="0 0 400 200" className="w-full h-40 text-charcoal-350 select-none pointer-events-none">
                        {/* House boundary outer trace */}
                        <rect x="10" y="10" width="380" height="180" rx="16" fill="transparent" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" className="text-charcoal-700/60" />
                        
                        {/* Core panel - highly concentrated heavy central node */}
                        <rect x="185" y="85" width="30" height="30" rx="6" fill="#EF4444" className="animate-pulse" />
                        <text x="200" y="130" fill="#EF4444" fontSize="8" fontFamily="monospace" textAnchor="middle" fontWeight="bold">HEAVY CENTRAL DISPATCH</text>
                        
                        {/* Bloated copper cable wire runs spanning all over the perimeter */}
                        <path d="M 200 100 L 40 30 M 200 100 L 80 40 M 200 100 L 120 30 M 200 100 L 360 30 M 200 100 L 320 40 M 200 100 L 360 170 M 200 100 L 320 160 M 200 100 L 40 170 M 200 100 L 80 160 M 200 100 L 120 170" stroke="#F87171" strokeWidth="2" strokeLinecap="round" opacity="0.85" />
                        
                        <circle cx="40" cy="30" r="4" fill="#EF4444" />
                        <circle cx="80" cy="40" r="4" fill="#EF4444" />
                        <circle cx="120" cy="30" r="4" fill="#EF4444" />
                        <circle cx="360" cy="30" r="4" fill="#EF4444" />
                        <circle cx="320" cy="40" r="4" fill="#EF4444" />
                        <circle cx="360" cy="170" r="4" fill="#EF4444" />
                        <circle cx="320" cy="160" r="4" fill="#EF4444" />
                        <circle cx="40" cy="170" r="4" fill="#EF4444" />
                        <circle cx="80" cy="160" r="4" fill="#EF4444" />
                        <circle cx="120" cy="170" r="4" fill="#EF4444" />
                        
                        {/* Informative Overlay */}
                        <rect x="20" y="25" width="90" height="24" rx="4" fill="#18181B" stroke="#F87171" strokeWidth="0.5" />
                        <text x="65" y="39" fill="#F87171" fontSize="7" fontFamily="sans-serif" textAnchor="middle">120m Heavy Conduit</text>

                        <rect x="290" y="145" width="90" height="24" rx="4" fill="#18181B" stroke="#F87171" strokeWidth="0.5" />
                        <text x="335" y="159" fill="#F87171" fontSize="7" fontFamily="sans-serif" textAnchor="middle">High Phase-Resistance</text>
                      </svg>
                    ) : (
                      <svg viewBox="0 0 400 200" className="w-full h-40 text-charcoal-350 select-none pointer-events-none">
                        {/* House boundary outer trace */}
                        <rect x="10" y="10" width="380" height="180" rx="16" fill="transparent" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" className="text-charcoal-700/60" />
                        
                        {/* Three decentralized localized micro-modules */}
                        <rect x="65" y="85" width="20" height="20" rx="4" fill="#84CC16" />
                        <rect x="200" y="85" width="20" height="20" rx="4" fill="#84CC16" />
                        <rect x="315" y="85" width="20" height="20" rx="4" fill="#84CC16" />

                        <text x="75" y="120" fill="#A3E635" fontSize="7.5" fontFamily="monospace" textAnchor="middle">HUB-W</text>
                        <text x="210" y="120" fill="#A3E635" fontSize="7.5" fontFamily="monospace" textAnchor="middle">HUB-C</text>
                        <text x="325" y="120" fill="#A3E635" fontSize="7.5" fontFamily="monospace" textAnchor="middle">HUB-E</text>

                        {/* Short localized clean micro wiring paths */}
                        <path d="M 75 95 L 40 30 M 75 95 L 80 40 M 75 95 L 120 30 M 75 95 L 40 170 M 75 95 L 80 160" stroke="#84CC16" strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />
                        <path d="M 210 95 L 210 30 M 210 95 L 210 170 M 210 95 L 170 160 M 210 95 L 250 160" stroke="#84CC16" strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />
                        <path d="M 325 95 L 360 30 M 325 95 L 320 40 M 325 95 L 360 170 M 325 95 L 320 160" stroke="#84CC16" strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />

                        {/* Master interconnect ring bus (Single thin shield CAT6 daisy link) */}
                        <path d="M 75 95 Q 142.5 80 210 95 T 325 95" fill="none" stroke="#65A30D" strokeWidth="1.5" strokeDasharray="3 3" />

                        <circle cx="40" cy="30" r="3.5" fill="#84CC16" />
                        <circle cx="80" cy="40" r="3.5" fill="#84CC16" />
                        <circle cx="120" cy="30" r="3.5" fill="#84CC16" />
                        <circle cx="360" cy="30" r="3.5" fill="#84CC16" />
                        <circle cx="320" cy="40" r="3.5" fill="#84CC16" />
                        <circle cx="360" cy="170" r="3.5" fill="#84CC16" />
                        <circle cx="320" cy="160" r="3.5" fill="#84CC16" />
                        <circle cx="40" cy="170" r="3.5" fill="#84CC16" />
                        <circle cx="80" cy="160" r="3.5" fill="#84CC16" />
                        <circle cx="210" cy="30" r="3.5" fill="#84CC16" />
                        <circle cx="210" cy="170" r="3.5" fill="#84CC16" />

                        {/* Informative labels */}
                        <rect x="18" y="25" width="85" height="18" rx="3" fill="#18181B" stroke="#84CC16" strokeWidth="0.5" />
                        <text x="60" y="36" fill="#84CC16" fontSize="6.5" fontFamily="sans-serif" textAnchor="middle">35m Micro-Loops</text>

                        <rect x="295" y="145" width="85" height="18" rx="3" fill="#18181B" stroke="#84CC16" strokeWidth="0.5" />
                        <text x="337" y="156" fill="#84CC16" fontSize="6.5" fontFamily="sans-serif" textAnchor="middle">Shielded CAT6 Bus</text>
                      </svg>
                    )}
                  </div>

                  <div className="text-[11px] font-light text-charcoal-300 text-left leading-relaxed">
                    {cablePhilosophy === 'boundary' ? (
                      <p>
                        <strong className="text-olive-400 font-medium">Hometech Boundary-Hub Strategy:</strong> Place robust solid-state relay micro-computers in sleek boundary nodes. This completely skips heavy bundle conduits back to a main electrical closet, significantly cutting down pure electrical cabling labor bills.
                      </p>
                    ) : (
                      <p>
                        <strong className="text-red-400 font-medium">Legacy Star Wiring Paradigm:</strong> Runs every single lighting load back to a single centralized panel. Thick conduits, copper bundles, and excessive voltage drops require substantial labor costs, adding tens of thousands of unnecessary rupees to structural bills.
                      </p>
                    )}
                  </div>
                </div>

                {/* Savings Summary Banner */}
                <div className="bg-gradient-to-br from-charcoal-950 to-charcoal-900 border border-charcoal-800/80 p-8 rounded-3xl space-y-5 shadow-2xl relative overflow-hidden">
                  
                  {/* Decorative glowing background accent */}
                  <div className="absolute right-0 bottom-0 w-24 h-24 bg-olive-500/10 rounded-full blur-2xl" />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center text-left">
                    
                    {/* Big savings display */}
                    <div className="space-y-1">
                      <span className="text-[10px] text-charcoal-400 font-mono tracking-widest uppercase block font-bold">ESTIMATED NET SAVINGS</span>
                      <div className="text-3xl sm:text-4xl font-serif text-champagne-300 font-bold tracking-tight">
                        {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(calculation.netSavings)}
                      </div>
                      <span className="text-[10px] text-olive-400 font-mono font-medium block">
                        Saved approx. {calculation.savingsPercent}% off legacy automation designs
                      </span>
                    </div>

                    {/* Secondary Metrics */}
                    <div className="space-y-3.5 border-t sm:border-t-0 sm:border-l border-charcoal-800/80 pt-4 sm:pt-0 sm:pl-6 text-left text-charcoal-350">
                      <div className="flex justify-between text-xs font-light">
                        <span className="text-charcoal-405">Total Legacy Budget:</span>
                        <span className="font-mono text-charcoal-200 line-through">
                          {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(calculation.legacyGrandTotal)}
                        </span>
                      </div>
                      <div className="flex justify-between text-xs font-light">
                        <span className="text-charcoal-405">Optimized Smart Cost:</span>
                        <span className="font-mono text-champagne-200 font-semibold">
                          {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(calculation.selectedGrandTotal)}
                        </span>
                      </div>

                      {calculation.copperSavedKg > 0 && (
                        <div className="flex items-center gap-2 text-[10px] bg-olive-950/30 border border-olive-900/30 text-olive-300 px-2.5 py-1 rounded inline-block mt-1">
                          <CheckCircle2 className="w-3.5 h-3.5 text-olive-400 shrink-0" />
                          <span>Green Impact: Skipped {calculation.copperSavedKg} Kg redundant structural copper wire</span>
                        </div>
                      )}
                    </div>

                  </div>

                  {/* Form Trigger button */}
                  <div className="pt-2">
                    <button
                      onClick={() => {
                        const estimatedSavingsStr = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(calculation.netSavings);
                        const legacyBudgetStr = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(calculation.legacyGrandTotal);
                        const optimizedSmartCostStr = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(calculation.selectedGrandTotal);
                        setAdditionalNotes(`Inquired about Hometech's optimization blueprint. Real-time calculator estimates a saving of ${estimatedSavingsStr} for my proposed ${houseSize} Sq Ft home with ${zonesCount} active control channels. (Legacy proposed budget: ${legacyBudgetStr} vs. Optimized Hometech cost: ${optimizedSmartCostStr}). Please review my layout.`);
                        setSelectedService('Whole-Home Automation');
                        scrollToId('contact-reserve');
                      }}
                      className="w-full bg-champagne-400 text-charcoal-900 hover:bg-white hover:text-charcoal-950 transition-all duration-350 py-4 px-6 rounded-xl text-xs font-bold tracking-widest uppercase text-center block cursor-pointer border-none shadow"
                    >
                      Export Cost Optimization Blueprint to Consultation Form
                    </button>
                  </div>

                </div>

              </div>

            </div>
          </div>
        </section>


        {/* SOCIAL PROOF SECTION: "What Our Clients Say" */}
        <section id="client-stories" className="py-24 px-6 bg-champagne-50">
          <div className="max-w-7xl mx-auto">
            
            <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
              <span className="text-champagne-650 text-xs tracking-widest font-bold uppercase block">AUTHENTIC TESTIMONIALS</span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-charcoal-900 leading-tight">
                Kind Words From Our Patrons
              </h2>
              <div className="w-16 h-[2px] bg-champagne-400 mx-auto my-4"></div>
              <p className="text-charcoal-500 text-sm font-light leading-relaxed max-w-xl mx-auto">
                Real, certified Google Maps reviews from premium homeowners, estate designers, and business developers who experienced Hometech Automation.
              </p>
            </div>

            {/* Masonry-like structured grid for reviews */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {clientReviews.map((review, rIdx) => (
                <div 
                  key={rIdx}
                  className="bg-white border border-champagne-200/80 p-8 rounded-2xl flex flex-col justify-between space-y-6 hover:shadow-lg transition-transform duration-300 text-left"
                >
                  <div className="space-y-4">
                    
                    {/* Stars and Timeline */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-0.5 text-amber-500">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-amber-500" />
                        ))}
                      </div>
                      <span className="text-[10px] text-charcoal-450 font-normal tracking-wide bg-champagne-50 px-2 py-1 rounded">
                        {review.time}
                      </span>
                    </div>

                    {/* Review text with refined spacing */}
                    <p className="text-charcoal-700 text-xs md:text-sm font-light leading-relaxed italic">
                      "{review.text}"
                    </p>

                  </div>

                  {/* Client Info details */}
                  <div className="flex items-center gap-3 pt-4 border-t border-champagne-100/60">
                    <div className="w-10 h-10 rounded-full bg-olive-100 text-olive-800 flex items-center justify-center font-serif font-bold text-sm select-none border border-olive-200/60 shadow-sm">
                      {review.avatarChar}
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-charcoal-900 tracking-wide">{review.name}</h4>
                      <p className="text-[10px] text-charcoal-450">{review.role} • Verified Buyer</p>
                    </div>
                  </div>

                </div>
              ))}
            </div>

            {/* Link directly to Google Maps profile */}
            <div className="mt-12 text-center">
              <a 
                href="https://maps.app.goo.gl/Lujyoiwo7qYizybPA" 
                target="_blank" 
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest text-charcoal-900 underline hover:text-champagne-600 uppercase transition-all"
              >
                <span>Read original reviews on Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        </section>

        {/* INTERACTIVE INQUIRY FORM, ADDRESS & GOOGLE MAPS EMBED */}
        <section id="contact-reserve" className="py-24 px-6 bg-champagne-100 border-t border-champagne-200">
          <div className="max-w-7xl mx-auto">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              
              {/* Left Side: Address Details & Click-to-calls */}
              <div className="lg:col-span-5 space-y-8 text-left">
                <div className="space-y-4">
                  <span className="text-champagne-650 text-xs tracking-widest font-bold uppercase block">OFFICE HEADQUARTERS</span>
                  <h2 className="font-serif text-3xl sm:text-4xl text-charcoal-900 leading-tight">
                    Refine Your Residence Today
                  </h2>
                  <p className="text-charcoal-500 text-xs font-light leading-relaxed">
                    Reserve an exclusive site walkthrough. Arham and our structural design managers will audit your floor blueprints, color coordinates, and switch layouts first-hand.
                  </p>
                </div>

                {/* Specific Contacts Grid */}
                <div className="space-y-6">
                  
                  {/* Address Block with Clickable Direction link */}
                  <a 
                    href="https://maps.app.goo.gl/Lujyoiwo7qYizybPA"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="block p-5 bg-white rounded-xl border border-champagne-200 hover:border-champagne-500 transition-all duration-300 hover:shadow-md"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-2.5 bg-champagne-50 rounded-lg text-champagne-550 border border-champagne-200">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div className="space-y-1">
                        <span className="text-[10px] tracking-widest text-charcoal-450 uppercase font-black block">PHYSICAL SHOWROOM</span>
                        <p className="text-xs text-charcoal-800 font-medium leading-relaxed">
                          1st Floor, Sheetal Building, Central Ave, <br />
                          behind Chitar Oli Road, behind Renuka Mata Mandir, <br />
                          Nagpur, Maharashtra 440032
                        </p>
                        <span className="text-[10px] text-olive-600 font-semibold tracking-wider uppercase inline-flex items-center gap-1 mt-2">
                          <span>Get Exact Driving Directions</span>
                          <ChevronRight className="w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  </a>

                  {/* Phone Line Clickable */}
                  <a 
                    href="tel:+917709464471" 
                    id="contact-phone-card"
                    className="block p-5 bg-white rounded-xl border border-champagne-200 hover:border-champagne-500 transition-all duration-300 hover:shadow-md"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-2.5 bg-champagne-50 rounded-lg text-champagne-550 border border-champagne-200">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div className="space-y-1">
                        <span className="text-[10px] tracking-widest text-charcoal-450 uppercase font-black block">TELEPHONE SUPPORT</span>
                        <p className="text-sm font-serif font-semibold text-charcoal-900 mt-0.5">
                          +91 77094 64471
                        </p>
                        <p className="text-[10px] text-charcoal-550">Click-to-call enabled • Direct client coordinator</p>
                      </div>
                    </div>
                  </a>

                  {/* Operational Hours */}
                  <div className="p-5 bg-white/50 rounded-xl border border-champagne-200/60">
                    <div className="flex items-start gap-4">
                      <div className="p-2.5 bg-champagne-50 rounded-lg text-charcoal-450">
                        <Clock className="w-5 h-5" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-[10px] tracking-widest text-charcoal-450 uppercase font-black">CONSULTATION HOURS</h4>
                        <p className="text-xs text-charcoal-800 font-light leading-relaxed">
                          Monday — Saturday: 10:00 AM to 07:30 PM <br />
                          Sunday: Closed (Available for private pre-booked site inspections)
                        </p>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Aesthetic Google Map Iframe Placeholder using beautiful luxury styling */}
                <div className="relative rounded-2xl overflow-hidden border border-champagne-200/80 shadow-md">
                  <div className="bg-charcoal-900 text-champagne-100 p-3 flex justify-between items-center px-4 text-xs">
                    <span className="font-medium">Nagpur Service Map Location</span>
                    <a 
                      href="https://maps.app.goo.gl/Lujyoiwo7qYizybPA" 
                      target="_blank" 
                      rel="noreferrer" 
                      className="text-[10px] text-champagne-400 hover:underline flex items-center gap-1"
                    >
                      <span>Open on Google Maps</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                  
                  {/* Clean responsive embedded map pointer */}
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4322.061117076715!2d79.110805595356!3d21.149415042013853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c70038361a91%3A0x42416d67f092cb75!2sHomeTech%20Automations!5e0!3m2!1sen!2sin!4v1779821724405!5m2!1sen!2sin" 
                    width="100%" 
                    height="280" 
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Hometech Automation Nagpur Maps Pointer"
                    className="w-full h-[280px]"
                  ></iframe>
                </div>

              </div>

              {/* Right Side: Consultation Booking Form */}
              <div className="lg:col-span-7 bg-white p-8 lg:p-10 rounded-3xl border border-champagne-200 shadow-xl text-left">
                
                <AnimatePresence mode="wait">
                  {!formSubmitted ? (
                    <motion.div 
                      key="lead-form"
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="space-y-6"
                    >
                      <div className="space-y-2">
                        <h3 className="font-serif text-2xl text-charcoal-900 font-semibold">Reserve Consultation</h3>
                        <p className="text-charcoal-500 text-xs font-light">
                          Provide your contact details and home parameters. Arham’s site architecture specialist will contact you to align schedules.
                        </p>
                      </div>

                      <form onSubmit={handleConsultationSubmit} className="space-y-4">
                        
                        {/* Name Input */}
                        <div>
                          <label className="block text-[10px] tracking-widest uppercase font-bold text-charcoal-500 mb-1.5">
                            Client Full Name *
                          </label>
                          <input 
                            type="text" 
                            required
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            placeholder="e.g., Mahendra Sharma" 
                            className="w-full bg-champagne-50 border border-champagne-300 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-champagne-500 focus:bg-white transition-all"
                          />
                        </div>

                        {/* Two Columns Grid for details */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {/* Phone Call input */}
                          <div>
                            <label className="block text-[10px] tracking-widest uppercase font-bold text-charcoal-500 mb-1.5">
                              Nagpur Phone Number *
                            </label>
                            <input 
                              type="tel" 
                              required
                              value={phoneNumber}
                              onChange={(e) => setPhoneNumber(e.target.value)}
                              placeholder="e.g., 77094 64471" 
                              className="w-full bg-champagne-50 border border-champagne-300 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-champagne-500 focus:bg-white transition-all"
                            />
                          </div>

                          {/* Email Address */}
                          <div>
                            <label className="block text-[10px] tracking-widest uppercase font-bold text-charcoal-500 mb-1.5">
                              Email Address (Optional)
                            </label>
                            <input 
                              type="email" 
                              value={emailAddress}
                              onChange={(e) => setEmailAddress(e.target.value)}
                              placeholder="e.g., mahendra@estate.com" 
                              className="w-full bg-champagne-50 border border-champagne-300 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-champagne-500 focus:bg-white transition-all"
                            />
                          </div>
                        </div>

                        {/* Preferred Upgrade Selection */}
                        <div>
                          <label className="block text-[10px] tracking-widest uppercase font-bold text-charcoal-500 mb-1.5">
                            Primary Upgrade Scope
                          </label>
                          <select 
                            value={selectedService}
                            onChange={(e) => setSelectedService(e.target.value)}
                            className="w-full bg-champagne-50 border border-champagne-300 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-champagne-500 focus:bg-white transition-all appearance-none cursor-pointer"
                          >
                            <option value="Whole-Home Automation">Whole-Home Automation</option>
                            <option value="Architectural Smart Lighting">Architectural Smart Lighting & circadians</option>
                            <option value="Audio System Configuration">Invisible Audio Systems & Dolby Media</option>
                            <option value="Structured Switch & Cabling Guidance">Low-Voltage Switches & Cable Audits</option>
                          </select>
                        </div>

                        {/* Message / Requirement detail notes */}
                        <div>
                          <label className="block text-[10px] tracking-widest uppercase font-bold text-charcoal-500 mb-1.5">
                            Additional Aesthetic / Civil Parameters
                          </label>
                          <textarea 
                            rows={4}
                            value={additionalNotes}
                            onChange={(e) => setAdditionalNotes(e.target.value)}
                            placeholder="Write about wall colors, current construction stage, or cables choice..." 
                            className="w-full bg-champagne-50 border border-champagne-300 rounded-xl p-4 text-xs focus:outline-none focus:border-champagne-500 focus:bg-white transition-all resize-none"
                          ></textarea>
                        </div>

                        <div className="flex items-center gap-2 bg-olive-50 p-3 rounded-xl border border-olive-200">
                          <Info className="w-4 h-4 text-olive-600 shrink-0" />
                          <p className="text-[10px] text-olive-750 font-light">
                            <span className="font-semibold">Cable Savings Assurance:</span> Indicating layout specifications helps Arham draft optimal wiring patterns directly for your local contractor.
                          </p>
                        </div>

                        <button 
                          type="submit"
                          className="w-full bg-charcoal-900 text-champagne-50 hover:bg-champagne-600 hover:text-white transition-all duration-300 py-4 rounded-xl text-[11px] font-bold tracking-widest uppercase flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-charcoal-900/10"
                        >
                          <span>Request My Site Call & Audit</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>

                      </form>
                    </motion.div>
                  ) : (
                    <motion.div 
                      key="form-success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="py-6 text-center space-y-6"
                    >
                      <div className="w-16 h-16 bg-olive-100 text-olive-600 rounded-full flex items-center justify-center mx-auto border border-olive-200 shadow-md">
                        <CheckCircle2 className="w-10 h-10" />
                      </div>
                      
                      <div className="space-y-1">
                        <span className="text-[10px] tracking-widest text-olive-600 font-bold uppercase block">READY FOR TRANSFER</span>
                        <h3 className="font-serif text-2xl lg:text-3xl text-charcoal-900 font-semibold">Message Pack Synthesized</h3>
                      </div>

                      <p className="text-xs text-charcoal-500 font-light max-w-sm mx-auto leading-relaxed">
                        We have automatically formatted your smart home upgrade inputs. Send them instantly to Arham on WhatsApp for immediate feedback on layout details.
                      </p>

                      {/* Monospace Code Preview Box for Preformatted text */}
                      <div className="bg-charcoal-900 p-5 rounded-2xl border border-charcoal-800 text-left max-w-md mx-auto space-y-3 relative shadow-inner">
                        <div className="flex items-center justify-between border-b border-charcoal-800 pb-2.5">
                          <span className="text-[9px] font-mono tracking-widest text-champagne-300 uppercase">Preformatted WhatsApp Message</span>
                          <button 
                            onClick={() => {
                              try {
                                navigator.clipboard.writeText(formattedWhatsAppMessage);
                                setCopied(true);
                                setTimeout(() => setCopied(false), 2000);
                              } catch (err) {
                                console.error(err);
                              }
                            }}
                            className="text-[10px] bg-charcoal-800 text-champagne-100 px-2.5 py-1 rounded hover:bg-champagne-500 hover:text-charcoal-950 transition-colors shrink-0"
                          >
                            {copied ? 'Copied' : 'Copy Text'}
                          </button>
                        </div>
                        <pre className="text-[11px] text-champagne-100 font-mono leading-relaxed whitespace-pre-wrap select-all font-light opacity-95">
                          {formattedWhatsAppMessage}
                        </pre>
                      </div>

                      {/* Instant WhatsApp Primary Button */}
                      <div className="pt-2 max-w-md mx-auto space-y-3">
                        <a 
                          href={whatsappUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="w-full bg-[#25D366] text-white hover:bg-[#128C7E] transition-all duration-300 py-4 rounded-xl text-[11px] font-bold tracking-widest uppercase flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-emerald-600/10"
                        >
                          <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.864.002-2.637-1.023-5.115-2.887-6.978C16.584 1.9 14.11 0.875 11.987 0.875 6.558 0.875 2.13 5.297 2.126 10.732c-.001 1.637.498 3.235 1.448 4.82l-.953 3.483 3.566-.935z" />
                          </svg>
                          <span>Send details on WhatsApp Now</span>
                        </a>

                        <button 
                          onClick={() => {
                            setFormSubmitted(false);
                            setFullName('');
                            setPhoneNumber('');
                            setEmailAddress('');
                            setAdditionalNotes('');
                            setCopied(false);
                          }}
                          className="text-[10px] text-charcoal-450 uppercase tracking-widest font-bold underline hover:text-champagne-600 transition-colors block mx-auto"
                        >
                          Back To form
                        </button>
                      </div>

                    </motion.div>
                  )}
                </AnimatePresence>

              </div>

            </div>

          </div>
        </section>

      </main>

      {/* LUXURY SLATE MINIMAL FOOTER */}
      <footer className="bg-charcoal-950 text-champagne-100 py-16 px-6 border-t border-charcoal-900 text-left">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          
          {/* Column 1 Logo & Description */}
          <div className="space-y-4 md:col-span-2">
            <span className="font-serif text-lg tracking-widest font-bold text-white block">
              HOMETECH <span className="text-champagne-400 text-xs font-light tracking-wide font-sans block mt-0.5">AUTOMATION</span>
            </span>
            <p className="text-xs text-charcoal-450 font-light leading-relaxed max-w-sm">
              We design intelligent home automation, tunable lighting, low-voltage switches, and invisible acoustics. Our signature focus on cabling saves heavy expenses, delivering absolute reliability with structural elegance.
            </p>
            <div className="text-xs text-charcoal-500 font-light">
              Nagpur, Maharashtra, India.
            </div>
          </div>

          {/* Column 2 Quick links scroll actions */}
          <div className="space-y-3 text-xs">
            <h4 className="text-[10px] tracking-widest uppercase font-bold text-champagne-400">Navigation</h4>
            <div className="flex flex-col space-y-2 text-charcoal-450 font-light">
              <button onClick={() => scrollToId('hero-section')} className="text-left hover:text-white transition-colors cursor-pointer">Back to Top</button>
              <button onClick={() => scrollToId('curated-portfolio')} className="text-left hover:text-white transition-colors cursor-pointer">Ambience Showcase</button>
              <button onClick={() => scrollToId('premium-services')} className="text-left hover:text-white transition-colors cursor-pointer">The Services</button>
              <button onClick={() => scrollToId('interactive-planner')} className="text-left hover:text-white transition-colors cursor-pointer">System Profile Planner</button>
              <button onClick={() => scrollToId('client-stories')} className="text-left hover:text-white transition-colors cursor-pointer">Authentic Patrons</button>
              <button onClick={() => scrollToId('contact-reserve')} className="text-left hover:text-white transition-colors cursor-pointer">Consultation Desk</button>
            </div>
          </div>

          {/* Column 3 Active contacts clickables */}
          <div className="space-y-3 text-xs">
            <h4 className="text-[10px] tracking-widest uppercase font-bold text-champagne-400">Direct Actions</h4>
            <div className="flex flex-col space-y-2 text-charcoal-450 font-light">
              <a href="tel:+917709464471" className="hover:text-white transition-colors block">Call +91 77094 64471</a>
              <a href="https://maps.app.goo.gl/7ULmcEEQjtPgaCjA8" target="_blank" rel="noreferrer" className="hover:text-white transition-colors block">Google Maps Profile</a>
              <span className="text-charcoal-650 block text-[10px] mt-2 tracking-wider">
                Founder: Arham <br />
                Established 2024 Nagpur
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Metadata details */}
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-charcoal-900/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-charcoal-550 font-light">
          <div>
            &copy; {new Date().getFullYear()} Hometech Automation Nagpur. All rights reserved. Code licensed under Apache-2.0.
          </div>
          <div className="flex gap-4">
            <span className="hover:text-white">Invisible Styling</span>
            <span>•</span>
            <span className="hover:text-white">Honest Cable Engineering</span>
            <span>•</span>
            <span className="hover:text-white">Circadian Presets</span>
          </div>
        </div>

      </footer>

    </div>
  );
}
