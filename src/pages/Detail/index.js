import React, { useContext } from 'react';
import { Gif } from '../../components/Gif';

import GifsContext from '../../context/GifsContext';

export const Detail = ({ params }) => {
   const { gifs } = useContext(GifsContext);
   console.log({ gifs });

   const gif = gifs.find((singleGif) => singleGif.id === params.id);

   return <Gif {...gif} />;
};
