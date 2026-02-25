

export default function Profile() {
    return (
        <div className="flex flex-col h-full justify-between">
            <div className="space-y-6">
        <h1 className="text-2xl md:text-4xl font-bold tracking-tighter uppercase leading-[0.8] text-ink">
          Agustina<br /> Armendariz
        </h1>
        <p className="font-mono text-sm text-secondary uppercase tracking-widest max-w-[320px]">
          Frontend Developer
        </p>
      </div>
     
      <div className="space-y-10">
        
        <div className="grid grid-cols-2 gap-4 border-t border-border pt-6 font-mono text-[10px] uppercase text-border/60">
          <div>
            <p className="text-border">Location</p>
            <p className="text-ink">Mendoza, AR</p>
          </div>
          <div>
            <p className="text-border">Status</p>
            <p className="text-ink text-safety">Available for work</p>
          </div>
        </div>

        <div className="flex gap-6 font-mono text-xs uppercase">
          <a href="https://linkedin.com/in/tu-usuario" target="_blank" className="text-ink hover:text-safety transition-colors">
            LinkedIn ↗
          </a>
          <a href="https://github.com/tu-usuario" target="_blank" className="text-ink hover:text-safety transition-colors">
            GitHub ↗
          </a>
        </div>
      </div>
    </div>
  
    )
}