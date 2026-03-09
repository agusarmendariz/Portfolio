import Profile from "@/components/Profile";
import ProjectCard from '@/components/ProjectCard';

export default function Home() {
  return (
    <div className="h-screen w-full bg-cement lg:px-40 py-10 flex justify-center overflow-hidden">
      
      <div className="flex w-full max-w-[1100px] gap-8">
      <section className="w-[40%] min-w-[400px] h-full bg-white rounded-2xl p-10 flex flex-col justify-between border border-border/40 shadow-sm transition-all duration-500">
        <Profile />
      </section> 

      <section className="w-[60%] h-full overflow-y-auto no-scrollbar pr-4">
          <div className="space-y-6">
            <ProjectCard title="TrainX" />
            <ProjectCard title="Insspira" />
            <ProjectCard title="Applestore" />
            
            {/* Espacio final para que respire */}
            <div className="h-20" />
          </div>
      </section>
      
    </div>
    </div>
  );
}