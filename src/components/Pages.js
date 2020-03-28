import React from 'react';
import { useSelector } from 'react-redux';
import Image from './Image';

const Pages = () => {
  const content = useSelector(state => state.mangaRead.content);

  return (
    <div>
      {content.map((page, index) => (
        <Image key={index} src={page} last={index === content.length - 1}></Image>
      ))}
    </div>
  );
};

export default Pages;
