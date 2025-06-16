import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden section-padding">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 container mx-auto container-padding text-center">
        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-2 mb-8 animate-fade-in hover:scale-105 hover:shadow-lg hover:border-blue-400 hover:bg-blue-100 transition-all duration-300 group cursor-pointer">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse group-hover:scale-125 transition-transform duration-300"></div>
            <span className="text-blue-700 text-sm font-medium group-hover:text-blue-800 transition-colors duration-300">
              Creative Digital Solutions
            </span>
          </div>

          {/* Hero Title */}
          <h1 className="hero-text text-gray-900 mb-6 animate-slide-up">
            Think Different.
            <br />
            <span className="text-gradient">Build Better.</span>
          </h1>

          {/* Hero Description */}
          <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed mb-12 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            We're <span className='font-bold text-black TheSeasons'>Luno Tech</span> — where innovation meets craftsmanship. Creating digital experiences that don't just work, but inspire.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 justify-center items-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button
              onClick={() => scrollToSection('services')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold px-6 py-2 rounded-full shadow-lg hover:scale-105 transition-transform duration-300 flex items-center gap-2"
            >
              Explore Our Work
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>

            <Button
              onClick={() => scrollToSection('about')}
              variant="outline"
              className="px-6 py-3 text-lg font-semibold border-2 border-gray-300 text-gray-800 hover:border-blue-600 hover:text-blue-600 hover:bg-transparent transition-all duration-300 rounded-full group bg-white"
            >
              <Play className="w-5 h-5 mr-2 text-blue-500 group-hover:text-blue-600 transition-colors" />
              Watch Our Story
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-20 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">30+</div>
              <div className="text-gray-600">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">16+</div>
              <div className="text-gray-600">Months</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">100%</div>
              <div className="text-gray-600">Satisfaction</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute -bottom-20 left-1/2 animate-bounce">
          <div className="relative left-[-50%]">
            <button 
              onClick={() => scrollToSection('about')}
              className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center items-start"
            >
              <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
