import Profile from "@/components/Profile";
import ProjectCard from '@/components/ProjectCard';
import StatusAndLocation from '@/components/StatusAndLocation';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-cement lg:px-40 py-20 flex justify-center">
      
      <div className="flex w-full max-w-[1100px] gap-8 items-start">
      <aside className="w-[40%] min-w-[380px] flex flex-col gap-6">
  
        <section className="bg-white rounded-2xl p-10 border border-border/40 shadow-sm">
          <Profile />
        </section>

        <section className="bg-white rounded-2xl p-10 border border-border/40 shadow-sm">
          <Contact />
        </section>

        
        <section className="bg-white rounded-2xl p-10 border border-border/40 shadow-sm">
          <StatusAndLocation />
        </section>

      </aside>

      <main className="w-[60%] flex flex-col gap-8">
  
  {/* BLOQUE PRINCIPAL: FRASE + PROYECTOS */}
  <section className="bg-white rounded-2xl border border-border/40 shadow-sm overflow-hidden flex flex-col">
    
    {/* 1. La Frase Gatillo */}
    <div className="p-12 border-b border-border/30">
      <h2 className="text-2xl font-bold text-ink leading-[1.1] tracking-tighter uppercase max-w-md font-ibm-plex">
        ¿Buscás transformar una idea compleja en una interfaz que se sienta intuitiva?
      </h2>
      <div className="mt-8">
        <a href="mailto:armendarizagustina.m@gmail.com" className="text-[11px] font-mono uppercase tracking-widest text-secondary hover:text-ink border-b border-border pb-1 transition-all">
          Contactame ↗
        </a>
      </div>
    </div>

    {/* 2. La Lista de Proyectos (pegada a la frase) */}
    <div className="flex flex-col">
      <ProjectCard 
        title="TrainX" 
        description="Plataforma de entrenamiento enfocada en rendimiento y métricas avanzadas." 
        href="#"
      />
      <ProjectCard 
        title="Insspira" 
        description="Curaduría visual y recursos para creativos digitales." 
        href="#"
      />
      <ProjectCard 
        title="Applestore" 
        description="Rediseño de experiencia de e-commerce con enfoque en jerarquía visual." 
        href="#"
      />
      
      {/* Espacio final sutil */}
      <div className="h-10 border-t border-border/10" />
    </div>
  </section>

  {/* BLOQUES FINALES: INTERÉS / CONSUMO (Próximamente abajo) */}
  <div className="grid grid-cols-2 gap-8 mb-20">
    <section className="bg-white rounded-2xl p-10 border border-border/40 shadow-sm min-h-[200px]">
       <p className="font-mono text-[10px] uppercase tracking-widest text-secondary">Intereses</p>
    </section>
    <section className="bg-white rounded-2xl p-10 border border-border/40 shadow-sm min-h-[200px]">
       <p className="font-mono text-[10px] uppercase tracking-widest text-secondary">Consumo</p>
    </section>
  </div>

</main>
    </div>
    </div>
  );
}