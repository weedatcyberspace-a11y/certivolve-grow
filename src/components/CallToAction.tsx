import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Clock, Users } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-20 hero-bg text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="container mx-auto px-6 relative z-10">
        <Card className="bg-white/10 backdrop-blur-sm border-white/20 max-w-4xl mx-auto">
          <CardContent className="p-12 text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold">
                Ready to Transform Your Career?
              </h2>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                Join thousands of professionals who have advanced their careers 
                with our industry-recognized certification programs.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-hero text-lg px-8 py-4">
                Start Free Trial
              </Button>
              <Button className="btn-secondary text-lg px-8 py-4">
                Schedule Consultation
              </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-8 pt-8 border-t border-white/20">
              <div className="flex items-center justify-center gap-3">
                <CheckCircle className="h-6 w-6 text-secondary-light" />
                <span className="font-semibold">7-Day Free Trial</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Clock className="h-6 w-6 text-secondary-light" />
                <span className="font-semibold">Flexible Schedule</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Users className="h-6 w-6 text-secondary-light" />
                <span className="font-semibold">Expert Mentorship</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CallToAction;