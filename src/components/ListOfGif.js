import React, { useEffect, useState } from 'react';

import { getGif } from '../services/getGifs';
import { Gif } from './Gif';

export const ListOfGif = ({ keyword }) => {
   const [gifs, setGifs] = useState([]);

   useEffect(() => {
      getGif({ keyword }).then((gifs) => setGifs(gifs));
   }, [keyword]);

   return gifs.map(({ url, title, id }) => (
      <Gif
         key={id}
         id={id}
         url={url} //
         title={title}
      />
   ));
};
