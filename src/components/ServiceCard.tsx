
import { useState } from "react";
import { LucideIcon, Send } from "lucide-react";
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
      className="group animate-fade-in"
      style={{ animationDelay: `${animationDelay}s` }}
    >
      <div
        className={`
          bg-gradient-to-br from-gray-800/50 to-gray-900/50 
          backdrop-blur-md border border-purple-500/20 
          rounded-xl p-6 cursor-pointer
          transform transition-all duration-300 
          hover:scale-105 hover:border-purple-400/40
          hover:shadow-2xl hover:shadow-purple-500/20
          ${isExpanded ? 'border-purple-400/60 shadow-lg shadow-purple-500/20' : ''}
        `}
        onClick={handleCardClick}
      >
        <div className="text-center">
          <div className="mb-4 flex justify-center">
            <div className="p-3 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-400/30">
              <IconComponent className="w-8 h-8 text-purple-400 group-hover:text-purple-300 transition-colors" />
            </div>
          </div>
          
          <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
            {service.name}
          </h3>
          
          <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
            {service.description}
          </p>
        </div>
      </div>

      {/* Expandable Input Section */}
      {isExpanded && (
        <div className="mt-4 p-4 bg-gradient-to-r from-purple-900/30 to-blue-900/30 backdrop-blur-md border border-purple-500/30 rounded-lg animate-scale-in">
          <div className="space-y-3">
            <Input
              type="number"
              placeholder="Enter quantity"
              value={inputValue}
              onChange={handleInputChange}
              className="bg-black/50 border-purple-500/50 text-white placeholder-gray-400 focus:border-purple-400 focus:ring-purple-400/20"
              min="1"
            />
            
            <Button
              onClick={handleSend}
              disabled={!inputValue || parseInt(inputValue) <= 0}
              className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="w-4 h-4 mr-2" />
              Send Order
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceCard;
