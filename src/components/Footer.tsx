import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border/50 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            
            <span>Built by Prince Rajput</span>
          </div>
          {/* <p className="text-sm text-muted-foreground">
            © 2025 Prince Rajput. All rights reserved.
          </p> */}
          <p className="text-xs text-muted-foreground/60">
            Data Science Enthusiast | Aspiring Data Analyst | ML & AI Developer
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;