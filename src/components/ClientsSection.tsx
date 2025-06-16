"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from '@/components/ui/card';

const ClientsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);


  const clients = [
    {
      name: "Satta Pai",
      logo: "/images/clients/satta_pai.png",
    },
    {
      name: "Hautees",
      logo: "/images/clients/hautees.png",
    },
    {
      name: "Calverite Entreprises",
      logo: "/images/clients/calverite.png",
    },
    {
      name: "KR Tex",
      logo: "/images/clients/krtex.png",
    },
    {
      name: "Whale",
      logo: "/images/clients/whale.png",
    },
    {
      name: "Anam Cara",
      logo: "/images/clients/anamcara.png",
    },
  ];

  return (
    <section id="clients" className="section-padding bg-white">
      <div className="container mx-auto container-padding">
        {/* Header */}
        <div className="text-center mb-20 animate-slide-up">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-2 mb-8">
            <span className="text-blue-700 text-sm font-medium">Our Trusted Clients</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            Trusted by
            <br />
            <span className="text-gradient">Innovators</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We partner with forward-thinking companies to create digital experiences that matter.
          </p>
        </div>

        {/* Client Logos */}
        <section
      id="clients"
      ref={sectionRef}
      className="py-20 overflow-hidden relative"
    >

      <div className="relative w-full overflow-hidden">
        {/* Gradient masks for smooth edges */}
        <div className="flex">
          <motion.div
            className="flex space-x-16 items-center"
            animate={{
              x: [0, -1000],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
                repeatDelay: 0,
              },
            }}
          >
            {[...clients, ...clients].map((client, index) => (
              <motion.div
                key={`${client.name}-${index}`}
                className="flex-shrink-0 w-32 h-16 flex items-center justify-center"
                whileHover={{ 
                  scale: 1.2,
                  transition: { 
                    duration: 0.3,
                    ease: "easeOut"
                  }
                }}
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-w-full max-h-full w-auto h-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            className="flex space-x-16 items-center"
            animate={{
              x: [0, -1000],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
                repeatDelay: 0,
              },
            }}
          >
            {[...clients, ...clients].map((client, index) => (
              <motion.div
                key={`${client.name}-duplicate-${index}`}
                className="flex-shrink-0 w-32 h-16 flex items-center justify-center"
                whileHover={{ 
                  scale: 1.2,
                  transition: { 
                    duration: 0.3,
                    ease: "easeOut"
                  }
                }}
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-w-full max-h-full w-auto h-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>

        {/* Testimonials */}
        {/*
        <div className="grid md:grid-cols-3 gap-8 animate-slide-up">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-500 rounded-3xl animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8">
                {/* Stars */}
                {/*
                <div className="flex mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <div key={i} className="w-5 h-5 text-yellow-400">★</div>
                  ))}
                </div>
                
                <p className="text-gray-700 mb-8 leading-relaxed text-lg italic">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">{testimonial.avatar}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.position}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
                */}

        {/* Stats */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white animate-fade-in">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">30+</div>
              <div className="text-blue-100">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">100%</div>
              <div className="text-blue-100">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">16+</div>
              <div className="text-blue-100">Months Experience</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
