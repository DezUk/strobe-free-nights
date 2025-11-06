import { Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-card-foreground">About Us</h3>
            <p className="text-muted-foreground leading-relaxed">
              We're a grassroots campaign dedicated to making UK nightlife accessible 
              and safe for everyone.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-card-foreground">Contact</h3>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Mail className="w-5 h-5" />
              <a href="mailto:info@theinflux.co.uk" className="hover:text-primary transition-colors">
                info@theinflux.co.uk
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-card-foreground">Support</h3>
            <p className="text-muted-foreground leading-relaxed">
              Share this campaign with friends, family, and on social media to help 
              spread awareness.
            </p>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-accent fill-accent" /> for a more inclusive UK nightlife
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            © 2025 Strobe-Free Nights UK. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
