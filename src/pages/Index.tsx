import Hero from "@/components/Hero";
import ProgramOverview from "@/components/ProgramOverview";
import CertificationBenefits from "@/components/CertificationBenefits";
import InstructorShowcase from "@/components/InstructorShowcase";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <ProgramOverview />
      <CertificationBenefits />
      <InstructorShowcase />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
