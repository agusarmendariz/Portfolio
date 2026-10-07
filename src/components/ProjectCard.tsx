interface Project {
  id: string;
  title: string;
  description: string;
  href: string;
}

// 1. Array con los proyectos
const PROJECTS: Project[] = [
  {
    id: "notaryhub",
    title: "NotaryHub",
    description: "Plataforma de gestión notarial orientada a la centralización de trámites, control de vencimientos y organización de documentación legal.",
    href: "https://notary-hub-demo.vercel.app/",
  },
  {
    id: "trainx",
    title: "TrainX",
    description: "Plataforma de gestión de reservas y planes de gimnasio con enfoque en organización y experiencia del usuario.",
    href: "https://trainx-front.vercel.app/",
  },
  {
    id: "insspira",
    title: "Insspira",
    description: "Plataforma para descubrir y compartir inspiración visual con enfoque en interacción y creación de contenido.",
    href: "https://insspira-front.vercel.app/",
  },
];

export default function ProjectCard() {
  return (
    <>
      {PROJECTS.map((project) => (
        <a
          key={project.id}
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full group block border-t border-border/20 first:border-t-0 transition-all duration-300 hover:bg-cement/40"
        >
          <div className="px-10 py-6 flex items-center justify-between gap-8">
            <div className="w-[120px] shrink-0">
              <h3 className="text-[13px] font-bold uppercase tracking-tight text-ink font-ibm-plex group-hover:translate-x-1 transition-transform duration-300">
                {project.title}
              </h3>
            </div>

            <div className="flex-1">
              <p className="text-[13px] text-secondary leading-snug font-ibm-plex transition-colors duration-300 group-hover:text-ink">
                {project.description}
              </p>
            </div>

            <div className="text-secondary/40 group-hover:text-ink transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 text-lg font-light">
              ↗
            </div>
          </div>
        </a>
      ))}
    </>
  );
}