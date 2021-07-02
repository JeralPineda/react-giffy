import React, { useEffect, useState } from 'react';

import { getGif } from '../services/getGifs';
import { Gif } from './Gif';
import { Loader } from './Loader';

export const ListOfGif = ({ params }) => {
   const { keyword } = params;

   const [loading, setLoading] = useState(false);

   const [gifs, setGifs] = useState([]);

   useEffect(() => {
      setLoading(true);
      getGif({ keyword }).then((gifs) => {
         setGifs(gifs);
         setLoading(false);
      });
   }, [keyword]);

   if (loading) return <Loader />;

   return (
      <>
         {gifs.map(({ url, title, id }) => (
            <Gif
               key={id}
               id={id}
               url={url} //
               title={title}
            />
         ))}
      </>
   );
};
