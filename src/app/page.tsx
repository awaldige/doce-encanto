
"use client";

import { useState } from "react";
import {
  ArrowRight,
  CalendarDays,
  CakeSlice,
  Camera,
  Check,
  Heart,
  Leaf,
  Menu,
  MessageCircle,
  Sparkles,
  X,
} from "lucide-react";

// CONTATOS DEMONSTRATIVOS
// Preencha somente quando tiver os dados reais.
// WhatsApp: DDI + DDD + número, somente dígitos.
// Instagram: URL completa do perfil real.
const WHATSAPP_NUMBER = "";
const INSTAGRAM_URL = "";

const products = [
  {
    name: "Bolos artesanais",
    description:
      "Bolos preparados artesanalmente, com combinações especiais de sabores e acabamentos delicados.",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=85",
    alt: "Bolo artesanal de chocolate decorado",
  },
  {
    name: "Brigadeiros gourmet",
    description:
      "Pequenas delícias cremosas, feitas com ingredientes selecionados e muito carinho.",
    image: "/imagens/brigadeiros-gourmet.jpg",
    alt: "Brigadeiros gourmet de chocolate com granulado",
  },
  {
    name: "Trufas artesanais",
    description:
      "Trufas de chocolate com recheios cremosos e sabores irresistíveis, preparadas para adoçar momentos especiais.",
    image: "/imagens/trufas-artesanais.jpg",     
    alt: "Trufas de chocolate artesanais",
  },
  {
    name: "Cupcakes personalizados",
    description:
      "Cupcakes com coberturas delicadas para presentear, comemorar e surpreender.",
    image:
      "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&w=900&q=85",
    alt: "Cupcakes decorados com cobertura",
  },
  
    {
  name: "Brownies artesanais",
  description:
    "Brownies de chocolate com textura macia e sabor intenso, perfeitos para adoçar o dia.",
  image: "/imagens/Brownies-artesanais.jpg",
  alt: "Brownies artesanais de chocolate",
},
  {
    name: "Bolos de pote",
    description:
      "Camadas de bolo, recheios cremosos e combinações irresistíveis em porções individuais.",
    image:
      "https://images.unsplash.com/photo-1590080874810-8180c3eb1016?auto=format&fit=crop&w=900&q=85",
    alt: "Bolo de chocolate em pote de vidro",
  },
  
  {
    name: "Doces finos",
    description:
      "Pequenas criações delicadas para casamentos, aniversários e celebrações especiais.",
    image: "/imagens/doces-finos.jpg",
    alt: "Doces finos decorados com detalhes delicados",
  },

  {
    name: "Caixas de doces para presente",
    description:
      "Seleções especiais de doces para surpreender alguém querido em qualquer ocasião.",
    image:
      "https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?auto=format&fit=crop&w=900&q=85",
    alt: "Seleção de doces artesanais para presentear",
  },
  {
    name: "Cookies artesanais",
    description:
      "Cookies dourados, com gotas de chocolate e aquele toque caseiro que conquista.",
    image:
      "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=900&q=85",
    alt: "Cookies artesanais com gotas de chocolate",
  },
  {
    name: "Mini bolos decorados",
    description:
      "Bolos em tamanho especial, com decoração delicada para presentear e comemorar.",
    image:
      "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=900&q=85",
    alt: "Bolo decorado com frutas e acabamento delicado",
  },
  {
  name: "Tortinhas artesanais",
  description:
    "Tortinhas delicadas com recheios cremosos e combinações especiais para momentos doces.",
  image: "/imagens/tortinhas-artesanais.jpg",
  alt: "Tortinhas artesanais com recheio cremoso",
},
  {
    name: "Pães de mel recheados",
    description:
      "Delícias macias de chocolate com recheios saborosos, perfeitas para presentear ou compartilhar.",
    image:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=900&q=85",
    alt: "Doces artesanais de chocolate",
  },

];


const gallery = [
  {
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=700&q=80",
    alt: "Bolo de chocolate artesanal",
  },
  {
    image: "/imagens/Brownies-artesanais.jpg",
    alt: "Sobremesa preparada artesanalmente",
  },
  {
    image:
      "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&w=700&q=80",
    alt: "Cupcakes decorados",
  },
  {
    image:
      "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=700&q=80",
    alt: "Bolo decorado com frutas",
  },
  {
    image:
      "https://images.unsplash.com/photo-1550617931-e17a7b70dce2?auto=format&fit=crop&w=700&q=80",
    alt: "Doces preparados para uma ocasião especial",
  },
  {
    image:
      "https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?auto=format&fit=crop&w=700&q=80",
    alt: "Seleção de doces artesanais",
  },
];

