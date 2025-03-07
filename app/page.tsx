import Image from "next/image"
import Link from "next/link"
import { Play, Heart, Camera, Film, Mail, Phone, Instagram, Facebook } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl">
            <Film className="h-6 w-6" />
            <span>LOOPN Filmes</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#inicio" className="text-sm font-medium hover:text-primary">
              Início
            </Link>
            <Link href="#sobre" className="text-sm font-medium hover:text-primary">
              Sobre
            </Link>
            <Link href="#portfolio" className="text-sm font-medium hover:text-primary">
              Portfólio
            </Link>
            <Link href="#servicos" className="text-sm font-medium hover:text-primary">
              Serviços
            </Link>
            <Link href="#depoimentos" className="text-sm font-medium hover:text-primary">
              Depoimentos
            </Link>
            <Link href="#contato" className="text-sm font-medium hover:text-primary">
              Contato
            </Link>
          </nav>
          <Button variant="outline" size="sm" className="md:hidden">
            Menu
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section id="inicio" className="relative">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <div className="relative h-[90vh] w-full overflow-hidden">
            <Image
              src="/placeholder.svg?height=1080&width=1920"
              alt="Casal em seu casamento"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <div className="container px-4 text-center">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                LOOPN Filmes de Casamento
              </h1>
              <p className="mt-6 max-w-2xl mx-auto text-xl text-white">
                Eternizando momentos especiais com filmes que contam a sua história de amor
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="rounded-full">
                  Ver Portfólio
                </Button>
                <Button size="lg" variant="outline" className="rounded-full bg-white/10 text-white hover:bg-white/20">
                  Solicitar Orçamento
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="sobre" className="py-20 bg-muted/50">
          <div className="container px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight">Sobre a LOOPN Filmes</h2>
                <p className="mt-4 text-muted-foreground">
                  Somos uma equipe apaixonada por contar histórias através de imagens. Especializados em filmes de
                  casamento, capturamos cada momento especial com um olhar único e sensível.
                </p>
                <p className="mt-4 text-muted-foreground">
                  Nossa missão é criar filmes emocionantes que preservam a essência do seu dia especial, com uma
                  abordagem moderna e cinematográfica que transforma memórias em arte.
                </p>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="flex flex-col items-center p-4 bg-background rounded-lg shadow-sm">
                    <Heart className="h-8 w-8 text-primary mb-2" />
                    <h3 className="font-medium">Paixão</h3>
                    <p className="text-sm text-center text-muted-foreground">Amamos o que fazemos</p>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-background rounded-lg shadow-sm">
                    <Camera className="h-8 w-8 text-primary mb-2" />
                    <h3 className="font-medium">Qualidade</h3>
                    <p className="text-sm text-center text-muted-foreground">Equipamentos premium</p>
                  </div>
                </div>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=800&width=600"
                  alt="Nossa equipe trabalhando"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-20">
          <div className="container px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight">Nosso Portfólio</h2>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                Confira alguns dos nossos trabalhos mais recentes e deixe-se emocionar com as histórias que contamos
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="group relative overflow-hidden rounded-lg">
                  <div className="aspect-video relative">
                    <Image
                      src={`/placeholder.svg?height=720&width=1280&text=Casamento ${item}`}
                      alt={`Casamento ${item}`}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Button size="icon" variant="secondary" className="rounded-full">
                        <Play className="h-6 w-6" />
                      </Button>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium">Casamento de Ana & Pedro</h3>
                    <p className="text-sm text-muted-foreground">Florianópolis, 2023</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Button size="lg" variant="outline">
                Ver Mais Trabalhos
              </Button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="servicos" className="py-20 bg-muted/50">
          <div className="container px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight">Nossos Serviços</h2>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                Oferecemos pacotes personalizados para atender às necessidades do seu grande dia
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {" "}
              {/* Updated grid class */}
              <div className="bg-background p-6 rounded-lg shadow-sm">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Film className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-2">Filme Completo</h3>
                <p className="text-muted-foreground mb-4">
                  Documentamos todo o seu dia especial, desde os preparativos até a festa, criando um filme completo com
                  duração de 20-30 minutos.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Cobertura completa (até 12h)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Equipe com 2 cinegrafistas</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Edição cinematográfica</span>
                  </li>
                </ul>
                <Button className="w-full">Saiba Mais</Button>
              </div>
              <div className="bg-background p-6 rounded-lg shadow-sm border border-primary">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-2">Pacote Premium</h3>
                <p className="text-muted-foreground mb-4">
                  Nossa opção mais completa, com filme, teaser e ensaio pré-wedding para contar sua história de forma
                  única.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Tudo do pacote Completo</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Ensaio pré-wedding</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Teaser para redes sociais</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Drone (conforme local)</span>
                  </li>
                </ul>
                <Button className="w-full">Pacote Recomendado</Button>
              </div>
              <div className="bg-background p-6 rounded-lg shadow-sm">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Camera className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-2">Teaser</h3>
                <p className="text-muted-foreground mb-4">
                  Um filme curto e emocionante de 3-5 minutos, perfeito para compartilhar nas redes sociais.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Cobertura de 8h</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>1 cinegrafista</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Entrega em 15 dias</span>
                  </li>
                </ul>
                <Button className="w-full">Saiba Mais</Button>
              </div>
              <div className="bg-background p-6 rounded-lg shadow-sm">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-2">Same Day Edit</h3>
                <p className="text-muted-foreground mb-4">
                  Edição em tempo real do seu casamento, pronta para ser exibida durante a festa para seus convidados.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Edição no mesmo dia</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Equipe com 3 profissionais</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Exibição durante a festa</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Duração de 3-5 minutos</span>
                  </li>
                </ul>
                <Button className="w-full">Saiba Mais</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="depoimentos" className="py-20">
          <div className="container px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight">Depoimentos</h2>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">O que nossos clientes dizem sobre nós</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Mariana e Lucas",
                  date: "Maio 2023",
                  quote:
                    "A LOOPN Filmes superou todas as nossas expectativas! O filme ficou incrível e conseguiu capturar perfeitamente a emoção do nosso dia. Recomendamos muito!",
                },
                {
                  name: "Juliana e Rafael",
                  date: "Outubro 2023",
                  quote:
                    "Profissionais incríveis! Discretos durante o evento e o resultado final nos emocionou demais. Cada detalhe foi capturado com sensibilidade e arte.",
                },
                {
                  name: "Camila e Bruno",
                  date: "Janeiro 2024",
                  quote:
                    "Contratar a LOOPN foi uma das melhores decisões que tomamos para nosso casamento. O filme ficou tão especial que assistimos várias vezes e sempre nos emocionamos.",
                },
              ].map((testimonial, index) => (
                <div key={index} className="bg-background p-6 rounded-lg shadow-sm">
                  <div className="flex items-center mb-4">
                    <div className="h-12 w-12 rounded-full bg-muted overflow-hidden mr-4">
                      <Image
                        src={`/placeholder.svg?height=100&width=100&text=${testimonial.name.charAt(0)}`}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                      />
                    </div>
                    <div>
                      <h3 className="font-medium">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground">{testimonial.date}</p>
                    </div>
                  </div>
                  <p className="italic">"{testimonial.quote}"</p>
                  <div className="mt-4 flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container px-4 text-center">
            <h2 className="text-3xl font-bold tracking-tight">Pronto para eternizar seu grande dia?</h2>
            <p className="mt-4 max-w-2xl mx-auto text-primary-foreground/90">
              Entre em contato conosco para verificar disponibilidade e receber um orçamento personalizado
            </p>
            <Button size="lg" variant="secondary" className="mt-8">
              Solicitar Orçamento
            </Button>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contato" className="py-20">
          <div className="container px-4">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold tracking-tight">Entre em Contato</h2>
                <p className="mt-4 text-muted-foreground">
                  Estamos ansiosos para conhecer sua história e discutir como podemos criar um filme inesquecível do seu
                  casamento.
                </p>
                <div className="mt-8 space-y-4">
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-primary mr-3" />
                    <span>contato@loopnfilmes.com.br</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-primary mr-3" />
                    <span>(00) 12345-6789</span>
                  </div>
                  <div className="flex items-center">
                    <Instagram className="h-5 w-5 text-primary mr-3" />
                    <span>@loopnfilmes</span>
                  </div>
                  <div className="flex items-center">
                    <Facebook className="h-5 w-5 text-primary mr-3" />
                    <span>LOOPN Filmes de Casamento</span>
                  </div>
                </div>
                <div className="mt-8 flex space-x-4">
                  <Button size="icon" variant="outline">
                    <Instagram className="h-5 w-5" />
                  </Button>
                  <Button size="icon" variant="outline">
                    <Facebook className="h-5 w-5" />
                  </Button>
                </div>
              </div>
              <div className="bg-muted/30 p-6 rounded-lg">
                <form className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Nome
                      </label>
                      <input
                        id="name"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Seu nome"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Telefone
                    </label>
                    <input
                      id="phone"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="(00) 00000-0000"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="date" className="text-sm font-medium">
                      Data do Casamento
                    </label>
                    <input
                      id="date"
                      type="date"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Mensagem
                    </label>
                    <textarea
                      id="message"
                      className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Conte-nos um pouco sobre seu casamento e como podemos ajudar"
                    />
                  </div>
                  <Button className="w-full">Enviar Mensagem</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-muted/30">
        <div className="container px-4 py-8 md:py-12">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            <div>
              <div className="flex items-center gap-2 font-bold text-xl mb-4">
                <Film className="h-6 w-6" />
                <span>LOOPN Filmes</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Eternizando momentos especiais com filmes que contam a sua história de amor.
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-4">Links Rápidos</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#inicio" className="text-muted-foreground hover:text-foreground">
                    Início
                  </Link>
                </li>
                <li>
                  <Link href="#sobre" className="text-muted-foreground hover:text-foreground">
                    Sobre
                  </Link>
                </li>
                <li>
                  <Link href="#portfolio" className="text-muted-foreground hover:text-foreground">
                    Portfólio
                  </Link>
                </li>
                <li>
                  <Link href="#servicos" className="text-muted-foreground hover:text-foreground">
                    Serviços
                  </Link>
                </li>
                <li>
                  <Link href="#contato" className="text-muted-foreground hover:text-foreground">
                    Contato
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4">Serviços</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Filme Completo
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Pacote Premium
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Teaser
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Ensaio Pré-Wedding
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4">Contato</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span className="text-muted-foreground">contato@loopnfilmes.com.br</span>
                </li>
                <li className="flex items-center">
                  <Phone className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span className="text-muted-foreground">(00) 12345-6789</span>
                </li>
                <li className="flex items-center">
                  <Instagram className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span className="text-muted-foreground">@loopnfilmes</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} LOOPN Filmes de Casamento. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

