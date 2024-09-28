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
    <div className=' fixed top-0 left-0 right-0 z-10 flex flex-col h-50 w-full  bg-zinc-900 bg-opacity-90 '>
      <div className='flex flex-row h-full text-gray-100 justify-between items-center py-4 px-6'>
        <div className='flex flex-row items-center p-1 rounded pr-5 hover:opacity-90 hover-shadow pl-6'>
          <div className='h-full w-10 '>
            <PlyniumLogo />
          </div>
          <div className='flex flex-row items-center'>
            <p className='text-5xl ml-8 text-3xl text-gray-200 font-gruppo'>Plynium</p>
            <p className='font-gruppo mt-4 ml-3 text-2xl bg-gray-100 bg-opacity-5 px-2 rounded-xl pb-1'>NEWS</p>
          </div>
        </div>
        <div className='flex flex-row '>
          <p>Log in, Sign Up, LINK TO OTHER PLINIUM SITES</p>
        </div>
      </div>
      <div className='flex flex-row bg-gray-200 bg-opacity-5 pl-24 pl-24 text-lg mt-1 '>
        <p className={`p-4 mr-4 hover:bg-opacity-50 hover:bg-gray-200 pb-1 ${pestanaSelected === 'portada' ? 'bg-gray-100 bg-opacity-10' : ''}`}
        onClick={()=>cambiarpestana("portada")}>Portada</p>
        <p className={`p-4 mr-4 hover:bg-opacity-50 hover:bg-gray-200 ${pestanaSelected === 'startups' ? 'bg-gray-100 bg-opacity-10' : ''}`}
        onClick={()=>cambiarpestana("startups")}>Startups</p>
                <p className={`p-4 mr-4 hover:bg-opacity-50 hover:bg-gray-200 ${pestanaSelected === 'america' ? 'bg-gray-100 bg-opacity-10' : ''}`}
        onClick={()=>cambiarpestana("america")}>América</p>
        <p className={`p-4 mr-4 hover:bg-opacity-50 hover:bg-gray-200 ${pestanaSelected === 'europe' ? 'bg-gray-100 bg-opacity-10' : ''}`}
        onClick={()=>cambiarpestana("europe")}>Europa</p>
        <p className={`p-4 mr-4 hover:bg-opacity-50 hover:bg-gray-200 ${pestanaSelected === 'bigtech' ? 'bg-gray-100 bg-opacity-10' : ''}`}
        onClick={()=>cambiarpestana("bigtech")}>Big tech</p>
        <p className={`p-4 mr-4 hover:bg-opacity-50 hover:bg-gray-200 ${pestanaSelected === 'ai' ? 'bg-gray-100 bg-opacity-10' : ''}`}
        onClick={()=>cambiarpestana("ai")}>Inteligencia Artificial</p>
        <p className={`p-4 mr-4 hover:bg-opacity-50 hover:bg-gray-200 ${pestanaSelected === 'innovation' ? 'bg-gray-100 bg-opacity-10' : ''}`}
        onClick={()=>cambiarpestana("innovation")}>Innovación</p>
        <p className={`p-4 mr-4 hover:bg-opacity-50 hover:bg-gray-200 ${pestanaSelected === 'economy' ? 'bg-gray-100 bg-opacity-10' : ''}`}
        onClick={()=>cambiarpestana("economy")}>Economía</p>

      </div>


    </div>
  );
};

export default NavUnlogggedWeb;
