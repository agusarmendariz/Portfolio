'use client'

import { useState,useEffect } from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from 'next-themes'

export default function Footer() {
  const [mounted, setMounted] = useState(false)
  const {theme, setTheme} = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <footer className="w-full max-w-[1100px] mt-16 h-10" /> 
  }



    return (
        <div className="border-t border-border/5 pt-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 font-mono text-[12px]  tracking-wider text-secondary">
          <span>Mendoza, AR.</span>
          <span className="hidden md:block text-secondary/10">•</span>
          <p>
            © 2026 <span className="text-secondary uppercase">Agustina Armendariz</span> 
            <span className="mx-2 text-secondary">—</span> 
            Built with Next.js & Tailwind
          </p>
        </div>

        
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4 border border-border/10 rounded-full px-3 py-1 bg-white/5 shadow-sm">
          <button 
          onClick={() => setTheme('light')}
            className={`p-1 transition-colors ${theme === 'light' ? 'text-ink' : 'text-secondary/20 hover:text-ink'}`}
            title="Light Mode"
          >
            <Sun size={13} strokeWidth={1.5} />
          </button>
          
          <span className="w-[1px] h-3 bg-border"></span>
          
          <button 
          onClick={() => setTheme('dark')}
            className={`p-1 transition-colors ${theme === 'dark' ? 'text-ink' : 'text-secondary hover:text-ink'}`}
            title="Dark Mode"
          >
            <Moon size={13} strokeWidth={1.5} />
          </button>
        </div>
        </div>

      </div>

  
    )
}