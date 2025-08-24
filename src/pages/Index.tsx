import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import EducationSection from '@/components/EducationSection';
import SkillsSection from '@/components/SkillsSection';
import ExperienceSection from '@/components/ExperienceSection';
import LeadershipSection from '@/components/LeadershipSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <section id="about" className="py-20 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">
              About Me
            </h2>
            <div className="prose prose-lg mx-auto text-muted-foreground">
              <p className="text-lg leading-relaxed">
                As a Computer Science and Economics student at Whitman College, I combine technical expertise 
                with analytical thinking to solve complex problems. My international experience across the U.S., 
                Australia, Bhutan, and Cambodia has given me a unique global perspective on technology and its 
                applications.
              </p>
              <p className="text-lg leading-relaxed mt-6">
                I'm passionate about building scalable software solutions, exploring AI/ML applications, and 
                sharing knowledge through teaching and mentorship. Whether working on cryptographic automation 
                at Dell Technologies or developing traffic monitoring systems in Bhutan, I bring dedication 
                and innovation to every project.
              </p>
            </div>
          </div>
        </section>
        <EducationSection />
        <SkillsSection />
        <ExperienceSection />
        <LeadershipSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;
