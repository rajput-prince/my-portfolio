import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, Linkedin, Github, MapPin, Send } from 'lucide-react';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'rajputprince4320@gmail.com',
      href: 'mailto:rajputprince4320@gmail.com',
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 6398833237',
      href: 'tel:+916398833237',
      color: 'text-green-500',
      bgColor: 'bg-green-500/10',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/prince-rajput',
      href: 'https://linkedin.com/in/prince-rajput',
      color: 'text-blue-600',
      bgColor: 'bg-blue-600/10',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/rajput-prince',
      href: 'https://github.com/rajput-prince',
      color: 'text-gray-700',
      bgColor: 'bg-gray-700/10',
    },
  ];

  const activities = [
    {
      title: 'ZeroT20 Mathematical Fest',
      description: 'Organized to simplify math for non-math students',
      icon: '🎯',
    },
    {
      title: 'Yoga Conference (AIIMS Rishikesh)',
      description: 'Part of technical team',
      icon: '🧘',
    },
    {
      title: 'Scientific Spirituality Conference',
      description: 'Technical team member',
      icon: '🔬',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Let's Connect
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Ready to collaborate on exciting data science projects? Let's discuss how we can work together
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-2 space-y-8 animate-fade-up">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {contactInfo.map((contact, index) => {
                    const IconComponent = contact.icon;
                    return (
                      <Card 
                        key={index} 
                        className="shadow-medium hover:shadow-strong transition-all duration-300 bg-gradient-card border-0 group cursor-pointer"
                      >
                        <a href={contact.href} target={contact.href.startsWith('http') ? '_blank' : '_self'} rel="noopener noreferrer">
                          <CardContent className="p-6">
                            <div className="flex items-center gap-4">
                              <div className={`w-12 h-12 rounded-xl ${contact.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                                <IconComponent className={`w-6 h-6 ${contact.color}`} />
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="font-medium text-foreground group-hover:text-primary transition-smooth">
                                  {contact.label}
                                </p>
                                <p className="text-sm text-muted-foreground truncate">
                                  {contact.value}
                                </p>
                              </div>
                            </div>
                          </CardContent>
                        </a>
                      </Card>
                    );
                  })}
                </div>
              </div>

              {/* Call to Action */}
              <Card className="shadow-medium bg-gradient-primary border-0 text-primary-foreground">
                <CardContent className="p-8 text-center">
                  <Send className="w-12 h-12 mx-auto mb-4 opacity-90" />
                  <h3 className="text-xl font-semibold mb-2">Ready to Start a Project?</h3>
                  <p className="mb-6 opacity-90">
                    I'm always excited to work on innovative data science projects and collaborate with like-minded professionals.
                  </p>
                  <Button 
                    variant="secondary" 
                    size="lg"
                    className="bg-white/10 text-white border-white/20 hover:bg-white/20 hover:border-white/30"
                    asChild
                  >
                    <a href="mailto:rajputprince4320@gmail.com">
                      Send Me an Email
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Activities & Interests */}
            <div className="space-y-8 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <div>
                <h3 className="text-2xl font-semibold mb-6">Activities & Interests</h3>
                <div className="space-y-4">
                  {activities.map((activity, index) => (
                    <Card 
                      key={index} 
                      className="shadow-soft hover:shadow-medium transition-all duration-300 bg-gradient-card border-0"
                    >
                      <CardContent className="p-4">
                        <div className="flex items-start gap-3">
                          <span className="text-2xl">{activity.icon}</span>
                          <div>
                            <h4 className="font-semibold text-sm mb-1">
                              {activity.title}
                            </h4>
                            <p className="text-xs text-muted-foreground">
                              {activity.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <Card className="shadow-soft bg-accent/5 border-accent/20">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-accent" />
                    Interests
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                      Data Science research
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                      AI applications
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                      Community events
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                      Analytics tools exploration
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;