
import React from 'react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-xl">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight animate-fade-in">
                Sua vida financeira, mais leve, mais 
                <span className="text-pilotin-purple"> inteligente</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Conectamos seus dados do Open Finance para transformar sua relação com dinheiro.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-pilotin-purple hover:bg-pilotin-purple-dark text-white px-8">
                  Quero pilotar minhas finanças
                </Button>
                <Button variant="outline" size="lg" className="border-pilotin-purple text-pilotin-purple hover:bg-pilotin-purple hover:text-white px-8">
                  Sou empresa
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-[460px] relative">
                {/* Abstract purple gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-pilotin-purple/30 to-pilotin-blue/20 rounded-2xl transform rotate-3 animate-float"></div>
                
                {/* Dashboard mockup */}
                <div className="absolute inset-0 bg-white/90 backdrop-blur-sm rounded-xl shadow-xl p-6 transform -rotate-2">
                  <div className="border-b pb-4 mb-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 bg-pilotin-purple rounded-md"></div>
                      <h3 className="font-bold text-lg text-gray-900">Dashboard Financeiro</h3>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <div>
                        <p className="text-sm text-gray-500">Saldo Total</p>
                        <p className="text-xl font-bold text-gray-900">R$ 7.842,50</p>
                      </div>
                      <div className="flex items-center text-pilotin-green">
                        <span className="text-lg font-bold">+2.4%</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <div className="bg-gray-100 rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <p className="font-medium">Gastos por Categoria</p>
                        <p className="text-sm text-gray-500">Maio 2024</p>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center">
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-pilotin-purple h-2 rounded-full" style={{width: '65%'}}></div>
                          </div>
                          <span className="ml-2 text-sm">65%</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-pilotin-blue h-2 rounded-full" style={{width: '40%'}}></div>
                          </div>
                          <span className="ml-2 text-sm">40%</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-pilotin-green h-2 rounded-full" style={{width: '25%'}}></div>
                          </div>
                          <span className="ml-2 text-sm">25%</span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-pilotin-purple text-white p-4 rounded-lg">
                      <div className="flex items-start">
                        <div className="p-2 bg-white/20 rounded-lg mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium">Dica para você</p>
                          <p className="text-sm opacity-90">Você economizou 15% mais este mês comparado a Abril. Continue assim!</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Soluções para todos os perfis
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tecnologia e dados do Open Finance para pessoas e empresas
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* For Individuals */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="mb-6">
                <div className="w-16 h-16 bg-pilotin-purple/10 rounded-xl flex items-center justify-center group-hover:bg-pilotin-purple/20 transition-all duration-300">
                  <svg className="w-8 h-8 text-pilotin-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Para Pessoas</h3>
              <p className="text-gray-600 mb-8">
                Controle seu dinheiro, organize sua vida financeira e alcance seus objetivos com insights personalizados.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="w-6 h-6 text-pilotin-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-600">Visão geral de todos seus bancos e cartões</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="w-6 h-6 text-pilotin-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-600">Categorização automática de gastos</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="w-6 h-6 text-pilotin-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-600">Dicas financeiras personalizadas</p>
                </div>
              </div>
              <Link to="/pessoas">
                <Button className="w-full bg-pilotin-purple hover:bg-pilotin-purple-dark">
                  Saiba mais
                </Button>
              </Link>
            </div>

            {/* For Companies */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="mb-6">
                <div className="w-16 h-16 bg-pilotin-blue/10 rounded-xl flex items-center justify-center group-hover:bg-pilotin-blue/20 transition-all duration-300">
                  <svg className="w-8 h-8 text-pilotin-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Para Empresas</h3>
              <p className="text-gray-600 mb-8">
                Soluções inteligentes para análise, concessão, monitoramento e recuperação de crédito com Open Finance.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="w-6 h-6 text-pilotin-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-600">Validação avançada de dados cadastrais</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="w-6 h-6 text-pilotin-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-600">Fluxo de caixa histórico e preditivo</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="w-6 h-6 text-pilotin-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-600">Monitoramento contínuo e alertas</p>
                </div>
              </div>
              <Link to="/empresas">
                <Button variant="outline" className="w-full border-pilotin-blue text-pilotin-blue hover:bg-pilotin-blue hover:text-white">
                  Saiba mais
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              O que estão dizendo sobre nós
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Milhares de usuários já estão transformando sua vida financeira com a Pilotin
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <div className="w-12 h-12 bg-pilotin-purple/20 rounded-full flex items-center justify-center">
                    <span className="text-pilotin-purple font-semibold">MC</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Maria Costa</h4>
                  <p className="text-sm text-gray-500">Usuária desde 2023</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "A Pilotin ajudou muito a organizar minhas finanças. Consigo ver tudo em um só lugar e as dicas são realmente úteis!"
              </p>
              <div className="flex mt-4 text-pilotin-orange">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <div className="w-12 h-12 bg-pilotin-blue/20 rounded-full flex items-center justify-center">
                    <span className="text-pilotin-blue font-semibold">RS</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Rafael Silva</h4>
                  <p className="text-sm text-gray-500">Empresário</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Nossa empresa melhorou muito a taxa de aprovação de crédito desde que começamos a usar a Pilotin. Os dados são muito precisos."
              </p>
              <div className="flex mt-4 text-pilotin-orange">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <div className="w-12 h-12 bg-pilotin-green/20 rounded-full flex items-center justify-center">
                    <span className="text-pilotin-green font-semibold">JO</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Julia Oliveira</h4>
                  <p className="text-sm text-gray-500">Analista Financeira</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "A integração com Open Finance é perfeita! Nunca foi tão fácil entender o comportamento financeiro dos clientes."
              </p>
              <div className="flex mt-4 text-pilotin-orange">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
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
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" className="bg-white text-pilotin-purple hover:bg-gray-100 text-lg px-8">
              Começar gratuitamente
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8">
              Fale com nosso time
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
