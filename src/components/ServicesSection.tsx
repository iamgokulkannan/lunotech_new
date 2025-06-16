import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Web Design & Development',
    description:
      'Crafting responsive and scalable websites using modern frameworks like React, Next.js, and more.',
  },
  {
    title: 'Mobile App Design & Development',
    description:
      'Designing and developing high-performance apps tailored for iOS and Android platforms.',
  },
  {
    title: 'AI Integration',
    description:
      'Harnessing the power of AI to automate, analyze, and enhance digital experiences.',
  },
  {
    title: 'Billing Softwares',
    description:
      'Creating custom billing solutions that streamline invoicing, payments, and financial reporting.',
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="px-6 md:px-12 lg:px-20">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-left gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-2 mb-6">
              <span className="text-blue-700 text-sm font-medium">Our Services</span>
            </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mt-4">
            Tailored <span className="text-gradient">Solutions</span> That Drive Impact
          </h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            From design to deployment, we provide everything you need to thrive in the digital age.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="rounded-2xl border border-gray-200 bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 p-6 text-center"
            >
              <div className="text-xl font-semibold text-gray-900 mb-3">{service.title}</div>
              <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <p className="text-lg text-gray-600 mb-6">
            Let's bring your vision to life with precision and passion.
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold px-6 py-2 rounded-full shadow-lg hover:scale-105 transition-transform duration-300 inline-flex items-center gap-2"
          >
            Start Your Project <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;