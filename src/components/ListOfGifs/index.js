import React from 'react';

import { Gif } from '../Gif';
import './ListOfGif.css';

export const ListOfGifs = ({ gifs }) => {
   return (
      <div className='ListOfGifs'>
         {
            gifs.map(({ url, title, id }) => (
               <Gif
                  id={id}
                  url={url} //
                  key={id}
                  title={title}
               />
            )) //
         }
      </div>
   );
};
