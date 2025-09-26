import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, TrendingUp, Globe, Shield } from "lucide-react";

const CertificationBenefits = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Career Advancement",
      description: "87% of our graduates report career advancement within 6 months of certification."
    },
    {
      icon: Globe,
      title: "Global Recognition",
      description: "Industry-standard certifications recognized by leading companies worldwide."
    },
    {
      icon: Shield,
      title: "Verified Credentials",
      description: "Blockchain-verified certificates with tamper-proof digital badges."
    },
    {
      icon: CheckCircle,
      title: "Lifetime Access",
      description: "Keep your certification current with free updates and continuing education."
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Why Our <span className="text-gradient">Certifications</span> Matter
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            More than just a certificate - it's your gateway to professional excellence 
            and career transformation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="card-professional hover-lift text-center p-8">
              <CardContent className="space-y-4">
                <div className="flex justify-center">
                  <div className="h-16 w-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 bg-success/10 text-success px-6 py-3 rounded-full">
            <CheckCircle className="h-5 w-5" />
            <span className="font-semibold">30-Day Money-Back Guarantee</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationBenefits;