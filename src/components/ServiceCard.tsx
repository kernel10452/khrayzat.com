
import { useState } from "react";
import { LucideIcon, Send, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface ServiceCardProps {
  service: {
    id: string;
    name: string;
    icon: LucideIcon;
    description: string;
  };
  platform: string;
  quantity: number;
  onQuantityChange: (quantity: number) => void;
  onSendOrder: (quantity: number) => void;
  animationDelay: number;
}

const ServiceCard = ({
  service,
  platform,
  quantity,
  onQuantityChange,
  onSendOrder,
  animationDelay
}: ServiceCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  const handleCardClick = () => {
    setIsExpanded(!isExpanded);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    const numValue = parseInt(value) || 0;
    onQuantityChange(numValue);
  };

  const handleSend = () => {
    const numValue = parseInt(inputValue) || 0;
    if (numValue > 0) {
      onSendOrder(numValue);
    }
  };

  const IconComponent = service.icon;

  return (
    <div 
      className="group animate-fade-in relative"
      style={{ animationDelay: `${animationDelay}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Floating particles effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-1000 ${
              isHovered ? 'animate-float' : ''
            }`}
            style={{
              left: `${20 + i * 30}%`,
              top: `${10 + i * 20}%`,
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}
      </div>

      <div
        className={`
          relative overflow-hidden
          bg-gradient-to-br from-gray-800/40 via-gray-900/60 to-black/80
          backdrop-blur-xl border cursor-pointer
          rounded-2xl p-6 
          transform transition-all duration-500 ease-out
          hover:scale-105 hover:rotate-1
          ${isExpanded 
            ? 'border-purple-400/80 shadow-2xl shadow-purple-500/40 bg-gradient-to-br from-purple-900/30 via-gray-900/50 to-blue-900/30' 
            : 'border-purple-500/30 hover:border-purple-400/60'
          }
          hover:shadow-2xl hover:shadow-purple-500/30
          before:absolute before:inset-0 before:bg-gradient-to-r before:from-purple-600/10 before:via-transparent before:to-blue-600/10
          before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500
          after:absolute after:inset-0 after:bg-gradient-to-t after:from-transparent after:via-transparent after:to-white/5
          after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-300
        `}
        onClick={handleCardClick}
      >
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-gradient-x" />
        
        <div className="relative z-10 text-center">
          <div className="mb-4 flex justify-center">
            <div className={`
              relative p-4 rounded-full 
              bg-gradient-to-r from-purple-500/20 to-blue-500/20 
              border border-purple-400/40
              transform transition-all duration-500
              ${isHovered ? 'scale-110 rotate-12' : ''}
              before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r before:from-purple-400/30 before:to-blue-400/30
              before:blur-md before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300
            `}>
              <IconComponent className={`
                w-8 h-8 text-purple-400 relative z-10
                transform transition-all duration-500
                group-hover:text-purple-300 group-hover:drop-shadow-lg
                ${isHovered ? 'animate-pulse' : ''}
              `} />
              
              {/* Sparkle effect */}
              <Sparkles className={`
                absolute -top-1 -right-1 w-4 h-4 text-yellow-300
                opacity-0 group-hover:opacity-100
                transform transition-all duration-700 delay-200
                ${isHovered ? 'animate-spin' : ''}
              `} />
            </div>
          </div>
          
          <h3 className={`
            text-xl font-bold text-white mb-2 
            transform transition-all duration-300
            group-hover:text-transparent group-hover:bg-gradient-to-r 
            group-hover:from-purple-300 group-hover:via-pink-300 group-hover:to-blue-300
            group-hover:bg-clip-text
            ${isExpanded ? 'scale-105' : ''}
          `}>
            {service.name}
          </h3>
          
          <p className={`
            text-gray-400 text-sm 
            transform transition-all duration-300
            group-hover:text-gray-300
            ${isExpanded ? 'text-purple-200' : ''}
          `}>
            {service.description}
          </p>
        </div>

        {/* Ripple effect on click */}
        <div className={`
          absolute inset-0 rounded-2xl
          ${isExpanded ? 'animate-ripple' : ''}
        `} />
      </div>

      {/* Expandable Input Section with advanced animations */}
      {isExpanded && (
        <div className="mt-4 p-4 bg-gradient-to-r from-purple-900/40 via-gray-900/60 to-blue-900/40 backdrop-blur-xl border border-purple-500/40 rounded-xl animate-expand-in shadow-lg shadow-purple-500/20">
          <div className="space-y-3">
            <div className="relative">
              <Input
                type="number"
                placeholder="Enter quantity"
                value={inputValue}
                onChange={handleInputChange}
                className="
                  bg-black/60 border-purple-500/60 text-white placeholder-gray-400 
                  focus:border-purple-400 focus:ring-purple-400/30 focus:ring-2
                  transition-all duration-300
                  hover:border-purple-400/80 hover:shadow-lg hover:shadow-purple-500/20
                  animate-slide-up
                "
                min="1"
              />
              <div className="absolute inset-0 rounded-md bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 focus-within:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
            
            <Button
              onClick={handleSend}
              disabled={!inputValue || parseInt(inputValue) <= 0}
              className="
                w-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 
                hover:from-purple-600 hover:via-pink-600 hover:to-blue-600 
                text-white font-medium transition-all duration-500
                disabled:opacity-50 disabled:cursor-not-allowed
                transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/30
                animate-slide-up
                relative overflow-hidden
                before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/20 before:via-transparent before:to-white/20
                before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700
              "
              style={{ animationDelay: '0.1s' }}
            >
              <Send className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:translate-x-1" />
              Send Order
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceCard;
