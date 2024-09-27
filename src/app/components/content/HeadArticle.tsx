import React, { FC } from 'react';
import Image from 'next/image';
import Tag from './Tag';

interface HeadArticleProps {

}

const HeadArticle: FC<HeadArticleProps> = ({ }) => {
    return (
        <div className='flex flex-col justify-start bg-transparent 
         rounded p-5  my-5 mr-5 bg-gray-300 bg-opacity-5  hover:bg-white hover:bg-opacity-5 rounded-xl '>

            <p className='font-gruppo text-5xl font-bold '>Titulo grande de lo que es la noticia, titulo grande de lo que es la noticia</p>
            <div className='flex flex-row pb-5 justify-start mt-5'>
                <Tag content={"Tecnología"} />
                <Tag content={"América"} />
                <Tag content={"Innovación"} />
            </div>

            <Image src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6dj-B9HY7_BV5LSHH6CEmlMR9FnPucSavDw&s'}
                alt={'foto gande'} width={1000} height={300} />

            <p className='text-lg font-roboto pt-5  '>Titulo pequeño, es decir, subtítulo de lo que es la noticia, Titulo pequeño, es decir, subtítulo de lo que es la noticia, Titulo pequeño, es decir, subtítulo de lo que es la noticia</p>


        </div>
    );
};

export default HeadArticle;