import { Code, Database, Brain, Globe } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming & Tools",
      icon: <Code className="h-6 w-6" />,
      skills: [
        "Python", "SQL", "Go", "Java", "HTML", "Assembly", 
        "Haskell", "JavaScript", "GitHub (rebasing, pull requests, merging)"
      ]
    },
    {
      title: "Technologies",
      icon: <Database className="h-6 w-6" />,
      skills: [
        "Data visualization", "Cryptography inventory", "REST APIs", 
        "Linux", "CLI", "Virtual Machines", "WSL", "TMUX", "JIRA", "Confluence"
      ]
    },
    {
      title: "AI/ML",
      icon: <Brain className="h-6 w-6" />,
      skills: [
        "Deep learning", "YOLOv5", "Roboflow", 
        "Data augmentation", "Model training"
      ]
    },
    {
      title: "Languages",
      icon: <Globe className="h-6 w-6" />,
      skills: [
        "Dzongkha", "English", "Japanese", "Hindi", "Nepali"
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technical proficiencies and multilingual capabilities gained through diverse experiences
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="card-shadow hover:card-shadow-hover transition-smooth">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <div className="text-primary">
                    {category.icon}
                  </div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full border border-primary/20 hover:bg-primary/20 transition-fast"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;