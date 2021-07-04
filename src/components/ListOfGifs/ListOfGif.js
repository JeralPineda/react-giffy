import React, { useEffect, useState } from 'react';

import { getGif } from '../../services/getGifs';
import { Loader } from '../Spinner/Loader';
import { Gif } from '../Gif/Gif';

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
         {
            gifs.map(({ url, title, id }) => (
               <Gif
                  url={url} //
                  title={title}
               />
            )) //
         }
      </>
   );
};
