
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Contato = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    empresa: '',
    mensagem: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
    alert('Mensagem enviada com sucesso! Em breve entraremos em contato.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-pilotin-green/5 to-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
              Vamos conversar sobre o 
              <span className="text-pilotin-green"> seu futuro financeiro</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Estamos aqui para responder suas dúvidas, entender suas necessidades 
              e mostrar como a Pilotin pode transformar sua relação com dinheiro.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8 border-0 shadow-xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Envie sua mensagem
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="nome">Nome *</Label>
                  <Input
                    id="nome"
                    name="nome"
                    type="text"
                    required
                    value={formData.nome}
                    onChange={handleChange}
                    className="h-12"
                    placeholder="Seu nome completo"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">E-mail *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="h-12"
                    placeholder="seu@email.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="empresa">Empresa (opcional)</Label>
                  <Input
                    id="empresa"
                    name="empresa"
                    type="text"
                    value={formData.empresa}
                    onChange={handleChange}
                    className="h-12"
                    placeholder="Nome da sua empresa"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="mensagem">Mensagem *</Label>
                  <Textarea
                    id="mensagem"
                    name="mensagem"
                    required
                    value={formData.mensagem}
                    onChange={handleChange}
                    className="min-h-[120px]"
                    placeholder="Conte-nos como podemos ajudar você..."
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-pilotin-green hover:bg-green-700 text-lg py-3"
                >
                  Enviar mensagem
                </Button>
              </form>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Outras formas de contato
                </h2>
                <div className="space-y-6">
                  <Card className="p-6 hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-pilotin-green rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">E-mail</h3>
                        <p className="text-gray-600">contato@pilotin.app</p>
                        <p className="text-gray-600">suporte@pilotin.app</p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-pilotin-blue rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">WhatsApp</h3>
                        <p className="text-gray-600">+55 (11) 99999-9999</p>
                        <p className="text-gray-500 text-sm">Segunda a sexta, 9h às 18h</p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-pilotin-purple rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Endereço</h3>
                        <p className="text-gray-600">
                          Av. Paulista, 1000 - Bela Vista<br />
                          São Paulo, SP - 01310-100
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Siga-nos nas redes sociais
                </h3>
                <div className="flex space-x-4">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-pilotin-blue text-pilotin-blue hover:bg-pilotin-blue hover:text-white"
                  >
                    LinkedIn
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-pilotin-purple text-pilotin-purple hover:bg-pilotin-purple hover:text-white"
                  >
                    Instagram
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-pilotin-green text-pilotin-green hover:bg-pilotin-green hover:text-white"
                  >
                    Twitter
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Perguntas frequentes
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Respostas rápidas para as dúvidas mais comuns sobre a Pilotin
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-6 border-0 bg-white hover:shadow-lg transition-all duration-300">
              <h3 className="font-semibold text-gray-900 mb-3">
                Como meus dados são protegidos?
              </h3>
              <p className="text-gray-600 text-sm">
                Utilizamos criptografia de ponta a ponta e seguimos todos os protocolos 
                de segurança do Open Finance regulamentados pelo Banco Central.
              </p>
            </Card>

            <Card className="p-6 border-0 bg-white hover:shadow-lg transition-all duration-300">
              <h3 className="font-semibold text-gray-900 mb-3">
                A Pilotin é gratuita?
              </h3>
              <p className="text-gray-600 text-sm">
                Sim! Para pessoas físicas, oferecemos um plano gratuito com funcionalidades 
                essenciais. Para empresas, temos planos customizados.
              </p>
            </Card>

            <Card className="p-6 border-0 bg-white hover:shadow-lg transition-all duration-300">
              <h3 className="font-semibold text-gray-900 mb-3">
                Quais bancos são suportados?
              </h3>
              <p className="text-gray-600 text-sm">
                Suportamos todos os bancos participantes do Open Finance, 
                incluindo Bradesco, Itaú, Santander, Banco do Brasil e mais de 100 instituições.
              </p>
            </Card>

            <Card className="p-6 border-0 bg-white hover:shadow-lg transition-all duration-300">
              <h3 className="font-semibold text-gray-900 mb-3">
                Como funciona a integração para empresas?
              </h3>
              <p className="text-gray-600 text-sm">
                Oferecemos APIs simples e documentação completa. 
                Nossa equipe técnica acompanha todo o processo de integração.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-pilotin-green to-green-600 text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ainda tem dúvidas?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Nossa equipe está sempre disponível para ajudar você a entender 
            como a Pilotin pode transformar sua vida financeira
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-pilotin-green hover:bg-gray-100 text-lg px-8 py-4">
            Agendar conversa
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contato;
