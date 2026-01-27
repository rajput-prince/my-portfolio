import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Mail, Github, Linkedin, Download } from 'lucide-react';
import heroBackground from '@/assets/hero-background.jpg';
import profilePic from '@/assets/profile.jpeg';


const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${profilePic})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/75 to-background/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-up">
          {/* Badges */}
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            <Badge variant="secondary" className="px-3 py-1">
              Data Science Enthusiast
            </Badge>
            <Badge variant="secondary" className="px-3 py-1">
              Aspiring Data Analyst
            </Badge>
            <Badge variant="secondary" className="px-3 py-1">
              ML & AI Developer
            </Badge>
          </div>

          {/* Name & Title */}
          {/* <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gradient">
              Prince Rajput
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Data Science Enthusiast | Aspiring Data Analyst | ML & AI Developer
            </p>
          </div> */}

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">

          {/* NAME */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gradient leading-none whitespace-nowrap">
            Prince Rajput
          </h1>

          {/* OVAL IMAGE */}
          <div className="relative 
                          w-[100px] h-[120px] 
                          md:w-[100px] md:h-[120px] 
                          lg:w-[100px] lg:h-[120px]
                          rounded-full overflow-hidden 
                          border-4 border-primary/30 
                          shadow-xl 
                          bg-gradient-to-br from-primary/20 to-accent/20
                          flex-shrink-0">

            <img
              src={profilePic}
              alt="Prince Rajput"
              className="w-full h-full object-cover"
            />

            {/* Soft glow */}
            <div className="absolute inset-0 rounded-full ring-2 ring-primary/20" />
          </div>

        </div>

        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-center md:text-left">
          Data Science Enthusiast | Aspiring Data Analyst | ML & AI Developer
        </p>


          {/* Introduction */}
          <div className="max-w-3xl mx-auto">
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
              Hi, I'm Prince Rajput — passionate about data science, machine learning, and solving 
              real-world problems with AI. With hands-on experience in deep learning, data analysis, 
              and web-based ML solutions, I love turning raw data into meaningful insights and 
              practical applications. I'm eager to contribute my skills to impactful projects while 
              continuously learning and growing in the field of AI and Data Science.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={scrollToProjects}
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
            >
              View My Projects
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={scrollToContact}
              className="border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-smooth"
            >
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 pt-8">
            <a
              href="mailto:rajputprince4320@gmail.com"
              className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-smooth shadow-soft hover:shadow-medium"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a
              href="https://github.com/rajput-prince"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-smooth shadow-soft hover:shadow-medium"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/prince-rajput"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-smooth shadow-soft hover:shadow-medium"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Floating Animation Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-float" />
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-accent/10 rounded-full animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-secondary/10 rounded-full animate-float" style={{ animationDelay: '4s' }} />
    </section>
  );
};

export default HeroSection;