import { GraduationCap, MapPin, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const EducationSection = () => {
  const education = [
    {
      institution: "Whitman College",
      degree: "BA in Computer Science & Economics",
      location: "Walla Walla, WA",
      period: "Aug 2022 - May 2026",
      gpa: "3.85",
      status: "Current"
    },
    {
      institution: "University of Melbourne",
      degree: "Study Abroad Program",
      location: "Melbourne, Australia", 
      period: "Jul 2024 - Nov 2024",
      status: "Completed"
    }
  ];

  const coursework = [
    "Object-Oriented Programming",
    "Algorithms & Data Structures", 
    "Computer Architecture",
    "Cybersecurity",
    "Data Science"
  ];

  return (
    <section id="education" className="py-20 section-gradient">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Education
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Academic foundation in Computer Science and Economics with international experience
          </p>
        </div>

        <div className="grid gap-8">
          {education.map((edu, index) => (
            <Card key={index} className="card-shadow hover:card-shadow-hover transition-smooth">
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <GraduationCap className="h-5 w-5 text-primary" />
                      <h3 className="text-xl font-semibold text-foreground">
                        {edu.institution}
                      </h3>
                      {edu.status === "Current" && (
                        <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                          Current
                        </span>
                      )}
                    </div>
                    
                    <p className="text-lg font-medium text-primary">
                      {edu.degree}
                    </p>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{edu.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{edu.period}</span>
                      </div>
                      {edu.gpa && (
                        <div className="font-medium text-foreground">
                          GPA: {edu.gpa}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12">
          <Card className="card-shadow">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Relevant Coursework
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {coursework.map((course, index) => (
                  <div
                    key={index}
                    className="px-4 py-2 bg-accent/50 rounded-lg text-accent-foreground font-medium text-center"
                  >
                    {course}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;