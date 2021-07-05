import { useEffect, useState } from 'react';
import { getGif } from '../services/getGifs';

export const useGifs = ({ keyword } = { keyword: null }) => {
   const [loading, setLoading] = useState(false);

   const [gifs, setGifs] = useState([]);

   useEffect(() => {
      setLoading(true);

      //   Recuperamos la keyword del localstorage
      const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random';

      getGif({ keyword: keywordToUse }).then((gifs) => {
         setGifs(gifs);
         setLoading(false);

         //  Guardamos la keyword en el localstorage
         localStorage.setItem('lastKeyword', keyword);
      });
   }, [keyword]);

   return {
      loading,
      gifs,
   };
};
