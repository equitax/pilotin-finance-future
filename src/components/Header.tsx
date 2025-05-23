
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-pilotin-blue to-pilotin-green rounded-lg flex items-center justify-center">
              <img 
                src="/lovable-uploads/01aedc99-a482-49d0-b9a5-ec64c080c4e2.png" 
                alt="PilotIn Logo" 
                className="w-6 h-6 object-contain"
              />
            </div>
            <span className="text-xl font-bold text-gray-900">PilotIn</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`transition-colors ${
                isActive('/') 
                  ? 'text-pilotin-green font-medium border-b-2 border-pilotin-green' 
                  : 'text-gray-600 hover:text-pilotin-blue'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/pessoas" 
              className={`transition-colors ${
                isActive('/pessoas') 
                  ? 'text-pilotin-green font-medium border-b-2 border-pilotin-green' 
                  : 'text-gray-600 hover:text-pilotin-blue'
              }`}
            >
              Para Pessoas
            </Link>
            <Link 
              to="/empresas" 
              className={`transition-colors ${
                isActive('/empresas') 
                  ? 'text-pilotin-green font-medium border-b-2 border-pilotin-green' 
                  : 'text-gray-600 hover:text-pilotin-blue'
              }`}
            >
              Para Empresas
            </Link>
            <Link 
              to="/sobre" 
              className={`transition-colors ${
                isActive('/sobre') 
                  ? 'text-pilotin-green font-medium border-b-2 border-pilotin-green' 
                  : 'text-gray-600 hover:text-pilotin-blue'
              }`}
            >
              Sobre
            </Link>
            <Link 
              to="/contato" 
              className={`transition-colors ${
                isActive('/contato') 
                  ? 'text-pilotin-green font-medium border-b-2 border-pilotin-green' 
                  : 'text-gray-600 hover:text-pilotin-blue'
              }`}
            >
              Contato
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button variant="outline" size="sm">
              Sou empresa
            </Button>
            <Button variant="green" size="sm">
              Quero pilotar minhas finanças
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <span className={`block h-0.5 bg-gray-600 transition-transform ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`block h-0.5 bg-gray-600 transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block h-0.5 bg-gray-600 transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className={`transition-colors ${
                  isActive('/') 
                    ? 'text-pilotin-green font-medium' 
                    : 'text-gray-600 hover:text-pilotin-blue'
                }`} 
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/pessoas" 
                className={`transition-colors ${
                  isActive('/pessoas') 
                    ? 'text-pilotin-green font-medium' 
                    : 'text-gray-600 hover:text-pilotin-blue'
                }`} 
                onClick={() => setIsMenuOpen(false)}
              >
                Para Pessoas
              </Link>
              <Link 
                to="/empresas" 
                className={`transition-colors ${
                  isActive('/empresas') 
                    ? 'text-pilotin-green font-medium' 
                    : 'text-gray-600 hover:text-pilotin-blue'
                }`} 
                onClick={() => setIsMenuOpen(false)}
              >
                Para Empresas
              </Link>
              <Link 
                to="/sobre" 
                className={`transition-colors ${
                  isActive('/sobre') 
                    ? 'text-pilotin-green font-medium' 
                    : 'text-gray-600 hover:text-pilotin-blue'
                }`} 
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre
              </Link>
              <Link 
                to="/contato" 
                className={`transition-colors ${
                  isActive('/contato') 
                    ? 'text-pilotin-green font-medium' 
                    : 'text-gray-600 hover:text-pilotin-blue'
                }`} 
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </Link>
              <div className="flex flex-col space-y-2 pt-2">
                <Button variant="outline" size="sm">
                  Sou empresa
                </Button>
                <Button variant="green" size="sm">
                  Quero pilotar minhas finanças
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
