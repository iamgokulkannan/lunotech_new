
import { Button } from '@/components/ui/button';
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-brand-50 px-4">
      <div className="text-center max-w-2xl mx-auto animate-fade-in">
        {/* 404 Animation */}
        <div className="mb-8">
          <div className="text-8xl lg:text-9xl font-bold text-gradient animate-float">
            404
          </div>
          <div className="text-2xl lg:text-3xl font-semibold text-gray-700 mt-4">
            Oops! Page not found
          </div>
        </div>

        {/* Error Message */}
        <div className="mb-8">
          <p className="text-lg text-gray-600 mb-4 leading-relaxed">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <p className="text-gray-500">
            Don't worry, let's get you back on track!
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={() => window.location.href = '/'}
            className="btn-gradient text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Return to Home
          </Button>
          <Button 
            onClick={() => window.history.back()}
            variant="outline" 
            className="px-8 py-4 rounded-full text-lg font-semibold border-2 border-brand-500 text-brand-600 hover:bg-brand-50 transition-all duration-300"
          >
            Go Back
          </Button>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-brand-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
        
        {/* Contact Info */}
        <div className="mt-12 p-6 bg-white/50 rounded-2xl backdrop-blur-sm border border-white/20">
          <p className="text-gray-600 mb-2">Need help? Contact our support team</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm">
            <a href="mailto:hello@lunotech.in" className="text-brand-600 hover:text-brand-700 transition-colors duration-200">
              📧 hello@lunotech.in
            </a>
            <a href="tel:+919876543210" className="text-brand-600 hover:text-brand-700 transition-colors duration-200">
              📞 +91 98765 43210
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
