import Profile from "@/components/Profile";

export default function Home() {
  return (
    <div className="flex h-full w-full p-4 gap-4">
     <section className="w-1/3 h-full bg-charcoal rounded-2xl p-10 flex flex-col justify-between overflow-hidden">
      <Profile/>
      </section> 
       <section className="w-2/3 h-full overflow-y-auto no-scrollbar space-y-4">
        <div className="max-w-3xl"> 
         <span> Proyectos</span>
        </div>
      </section>
      
    </div>
  );
}
