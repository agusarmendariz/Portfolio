interface ProjectProps {
  title: string;
  description: string;
  href: string;
}

export default function ProjectCard({ title, description,href }: ProjectProps) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="w-full group block border-t border-border/30 first:border-t-0 transition-all duration-500 hover:bg-cement/10 cursor-pointer"
    >
    <div className="w-full group border-t border-border/30 first:border-t-0 transition-all duration-500 hover:bg-cement/10">
      
      <div className="px-10 py-12 flex flex-col md:flex-row md:items-baseline justify-between gap-10">
        
        <div className="md:w-1/4">
          <h3 className="text-base font-bold uppercase tracking-wider text-ink font-ibm-plex">
            {title}
          </h3>
        </div>

        <div className="flex-1 max-w-xl">
          <p className="text-base text-secondary leading-relaxed font-ibm-plex transition-colors duration-500 group-hover:text-ink">
            {description}
          </p>
        </div>

        <div className="text-secondary/50 group-hover:text-ink transition-all duration-500 group-hover:rotate-45 text-2xl">
          ↗
        </div>

      </div>
    </div>
    </a>
  );
}