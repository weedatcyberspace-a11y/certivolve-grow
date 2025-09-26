import Hero from "@/components/Hero";
import ProgramOverview from "@/components/ProgramOverview";
import CertificationBenefits from "@/components/CertificationBenefits";
import InstructorShowcase from "@/components/InstructorShowcase";
import EnrollmentSection from "@/components/EnrollmentSection";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <ProgramOverview />
      <CertificationBenefits />
      <InstructorShowcase />
      <EnrollmentSection />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
