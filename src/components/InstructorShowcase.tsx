import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Award, BookOpen } from "lucide-react";

const InstructorShowcase = () => {
  const instructors = [
    {
      name: "Dr. Sarah Chen",
      title: "Lead Data Scientist",
      company: "Google",
      experience: "15+ years",
      specialization: "Machine Learning & Analytics",
      rating: 4.9,
      courses: 8,
      students: "12K+",
      image: "/api/placeholder/300/300"
    },
    {
      name: "Marcus Rodriguez",
      title: "Digital Marketing Director", 
      company: "Meta",
      experience: "12+ years",
      specialization: "Growth Marketing & Strategy",
      rating: 4.8,
      courses: 6,
      students: "18K+",
      image: "/api/placeholder/300/300"
    },
    {
      name: "Jennifer Kim",
      title: "Senior Project Manager",
      company: "Microsoft",
      experience: "10+ years", 
      specialization: "Agile & Scrum Methodologies",
      rating: 4.9,
      courses: 5,
      students: "9K+",
      image: "/api/placeholder/300/300"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-primary/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Learn From <span className="text-gradient">Industry Experts</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our instructors are practicing professionals from top companies, 
            bringing real-world experience directly to your learning journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {instructors.map((instructor, index) => (
            <Card key={index} className="card-professional hover-lift overflow-hidden">
              <CardContent className="p-8 text-center space-y-6">
                <div className="relative">
                  <div className="w-24 h-24 mx-auto bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">
                      {instructor.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <Badge className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-success">
                    {instructor.experience}
                  </Badge>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-foreground">{instructor.name}</h3>
                  <p className="text-primary font-semibold">{instructor.title}</p>
                  <p className="text-secondary font-medium">{instructor.company}</p>
                  <p className="text-muted-foreground">{instructor.specialization}</p>
                </div>
                
                <div className="flex justify-center items-center gap-1">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-bold text-foreground">{instructor.rating}</span>
                  <span className="text-muted-foreground">rating</span>
                </div>
                
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                  <div className="flex items-center justify-center gap-2">
                    <BookOpen className="h-4 w-4 text-primary" />
                    <span className="text-sm font-semibold">{instructor.courses} Courses</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Award className="h-4 w-4 text-secondary" />
                    <span className="text-sm font-semibold">{instructor.students} Students</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstructorShowcase;