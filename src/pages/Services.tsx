
import { useState } from "react";
import { Instagram, Heart, Eye, MessageCircle, Users, Coins, Video, Sparkles, Zap } from "lucide-react";
import ServiceCard from "../components/ServiceCard";

const Services = () => {
  const [quantities, setQuantities] = useState<Record<string, number>>({});

  const instagramServices = [
    { id: "ig-followers", name: "Followers", icon: Users, description: "Boost your follower count" },
    { id: "ig-likes", name: "Likes", icon: Heart, description: "Get more likes on your posts" },
    { id: "ig-views", name: "Views", icon: Eye, description: "Increase video views" },
    { id: "ig-comments", name: "Comments", icon: MessageCircle, description: "Engage with comments" }
  ];

  const tiktokServices = [
    { id: "tt-followers", name: "Followers", icon: Users, description: "Grow your TikTok following" },
    { id: "tt-likes", name: "Likes", icon: Heart, description: "More likes on your videos" },
    { id: "tt-views", name: "Views", icon: Eye, description: "Boost video visibility" },
    { id: "tt-comments", name: "Comments", icon: MessageCircle, description: "Increase engagement" },
    { id: "tt-coins", name: "TikTok Coins", icon: Coins, description: "Get TikTok coins" }
  ];

  const handleQuantityChange = (serviceId: string, quantity: number) => {
    setQuantities(prev => ({ ...prev, [serviceId]: quantity }));
  };

  const handleSendOrder = (platform: string, service: string, quantity: number) => {
    if (quantity > 0) {
      const message = `Hi Khrayzat, I want ${quantity} ${service} for ${platform}`;
      const whatsappUrl = `https://wa.me/96176935901?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
    }
  };

  return (
    <div className="pt-20 min-h-screen relative overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '0s' }} />
        <div className="absolute top-3/4 right-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      </div>

      {/* Hero Section */}
      <div className="text-center py-20 px-4 relative z-10">
        <div className="relative inline-block">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-fade-in relative">
            Khrayzat
            <Sparkles className="absolute -top-4 -right-8 w-8 h-8 text-yellow-300 animate-spin" style={{ animationDuration: '3s' }} />
            <Zap className="absolute -bottom-2 -left-6 w-6 h-6 text-blue-300 animate-bounce" style={{ animationDelay: '1s' }} />
          </h1>
        </div>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in transform hover:scale-105 transition-transform duration-300" style={{ animationDelay: '0.2s' }}>
          Boost Your Social Media Presence
        </p>
        
        <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto animate-fade-in relative" style={{ animationDelay: '0.4s' }}>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 blur-sm animate-pulse" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 relative z-10">
        {/* Instagram Section */}
        <section className="mb-20 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="flex items-center justify-center mb-12 group">
            <div className="relative p-3 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-500/30 mr-4 transform group-hover:scale-110 transition-all duration-500">
              <Instagram className="w-12 h-12 text-pink-500 group-hover:text-pink-400 transition-colors duration-300" />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-400/30 to-purple-400/30 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-pink-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
              Instagram
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {instagramServices.map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                platform="Instagram"
                quantity={quantities[service.id] || 0}
                onQuantityChange={(quantity) => handleQuantityChange(service.id, quantity)}
                onSendOrder={(quantity) => handleSendOrder("Instagram", service.name, quantity)}
                animationDelay={0.8 + index * 0.1}
              />
            ))}
          </div>
        </section>

        {/* TikTok Section */}
        <section className="animate-fade-in" style={{ animationDelay: '1.2s' }}>
          <div className="flex items-center justify-center mb-12 group">
            <div className="relative p-3 rounded-full bg-gradient-to-r from-red-500/20 to-pink-500/20 border border-red-500/30 mr-4 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
              <Video className="w-12 h-12 text-red-500 group-hover:text-red-400 transition-colors duration-300" />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-red-400/30 to-pink-400/30 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-red-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
              TikTok
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {tiktokServices.map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                platform="TikTok"
                quantity={quantities[service.id] || 0}
                onQuantityChange={(quantity) => handleQuantityChange(service.id, quantity)}
                onSendOrder={(quantity) => handleSendOrder("TikTok", service.name, quantity)}
                animationDelay={1.4 + index * 0.1}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;
