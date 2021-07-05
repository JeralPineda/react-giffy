import { useEffect, useState } from 'react';
import { getGif } from '../services/getGifs';

export const useGifs = ({ keyword }) => {
   const [loading, setLoading] = useState(false);

   const [gifs, setGifs] = useState([]);

   useEffect(() => {
      setLoading(true);
      getGif({ keyword }).then((gifs) => {
         setGifs(gifs);
         setLoading(false);
      });
   }, [keyword]);

   return {
      loading,
      gifs,
   };
};
