import React, { FC, useState } from 'react';
import Image from 'next/image';

interface OtherNewsProps { }

const OtherNews: FC<OtherNewsProps> = ({ }) => {

    const [currentIndex, setCurrentIndex] = useState(0);

    // Lista de noticias como ejemplo
    const newsItems = [
        "Noticia 1: Algo importante ocurrió en el mundo.",
        "Noticia 2: Una innovación tecnológica revolucionaria.",
        "Noticia 3: Grandes cambios en la economía global.",
        "Noticia 4: Nuevas tendencias de la moda.",
        "Noticia 5: Avances en la investigación espacial."
    ];

    // Funciones para navegar entre las noticias
    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? newsItems.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === newsItems.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    return (
        <div className='flex flex-col bg-gray-50 bg-opacity-90 rounded-md p-5 px-8 items-center text-black border hover:bg-gray-100 hover:text-black '>
            <div className='flex flex-row w-full items-center justify-between'>
                <p className='font-gruppo text-2xl font-bold mr-5 '>Otras noticias de la semana</p>

             </div>
            <div className='flex flex-row w-full   relative justify-center items-center my-3'>
                <div className='flex flex-row justify-center  items-center w-full p-5' style={{ height: '250px' }}>
                    <div className=' h-full overflow-hidden relative' style={{ width: '300px' }}>
                        <Image
                            src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6dj-B9HY7_BV5LSHH6CEmlMR9FnPucSavDw&s'}
                            alt={'foto grande'}
                            layout='fill'
                            objectFit='cover'
                        />
                    </div>
                    <div className='flex flex-col '>
                    <p className='text-2xl pl-5 pt-1 font-gruppo font-bold' style={{ width: '300px' }}>{newsItems[currentIndex]}</p>
                    <p className='text-md pl-5 pt-4 text-gray-600' style={{ width: '300px' }}>Resumen de la noticia que se está mostrando en la imagen en cuestión. No debe de ser muy largo, pero debe de hacer un poco de relleno</p>
                    </div>
                </div>
                <button
                    className='absolute left-2 bg-gray-300 hover:bg-gray-400 p-2 rounded-full w-10   z-10'
                    onClick={prevSlide}
                >
                    &#10094;
                </button>

                <button
                    className='absolute right-2 bg-gray-300 hover:bg-gray-400 p-2 rounded-full w-10   z-10'
                    onClick={nextSlide}
                >
                    &#10095;
                </button>
            </div>
        </div>
    );
};

export default OtherNews;
