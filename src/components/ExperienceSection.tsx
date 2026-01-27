import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Building } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      company: 'Course5 Intelligence Limited',
      role: 'Data Analyst & Machine Learning Intern',
      location: 'Remote',
      duration: 'Jan 2025 – Mar 2025',
      description: [
        'Automated newsletter generation and built data crawling templates for global regions (Brazil, LATAM, North America, and EMEA).',
        'Applied statistical analysis and data normalization to improve insights and automation.',
        'Strengthened expertise in Python, Pandas, Generative AI, and automation.',
      ],
      skills: ['Python', 'Pandas', 'Generative AI', 'Automation', 'Statistical Analysis'],
    },
    {
      company: 'Unified Mentor',
      role: 'Data Science Intern',
      location: 'Remote',
      duration: 'Apr 2025 – Jun 2025',
      description: [
        'Developed and evaluated real-world ML models using Python and TensorFlow.',
        'Worked on data preprocessing, statistical analysis, and predictive modeling.',
        'Enhanced skills in TensorFlow, Scikit-learn, and ML pipelines.',
      ],
      skills: ['Python', 'TensorFlow', 'Scikit-learn', 'Data Preprocessing', 'Predictive Modeling'],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Work Experience & Internships
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Hands-on experience in data science, machine learning, and automation across diverse projects
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card 
                key={index} 
                className="shadow-medium hover:shadow-strong transition-all duration-300 bg-gradient-card border-0 animate-fade-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="space-y-2">
                      <CardTitle className="text-xl md:text-2xl text-gradient">
                        {exp.role}
                      </CardTitle>
                      <CardDescription className="flex items-center gap-2 text-base">
                        <Building size={16} />
                        {exp.company}
                      </CardDescription>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        {exp.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={14} />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-2">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-foreground/80">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, idx) => (
                      <Badge key={idx} variant="secondary" className="px-3 py-1">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;