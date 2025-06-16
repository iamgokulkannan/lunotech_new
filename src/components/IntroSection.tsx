import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Typewriter from 'typewriter-effect';

const IntroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [showTyping, setShowTyping] = useState(false);

  useEffect(() => {
    if (isInView) setShowTyping(true);
  }, [isInView]);

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-20 py-16">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Content */}
          <div ref={ref} className="animate-slide-up">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-2 mb-6">
              <span className="text-blue-700 text-sm font-medium">About Us</span>
            </div>

            <h2 className="text-4xl sm:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Crafting Digital
              <br />
              <span className="text-gradient">Experiences</span>
            </h2>

            <div className="space-y-5 text-base sm:text-lg text-gray-600 leading-relaxed">
              <p>
                At Luno Tech, we believe technology should be invisible, intuitive, and inspiring. 
                Based in the vibrant tech ecosystem of Coimbatore, we combine global design standards 
                with local market understanding.
              </p>
              <p>
                Our approach is simple: understand deeply, design thoughtfully, and develop meticulously. 
                Every pixel has a purpose, every interaction tells a story, and every solution drives results.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-8 mt-10">
              <div className="text-center lg:text-left">
                <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">30+</div>
                <div className="text-gray-600 text-sm sm:text-base">Projects Delivered</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">16+</div>
                <div className="text-gray-600 text-sm sm:text-base">Months of Excellence</div>
              </div>
            </div>
          </div>

          {/* Right Content Block */}
          <div className="relative animate-fade-in mt-12 lg:mt-0" style={{ animationDelay: '0.3s' }}>
            <div className="relative z-10 glass-card p-6 rounded-xl shadow-xl backdrop-blur-lg border border-white/10 max-w-md mx-auto lg:mx-0 text-left space-y-3 bg-white/60">
              <h3 className="text-lg font-semibold text-gray-900">Why Choose Us?</h3>
              {showTyping && (
                <Typewriter
                  options={{
                    strings: [
                      'Custom-Built, never templated — every pixel is yours.',
                      'Speed & Scalability, designed into the architecture.',
                      'Creative + Code, balanced for memorable experiences.',
                      'From Idea to Launch, we partner end-to-end.'
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 30,
                    deleteSpeed: 20
                  }}
                />
              )}
            </div>

            {/* Background Decorations */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/10 rounded-full animate-float"></div>
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-purple-500/10 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;