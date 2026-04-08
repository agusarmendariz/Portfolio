'use client'

import { toast } from 'sonner'
export default function Contact() {
const email = "armendarizagustina.m@gmail.com"

  const handleCopy = () => {
    navigator.clipboard.writeText(email)
  
    toast.success('Email copiado', {
      description: 'Ya podés pegarlo en tu bandeja de entrada.',
      duration: 3000,
    })
  }


    return(
        <div className="space-y-8">

  <p className="font-mono text-[12px] text-secondary uppercase tracking-[0.2em] flex items-center gap-2">
    Contacto
  </p>
        <div className="flex flex-col gap-6 font-ibm-plex text-[14px] tracking-tight">
      <div 
        className="pt-2 group cursor-pointer" 
        onClick={handleCopy}
      >
        <p className="text-secondary/40 uppercase text-[10px] font-mono tracking-widest mb-1 group-hover:text-secondary transition-colors">
          Email — Click para copiar
        </p>
        <p className="text-ink border-b border-transparent group-hover:border-border/40 inline-block pb-0.5 transition-all">
          {email}
        </p>
      </div>

    <div className="flex gap-8">
 
      <a 
        href="https://linkedin.com/in/agustina-armendariz" 
        target="_blank" 
        className="text-secondary hover:text-ink transition-all duration-300 border-b border-transparent hover:border-ink pb-1 uppercase text-[12px] font-mono tracking-widest"
      >
        LinkedIn ↗
      </a>
      <a 
        href="https://github.com/agusarmendariz" 
        target="_blank" 
        className="text-secondary hover:text-ink transition-all duration-300 border-b border-transparent hover:border-ink pb-1 uppercase text-[12px] font-mono tracking-widest"
      >
        GitHub ↗
      </a>

    </div>
      <div className="pt-2">
          <p className="text-secondary mb-2 font-mono uppercase text-[10px] tracking-widest">
            Estado
          </p>
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-safety opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-safety"></span>
            </span>
            <p className="text-safety font-bold tracking-tight text-[12px] uppercase">
              Disponible / Available
            </p>
          </div>
        </div>
        </div>
        </div>
    )
}