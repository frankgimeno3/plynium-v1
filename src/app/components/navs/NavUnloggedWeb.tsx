import React, { FC, useState } from 'react';
import PlyniumLogo from '../icons/PlyniumLogo';

interface NavUnoggedWebProps {
  pestanaSelected: string;
  setPestanaSelected: any;
}

const NavUnlogggedWeb: FC<NavUnoggedWebProps> = ({ pestanaSelected, setPestanaSelected }) => {


  const cambiarpestana = (nuevaPestana: string) => {
    setPestanaSelected(nuevaPestana)
  }

  return (
    <div className='flex flex-col h-50 w-full  bg-gray-100 bg-opacity-5'>
      <div className='flex flex-row h-full text-gray-100 justify-between items-center py-4 px-6'>
        <div className='flex flex-row items-center p-1 rounded pr-5 hover:opacity-90 hover-shadow'>
          <div className='h-full w-10 '>
            <PlyniumLogo />
          </div>
          <div className='flex flex-row items-center'>
            <p className='text-xl ml-6 text-3xl text-gray-200 font-gruppo'>Plynium</p>
            <p className='font-gruppo mt-2 ml-2 text-xl bg-gray-100 bg-opacity-5 px-2 rounded-xl pb-1'>. com</p>
          </div>
        </div>
        <div className='flex flex-row '>
          <p>Elementos menu arriba</p>
        </div>
      </div>
      <div className='flex flex-row bg-gray-200 bg-opacity-5 pl-6'>
        <p className={`p-2 mr-2 hover:bg-opacity-50 hover:bg-gray-200 ${pestanaSelected === 'portada' ? 'bg-gray-100 bg-opacity-10' : ''}`}
        onClick={()=>cambiarpestana("portada")}>Portada</p>
        <p className={`p-2 mr-2 hover:bg-opacity-50 hover:bg-gray-200 ${pestanaSelected === 'suamerica' ? 'bg-gray-100 bg-opacity-10' : ''}`}
        onClick={()=>cambiarpestana("startups")}>Startups</p>
                <p className={`p-2 mr-2 hover:bg-opacity-50 hover:bg-gray-200 ${pestanaSelected === 'suamerica' ? 'bg-gray-100 bg-opacity-10' : ''}`}
        onClick={()=>cambiarpestana("america")}>América</p>
        <p className={`p-2 mr-2 hover:bg-opacity-50 hover:bg-gray-200 ${pestanaSelected === 'sueurope' ? 'bg-gray-100 bg-opacity-10' : ''}`}
        onClick={()=>cambiarpestana("europe")}>Europa</p>
        <p className={`p-2 mr-2 hover:bg-opacity-50 hover:bg-gray-200 ${pestanaSelected === 'bigtech' ? 'bg-gray-100 bg-opacity-10' : ''}`}
        onClick={()=>cambiarpestana("bigtech")}>Big tech</p>
        <p className={`p-2 mr-2 hover:bg-opacity-50 hover:bg-gray-200 ${pestanaSelected === 'ai' ? 'bg-gray-100 bg-opacity-10' : ''}`}
        onClick={()=>cambiarpestana("ai")}>Inteligencia Artificial</p>
        <p className={`p-2 mr-2 hover:bg-opacity-50 hover:bg-gray-200 ${pestanaSelected === 'tech' ? 'bg-gray-100 bg-opacity-10' : ''}`}
        onClick={()=>cambiarpestana("innovation")}>Innovación</p>
        <p className={`p-2 mr-2 hover:bg-opacity-50 hover:bg-gray-200 ${pestanaSelected === 'economy' ? 'bg-gray-100 bg-opacity-10' : ''}`}
        onClick={()=>cambiarpestana("economy")}>Economía</p>

      </div>


    </div>
  );
};

export default NavUnlogggedWeb;
