"use client" 
 
import NavUnlogggedWeb from "./components/navs/NavUnloggedWeb";

export default function Home() {
  return (
     <div className="flex flex-col">
      <NavUnlogggedWeb/>
      <div>
        <p>Contenido</p>
      </div>
     </div>
  );
}