function getWhatsAppUrl(message: string) {
  const number = WHATSAPP_NUMBER.replace(/\D/g, "");

  if (!number) return null;

  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

function OrderButton({
  children,
  className = "",
  message = "Olá! Gostaria de conhecer os doces da Doce Encanto e consultar as opções de encomenda.",
}: {
  children: React.ReactNode;
  className?: string;
  message?: string;
}) {
  const url = getWhatsAppUrl(message);

  if (!url) {
    return (
      <a
        href="#contato"
        className={className}
        aria-label="Ver informações demonstrativas de contato para encomendas"
        title="WhatsApp demonstrativo: contato em configuração"
      >
        {children}
      </a>
    );
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      aria-label="Fazer encomenda pelo WhatsApp"
    >
      {children}
    </a>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: "Início", href: "#inicio" },
    { label: "Nossos doces", href: "#doces" },
    { label: "Sobre", href: "#sobre" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <main>
      <header className="site-header">
        <div className="container header-inner">
          <a href="#inicio" className="brand" aria-label="Doce Encanto - Início">
            <span className="brand-decoration" aria-hidden="true">
              <span />
              <Heart size={13} />
              <span />
            </span>
            <span className="brand-name">Doce Encanto</span>
            <span className="brand-subtitle">CONFEITARIA ARTESANAL</span>
          </a>

          <button
            type="button"
            className="mobile-menu-button"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            aria-controls="main-navigation"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <nav
            id="main-navigation"
            className={`main-nav ${menuOpen ? "main-nav-open" : ""}`}
            aria-label="Navegação principal"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <OrderButton className="button button-dark header-cta">
            <MessageCircle size={17} />
            Faça sua encomenda
          </OrderButton>
        </div>
      </header>

      <section className="hero" id="inicio">
        <div
          className="hero-image"
          role="img"
          aria-label="Bolo artesanal decorado com chocolate"
        />
        <div className="hero-overlay" />

        <div className="container hero-content">
          <span className="eyebrow">
            <span />
            CONFEITARIA ARTESANAL
            <span />
          </span>

          <h1>
            Momentos especiais merecem doces{" "}
            <em>inesquecíveis.</em>
          </h1>

          <p className="hero-description">
            Doces feitos com carinho, ingredientes selecionados e atenção a
            cada detalhe para tornar seus momentos ainda mais doces e
            especiais.
          </p>

          <div className="hero-actions">
            <OrderButton className="button button-dark">
              <MessageCircle size={18} />
              Encomendar pelo WhatsApp
            </OrderButton>

            <a href="#doces" className="button button-outline">
              Conheça nossos doces
              <ArrowRight size={17} />
            </a>
          </div>

          <div className="hero-note">
            <span>Mais que doces,</span>
            <span>criamos felicidade!</span>
            <Heart size={20} strokeWidth={1.3} />
          </div>
        </div>

        <a
          href="#doces"
          className="hero-scroll"
          aria-label="Conheça nossos doces"
        >
          <span />
        </a>
      </section>

      <section className="section products-section" id="doces">
        <div className="container">
          <div className="section-heading">
            <span className="section-ornament" aria-hidden="true">
              <span />
              <Heart size={13} />
              <span />
            </span>
            <span className="eyebrow">FEITOS PARA ENCANTAR</span>
            <h2>Nossos Doces</h2>
            <p>Sabores especiais e muito amor em cada mordida.</p>
          </div>

          <div className="product-grid">
            {products.map((product, index) => (
              <article className="product-card" key={product.name}>
                <a
                  className="product-image-link"
                  href="#contato"
                  aria-label={`Consultar informações demonstrativas sobre ${product.name}`}
                >
                  <img
                    src={product.image}
                    alt={product.alt}
                    loading={index < 2 ? "eager" : "lazy"}
                    className="product-image"
                  />
                  <span className="product-number">0{index + 1}</span>
                </a>

                <div className="product-info">
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>

                  <OrderButton
                    className="product-link"
                    message={`Olá! Gostaria de saber mais sobre ${product.name.toLowerCase()} da Doce Encanto.`}
                  >
                    Quero conhecer
                    <ArrowRight size={15} />
                  </OrderButton>
                </div>
              </article>
            ))}
          </div>

          <div className="products-bottom">
            <span>Um doce para cada ocasião.</span>
            <a href="#contato">
              Vamos conversar?
              <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </section>

      <section className="features-section" aria-label="Nossos diferenciais">
        <div className="container features-grid">
          <article className="feature">
            <div className="feature-icon" aria-hidden="true">
              <CakeSlice size={32} strokeWidth={1.35} />
            </div>
            <h3>Feitos artesanalmente</h3>
            <p>
              Cada doce é preparado com carinho, como se fosse para a nossa
              própria família.
            </p>
          </article>

          <article className="feature">
            <div className="feature-icon" aria-hidden="true">
              <Leaf size={32} strokeWidth={1.35} />
            </div>
            <h3>Ingredientes selecionados</h3>
            <p>
              Valorizamos bons ingredientes para criar combinações deliciosas
              e cheias de sabor.
            </p>
          </article>

          <article className="feature">
            <div className="feature-icon" aria-hidden="true">
              <Heart size={32} strokeWidth={1.35} />
            </div>
            <h3>Momentos mais doces</h3>
            <p>
              Cada comemoração merece um toque especial e doces feitos para
              compartilhar.
            </p>
          </article>
        </div>
      </section>

      <section className="section about-section" id="sobre">
        <div className="container about-grid">
          <div className="about-content">
            <span className="eyebrow">UM POUCO DA NOSSA HISTÓRIA</span>
            <span className="section-ornament about-ornament" aria-hidden="true">
              <span />
              <Heart size={13} />
              <span />
            </span>

            <h2>
              Feito com carinho,
              <br />
              pensado para encantar.
            </h2>

            <p>
              A Doce Encanto nasce da paixão pelos pequenos detalhes e pela
              alegria de compartilhar momentos especiais. Nossa proposta é
              transformar ingredientes selecionados em doces que encantam
              tanto pelo sabor quanto pela apresentação.
            </p>

            <p>
              Cada criação é uma oportunidade de tornar uma comemoração mais
              bonita, um presente mais especial e um encontro ainda mais
              gostoso.
            </p>

            <a href="#contato" className="button button-pink">
              Vamos conversar
              <ArrowRight size={17} />
            </a>

            <div className="about-signature">
              <Heart size={17} />
              <span>Um toque de carinho em cada detalhe.</span>
            </div>
          </div>

          <div className="about-visual">
            <img
              src="https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?auto=format&fit=crop&w=1200&q=85"
              alt="Seleção de doces artesanais em uma apresentação delicada"
              loading="lazy"
            />
            <div className="about-image-caption">
              <Sparkles size={19} />
              <span>Pequenos detalhes, grandes momentos.</span>
            </div>
            <div className="about-stamp">
              <Heart size={22} strokeWidth={1.2} />
              <span>Feito com amor</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section gallery-section" id="galeria">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">UM DOCE OLHAR</span>
            <h2>Galeria de Delícias</h2>
            <p>Inspirações doces para os seus momentos especiais.</p>
          </div>

          <div className="gallery-grid">
            {gallery.map((item, index) => (
              <a
                key={`${item.alt}-${index}`}
                className={`gallery-item gallery-item-${index + 1}`}
                href="#contato"
                aria-label={`Consultar informações demonstrativas: ${item.alt}`}
              >
                <img src={item.image} alt={item.alt} loading="lazy" />
                <span className="gallery-overlay" aria-hidden="true">
                  <Heart size={24} />
                </span>
              </a>
            ))}
          </div>

          <div className="gallery-footer">
            <span>Gostou do que viu?</span>
            <OrderButton className="text-link">
              Peça uma encomenda
              <ArrowRight size={16} />
            </OrderButton>
          </div>
        </div>
      </section>

      <section className="section ordering-section" id="como-encomendar">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">SIMPLES ASSIM</span>
            <h2>Como encomendar</h2>
            <p>Três passos para deixar sua ocasião ainda mais gostosa.</p>
          </div>

          <div className="steps-grid">
            <article className="step">
              <span className="step-number">01</span>
              <div className="step-icon" aria-hidden="true">
                <CakeSlice size={28} strokeWidth={1.4} />
              </div>
              <div>
                <h3>Escolha seus doces</h3>
                <p>
                  Explore nossas sugestões e escolha as delícias que mais
                  combinam com você.
                </p>
              </div>
            </article>

            <div className="step-arrow" aria-hidden="true">
              <ArrowRight size={24} strokeWidth={1.2} />
            </div>

            <article className="step">
              <span className="step-number">02</span>
              <div className="step-icon" aria-hidden="true">
                <MessageCircle size={28} strokeWidth={1.4} />
              </div>
              <div>
                <h3>Entre em contato</h3>
                <p>
                  Na versão demonstrativa, os canais de contato ainda estão
                  em configuração.
                </p>
              </div>
            </article>

            <div className="step-arrow" aria-hidden="true">
              <ArrowRight size={24} strokeWidth={1.2} />
            </div>

            <article className="step">
              <span className="step-number">03</span>
              <div className="step-icon" aria-hidden="true">
                <CalendarDays size={28} strokeWidth={1.4} />
              </div>
              <div>
                <h3>Combine os detalhes</h3>
                <p>
                  Quando os canais reais estiverem configurados, será possível
                  consultar sabores, quantidades e datas.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="contact-banner" id="contato">
        <div className="contact-banner-image" />
        <div className="container contact-inner">
          <div className="contact-copy">
            <span className="eyebrow">VAMOS CRIAR ALGO ESPECIAL?</span>
            <h2>Um momento doce começa com uma mensagem.</h2>
            <p>
              Esta é uma demonstração da Doce Encanto. Os canais de contato
              serão configurados quando os dados reais estiverem disponíveis.
            </p>

            <div className="contact-actions">
              <OrderButton className="button button-pink">
                <MessageCircle size={18} />
                WhatsApp demonstrativo
              </OrderButton>

              {INSTAGRAM_URL ? (
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button-light-outline"
                  aria-label="Visitar Instagram da confeitaria"
                >
                  <Camera size={18} />
                  Nosso Instagram
                </a>
              ) : (
                <a
                  href="#contato"
                  className="button button-light-outline"
                  aria-label="Instagram demonstrativo, perfil ainda não configurado"
                  title="Perfil do Instagram ainda não configurado"
                >
                  <Camera size={18} />
                  Instagram em breve
                </a>
              )}
            </div>

            <span className="contact-note">
              <Check size={15} />
              Canais de contato demonstrativos — configuração em breve.
            </span>
          </div>

          <div className="contact-decoration" aria-hidden="true">
            <Heart size={36} strokeWidth={1} />
            <span>Feito para</span>
            <span>momentos felizes.</span>
            <div />
          </div>
        </div>
      </section>

      <footer className="site-footer" id="rodape">
        <div className="container footer-main">
          <a href="#inicio" className="brand footer-brand" aria-label="Doce Encanto - Início">
            <span className="brand-decoration" aria-hidden="true">
              <span />
              <Heart size={13} />
              <span />
            </span>
            <span className="brand-name">Doce Encanto</span>
            <span className="brand-subtitle">CONFEITARIA ARTESANAL</span>
          </a>

          <nav className="footer-nav" aria-label="Navegação do rodapé">
            {navItems.map((item) => (
              <a href={item.href} key={item.href}>
                {item.label}
              </a>
            ))}
            <a href="#galeria">Galeria</a>
          </nav>

          <div className="footer-social">
            {INSTAGRAM_URL ? (
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da confeitaria"
              >
                <Camera size={19} />
              </a>
            ) : (
              <a
                href="#contato"
                aria-label="Instagram demonstrativo: perfil ainda não configurado"
                title="Instagram em breve"
              >
                <Camera size={19} />
              </a>
            )}

            <OrderButton
              className="footer-social-link"
              message="Olá! Gostaria de conhecer as opções de encomenda da Doce Encanto."
            >
              <MessageCircle size={19} />
            </OrderButton>
          </div>
        </div>

        <div className="container footer-bottom">
          <span>© 2026 Doce Encanto. Projeto demonstrativo.</span>
          <span className="footer-credit">
            Projeto demonstrativo desenvolvido por{" "}
            <strong>AW TECHNOLOGY</strong>
          </span>
        </div>
      </footer>
    </main>
  );
}
