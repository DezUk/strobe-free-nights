import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

const PetitionSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    postcode: "",
    updates: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thank you for signing!",
      description: "Your voice matters. We'll keep you updated on our progress.",
    });
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      postcode: "",
      updates: false
    });
  };

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

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name *</Label>
                <Input
                  id="firstName"
                  required
                  value={formData.firstName}
                  onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                  className="bg-background"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name *</Label>
                <Input
                  id="lastName"
                  required
                  value={formData.lastName}
                  onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                  className="bg-background"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="bg-background"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="postcode">UK Postcode *</Label>
              <Input
                id="postcode"
                required
                placeholder="SW1A 1AA"
                value={formData.postcode}
                onChange={(e) => setFormData({...formData, postcode: e.target.value})}
                className="bg-background"
              />
            </div>

            <div className="flex items-start space-x-2">
              <Checkbox
                id="updates"
                checked={formData.updates}
                onCheckedChange={(checked) => setFormData({...formData, updates: checked as boolean})}
              />
              <label
                htmlFor="updates"
                className="text-sm text-muted-foreground leading-relaxed cursor-pointer"
              >
                I'd like to receive updates about this campaign and related accessibility initiatives
              </label>
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground text-lg py-6"
            >
              Sign the Petition
            </Button>

            <p className="text-sm text-muted-foreground text-center">
              By signing, you agree to our privacy policy. We'll never share your data.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default PetitionSection;
