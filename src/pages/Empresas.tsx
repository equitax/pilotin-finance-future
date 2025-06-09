
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Empresas = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-pilotin-blue/5 to-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
              Inteligência em dados para transformar sua 
              <span className="text-pilotin-blue"> jornada de crédito</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Potencialize sua operação financeira com dados do Open Finance. 
              Análise, concessão, monitoramento e recuperação de crédito em uma só plataforma.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-pilotin-blue hover:bg-blue-700 text-lg px-8 py-4">
                Solicitar demonstração
              </Button>
              <Button variant="outline" size="lg" className="border-pilotin-blue text-pilotin-blue hover:bg-pilotin-blue hover:text-white text-lg px-8 py-4">
                Falar com especialista
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Soluções completas para sua jornada de crédito
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Do onboarding à recuperação, oferecemos insights baseados em dados reais 
              para decisões mais inteligentes e assertivas
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <Card className="p-8 hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-pilotin-green/5">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-pilotin-green rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Análise e Antifraude</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-pilotin-green rounded-full mt-2"></div>
                  <p className="text-gray-700">Validação de dados cadastrais em tempo real</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-pilotin-green rounded-full mt-2"></div>
                  <p className="text-gray-700">Confirmação de renda e atividade profissional</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-pilotin-green rounded-full mt-2"></div>
                  <p className="text-gray-700">Análise de fluxo de caixa histórico</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-pilotin-green rounded-full mt-2"></div>
                  <p className="text-gray-700">Perfil de comportamento de consumo</p>
                </div>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-pilotin-blue/5">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-pilotin-blue rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Concessão de Crédito</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-pilotin-blue rounded-full mt-2"></div>
                  <p className="text-gray-700">Dados comportamentais para decisão assertiva</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-pilotin-blue rounded-full mt-2"></div>
                  <p className="text-gray-700">Análise de fluxo de caixa preditivo</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-pilotin-blue rounded-full mt-2"></div>
                  <p className="text-gray-700">Score personalizado por segmento</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-pilotin-blue rounded-full mt-2"></div>
                  <p className="text-gray-700">Automação de aprovações</p>
                </div>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-pilotin-purple/5">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-pilotin-purple rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Monitoramento</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-pilotin-purple rounded-full mt-2"></div>
                  <p className="text-gray-700">Fluxo de caixa preditivo em tempo real</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-pilotin-purple rounded-full mt-2"></div>
                  <p className="text-gray-700">Alertas de mudança de comportamento</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-pilotin-purple rounded-full mt-2"></div>
                  <p className="text-gray-700">Monitoramento contínuo da carteira</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-pilotin-purple rounded-full mt-2"></div>
                  <p className="text-gray-700">Detecção precoce de inadimplência</p>
                </div>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-pilotin-orange/5">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-pilotin-orange rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Cobrança e Recuperação</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-pilotin-orange rounded-full mt-2"></div>
                  <p className="text-gray-700">Débitos diretos automatizados</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-pilotin-orange rounded-full mt-2"></div>
                  <p className="text-gray-700">Avisos inteligentes por canal preferido</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-pilotin-orange rounded-full mt-2"></div>
                  <p className="text-gray-700">Recuperação proativa baseada em comportamento</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-pilotin-orange rounded-full mt-2"></div>
                  <p className="text-gray-700">Otimização de estratégias de cobrança</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Benefícios que transformam seu negócio
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 border-0 bg-white">
              <div className="w-16 h-16 bg-gradient-to-r from-pilotin-green to-green-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Camada antifraude robusta</h3>
              <p className="text-gray-600">
                Reduza perdas com fraude em até 90% com nossa tecnologia de análise comportamental
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 border-0 bg-white">
              <div className="w-16 h-16 bg-gradient-to-r from-pilotin-blue to-blue-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Melhora a experiência do cliente</h3>
              <p className="text-gray-600">
                Jornada mais fluida e rápida, com aprovações em tempo real e menos fricção
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 border-0 bg-white">
              <div className="w-16 h-16 bg-gradient-to-r from-pilotin-purple to-purple-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Aumenta eficiência operacional</h3>
              <p className="text-gray-600">
                Automação inteligente que reduz custos operacionais e aumenta a recuperação de crédito
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-pilotin-blue to-pilotin-purple text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Resultados que comprovam nossa eficiência
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">90%</div>
              <p className="opacity-90">Redução em fraudes</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">60%</div>
              <p className="opacity-90">Aumento na aprovação</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">45%</div>
              <p className="opacity-90">Melhora na recuperação</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">80%</div>
              <p className="opacity-90">Redução no tempo de análise</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Pronto para revolucionar sua operação de crédito?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Fale com nosso time e descubra como a Pilotin pode transformar 
            seus resultados financeiros
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-pilotin-blue hover:bg-blue-700 text-lg px-8 py-4">
              Solicitar demonstração
            </Button>
            <Button variant="outline" size="lg" className="border-pilotin-blue text-pilotin-blue hover:bg-pilotin-blue hover:text-white text-lg px-8 py-4">
              Baixar material
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Empresas;
