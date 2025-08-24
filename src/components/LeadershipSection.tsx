import { Users, DollarSign, Calendar, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const LeadershipSection = () => {
  const leadership = {
    role: "Finance Committee Member",
    organization: "Associated Students of Whitman College",
    period: "Jan 2024 - May 2024",
    responsibilities: [
      "Helped manage $800,000 annual budget for student activities and organizations",
      "Introduced mid-year review system to improve financial transparency",
      "Enhanced support systems for 1,500+ students across campus",
      "Collaborated with student government to optimize resource allocation"
    ],
    impact: [
      { metric: "$800K", label: "Budget Managed" },
      { metric: "1,500+", label: "Students Served" },
      { metric: "100%", label: "Transparency Improvement" },
      { metric: "5", label: "Months of Service" }
    ]
  };

  return (
    <section id="leadership" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Leadership & Activities
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Student leadership experience in financial management and organizational improvement
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="card-shadow hover:card-shadow-hover transition-smooth">
            <CardContent className="p-8">
              <div className="space-y-8">
                {/* Header */}
                <div className="text-center space-y-4">
                  <div className="flex items-center justify-center gap-2">
                    <Users className="h-6 w-6 text-primary" />
                    <h3 className="text-2xl font-semibold text-foreground">
                      {leadership.role}
                    </h3>
                  </div>
                  <p className="text-lg font-medium text-primary">
                    {leadership.organization}
                  </p>
                  <div className="flex items-center justify-center gap-1 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{leadership.period}</span>
                  </div>
                </div>

                {/* Impact Metrics */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                  {leadership.impact.map((item, index) => (
                    <div key={index} className="text-center space-y-2">
                      <div className="text-2xl lg:text-3xl font-bold text-primary">
                        {item.metric}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {item.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Responsibilities */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    <h4 className="text-lg font-semibold text-foreground">
                      Key Responsibilities & Achievements
                    </h4>
                  </div>
                  <ul className="space-y-3">
                    {leadership.responsibilities.map((responsibility, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground leading-relaxed">
                          {responsibility}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;