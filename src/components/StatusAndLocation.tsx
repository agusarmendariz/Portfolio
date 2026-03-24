
export default function StatusAndLocation() {
    
    return(
   <div className="flex flex-row justify-between items-start gap-4">

      <div className="flex-1">
          <p className="text-secondary mb-1 font-mono uppercase text-[10px] tracking-widest">
            Ubicación
          </p>
          <p className="text-ink font-medium tracking-tight text-[14px]">
            Mendoza, AR
          </p>
        </div>

        {/* Estado con el ping animation */}
        <div className="flex-1">
          <p className="text-secondary mb-1 font-mono uppercase text-[10px] tracking-widest">
            Estado
          </p>
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-safety opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-safety"></span>
            </span>
            <p className="text-safety font-bold tracking-tight text-[14px]">
              Disponible /Available
            </p>
          </div>
        </div>

      </div>
  );
   
}