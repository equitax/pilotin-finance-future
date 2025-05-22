
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-pilotin-purple to-pilotin-purple-light rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">P</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Pilotin</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-600 hover:text-pilotin-purple transition-colors">Home</a>
            <a href="/pessoas" className="text-gray-600 hover:text-pilotin-purple transition-colors">Para Pessoas</a>
            <a href="/empresas" className="text-gray-600 hover:text-pilotin-purple transition-colors">Para Empresas</a>
            <a href="/sobre" className="text-gray-600 hover:text-pilotin-purple transition-colors">Sobre</a>
            <a href="/contato" className="text-gray-600 hover:text-pilotin-purple transition-colors">Contato</a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button variant="outline" size="sm" className="border-pilotin-purple text-pilotin-purple hover:bg-pilotin-purple hover:text-white">
              Sou empresa
            </Button>
            <Button size="sm" className="bg-pilotin-purple hover:bg-pilotin-purple-dark">
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
              <a href="/" className="text-gray-600 hover:text-pilotin-purple transition-colors">Home</a>
              <a href="/pessoas" className="text-gray-600 hover:text-pilotin-purple transition-colors">Para Pessoas</a>
              <a href="/empresas" className="text-gray-600 hover:text-pilotin-purple transition-colors">Para Empresas</a>
              <a href="/sobre" className="text-gray-600 hover:text-pilotin-purple transition-colors">Sobre</a>
              <a href="/contato" className="text-gray-600 hover:text-pilotin-purple transition-colors">Contato</a>
              <div className="flex flex-col space-y-2 pt-2">
                <Button variant="outline" size="sm" className="border-pilotin-purple text-pilotin-purple">
                  Sou empresa
                </Button>
                <Button size="sm" className="bg-pilotin-purple hover:bg-pilotin-purple-dark">
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
