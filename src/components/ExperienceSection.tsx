import { Calendar, MapPin, Building } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const ExperienceSection = () => {
  const experiences = [
    {
      company: "Dell Technologies",
      position: "Software Engineering Intern",
      location: "Austin, TX",
      period: "May 2025 - Aug 2025",
      achievements: [
        "Automated cryptographic inventory on PowerScale OneFS",
        "Streamlined audit-compliant reports"
      ]
    },
    {
      company: "HiddenLayer",
      position: "Remote Software Engineering Intern",
      location: "Remote",
      period: "May 2024 - Jul 2024",
      type: "Completed",
      achievements: [
        "Increased Go code coverage from 55% → 65%",
        "Improved backend development practices",
        "Contributed to AI security platform development"
      ]
    },
    {
      company: "Druk Holdings & Investments",
      position: "AI/ML Intern",
      location: "Thimphu, Bhutan",
      period: "Aug 2023",
      type: "Completed",
      achievements: [
        "Co-developed YOLOv5 traffic monitoring model with 87% precision",
        "Implemented computer vision solutions for urban planning",
        "Collaborated with international development team"
      ]
    },
    {
      company: "Kirirom Institute of Technology",
      position: "Software Intern & Code Camp Facilitator",
      location: "Phnom Penh, Cambodia",
      period: "Apr 2023 - Aug 2023",
      type: "Completed",
      achievements: [
        "Taught Python programming to 10+ students", 
        "Led 5 project builds with hands-on mentoring",
        "Achieved >90% student pass rate",
        "Developed curriculum for beginner programmers"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 section-gradient">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Work Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional experience in software engineering, AI/ML, and technical education
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="card-shadow hover:card-shadow-hover transition-smooth">
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Building className="h-5 w-5 text-primary" />
                      <h3 className="text-xl font-semibold text-foreground">
                        {exp.company}
                      </h3>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        exp.type === 'Upcoming' 
                          ? 'bg-accent text-accent-foreground' 
                          : 'bg-primary/10 text-primary'
                      }`}>
                        {exp.type}
                      </span>
                    </div>
                    
                    <p className="text-lg font-medium text-primary">
                      {exp.position}
                    </p>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-medium text-foreground">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;