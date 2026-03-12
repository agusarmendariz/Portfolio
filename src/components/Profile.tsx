

export default function Profile() {
  return (
    <div className="flex flex-col h-full justify-between">
      
      <div className="space-y-12">
        <div className="space-y-4">
          <h1 className="text-xl md:text-4xl font-bold tracking-tighter uppercase leading-[0.8] text-ink">
            Agustina<br /> Armendariz
          </h1>
          <p className="font-mono text-[11px] text-secondary uppercase tracking-[0.2em] flex items-center gap-2">
            Frontend Developer <span className="text-border">/</span>
          </p>
        </div>

        
        <p className="text-[14px] md:text-[15px] text-secondary leading-relaxed max-w-[280px]">
         Desarrollo interfaces <span className="text-ink font-medium">minimalistas de alto rendimiento</span> transformando ideas complejas en experiencias digitales fluidas
        </p>

        <div className="flex gap-8 font-mono text-[10px] uppercase tracking-widest">
          <a 
            href="https://linkedin.com/in/agustina-armendariz" 
            target="_blank" 
            className="text-secondary hover:text-ink transition-all duration-300 border-b border-transparent hover:border-ink pb-1"
          >
            LinkedIn ↗
          </a>
          <a 
            href="https://github.com/agusarmendariz" 
            target="_blank" 
            className="text-secondary hover:text-ink transition-all duration-300 border-b border-transparent hover:border-ink pb-1"
          >
            GitHub ↗
          </a>
          <a 
            href="mailto:armendarizagustina.m@gmail.com" 
            className="text-secondary hover:text-ink transition-all duration-300 border-b border-transparent hover:border-ink pb-1"
          >
            Email ↗
          </a>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 border-t border-border pt-8 font-mono text-[10px] uppercase">
        <div>
          <p className="text-secondary mb-1">Ubicación</p>
          <p className="text-ink font-medium tracking-tight">Mendoza, AR</p>
        </div>
        <div>
          <p className="text-secondary mb-1">Estado</p>
          <div className="flex items-center gap-2">
             
             <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-safety opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-safety"></span>
             </span>
             <p className="text-safety font-bold tracking-tight">
              Disponible para nuevos proyectos / Available for work
             </p>
          </div>
        </div>
      </div>
    </div>
  )
}
  
