
import { useState } from "react";
import { Instagram, TikTok, Heart, Eye, MessageCircle, Users, Coins } from "lucide-react";
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
    <div className="pt-20 min-h-screen">
      {/* Hero Section */}
      <div className="text-center py-20 px-4">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-fade-in">
          Khrayzat
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Boost Your Social Media Presence
        </p>
        <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* Instagram Section */}
        <section className="mb-20 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="flex items-center justify-center mb-12">
            <Instagram className="w-12 h-12 text-pink-500 mr-4" />
            <h2 className="text-4xl md:text-5xl font-bold text-white">Instagram</h2>
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
          <div className="flex items-center justify-center mb-12">
            <TikTok className="w-12 h-12 text-red-500 mr-4" />
            <h2 className="text-4xl md:text-5xl font-bold text-white">TikTok</h2>
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
