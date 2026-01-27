import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Database, BarChart3, Lightbulb, Users, TrendingUp } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      skills: ['Python', 'C++', 'HTML', 'CSS', 'Javascript'],
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
    },
    {
      title: 'Databases',
      icon: Database,
      skills: ['MySQL', 'MongoDB'],
      color: 'text-green-500',
      bgColor: 'bg-green-500/10',
    },
    {
      title: 'Libraries & Frameworks',
      icon: BarChart3,
      skills: ['NumPy', 'Pandas', 'Matplotlib', 'Seaborn', 'Flask', 'TensorFlow', 'Keras','React JS'],
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10',
    },
  ];

  const tools = [
    'Power BI', 'Tableau', 'Git/GitHub', 'VS Code', 'Jupyter', 'Google Colab', 'Kaggle'
  ];

  const softSkills = [
    {
      name: 'Problem-solving',
      icon: Lightbulb,
      description: 'Analytical approach to complex challenges'
    },
    {
      name: 'Team Collaboration',
      icon: Users,
      description: 'Effective teamwork and communication'
    },
    {
      name: 'Analytical Thinking',
      icon: TrendingUp,
      description: 'Data-driven decision making'
    },
    {
      name: 'Continuous Learning',
      icon: BarChart3,
      description: 'Always expanding knowledge and skills'
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Technical Skills
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive expertise in data science, machine learning, and software development
            </p>
          </div>

          {/* Technical Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Card 
                  key={index} 
                  className="shadow-medium hover:shadow-strong transition-all duration-300 bg-gradient-card border-0 animate-fade-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardHeader className="text-center">
                    <div className={`w-16 h-16 rounded-2xl ${category.bgColor} flex items-center justify-center mx-auto mb-4`}>
                      <IconComponent className={`w-8 h-8 ${category.color}`} />
                    </div>
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {category.skills.map((skill, idx) => (
                        <Badge 
                          key={idx} 
                          variant="secondary" 
                          className="px-3 py-1 hover:bg-primary/10 hover:text-primary transition-smooth"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Tools Section */}
          <div className="mb-16 animate-fade-up">
            <h3 className="text-2xl font-semibold text-center mb-8">Tools & Platforms</h3>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {tools.map((tool, index) => (
                <Badge 
                  key={index} 
                  variant="outline" 
                  className="px-4 py-2 text-sm border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-smooth"
                >
                  {tool}
                </Badge>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="animate-fade-up">
            <h3 className="text-2xl font-semibold text-center mb-8">Core Competencies</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {softSkills.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <div 
                    key={index} 
                    className="text-center p-6 bg-gradient-card rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 border border-border/50"
                  >
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-6 h-6 text-accent" />
                    </div>
                    <h4 className="font-semibold mb-2">{skill.name}</h4>
                    <p className="text-sm text-muted-foreground">{skill.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;