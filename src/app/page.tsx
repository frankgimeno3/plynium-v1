"use client" 
 
import { useState } from "react";
import NavUnlogggedWeb from "./components/navs/NavUnloggedWeb";

export default function Home() {

  const [pestanaSelected, setPestanaSelected]=useState("portada")

  
  return (
     <div className="flex flex-col min-h-screen">
      <NavUnlogggedWeb pestanaSelected={pestanaSelected} setPestanaSelected={setPestanaSelected}/>
      <div className="p-5">
        <p>Contenido {pestanaSelected}</p>
      </div>
     </div>
  );
}
