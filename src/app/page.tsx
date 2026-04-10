import Profile from "@/components/Profile";
import ProjectCard from '@/components/ProjectCard';
import Footer from "@/components/Footer";
import Contact from '@/components/Contact';
import Feed from "@/components/Consuming";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-cement px-6 lg:px-40 py-10 lg:py-20 flex flex-col items-center">
      
      <div className="flex flex-col lg:grid lg:grid-cols-[380px_1fr] w-full max-w-[1100px] gap-8 items-start">
      <aside className="w-full flex flex-col gap-6">
  
        <section className="bg-card rounded-2xl p-6 md:p-10 border border-border/40 shadow-sm">
          <Profile />
        </section>

        <section id="contacto" className="bg-card rounded-2xl p-6 md:p-8 border border-border/40 shadow-sm">
          <Contact />
        </section>

      </aside>

      <main className="w-full flex flex-col gap-6">
          
          <section className="bg-card rounded-2xl border border-border/40 shadow-sm overflow-hidden p-10">
            <h2 className="text-2xl font-bold text-ink leading-[1.1] tracking-tighter uppercase max-w-md font-ibm-plex">
              ¿Buscás transformar una idea compleja en una interfaz que se sienta intuitiva?
            </h2>
            <div className="mt-8">
              <a href="#contacto" className="text-[11px] font-mono uppercase tracking-widest text-secondary hover:text-ink border-b border-border pb-1 transition-all">
                Contactame ↗
              </a>
            </div>
          </section>

          <section className="bg-card rounded-2xl border border-border/40 shadow-sm overflow-hidden flex flex-col">
            <div className="px-8 md:px-12 pt-8 pb-4">
               <p className="font-mono text-[12px] text-secondary uppercase tracking-[0.2em]">
                Proyectos
              </p>
            </div>

            <div className="flex flex-col">
              <ProjectCard 
                title="TrainX" 
                description="Plataforma de gestión de reservas y planes de gimnasio con enfoque en organización y experiencia del usuario." 
                href="https://trainx-front.vercel.app/"
              />
              <ProjectCard 
                title="Insspira" 
                description="Plataforma para descubrir y compartir inspiración visual con enfoque en interacción y creación de contenido." 
                href="https://insspira-front.vercel.app/"
              />
              <ProjectCard 
                title="Applestore" 
                description="Rediseño de experiencia de e-commerce con enfoque en jerarquía visual." 
                href="#"
              />
              <div className="h-6" />
            </div>
          </section>
        </main>
    </div>
   
      <div className="w-full max-w-[1100px] mb-8 mt-6">
        <section className="bg-card rounded-2xl p-6 md:p-10  border border-border/40 shadow-sm">
          <Feed />
        </section>
      </div>

      <div className="w-full max-w-[1100px] mt-8 lg:mt-16 mb-8 border-t border-border/5  px-2">
        <Footer/>
      </div>
    
    </div>
  );
} 