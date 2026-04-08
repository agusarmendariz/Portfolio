import Image from "next/image";

const activity = [
  { 
    category: "Podcast", 
    title: "Pasa a la acción — Sofía Contreras", 
    url: "https://open.spotify.com/show/5yS1w7rWxQzOxHtvnqURpw?si=112a212378b64119",
    img: "/images/pasaAlaAccion.jpeg"
  },
  { 
    category: "Book", 
    title: "Zensorialmente — Estanislao Bachrach", 
    url: "https://vreditoras.com.ar/libro/1155/zensorialmente",
    img: "/images/zensorialmente.webp"
  },
  { 
    category: "Music", 
    title: "Bocanada — Gustavo Cerati", 
    url: "https://open.spotify.com/intl-es/album/2rIdWbXPjcq8K7BCccBhhC?si=NiHQhj_GRTqRAt2DXFqRwQy",
    img: "/images/bocanada.jpeg"
  },
  { 
    category: "Music", 
    title: "Love Deluxe — Sade", 
    url: "https://open.spotify.com/intl-es/album/2PfGKHtqEX58bHtkQxJnWG?si=Y11fCVlQRleNhYF9zUJW6g",
    img: "/images/sade.jpeg"
  },
  

];

export default function Feed() {
  return (
    <div className="font-ibm-plex">
      <p className="font-mono text-[12px] uppercase tracking-[0.3em] text-secondary mb-10 ">
        Interes / Consumo
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16">
        {activity.map((item, index) => (
          <a 
            key={index} 
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-5 py-3 border-b border-border/5 group hover:bg-cement/40 transition-all duration-300"
          >
            
            <div className="w-[58px] h-[58px] rounded-lg bg-zinc-100 border border-border/10 overflow-hidden shrink-0 relative shadow-sm">
              <Image 
                src={item.img} 
                alt={item.title}
                width={58}
                height={58}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

     
            <div className="flex flex-col flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-0.5">
                <span className="font-mono text-[9px] uppercase text-secondary tracking-widest">
                  {item.category}
                </span>
              </div>
              <p className="text-[13px] text-ink font-semibold tracking-tight leading-tight truncate group-hover:text-safety transition-colors">
                {item.title}
              </p>
            </div>

            <div className="text-secondary group-hover:text-ink transition-all duration-500 transform group-hover:translate-x-1 pr-2">
              <span className="text-xl font-extralight leading-none">→</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}