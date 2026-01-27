import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink, Brain, Crop, Palette } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Tulsi Species Classification Using Deep Learning',
      description: 'Built a CNN-based model to classify Tulsi species with high accuracy. Deployed via Flask for real-time image upload and classification.',
      icon: Brain,
      technologies: ['Python', 'TensorFlow', 'Flask', 'Keras', 'CNN'],
      githubUrl: '#',
      features: [
        'High-accuracy CNN model for species classification',
        'Real-time image upload and processing',
        'Flask web application deployment',
        'User-friendly interface for classification'
      ],
    },
    {
      title: 'Crop Recommendation System Using Machine Learning',
      description: 'Flask web app recommending optimal crops based on soil and climate data. Implemented multiple ML models to maximize accuracy.',
      icon: Crop,
      technologies: ['Python', 'Scikit-learn', 'Flask', 'Machine Learning'],
      githubUrl: '#',
      features: [
        'Multi-model ML approach for optimal accuracy',
        'Soil and climate data analysis',
        'Interactive web interface',
        'Data-driven crop recommendations'
      ],
    },
    {
      title: 'Fashion Classification Using CNNs',
      description: 'Developed a deep learning model to classify fashion images (Fashion MNIST). Supports product tagging and personalized recommendations.',
      icon: Palette,
      technologies: ['Python', 'Keras', 'TensorFlow', 'Fashion MNIST'],
      githubUrl: '#',
      features: [
        'Fashion MNIST dataset classification',
        'Product tagging system',
        'Personalized recommendation engine',
        'Deep learning model optimization'
      ],
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured Projects
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Real-world applications of machine learning and deep learning technologies
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <Card 
                  key={index} 
                  className="group hover:shadow-strong transition-all duration-300 bg-gradient-card border-0 h-full animate-fade-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardHeader className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-smooth">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="opacity-0 group-hover:opacity-100 transition-all duration-300"
                          asChild
                        >
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github size={16} />
                          </a>
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="opacity-0 group-hover:opacity-100 transition-all duration-300"
                        >
                          <ExternalLink size={16} />
                        </Button>
                      </div>
                    </div>
                    <div>
                      <CardTitle className="text-xl mb-2 group-hover:text-primary transition-smooth">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-sm">
                        {project.description}
                      </CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-2">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full mt-1.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech, idx) => (
                        <Badge 
                          key={idx} 
                          variant="outline" 
                          className="text-xs px-2 py-1 border-primary/20 text-primary/80 hover:border-primary/40 transition-smooth"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;