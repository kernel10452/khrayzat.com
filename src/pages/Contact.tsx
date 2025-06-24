
import { Mail, Sparkles, Zap, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/96176935901', '_blank');
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:ahmadkhrayzatt@gmail.com';
  };

  return (
    <div className="pt-20 min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/5 w-80 h-80 bg-green-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '0s' }} />
        <div className="absolute bottom-1/3 right-1/5 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Hero Section */}
        <div className="mb-16 animate-fade-in">
          <div className="relative inline-block">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent relative">
              Contact Us
              <Heart className="absolute -top-6 -right-8 w-8 h-8 text-pink-400 animate-pulse" />
              <Zap className="absolute -bottom-4 -left-6 w-6 h-6 text-yellow-300 animate-bounce" style={{ animationDelay: '0.5s' }} />
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 transform hover:scale-105 transition-transform duration-300">
            Ready to boost your social media? Get in touch!
          </p>
          
          <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 blur-sm animate-pulse" />
          </div>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          {/* WhatsApp Card */}
          <div className="group animate-fade-in relative" style={{ animationDelay: '0.2s' }}>
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-green-400/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative bg-gradient-to-br from-gray-800/40 via-gray-900/60 to-black/80 backdrop-blur-xl border border-green-500/30 rounded-xl p-8 transform transition-all duration-500 hover:scale-105 hover:rotate-1 hover:border-green-400/60 hover:shadow-2xl hover:shadow-green-500/30">
              {/* Floating particles */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-1000 animate-float"
                    style={{
                      left: `${15 + i * 25}%`,
                      top: `${10 + i * 15}%`,
                      animationDelay: `${i * 0.2}s`,
                    }}
                  />
                ))}
              </div>

              <div className="mb-6 flex justify-center relative">
                <div className="p-4 rounded-full bg-gradient-to-r from-green-500/20 to-green-400/20 border border-green-400/40 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                  <svg className="w-12 h-12 text-green-400 group-hover:text-green-300 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.886 3.488"/>
                  </svg>
                  <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-yellow-300 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-200 animate-spin" />
                </div>
              </div>
              
              <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-green-300 group-hover:to-green-400 group-hover:bg-clip-text transition-all duration-300">
                WhatsApp
              </h3>
              
              <p className="text-gray-400 mb-8 group-hover:text-gray-300 transition-colors duration-300">
                Chat with us directly for instant support
              </p>
              
              <Button
                onClick={handleWhatsAppClick}
                className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-medium transition-all duration-500 transform hover:scale-105 hover:shadow-xl hover:shadow-green-500/30 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/20 before:via-transparent before:to-white/20 before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700"
              >
                Open WhatsApp
              </Button>
            </div>
          </div>

          {/* Email Card */}
          <div className="group animate-fade-in relative" style={{ animationDelay: '0.4s' }}>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-400/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative bg-gradient-to-br from-gray-800/40 via-gray-900/60 to-black/80 backdrop-blur-xl border border-blue-500/30 rounded-xl p-8 transform transition-all duration-500 hover:scale-105 hover:rotate-1 hover:border-blue-400/60 hover:shadow-2xl hover:shadow-blue-500/30">
              {/* Floating particles */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-1000 animate-float"
                    style={{
                      left: `${20 + i * 20}%`,
                      top: `${15 + i * 20}%`,
                      animationDelay: `${i * 0.3}s`,
                    }}
                  />
                ))}
              </div>

              <div className="mb-6 flex justify-center relative">
                <div className="p-4 rounded-full bg-gradient-to-r from-blue-500/20 to-blue-400/20 border border-blue-400/40 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                  <Mail className="w-12 h-12 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
                  <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-yellow-300 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-200 animate-spin" />
                </div>
              </div>
              
              <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-300 group-hover:to-blue-400 group-hover:bg-clip-text transition-all duration-300">
                Email
              </h3>
              
              <p className="text-gray-400 mb-8 group-hover:text-gray-300 transition-colors duration-300">
                Send us an email for detailed inquiries
              </p>
              
              <Button
                onClick={handleEmailClick}
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium transition-all duration-500 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/30 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/20 before:via-transparent before:to-white/20 before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700"
              >
                Send Email
              </Button>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 animate-fade-in relative" style={{ animationDelay: '0.6s' }}>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-xl blur-xl" />
          
          <div className="relative bg-gradient-to-r from-purple-900/30 via-gray-900/50 to-blue-900/30 backdrop-blur-xl border border-purple-500/40 rounded-xl p-8 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30">
            <h3 className="text-2xl font-semibold text-white mb-4 hover:text-transparent hover:bg-gradient-to-r hover:from-purple-300 hover:to-blue-300 hover:bg-clip-text transition-all duration-300">
              Need Help Choosing?
            </h3>
            <p className="text-gray-300 mb-6 hover:text-gray-200 transition-colors duration-300">
              Not sure which service is right for you? Contact us and we'll help you find the perfect solution to boost your social media presence.
            </p>
            <Button
              onClick={handleWhatsAppClick}
              className="bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 hover:from-purple-600 hover:via-pink-600 hover:to-blue-600 text-white font-medium transition-all duration-500 transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/30 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/20 before:via-transparent before:to-white/20 before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700"
            >
              Get Consultation
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
