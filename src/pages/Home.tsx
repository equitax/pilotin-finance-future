
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-3xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Sua vida financeira, 
                <span className="text-pilotin-green"> mais leve</span>, 
                <span className="text-pilotin-green"> mais inteligente</span>.
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Conectamos seus dados do Open Finance para transformar sua relação com dinheiro.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-pilotin-green hover:bg-pilotin-green-light text-pilotin-white text-lg px-8 py-4" asChild>
                  <a href="https://my.pilotin.app/cadastro" target="_blank" rel="noopener noreferrer">
                  Quero pilotar minhas finanças
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="bg-pilotin-white text-pilotin-blue-dark hover:bg-pilotin-blue hover:text-white text-lg px-8 py-4" asChild>
                  <a href="https://business.pilotin.com.br/" target="_blank" rel="noopener noreferrer">
                    Sou empresa
                  </a>
                </Button>
              </div>
            </div>
            
            <div className="relative animate-float">
              <div className="bg-gradient-to-br from-pilotin-green to-pilotin-blue rounded-3xl p-8 shadow-2xl">
                <div className="bg-white rounded-2xl p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-pilotin-green-light rounded-full flex items-center justify-center">
                        <span className="text-white font-bold">P</span>
                      </div>
                      <span className="font-semibold text-gray-900">PilotIn</span>
                    </div>
                    <div className="text-pilotin-green text-sm font-medium">Online</div>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="text-sm text-gray-600">Suas contas conectadas</div>
                      <div className="text-lg font-semibold text-gray-900">5 bancos</div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="text-sm text-gray-600">Fatura de Cartão de Créditos</div>
                      <div className="text-lg font-semibold text-gray-900">Próximo vencimento 01/05/2025</div>
                    </div>
                    <div className="bg-gradient-to-r from-pilotin-purple to-pilotin-blue rounded-lg p-3 text-white">
                      <div className="text-sm opacity-90">Próxima dica</div>
                      <div className="text-sm font-medium">Você pode economizar R$ 280 este mês</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-pilotin-orange rounded-full opacity-30 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-pilotin-green rounded-full opacity-30 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="p-8 hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50 group">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-pilotin-blue to-pilotin-blue-light rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Para Pessoas</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Controle seu dinheiro, organize sua vida financeira e alcance seus objetivos com inteligência artificial.
                </p>
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-pilotin-green rounded-full"></div>
                  <span className="text-gray-700">Conecte todas suas contas em um só lugar</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-pilotin-green rounded-full"></div>
                  <span className="text-gray-700">Análises inteligentes do seu comportamento financeiro</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-pilotin-green rounded-full"></div>
                  <span className="text-gray-700">Dicas personalizadas para economizar</span>
                </div>
              </div>
              <Button className="w-full bg-pilotin-green hover:bg-pilotin-green-light" asChild>
                <a href="/pessoas">Começar agora</a>
              </Button>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50 group">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-pilotin-blue to-pilotin-green rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Para Empresas</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Soluções inteligentes para análise, concessão, monitoramento e recuperação de crédito baseadas em Open Finance.
                </p>
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-pilotin-blue rounded-full"></div>
                  <span className="text-gray-700">Análise antifraude robusta</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-pilotin-blue rounded-full"></div>
                  <span className="text-gray-700">Decisões de crédito mais assertivas</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-pilotin-blue rounded-full"></div>
                  <span className="text-gray-700">Monitoramento e recuperação inteligente</span>
                </div>
              </div>
              <Button variant="outline" className="w-full border-pilotin-blue text-pilotin-blue hover:bg-pilotin-blue hover:text-white" asChild>
                <a href="/empresas">Falar com especialista</a>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Confiança e Segurança em primeiro lugar
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Utilizamos os mais altos padrões de segurança do Open Finance, 
            regulamentados pelo Banco Central do Brasil.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-pilotin-orange rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Dados Criptografados</h3>
              <p className="text-gray-600 text-sm">Seus dados são protegidos com criptografia de ponta a ponta</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-pilotin-blue rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Regulamentado</h3>
              <p className="text-gray-600 text-sm">Seguimos todas as regulamentações do Banco Central</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-pilotin-blue-light rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Transparência Total</h3>
              <p className="text-gray-600 text-sm">Você tem controle total sobre seus dados</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
