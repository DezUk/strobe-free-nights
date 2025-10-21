import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-nightclub.jpg";

const HeroSection = () => {
  const scrollToPetition = () => {
    document.getElementById('petition')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="container relative z-10 mx-auto px-4 py-20 text-center">
        <h1 className="mb-6 text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
          Make UK Nightlife
          <span className="block bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
            Safe for Everyone
          </span>
        </h1>
        
        <p className="mb-8 text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
          Join our campaign to introduce strobe-free club nights across the UK. 
          Help protect people with epilepsy, migraines, and sensory conditions.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg"
            onClick={scrollToPetition}
            className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all"
          >
            Sign the Petition
          </Button>
          <Button 
            size="lg"
            variant="outline"
            className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 text-lg px-8 py-6"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
