import React, { FC } from 'react';
import Image from 'next/image';
import Tag from './Tag';

interface MiniatureCardProps { }

const MiniatureCard: FC<MiniatureCardProps> = ({ }) => {
    return (
        <div className='flex flex-row justify-start bg-white bg-opacity-90 rounded-md p-5 px-12 my-5 text-black 
        hover:bg-opacity-80'  >
            <div className=' h-full overflow-hidden relative'  style={{ width: '600px' }}>
                <Image
                    src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6dj-B9HY7_BV5LSHH6CEmlMR9FnPucSavDw&s'}
                    alt={'foto grande'}
                    layout='fill'
                    objectFit='cover'
                />
            </div>
            <div className='flex flex-col ml-5 px-2 flex-2'>
                <p className='font-gruppo text-3xl font-bold pb-2'>Titulo grande de lo que es la noticia, titulo grande de lo que es la noticia</p>
                <p className='text-lg font-Georgia pt-2 text-left'>Titulo pequeño, es decir, subtítulo de lo que es la noticia, Titulo pequeño, es decir, subtítulo de lo que es la noticia, Titulo pequeño, es decir, subtítulo de lo que es la noticia</p>
                <div className='flex flex-row pt-3 justify-sart'>
                    <Tag content={"Tecnología"} />
                    <Tag content={"América"} />
                    <Tag content={"Innovación"} />
                </div>
            </div>
        </div>
    );
};

export default MiniatureCard;
