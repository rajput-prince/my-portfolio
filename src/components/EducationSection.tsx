import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const EducationSection = () => {
  const education = [
    {
      degree: 'Masters in Computer Application (Data Science)',
      institution: 'Dev Sanskriti Vishwavidyalaya',
      duration: '2023 – 2025',
      type: 'Master\'s Degree',
      status: 'Completed',
    },
    {
      degree: 'B.Sc. Applied Mathematics',
      institution: 'Dev Sanskriti Vishwavidyalaya',
      duration: '2019 – 2022',
      type: 'Bachelor\'s Degree',
      status: 'Completed',
    },
    {
      degree: 'Senior Secondary',
      institution: 'Jawahar Navodaya Vidyalaya',
      duration: '2018 – 2019',
      type: 'High School',
      status: 'Completed',
    },
    {
      degree: 'Secondary',
      institution: 'Jawahar Navodaya Vidyalaya',
      duration: '2016 – 2017',
      type: 'Secondary',
      status: 'Completed',
    },
  ];

  const certifications = [
    {
      title: 'Python for Data Science',
      issuer: 'Cognitive Class',
      year: '2025',
      category: 'Data Science',
    },
    {
      title: 'Deloitte Data Analytics Job Simulation',
      issuer: 'Deloitte',
      year: '2025',
      category: 'Analytics',
    },
    {
      title: 'Data Science & ML Basic to Advanced',
      issuer: 'Udemy',
      year: '2024',
      category: 'Machine Learning',
    },
    {
      title: 'Complete Python',
      issuer: 'Udemy',
      year: '2024',
      category: 'Programming',
    },
    {
      title: 'Programming with C++',
      issuer: 'Udemy',
      year: '2023',
      category: 'Programming',
    },
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      'Data Science': 'bg-blue-500/10 text-blue-600 border-blue-200',
      'Analytics': 'bg-green-500/10 text-green-600 border-green-200',
      'Machine Learning': 'bg-purple-500/10 text-purple-600 border-purple-200',
      'Programming': 'bg-orange-500/10 text-orange-600 border-orange-200',
    };
    return colors[category] || 'bg-gray-500/10 text-gray-600 border-gray-200';
  };

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Education & Certifications
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Academic foundation and continuous learning in data science and technology
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Education Timeline */}
            <div className="space-y-8 animate-fade-up">
              <h3 className="text-2xl font-semibold flex items-center gap-3 mb-8">
                <GraduationCap className="text-primary" />
                Academic Journey
              </h3>
              
              {education.map((edu, index) => (
                <Card 
                  key={index} 
                  className="shadow-medium hover:shadow-strong transition-all duration-300 bg-gradient-card border-0"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <CardTitle className="text-lg text-gradient">
                          {edu.degree}
                        </CardTitle>
                        <CardDescription className="font-medium">
                          {edu.institution}
                        </CardDescription>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <Badge 
                          variant={edu.status === 'Current' ? 'default' : 'secondary'}
                          className="text-xs"
                        >
                          {edu.status}
                        </Badge>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Calendar size={12} />
                          {edu.duration}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Badge variant="outline" className="text-xs">
                      {edu.type}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Certifications */}
            <div className="space-y-8 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-2xl font-semibold flex items-center gap-3 mb-8">
                <Award className="text-accent" />
                Professional Certifications
              </h3>
              
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <Card 
                    key={index} 
                    className="shadow-soft hover:shadow-medium transition-all duration-300 bg-gradient-card border-0"
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <h4 className="font-semibold text-sm mb-1">
                            {cert.title}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {cert.issuer}
                          </p>
                        </div>
                        <div className="flex flex-col items-end gap-2">
                          <Badge 
                            variant="outline" 
                            className={`text-xs border ${getCategoryColor(cert.category)}`}
                          >
                            {cert.category}
                          </Badge>
                          <span className="text-xs text-muted-foreground">
                            {cert.year}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;