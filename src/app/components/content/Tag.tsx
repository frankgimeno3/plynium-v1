import React, { FC } from 'react';

interface TagProps {
  content:string;
}

const Tag: FC<TagProps> = ({content }) => {
  return (
    <div className='px-3 py-1 bg-zinc-600 rounded-md hover:bg-zinc-700 text-gray-100 mr-3'>{content}</div>
  );
};

export default Tag;