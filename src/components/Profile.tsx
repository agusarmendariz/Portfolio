

export default function Profile() {
  
  return (
    <div className="flex flex-col h-full justify-between">
      
      <div className="space-y-12">
        <div className="space-y-4">
          <h1 className="text-xl md:text-4xl font-bold tracking-tighter uppercase leading-[0.8] text-ink">
            Agustina<br /> Armendariz
          </h1>
          <p className="font-mono text-[12px] text-secondary uppercase tracking-[0.2em] flex items-center gap-2">
            Frontend Developer <span className="text-border">/</span>
          </p>
        </div>

        
        <p className="text-[14px] md:text-[15px] text-secondary leading-relaxed max-w-[280px]">
         Desarrollo interfaces <span className="text-ink font-medium">minimalistas de alto rendimiento.</span> Transformo ideas complejas en experiencias digitales fluidas.
        </p>

        
      </div>

      
    </div>

      
  )
}
  
