
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/96176935901', '_blank');
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:ahmadkhrayzatt@gmail.com';
  };

  return (
    <div className="pt-20 min-h-screen flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Hero Section */}
        <div className="mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Ready to boost your social media? Get in touch!
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto"></div>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          {/* WhatsApp Card */}
          <div className="group animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-md border border-green-500/20 rounded-xl p-8 transform transition-all duration-300 hover:scale-105 hover:border-green-400/40 hover:shadow-2xl hover:shadow-green-500/20">
              <div className="mb-6 flex justify-center">
                <div className="p-4 rounded-full bg-gradient-to-r from-green-500/20 to-green-400/20 border border-green-400/30">
                  <svg className="w-12 h-12 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.886 3.488"/>
                  </svg>
                </div>
              </div>
              
              <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-green-300 transition-colors">
                WhatsApp
              </h3>
              
              <p className="text-gray-400 mb-6 group-hover:text-gray-300 transition-colors">
                Chat with us directly for instant support
              </p>
              
              <p className="text-green-400 font-mono text-lg mb-6">
                +961 76 935 901
              </p>
              
              <Button
                onClick={handleWhatsAppClick}
                className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-medium transition-all duration-300"
              >
                Open WhatsApp
              </Button>
            </div>
          </div>

          {/* Email Card */}
          <div className="group animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-md border border-blue-500/20 rounded-xl p-8 transform transition-all duration-300 hover:scale-105 hover:border-blue-400/40 hover:shadow-2xl hover:shadow-blue-500/20">
              <div className="mb-6 flex justify-center">
                <div className="p-4 rounded-full bg-gradient-to-r from-blue-500/20 to-blue-400/20 border border-blue-400/30">
                  <Mail className="w-12 h-12 text-blue-400" />
                </div>
              </div>
              
              <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-blue-300 transition-colors">
                Email
              </h3>
              
              <p className="text-gray-400 mb-6 group-hover:text-gray-300 transition-colors">
                Send us an email for detailed inquiries
              </p>
              
              <p className="text-blue-400 font-mono text-lg mb-6 break-all">
                ahmadkhrayzatt@gmail.com
              </p>
              
              <Button
                onClick={handleEmailClick}
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium transition-all duration-300"
              >
                Send Email
              </Button>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 backdrop-blur-md border border-purple-500/30 rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Need Help Choosing?
            </h3>
            <p className="text-gray-300 mb-6">
              Not sure which service is right for you? Contact us and we'll help you find the perfect solution to boost your social media presence.
            </p>
            <Button
              onClick={handleWhatsAppClick}
              className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-medium transition-all duration-300"
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
