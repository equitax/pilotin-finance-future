
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
               <img
                 src="/logo-2.png"
                 alt="Logo PilotIn"
                 className="h-8 w-auto mr-2"
               />
            <span className="text-xl font-bold">PilotIn</span>
          </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Democratizando o acesso à inteligência financeira através do Open Finance. 
              Sua vida financeira, mais leve, mais inteligente.
            </p>
            <div className="flex space-x-4">
              <Button variant="outline" size="sm" className="border-gray-600 text-gray-300 hover:bg-gray-700">
                LinkedIn
              </Button>
              <Button variant="outline" size="sm" className="border-gray-600 text-gray-300 hover:bg-gray-700">
                Instagram
              </Button>
              <Button variant="outline" size="sm" className="border-gray-600 text-gray-300 hover:bg-gray-700">
                Twitter
              </Button>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-4">Soluções</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/pessoas" className="hover:text-white transition-colors">Para Pessoas</a></li>
              <li><a href="/empresas" className="hover:text-white transition-colors">Para Empresas</a></li>
              <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Documentação</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/sobre" className="hover:text-white transition-colors">Sobre nós</a></li>
              <li><a href="/contato" className="hover:text-white transition-colors">Contato</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Termos de Uso</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Pilotin. Todos os direitos reservados.</p>
        </div>
      </div>

      {/* WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/551140402468"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center"
        > 
        <MessageCircle className="w-6 h-6" />          
        </a>
      </div>
    </footer>
  );
};

export default Footer;
