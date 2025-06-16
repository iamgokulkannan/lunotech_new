
const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto container-padding">
        {/* Main Footer */}
        <div className="py-16 lg:py-20">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <h3 className="text-3xl font-bold mb-6">
                <span className="text-gradient TheSeasons font-bold">Luno Tech</span>
              </h3>
              <p className="text-gray-300 mb-8 max-w-md leading-relaxed text-lg">
                Crafting digital experiences that don't just work, but inspire. 
                Where innovation meets craftsmanship.
              </p>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-center">
                  <span className="text-blue-400 mr-3">✉️</span>
                  info@lunotech.in
                </div>
                <div className="flex items-center">
                  <span className="text-blue-400 mr-3">📞</span>
                  +91 984343 63600
                </div>
                <div className="flex items-center">
                  <span className="text-blue-400 mr-3">📍</span>
                    Kalapatti, Coimbatore, Tamil Nadu, India
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Services</h4>
              <ul className="space-y-3 text-gray-300">
                <li>
                  <button 
                    onClick={() => scrollToSection('services')}
                    className="hover:text-blue-400 transition-colors duration-200"
                  >
                    Web Development
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('services')}
                    className="hover:text-blue-400 transition-colors duration-200"
                  >
                    Mobile Applications
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('services')}
                    className="hover:text-blue-400 transition-colors duration-200"
                  >
                    AI Integration
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('services')}
                    className="hover:text-blue-400 transition-colors duration-200"
                  >
                    Billing Softwares
                  </button>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Company</h4>
              <ul className="space-y-3 text-gray-300">
                {[
                  { label: 'About', id: 'about' },
                  { label: 'Services', id: 'services' },
                  { label: 'Work', id: 'clients' },
                  { label: 'Contact', id: 'contact' },
                ].map((item) => (
                  <li key={item.id}>
                    <button 
                      onClick={() => scrollToSection(item.id)}
                      className="hover:text-blue-400 transition-colors duration-200"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-8 text-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0 items-center">
              © {currentYear} Luno Tech. All rights reserved.
            </div>
          </div>
      </div>
    </footer>
  );
};

export default Footer;
