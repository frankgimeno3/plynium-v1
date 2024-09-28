"use client"

import { useState } from "react";
import NavUnlogggedWeb from "./components/navs/NavUnloggedWeb";
import MiniatureCard from "./components/content/MiniatureCard";
import HeadArticle from "./components/content/HeadArticle";
import OtherNews from "./components/content/OtherNews";

export default function Home() {

  const [pestanaSelected, setPestanaSelected] = useState("portada")


  return (
    <div className="flex flex-col min-h-screen">
      <NavUnlogggedWeb pestanaSelected={pestanaSelected} setPestanaSelected={setPestanaSelected} />
      <div className="flex flex-row  justify-between mr-96">
        <div className="flex lg:flex-col ">

          <div className="flex flex-row justify-between mt-56 bg-white bg-opacity-5 mx-24 p-2 ">
            <p className=" text-white text-3xl font-gruppo font-bold pl-3">Septiembre 2024, Semana 2</p>
            <button className='px-3 py-1 bg-zinc-900 rounded-md hover:bg-zinc-800 text-gray-100  text-md'>
              Ver todas las noticias de la semana
            </button>
          </div>
          <div className="flex flex-row  mx-24  bg-white text-gray-600  opacity-90 ">
            <HeadArticle />
            <div className="flex flex-col justify-between  ">
              <MiniatureCard />
              <MiniatureCard />
              <OtherNews />
            </div>
          </div>

          <div className="flex flex-row justify-between mt-24 bg-white bg-opacity-5 mx-24 p-2 ">
            <p className=" text-white text-3xl font-gruppo font-bold pl-3">Septiembre 2024, Semana 1</p>
            <button className='px-3 py-1 bg-zinc-800 rounded-md hover:bg-zinc-900 text-gray-100  text-md'>
              Ver todas las noticias de la semana
            </button>
          </div>
          <div className="flex flex-row  mx-24  bg-white text-gray-600  opacity-90 ">
            <HeadArticle />
            <div className="flex flex-col justify-between  ">
              <MiniatureCard />
              <MiniatureCard />
              <OtherNews />
            </div>
          </div>

        </div>
        <div className="fixed right-0 top-0 z-50 flex flex-col bg-gray-400 px-12  mt-44 w-96 h-screen">
          <p className="mx-auto w-full">.</p>
        </div>
      </div>

    </div>
  );
}
