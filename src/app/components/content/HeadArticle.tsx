import React, { FC } from 'react';
import Image from 'next/image';
import Tag from './Tag';

interface HeadArticleProps {

}

const HeadArticle: FC<HeadArticleProps> = ({ }) => {
    return (
        <div className='flex flex-col justify-start bg-transparent h-full
         rounded p-5    mr-5 bg-gray-300 bg-opacity-5  hover:bg-gray-100 hover:text-black rounded-xl '>

            <p className='font-gruppo text-4xl font-bold '>Título grande del post</p>
            
            <div className='flex flex-row pb-5 justify-start mt-5'>
                <Tag content={"Tecnología"} />
                <Tag content={"América"} />
                <Tag content={"Innovación"} />
            </div>

            <Image src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6dj-B9HY7_BV5LSHH6CEmlMR9FnPucSavDw&s'}
                alt={'foto gande'} width={1000} height={300} />

            <p className='text-lg font-roboto pt-5  '> Resumen del post, de las noticias de la semana y del análisis posterior. No debería de ocupar más de un párrafo, pero sí estaría bien que ocupe entre unas 3 y unas 5 líneas de texto. </p>


        </div>
    );
};

export default HeadArticle;