interface ProjectProps {
  title: string;
  description: string;
  href: string;
}

export default function ProjectCard({ title, description, href }: ProjectProps) {
  return (
  
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
     
      className="w-full group block border-t border-border/20 first:border-t-0 transition-all duration-300 hover:bg-cement/40"
    >
   
      <div className="px-10 py-6 flex items-center justify-between gap-8">
  
        <div className="w-[120px] shrink-0">
          <h3 className="text-[13px] font-bold uppercase tracking-tight text-ink font-ibm-plex group-hover:translate-x-1 transition-transform duration-300">
            {title}
          </h3>
        </div>

       
        <div className="flex-1">
          <p className="text-[13px] text-secondary leading-snug font-ibm-plex transition-colors duration-300 group-hover:text-ink">
            {description}
          </p>
        </div>

        
        <div className="text-secondary/40 group-hover:text-ink transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 text-lg font-light">
          ↗
        </div>

      </div>
    </a>
   
  );
}