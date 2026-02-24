

export default function Header() {
    return (
        <header className="w-full border-b border-border">
    <div className="max-w-[1400px] mx-auto px-6 py-10 flex justify-between items-baseline">
    <div className="flex flex-col md:flex-row gap-2 md:gap-4">
        <span className="font-mono text-xs uppercase tracking-tighter text-ink">
            Agustina Armendariz
        </span>
        <span className="hidden md:block text-border">/</span>
        <span className="font-mono text-xs text-border">
            Frontend Developer
        </span>
    </div>  
    <div className="font-mono text-xs uppercase tracking-tight text-ink">
        <span>Mendoza, AR</span>
        <span className="ml-4 text-border"> 19:45 </span>
            
    </div>      


    </div>   
        </header>
    )
}