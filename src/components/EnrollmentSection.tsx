import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star, Clock, Users, Award, BookOpen } from "lucide-react";

const EnrollmentSection = () => {
  const courses = [
    {
      title: "Data Analytics Certification",
      price: "KSH 1,999",
      originalPrice: "KSH 2,999",
      duration: "12 weeks",
      students: "2,400+",
      rating: 4.9,
      features: [
        "Python & SQL Training",
        "Tableau & Power BI",
        "Real-world Projects",
        "Career Support",
        "Lifetime Access",
        "Industry Certificate"
      ],
      popular: true
    },
    {
      title: "Digital Marketing Professional",
      price: "KSH 1,699",
      originalPrice: "KSH 2,499",
      duration: "8 weeks", 
      students: "3,200+",
      rating: 4.8,
      features: [
        "SEO & Content Strategy",
        "Google Ads & Analytics",
        "Social Media Marketing",
        "Campaign Management",
        "Portfolio Development",
        "Industry Certificate"
      ],
      popular: false
    },
    {
      title: "Project Management Certification",
      price: "KSH 2,199",
      originalPrice: "KSH 3,299",
      duration: "10 weeks",
      students: "1,800+",
      rating: 4.9,
      features: [
        "Agile & Scrum Methods",
        "Risk Management",
        "Leadership Skills",
        "Live Project Experience",
        "PMI Recognition",
        "Industry Certificate"
      ],
      popular: false
    }
  ];

  const handleEnrollment = (courseTitle: string, price: string) => {
    // Open PesaPal payment in a new window or modal
    const pesapalUrl = "https://store.pesapal.com/usarichesportal";
    window.open(pesapalUrl, '_blank', 'width=600,height=700,scrollbars=yes,resizable=yes');
  };

  return (
    <section className="py-20 bg-gradient-to-b from-muted/20 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Start Your Journey Today
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Choose your certification program and transform your career. 
            All courses are priced affordably under KSH 2,499.
          </p>
          <div className="inline-flex items-center gap-2 bg-success/10 text-success px-6 py-3 rounded-full">
            <CheckCircle className="h-5 w-5" />
            <span className="font-semibold">Limited Time Offer - Save up to 40%</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {courses.map((course, index) => (
            <Card key={index} className={`card-professional hover-lift relative overflow-hidden ${
              course.popular ? 'ring-2 ring-primary shadow-[var(--shadow-glow)]' : ''
            }`}>
              {course.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 text-sm font-bold">
                  <Star className="h-4 w-4 inline mr-1" />
                  MOST POPULAR
                </div>
              )}
              
              <CardHeader className="pb-4">
                <div className="space-y-4">
                  <CardTitle className="text-2xl text-foreground">{course.title}</CardTitle>
                  
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold">{course.rating}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{course.students}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{course.duration}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold text-primary">{course.price}</span>
                      <span className="text-lg text-muted-foreground line-through">{course.originalPrice}</span>
                    </div>
                    <Badge variant="outline" className="text-success border-success">
                      Save {parseInt(course.originalPrice.replace(/[^0-9]/g, '')) - parseInt(course.price.replace(/[^0-9]/g, ''))} KSH
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {course.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${course.popular ? 'btn-hero' : 'btn-secondary'} text-lg py-6`}
                  onClick={() => handleEnrollment(course.title, course.price)}
                >
                  Enroll Now - {course.price}
                </Button>
                
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">
                    💳 Secure payment via PesaPal | 🔒 30-day money-back guarantee
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center space-y-6">
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">Payment Options</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-center justify-center gap-3">
                <Award className="h-6 w-6 text-primary" />
                <span className="font-semibold">M-Pesa</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Award className="h-6 w-6 text-primary" />
                <span className="font-semibold">Airtel Money</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Award className="h-6 w-6 text-primary" />
                <span className="font-semibold">Bank Transfer</span>
              </div>
            </div>
          </div>

          {/* PesaPal Embed Option */}
          <div className="bg-muted/20 rounded-xl p-6 max-w-2xl mx-auto">
            <h4 className="text-lg font-semibold text-foreground mb-4">Direct Payment Portal</h4>
            <iframe 
              width="100%" 
              height="400" 
              src="https://store.pesapal.com/embed-code?pageUrl=https://store.pesapal.com/usarichesportal" 
              className="border-0 rounded-lg"
              title="PesaPal Payment Portal"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnrollmentSection;