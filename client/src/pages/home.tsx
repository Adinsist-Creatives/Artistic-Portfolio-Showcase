import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Paintbrush, 
  Palette, 
  Monitor, 
  Scroll, 
  Hammer, 
  Menu, 
  X, 
  ArrowRight, 
  Instagram, 
  Twitter, 
  Linkedin, 
  Mail 
} from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

import logo from "@/assets/logo.png";
import heroBg from "@/assets/hero-background.png";
import projectCalligraphy from "@/assets/project-calligraphy.png";
import projectMural from "@/assets/project-mural.png";
import projectPainting from "@/assets/project-painting.png";
import projectSculpture from "@/assets/project-sculpture.png";
import projectUi from "@/assets/project-ui.png";

const CATEGORIES = [
  { id: "all", label: "All Works" },
  { id: "calligraphy", label: "Calligraphy" },
  { id: "murals", label: "Murals" },
  { id: "paintings", label: "Paintings" },
  { id: "sculpture", label: "Sculpture" },
  { id: "ui", label: "UX / UI" },
];

const PROJECTS = [
  {
    id: 1,
    title: "Eternal Flow",
    category: "calligraphy",
    image: projectCalligraphy,
    year: "2024",
    description: "Traditional ink on rice paper exploring the concept of impermanence.",
  },
  {
    id: 2,
    title: "Urban Rhythms",
    category: "murals",
    image: projectMural,
    year: "2023",
    description: "Large-scale public installation in downtown metro district.",
  },
  {
    id: 3,
    title: "Blue Melancholy",
    category: "paintings",
    image: projectPainting,
    year: "2024",
    description: "Oil on canvas study of emotional landscapes.",
  },
  {
    id: 4,
    title: "Silence in Stone",
    category: "sculpture",
    image: projectSculpture,
    year: "2023",
    description: "Minimalist marble form exhibited at the Modern Art Gallery.",
  },
  {
    id: 5,
    title: "Fintech Dashboard",
    category: "ui",
    image: projectUi,
    year: "2025",
    description: "Clean, data-driven interface for a next-gen banking application.",
  },
  {
    id: 6,
    title: "Zenith Identity",
    category: "ui",
    image: "https://images.unsplash.com/photo-1626785774573-4b799314346d?q=80&w=3270&auto=format&fit=crop", // Stock fallback for variety
    year: "2024",
    description: "Brand identity and digital presence for a luxury wellness center.",
  },
  {
    id: 7,
    title: "Crimson Tide",
    category: "paintings",
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=3145&auto=format&fit=crop",
    year: "2023",
    description: "Acrylic texture study focusing on movement and energy.",
  },
];

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const filteredProjects = activeCategory === "all" 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeCategory);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-foreground selection:text-background">
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 mix-blend-difference text-white">
        <Link href="/">
          <a className="flex items-center gap-3 hover:opacity-70 transition-opacity">
            <img src={logo} alt="Logo" className="w-8 h-8 invert" />
            <span className="text-2xl font-serif font-bold tracking-tighter">
              Adinsist.Creatives
            </span>
          </a>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 font-medium text-sm tracking-widest uppercase">
          <button onClick={() => scrollToSection("about")} className="hover:underline underline-offset-4">About</button>
          <button onClick={() => scrollToSection("gallery")} className="hover:underline underline-offset-4">Gallery</button>
          <button onClick={() => scrollToSection("contact")} className="hover:underline underline-offset-4">Contact</button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background flex flex-col items-center justify-center gap-8 md:hidden"
          >
            <button onClick={() => scrollToSection("about")} className="text-3xl font-serif">About</button>
            <button onClick={() => scrollToSection("gallery")} className="text-3xl font-serif">Gallery</button>
            <button onClick={() => scrollToSection("contact")} className="text-3xl font-serif">Contact</button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <header className="relative h-screen flex flex-col justify-center px-6 md:px-12 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="Artist Studio" 
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 max-w-4xl pt-20">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-serif text-5xl md:text-8xl lg:text-9xl text-white leading-[0.9]"
          >
            Where Digital <br />
            <span className="italic font-light opacity-80">Meets Material</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-8 text-white/80 max-w-lg text-lg md:text-xl font-light"
          >
            A multidisciplinary portfolio showcasing the fusion of traditional craftsmanship and modern interface design.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-12 left-6 md:left-12 z-10 text-white/60 text-sm flex items-center gap-4"
        >
          <span className="uppercase tracking-widest">Scroll to Explore</span>
          <div className="w-12 h-[1px] bg-white/40" />
        </motion.div>
      </header>

      {/* About / Philosophy Section */}
      <section id="about" className="py-24 md:py-32 px-6 md:px-12 bg-background">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-serif text-4xl md:text-6xl mb-8 leading-tight">
              Art is not just what you see, but what you <span className="text-muted-foreground italic">make others see.</span>
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground font-light leading-relaxed">
              <p>
                My work exists at the intersection of tangible reality and digital potential. With a background rooted in classical sculpture and calligraphy, I bring a tactile sensibility to modern UX/UI design.
              </p>
              <p>
                Whether I am painting a 40-foot mural or designing a pixel-perfect interface, my philosophy remains the same: clarity, emotion, and purpose.
              </p>
            </div>
            
            <div className="mt-12 grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <Paintbrush className="w-6 h-6 mb-2 opacity-60" />
                <h3 className="font-medium uppercase tracking-widest text-sm">Fine Art</h3>
                <p className="text-sm text-muted-foreground">Oil, Acrylic, Charcoal</p>
              </div>
              <div className="space-y-2">
                <Monitor className="w-6 h-6 mb-2 opacity-60" />
                <h3 className="font-medium uppercase tracking-widest text-sm">Digital Product</h3>
                <p className="text-sm text-muted-foreground">UI/UX, Web, Mobile</p>
              </div>
              <div className="space-y-2">
                <Scroll className="w-6 h-6 mb-2 opacity-60" />
                <h3 className="font-medium uppercase tracking-widest text-sm">Calligraphy</h3>
                <p className="text-sm text-muted-foreground">Japanese, Western, Custom</p>
              </div>
              <div className="space-y-2">
                <Hammer className="w-6 h-6 mb-2 opacity-60" />
                <h3 className="font-medium uppercase tracking-widest text-sm">Sculpture</h3>
                <p className="text-sm text-muted-foreground">Clay, Stone, Mixed Media</p>
              </div>
            </div>
          </div>
          
          <div className="relative aspect-[3/4] bg-muted overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=3271&auto=format&fit=crop" 
              alt="Artist Portrait" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 px-6 md:px-12 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <h2 className="font-serif text-5xl md:text-7xl">Selected Works</h2>
            
            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2 md:gap-4">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={cn(
                    "px-4 py-2 text-sm uppercase tracking-widest border transition-all duration-300",
                    activeCategory === cat.id 
                      ? "border-foreground bg-foreground text-background" 
                      : "border-transparent text-muted-foreground hover:text-foreground"
                  )}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={project.id}
                  className="group relative cursor-pointer"
                >
                  <div className="aspect-[4/5] overflow-hidden bg-muted">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  
                  <div className="mt-4 flex justify-between items-start">
                    <div>
                      <h3 className="font-serif text-2xl group-hover:underline decoration-1 underline-offset-4 decoration-muted-foreground/50">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">{project.category}</p>
                    </div>
                    <span className="text-sm font-mono text-muted-foreground/60">{project.year}</span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 md:py-32 px-6 md:px-12 bg-foreground text-background">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-serif text-5xl md:text-8xl mb-8">Let's Create Together</h2>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-12 font-light">
            I am currently open to commissions for murals, private collection paintings, and freelance UI/UX projects.
          </p>
          
          <Button 
            size="lg" 
            className="bg-white text-black hover:bg-white/90 text-lg px-8 py-6 rounded-none"
          >
            Get in Touch <ArrowRight className="ml-2 w-5 h-5" />
          </Button>

          <Separator className="my-16 bg-white/20" />

          <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-sm uppercase tracking-widest text-white/60">
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Instagram</a>
              <a href="#" className="hover:text-white transition-colors">Behance</a>
              <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            </div>
            <p>&copy; 2026 Adinsist Creatives Design . All Rights Reserved.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
