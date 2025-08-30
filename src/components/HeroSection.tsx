import { Mail, Github, Linkedin, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
const headshotImage = "/headshot.jpg"; 

const HeroSection = () => {
  const handleDownloadResume = () => {
    console.log('Download button clicked, opening resume...');
    window.open('/resume.pdf', '_blank');
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center hero-gradient">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="space-y-6">
            <div className="mx-auto w-48 h-48 rounded-full overflow-hidden border-4 border-primary-foreground/20 animate-float">
              <img 
                src={headshotImage} 
                alt="Tenzin Uden - Computer Science Student"
                className="w-full h-full object-cover hover:scale-110 transition-smooth"
              />
            </div>
            
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground animate-pulse-slow">
                Hi, I'm Tenzin Uden
              </h1>
              <p className="text-xl sm:text-2xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
                A Computer Science and Economics student at Whitman College</p>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              I have international experience across the U.S., Australia, Bhutan, and Cambodia, 
              and I enjoy building scalable software, teaching others, and contributing to impactful projects.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="mailto:udent@whitman.edu" 
                className="flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-lg text-primary-foreground hover:bg-primary-foreground/20 transition-smooth hover:scale-105"
              >
                <Mail className="h-4 w-4" />
                <span className="text-sm">udent@whitman.edu</span>
              </a>
              
              <a 
                href="https://github.com/Tenzinyo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-lg text-primary-foreground hover:bg-primary-foreground/20 transition-smooth hover:scale-105"
              >
                <Github className="h-4 w-4" />
                <span className="text-sm">GitHub</span>
              </a>
              
              <a 
                href="https://www.linkedin.com/in/tenzin-uden" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-lg text-primary-foreground hover:bg-primary-foreground/20 transition-smooth hover:scale-105"
              >
                <Linkedin className="h-4 w-4" />
                <span className="text-sm">LinkedIn</span>
              </a>
            </div>

            <div className="pt-4">
              <Button 
                onClick={handleDownloadResume}
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-medium px-8 py-3 hover:scale-105 transition-smooth animate-bounce-slow"
              >
                <Download className="h-4 w-4 mr-2" />
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;