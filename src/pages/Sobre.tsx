
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Sobre = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-pilotin-purple/5 to-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
              Democratizando o acesso à 
              <span className="text-pilotin-purple"> inteligência financeira</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Acreditamos que todos devem ter acesso a insights financeiros inteligentes. 
              Por isso, criamos uma plataforma que conecta dados do Open Finance para 
              transformar a relação das pessoas e empresas com o dinheiro.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-pilotin-purple/5">
              <div className="w-16 h-16 bg-gradient-to-r from-pilotin-purple to-purple-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Nossa Missão</h3>
              <p className="text-gray-600 leading-relaxed">
                Democratizar o acesso à inteligência financeira, tornando insights 
                complexos acessíveis para pessoas físicas e empresas de todos os tamanhos.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-pilotin-blue/5">
              <div className="w-16 h-16 bg-gradient-to-r from-pilotin-blue to-blue-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Nossa Visão</h3>
              <p className="text-gray-600 leading-relaxed">
                Ser a principal plataforma de insights financeiros da América Latina, 
                conectando dados para criar um futuro financeiro mais inteligente e inclusivo.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-pilotin-green/5">
              <div className="w-16 h-16 bg-gradient-to-r from-pilotin-green to-green-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Nossos Valores</h3>
              <p className="text-gray-600 leading-relaxed">
                Transparência, segurança, empatia e inovação guiam todas nossas decisões. 
                Acreditamos na construção de um sistema financeiro mais justo e acessível.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Detail */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nossos pilares fundamentais
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Cada decisão que tomamos é baseada em princípios sólidos que nos guiam 
              na construção de um futuro financeiro melhor
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-pilotin-blue to-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Transparência</h3>
              <p className="text-gray-600 text-sm">
                Clareza total em nossos processos, dados e relacionamentos. 
                Você sempre sabe como seus dados são utilizados.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-pilotin-green to-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Segurança</h3>
              <p className="text-gray-600 text-sm">
                Protegemos seus dados com os mais altos padrões de segurança, 
                seguindo todas as regulamentações do Open Finance.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-pilotin-purple to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Empatia</h3>
              <p className="text-gray-600 text-sm">
                Entendemos os desafios financeiros únicos de cada pessoa e empresa, 
                criando soluções verdadeiramente úteis.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-pilotin-orange to-orange-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Inovação</h3>
              <p className="text-gray-600 text-sm">
                Estamos sempre buscando novas formas de utilizar tecnologia 
                para tornar a vida financeira mais simples e inteligente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Nossa história começou com uma pergunta simples
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Por que as decisões financeiras mais importantes da vida das pessoas 
                  ainda são tomadas com base em informações limitadas e desatualizadas?
                </p>
                <p>
                  Com o surgimento do Open Finance no Brasil, vimos uma oportunidade única 
                  de democratizar o acesso à inteligência financeira. Não apenas para 
                  grandes instituições, mas para toda pessoa e empresa que quer tomar 
                  decisões mais inteligentes sobre dinheiro.
                </p>
                <p>
                  Hoje, conectamos dados de milhões de transações para gerar insights 
                  que realmente fazem a diferença na vida financeira de nossos usuários. 
                  E estamos apenas começando.
                </p>
              </div>
              <Button className="mt-6 bg-pilotin-purple hover:bg-pilotin-purple-dark" asChild>
                <a href="/contato">Fale conosco</a>
              </Button>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-pilotin-purple to-pilotin-blue rounded-3xl p-8 shadow-2xl">
                <div className="bg-white rounded-2xl p-6 space-y-6">
                  <div className="text-center">
                    <h3 className="font-bold text-gray-900 mb-2">Impacto até hoje</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-pilotin-purple">100k+</div>
                      <div className="text-xs text-gray-600">Usuários ativos</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-pilotin-blue">50M+</div>
                      <div className="text-xs text-gray-600">Transações analisadas</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-pilotin-green">500+</div>
                      <div className="text-xs text-gray-600">Empresas parceiras</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-pilotin-orange">99.9%</div>
                      <div className="text-xs text-gray-600">Uptime da plataforma</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-pilotin-orange rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-pilotin-green rounded-full opacity-20 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Time apaixonado por tecnologia e finanças
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Nosso time combina expertise em tecnologia, dados e mercado financeiro 
              para criar soluções que realmente transformam vidas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 border-0 bg-white">
              <div className="w-24 h-24 bg-gradient-to-r from-pilotin-purple to-purple-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">CTO</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Tecnologia</h3>
              <p className="text-gray-600 text-sm">
                Especialistas em arquitetura de dados, machine learning e segurança 
                que constroem a infraestrutura do futuro financeiro
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 border-0 bg-white">
              <div className="w-24 h-24 bg-gradient-to-r from-pilotin-blue to-blue-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">CFO</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Finanças</h3>
              <p className="text-gray-600 text-sm">
                Profissionais com décadas de experiência no mercado financeiro, 
                que entendem profundamente as necessidades do setor
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 border-0 bg-white">
              <div className="w-24 h-24 bg-gradient-to-r from-pilotin-green to-green-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">CPO</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Produto</h3>
              <p className="text-gray-600 text-sm">
                Designers e product managers obcecados por criar experiências 
                que tornam o complexo simples e acessível
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-pilotin-purple to-pilotin-blue text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Quer fazer parte dessa jornada?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Seja como usuário, parceiro ou colaborador, há sempre uma forma 
            de contribuir para um futuro financeiro mais inteligente
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-pilotin-purple hover:bg-gray-100 text-lg px-8 py-4">
              Conheça nossas vagas
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-pilotin-purple text-lg px-8 py-4">
              Seja um parceiro
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sobre;
