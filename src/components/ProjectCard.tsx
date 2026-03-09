

export default function ProjectCard({ title }: { title: string }) {
  return (
    <div className="w-full bg-white rounded-2xl overflow-hidden group transition-all duration-500 hover:translate-y-[-4px] border border-border/40 hover:border-border hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
      
      {/* Media Placeholder: Gris muy suave que combina con el cemento */}
      <div className="aspect-video w-full bg-cement/50 flex items-center justify-center border-b border-border/20 transition-colors group-hover:bg-cement">
        <span className="text-secondary/30 font-mono text-[10px] uppercase tracking-[0.3em]">
          Media Placeholder
        </span>
      </div>

      {/* Contenido */}
      <div className="p-8 lg:p-10 flex justify-between items-center bg-white">
        <h3 className="text-2xl lg:text-4xl font-bold uppercase tracking-tighter text-ink transition-colors duration-300">
          {title}
        </h3>
        
        {/* El círculo con la flecha: En hover se llena de negro (ink) */}
        <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-secondary transition-all duration-500 group-hover:bg-ink group-hover:text-white group-hover:border-ink">
          <span className="text-xl transform group-hover:rotate-45 transition-transform duration-500">
            ↗
          </span>
        </div>
      </div>
    </div>
  );
}