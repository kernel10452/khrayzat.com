
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sparkles } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Services" },
    { path: "/contact", label: "Contact" }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-xl border-b border-white/20 shadow-xl shadow-purple-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-16 relative">
          {/* Animated background glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-blue-500/10 opacity-50" />
          
          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex space-x-8 relative z-10">
            {navItems.map((item, index) => (
              <Link
                key={item.path}
                to={item.path}
                className={`
                  relative px-6 py-3 rounded-full transition-all duration-500 font-medium
                  transform hover:scale-105 group
                  ${location.pathname === item.path
                    ? "bg-gradient-to-r from-purple-500/90 via-pink-500/90 to-blue-500/90 text-white shadow-xl shadow-purple-500/40 animate-pulse-glow"
                    : "text-gray-200 hover:text-white hover:bg-gradient-to-r hover:from-white/10 hover:via-white/20 hover:to-white/10 hover:shadow-lg hover:shadow-white/20"
                  }
                  before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r before:from-purple-400/30 before:to-blue-400/30
                  before:blur-md before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300
                `}
              >
                <span className="relative z-10 flex items-center">
                  {item.label}
                  {location.pathname === item.path && (
                    <Sparkles className="ml-2 w-4 h-4 animate-spin" style={{ animationDuration: '3s' }} />
                  )}
                </span>
                
                {/* Animated underline */}
                <div className={`
                  absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400
                  transition-all duration-300
                  ${location.pathname === item.path ? 'w-full' : 'w-0 group-hover:w-full'}
                `} />
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-purple-400 transition-all duration-300 absolute right-4 transform hover:scale-110 hover:rotate-12"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-white/20 bg-black/50 backdrop-blur-xl animate-expand-in">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item, index) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`
                    block px-6 py-4 rounded-lg text-base font-medium transition-all duration-500
                    transform hover:scale-105 hover:translate-x-2
                    ${location.pathname === item.path
                      ? "bg-gradient-to-r from-purple-500/90 via-pink-500/90 to-blue-500/90 text-white shadow-lg shadow-purple-500/30"
                      : "text-gray-200 hover:text-white hover:bg-gradient-to-r hover:from-white/10 hover:to-white/20"
                    }
                  `}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="flex items-center">
                    {item.label}
                    {location.pathname === item.path && (
                      <Sparkles className="ml-2 w-4 h-4 animate-spin" style={{ animationDuration: '2s' }} />
                    )}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
