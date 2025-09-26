import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-training.jpg";

const Hero = () => {
  return (
    <section className="hero-bg text-white py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Master Your Skills with 
                <span className="block text-secondary-light">Professional Certification</span>
              </h1>
              <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed">
                Transform your career with industry-recognized training programs designed by experts. 
                Gain the skills and credentials that matter.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-hero text-lg">
                Start Your Journey
              </Button>
              <Button className="btn-secondary text-lg">
                View Programs
              </Button>
            </div>
            
            <div className="flex items-center gap-8 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary-light">10K+</div>
                <div className="text-blue-200">Certified Professionals</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary-light">95%</div>
                <div className="text-blue-200">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary-light">24/7</div>
                <div className="text-blue-200">Expert Support</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src={heroImage} 
              alt="Professional training environment with modern technology"
              className="rounded-2xl shadow-2xl hover-lift w-full"
            />
            <div className="absolute -bottom-6 -right-6 bg-success text-white p-4 rounded-xl shadow-xl">
              <div className="text-2xl font-bold">Industry Certified</div>
              <div className="text-success-light">Globally Recognized</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;