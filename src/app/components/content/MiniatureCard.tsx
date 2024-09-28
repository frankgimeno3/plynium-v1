import React, { FC } from 'react';
import Tag from './Tag';
import Image from 'next/image';

interface MiniatureCardProps { }

const MiniatureCard: FC<MiniatureCardProps> = ({ }) => {
    return (
        <div className='flex flex-row justify-start bg-white bg-opacity-90 rounded-md hover:text-black my-5 text-black pr-12 hover:bg-gray-100 '  >
            <div className=' h-full overflow-hidden relative ' style={{ width: '300px' }}>
                <Image
                    src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6dj-B9HY7_BV5LSHH6CEmlMR9FnPucSavDw&s'}
                    alt={'foto grande'}
                    layout='fill'
                    objectFit='cover'
                />
            </div>
            <div className='flex flex-col ml-5'>
                <p className='font-gruppo text-2xl font-bold mr-5'>Titulo grande de lo que es la noticia, titulo grande de lo que es la noticia</p>
                <p className='text-gray-600  pt-2 text-left'>Titulo pequeño, es decir, subtítulo de lo que es la noticia, Titulo pequeño, es decir, subtítulo de lo que es la noticia, Titulo pequeño, es decir, subtítulo de lo que es la noticia</p>
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
