
import React from 'react';
import { IMAGES, WHATSAPP_URL, INSTAGRAM_URL } from '../constants';
import Gallery from './Gallery';

const MainSite: React.FC = () => {
  return (
    <div className="relative z-10 animate-[fadeIn_0.5s_ease-out] bg-black text-white">
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex flex-col justify-end pt-20 pb-16 overflow-hidden">
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0">
          <img 
            src={IMAGES.hero} 
            alt="Dra Isadora Luísa" 
            className="w-full h-full object-cover object-top opacity-80"
          />
          {/* Black Vignette Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-20 px-6 max-w-md mx-auto w-full">
           <div className="flex items-center gap-3 mb-4">
             <div className="h-[1px] w-8 bg-gold-500"></div>
             <h4 className="text-gold-500 font-bold uppercase tracking-[0.3em] text-[10px]">
               Lipo Papada HD & Platismoplastia
             </h4>
           </div>
           
           <h1 className="text-4xl font-playfair font-bold leading-tight text-white mb-6">
            Eu sou <span className="text-gold-400">Isadora Luísa</span>, e ajudo você a revelar sua melhor versão.
           </h1>
           
           <p className="text-gray-300 text-lg mb-10 leading-relaxed font-light">
             A ciência da beleza aplicada com a <span className="text-white font-medium italic">precisão do ouro</span> e a suavidade da natureza.
           </p>
           
           <div className="space-y-4 relative z-[100]">
             <a 
               href={WHATSAPP_URL} 
               target="_blank" 
               rel="noopener noreferrer"
               className="relative z-[110] pointer-events-auto flex items-center justify-center w-full py-5 px-8 gold-gradient text-black rounded-2xl font-black text-base shadow-[0_15px_40px_rgba(212,175,55,0.4)] btn-pulse active:scale-95 transition-all uppercase tracking-widest cursor-pointer text-center no-underline"
             >
               AGENDAR CONSULTA NO WHATSAPP
             </a>
             <div className="flex items-center justify-center gap-2">
               <div className="w-1.5 h-1.5 bg-gold-500 rounded-full animate-ping"></div>
               <p className="text-[10px] text-gold-500/60 font-bold uppercase tracking-widest">
                 Atendimento VIP • Aracaju/SE
               </p>
             </div>
           </div>
        </div>
      </section>

      {/* VIDEO SECTION */}
      <section className="py-24 bg-[#050505] relative z-20">
        <div className="px-6 max-w-md mx-auto">
          <div className="space-y-10">
            <div className="relative aspect-[9/16] rounded-[2.5rem] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.8)] border-[1px] border-white/10 group">
               <video 
                src={IMAGES.video} 
                autoPlay 
                muted 
                loop 
                playsInline
                className="w-full h-full object-cover"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
            
            <div className="space-y-6">
              <div className="h-1 w-12 gold-gradient"></div>
              <h2 className="text-2xl font-playfair font-bold text-white leading-snug">
                Sensibilidade Médica & <span className="text-gold-400">Propósito Estético</span>
              </h2>
              <p className="text-gray-400 leading-relaxed text-sm font-light italic">
                Resultados que não gritam. Eles sussurram sofisticação. Ser cuidada por quem entende que sua beleza é única.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AUTHORITY SECTION */}
      <section className="py-24 bg-black relative z-20">
        <div className="px-6 max-w-md mx-auto flex flex-col gap-12">
          <div className="relative group">
            <div className="absolute inset-0 border-[1px] border-gold-500/30 rounded-3xl translate-x-4 translate-y-4 -z-10 transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
            <img src={IMAGES.secondary} alt="Autoridade" className="rounded-3xl shadow-2xl grayscale transition-all group-hover:grayscale-0" />
          </div>
          
          <div className="space-y-6">
            <h2 className="text-3xl font-playfair font-bold text-white">Autoridade <span className="text-gold-400">&</span> Ciência</h2>
            <p className="text-gray-400 leading-relaxed text-sm">
              Cada milímetro é planejado. Minha missão é devolver a você a moldura perfeita para o seu sorriso, com técnicas que são referência em Aracaju.
            </p>
            <ul className="space-y-5">
              {[
                "Pioneira em Platismoplastia HD",
                "Foco em Naturalidade Absoluta",
                "Protocolos de Segurança Padrão Ouro",
                "Atendimento Concierge e Individual"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4">
                  <div className="w-5 h-5 gold-gradient rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>
                  </div>
                  <span className="text-gray-300 font-semibold text-xs uppercase tracking-widest">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* RESULTS GALLERY */}
      <section className="py-24 bg-[#080808] border-y border-white/5 relative z-20">
        <div className="px-6 max-w-md mx-auto text-center mb-12">
          <h2 className="text-3xl font-playfair font-bold text-white mb-4">Galeria de <span className="text-gold-400">Resultados</span></h2>
          <div className="w-12 h-[2px] bg-gold-500 mx-auto"></div>
        </div>
        <Gallery images={IMAGES.results} />
      </section>

      {/* SPECIAL GALLERY: LIPO PAPADA HD & PLATISMOPLASTIA DE CORAÇÃO */}
      <section className="py-24 bg-black relative z-20">
        <div className="px-6 max-w-md mx-auto text-center mb-12">
          <h2 className="text-3xl font-playfair font-bold text-white mb-4">Lipo papada HD e Platismoplastia de 💚</h2>
          <div className="w-16 h-[2px] gold-gradient mx-auto"></div>
        </div>
        <Gallery images={IMAGES.lifestyle} />
      </section>

      {/* WHY US SECTION */}
      <section className="py-24 bg-black relative z-20">
        <div className="px-6 max-w-md mx-auto">
          <h2 className="text-2xl font-playfair font-bold text-white text-center mb-16 uppercase tracking-widest">Diferenciais <span className="text-gold-500">Premium</span></h2>
          <div className="grid gap-8">
            {[
              { title: "Escultura Facial", desc: "Abordagem artística para definição mandibular perfeita." },
              { title: "Segurança de Elite", desc: "Equipamentos de última geração e técnica refinada." },
              { title: "Pós-Operatório VIP", desc: "Acompanhamento próximo em cada fase da cicatrização." },
              { title: "Exclusividade", desc: "Agenda limitada para garantir atenção total a você." }
            ].map((card, i) => (
              <div key={i} className="p-8 bg-white/5 border-l-2 border-gold-500 rounded-r-3xl transition-all hover:bg-white/10">
                <h3 className="text-gold-400 font-bold mb-3 uppercase tracking-widest text-sm">{card.title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 bg-[#0a0a0a] relative z-20">
        <div className="px-6 max-w-md mx-auto text-center mb-16">
           <h2 className="text-2xl font-playfair font-bold text-white">Sua Jornada de <span className="text-gold-400">Transformação</span></h2>
        </div>
        <div className="px-6 max-w-md mx-auto space-y-16 relative">
          {/* Vertical Line */}
          <div className="absolute left-[39px] top-0 bottom-0 w-[1px] bg-gold-500/20"></div>
          
          {[
            { step: "01", title: "Primeiro Contato", desc: "Nossa equipe concierge entende suas necessidades via WhatsApp." },
            { step: "02", title: "Consulta Técnica", desc: "Dra. Isadora realiza o mapeamento facial e planejamento HD." },
            { step: "03", title: "O Procedimento", desc: "A realização do sonho em um ambiente de máximo conforto." }
          ].map((item, i) => (
            <div key={i} className="flex gap-10 items-start relative z-10">
              <div className="w-12 h-12 gold-gradient rounded-full flex items-center justify-center flex-shrink-0 text-black font-bold border-4 border-black text-xs">
                {item.step}
              </div>
              <div className="pt-2">
                <h4 className="text-gold-300 font-bold uppercase tracking-widest text-sm mb-2">{item.title}</h4>
                <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="py-24 bg-black relative z-20">
        <div className="px-6 max-w-md mx-auto mb-16 text-center">
          <h2 className="text-2xl font-playfair font-bold text-white mb-4">Reconhecimento <span className="text-gold-400">Social</span></h2>
        </div>
        <div className="grid gap-6 px-6 max-w-md mx-auto opacity-80 hover:opacity-100 transition-opacity">
          {IMAGES.reviews.map((img, i) => (
            <img key={i} src={img} alt="Feedback" className="rounded-2xl border border-white/5" />
          ))}
        </div>
      </section>

      {/* LOCATION MAP */}
      <section className="py-24 bg-black border-t border-white/5 relative z-20">
        <div className="px-6 max-w-md mx-auto">
          <h2 className="text-xl font-playfair font-bold text-white mb-8 uppercase tracking-widest flex items-center gap-3">
            <span className="text-gold-500">●</span> Nossa Clínica
          </h2>
          <div className="w-full h-72 bg-white/5 rounded-[2rem] overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all duration-1000">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31326.123456!2d-37.07!3d-10.95!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71ab358c!2sAracaju%20-%20SE!5e0!3m2!1spt-BR!2sbr!4v123456789" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
            ></iframe>
          </div>
          <p className="mt-6 text-[10px] text-gray-500 font-bold uppercase tracking-[0.3em]">Aracaju | Sergipe</p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-32 bg-black relative z-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(212,175,55,0.1)_0%,_transparent_70%)]"></div>
        <div className="px-6 max-w-md mx-auto text-center space-y-10 relative z-10">
          <div className="w-24 h-24 mx-auto mb-8 relative">
            <div className="absolute inset-0 rounded-full border-2 border-gold-500 animate-ping opacity-20"></div>
            <img src={IMAGES.hero} className="w-full h-full object-cover rounded-full border-2 border-gold-500 shadow-2xl" />
          </div>
          <h2 className="text-4xl font-playfair font-bold text-white">Sua jornada VIP começa aqui.</h2>
          <p className="text-gray-400 leading-relaxed font-light">
            Não é apenas um procedimento. É o resgate da sua <span className="text-white font-bold italic">autoestima soberana.</span>
          </p>
          <div className="space-y-6 pt-4 relative z-[100]">
            <a 
              href={WHATSAPP_URL} 
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-[110] pointer-events-auto flex items-center justify-center w-full py-6 px-8 gold-gradient text-black rounded-2xl font-black text-base shadow-2xl btn-pulse active:scale-95 transition-all uppercase tracking-widest cursor-pointer text-center no-underline"
            >
              Falar com a Dra. Isadora
            </a>
            <div className="flex flex-col items-center gap-2">
              <p className="text-[10px] text-gray-600 font-bold uppercase tracking-widest">Primeira Consulta Exclusiva</p>
              <div className="h-[1px] w-12 bg-gold-500/30"></div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-20 bg-[#050505] text-center border-t border-white/5 relative z-20">
        <div className="px-6 max-w-md mx-auto space-y-10">
          <div className="space-y-3">
            <p className="text-gold-500 font-black uppercase tracking-[0.4em] text-[11px]">Dra. Isadora Luísa</p>
            <p className="text-gray-600 text-[9px] uppercase tracking-[0.2em] leading-loose">Especialista em Reabilitação do Terço Inferior e Papada</p>
          </div>
          <div className="flex justify-center gap-6 relative z-[100]">
             <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="relative z-[110] pointer-events-auto p-3 bg-white/5 rounded-full border border-white/10 text-gold-500 hover:text-white transition-colors cursor-pointer">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
             </a>
          </div>
          <div className="pt-10 border-t border-white/5">
            <p className="font-signature text-4xl text-gold-500 opacity-60">Isadora Luísa</p>
          </div>
          <p className="text-[9px] text-gray-600 tracking-widest font-bold">© {new Date().getFullYear()} • DESIGN BY PREMIUM STUDIO</p>
        </div>
      </footer>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
      `}</style>
    </div>
  );
};

export default MainSite;
