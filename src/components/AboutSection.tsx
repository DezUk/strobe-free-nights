import { AlertCircle, Heart, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  const issues = [
    {
      icon: AlertCircle,
      title: "Epilepsy Risk",
      description: "Strobe lights can trigger seizures in people with photosensitive epilepsy, affecting up to 3% of epilepsy patients."
    },
    {
      icon: Heart,
      title: "Health Impact",
      description: "Flashing lights can cause severe migraines, nausea, and disorientation in many clubbers, ruining their night out."
    },
    {
      icon: Users,
      title: "Exclusion",
      description: "Many people avoid nightclubs entirely due to strobe lights, missing out on social experiences and live music."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Why Strobe-Free Nights Matter
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Strobe lights in nightclubs pose serious health risks and exclude thousands from enjoying UK nightlife
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {issues.map((issue, index) => (
            <Card key={index} className="border-none shadow-medium hover:shadow-lg transition-all bg-card">
              <CardContent className="pt-8 pb-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="p-4 rounded-full bg-primary/10">
                    <issue.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-card-foreground">{issue.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{issue.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-card rounded-2xl p-8 md:p-12 shadow-medium">
          <h3 className="text-3xl font-bold mb-6 text-card-foreground">Our Solution</h3>
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            We're calling on UK nightclubs to designate regular strobe-free nights where people can enjoy 
            the same great music and atmosphere without the risk of seizures or health issues. This simple 
            change would make nightlife accessible to everyone.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Many venues already offer quiet hours or sensory-friendly events. Strobe-free nights are the 
            next logical step in making nightlife truly inclusive.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
