
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Pessoas = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-pilotin-purple/5 to-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
              Seus dados financeiros te ajudam a 
              <span className="text-pilotin-purple"> viver melhor</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Transforme sua relação com o dinheiro. Conecte suas contas, entenda seus hábitos 
              e receba insights personalizados para alcançar seus objetivos financeiros.
            </p>
            <Button size="lg" className="bg-pilotin-purple hover:bg-pilotin-purple-dark text-lg px-8 py-4">
              Comece agora. É gratuito!
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Por que escolher a Pilotin?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tecnologia de ponta para colocar você no controle da sua vida financeira
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50">
              <div className="w-16 h-16 bg-gradient-to-r from-pilotin-green to-green-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Privacidade e Segurança</h3>
              <p className="text-gray-600">
                Seus dados são protegidos com os mais altos padrões de segurança do Open Finance
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50">
              <div className="w-16 h-16 bg-gradient-to-r from-pilotin-blue to-blue-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Análises Inteligentes</h3>
              <p className="text-gray-600">
                Entenda para onde vai seu dinheiro com análises automáticas dos seus gastos
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50">
              <div className="w-16 h-16 bg-gradient-to-r from-pilotin-purple to-purple-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Tudo em um lugar</h3>
              <p className="text-gray-600">
                Conecte todos seus bancos, cartões e contas em uma única plataforma
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50">
              <div className="w-16 h-16 bg-gradient-to-r from-pilotin-orange to-orange-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Dicas Personalizadas</h3>
              <p className="text-gray-600">
                Receba insights e recomendações feitas especialmente para seu perfil financeiro
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* App Mockup Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Seu assistente financeiro pessoal
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-pilotin-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Visão completa das suas finanças</h3>
                    <p className="text-gray-600">Veja todas suas contas, cartões e investimentos em tempo real</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-pilotin-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Categorização automática</h3>
                    <p className="text-gray-600">Seus gastos são organizados automaticamente por categoria</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-pilotin-purple rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Alertas inteligentes</h3>
                    <p className="text-gray-600">Receba notificações sobre gastos incomuns e oportunidades de economia</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-pilotin-purple to-pilotin-blue rounded-3xl p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="bg-white rounded-2xl p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-gray-900">Resumo Financeiro</h3>
                    <span className="text-pilotin-green text-sm font-medium">Atualizado agora</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="text-xs text-gray-600">Saldo Total</div>
                      <div className="text-lg font-bold text-gray-900">R$ 8.540,00</div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="text-xs text-gray-600">Gastos do Mês</div>
                      <div className="text-lg font-bold text-gray-900">R$ 2.840,00</div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-pilotin-green to-green-400 rounded-lg p-3 text-white">
                    <div className="text-xs opacity-90">Dica do dia</div>
                    <div className="text-sm font-medium">Você gastou 15% menos este mês. Continue assim!</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-pilotin-purple to-pilotin-blue text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Pronto para transformar sua vida financeira?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Junte-se a milhares de pessoas que já estão no controle das suas finanças
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-pilotin-purple hover:bg-gray-100 text-lg px-8 py-4">
            Começar gratuitamente
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pessoas;
