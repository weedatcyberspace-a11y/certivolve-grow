import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Award, Users, Clock } from "lucide-react";

const ProgramOverview = () => {
  const programs = [
    {
      title: "Data Analytics Certification",
      description: "Master data analysis, visualization, and reporting with hands-on projects using industry-standard tools.",
      duration: "12 weeks",
      level: "Intermediate",
      students: "2,400+",
      icon: BookOpen,
      skills: ["Python", "SQL", "Tableau", "Power BI"],
    },
    {
      title: "Digital Marketing Professional",
      description: "Comprehensive training in SEO, social media, PPC, and content marketing strategies.",
      duration: "8 weeks", 
      level: "Beginner",
      students: "3,200+",
      icon: Award,
      skills: ["SEO", "Google Ads", "Analytics", "Content Strategy"],
    },
    {
      title: "Project Management Certification",
      description: "Learn agile methodologies, risk management, and leadership skills for successful project delivery.",
      duration: "10 weeks",
      level: "Advanced",
      students: "1,800+",
      icon: Users,
      skills: ["Agile", "Scrum", "Risk Management", "Leadership"],
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Choose Your <span className="text-gradient">Certification Path</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive programs are designed to take you from beginner to expert, 
            with real-world projects and industry mentorship.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <Card key={index} className="card-professional hover-lift p-6 h-full">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <program.icon className="h-12 w-12 text-primary" />
                  <Badge variant="outline" className="text-secondary border-secondary">
                    {program.level}
                  </Badge>
                </div>
                <CardTitle className="text-2xl text-foreground">{program.title}</CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {program.description}
                </p>
                
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {program.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    {program.students}
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">Key Skills:</h4>
                  <div className="flex flex-wrap gap-2">
                    {program.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="bg-primary/10 text-primary">
                        {skill}
                      </Badge>
                    ))}
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

export default ProgramOverview;