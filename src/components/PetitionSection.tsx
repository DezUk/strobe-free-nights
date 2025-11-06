import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const PetitionSection = () => {
  const changeOrgUrl = "https://www.change.org/the-influx";

  return (
    <section id="petition" className="py-20 bg-gradient-to-b from-muted to-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Sign the Petition
          </h2>
          <p className="text-xl text-muted-foreground">
            Add your voice to demand strobe-free club nights across the UK
          </p>
        </div>

        <div className="bg-card rounded-2xl shadow-medium p-8 md:p-12">
          <div className="mb-8 p-6 bg-primary/5 rounded-xl border border-primary/10">
            <h3 className="text-2xl font-bold mb-3 text-card-foreground">Our Demand</h3>
            <p className="text-muted-foreground leading-relaxed">
              We call on UK nightclub owners and venue operators to introduce regular strobe-free 
              nights, making nightlife accessible and safe for everyone, regardless of their health conditions.
            </p>
          </div>

          <div className="text-center space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              We've partnered with Change.org to collect signatures and amplify our message. 
              Your signature will help us reach decision-makers and create real change in UK nightlife.
            </p>

            <Button
              size="lg"
              asChild
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6 w-full sm:w-auto"
            >
              <a 
                href={changeOrgUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                Sign on Change.org
                <ExternalLink className="w-5 h-5" />
              </a>
            </Button>

            <p className="text-sm text-muted-foreground">
              You'll be redirected to Change.org to complete your signature
            </p>
          </div>

          <div className="mt-8 pt-8 border-t border-border">
            <h4 className="text-xl font-bold mb-4 text-card-foreground">Why Sign?</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold mt-1">•</span>
                <span>Help protect thousands of people from seizures and health issues</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold mt-1">•</span>
                <span>Make UK nightlife truly inclusive and accessible</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold mt-1">•</span>
                <span>Send a powerful message to venue owners and operators</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold mt-1">•</span>
                <span>Join a growing movement for safer nightlife</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PetitionSection;
