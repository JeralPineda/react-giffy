import { useContext, useEffect, useState } from 'react';
import GifsContext from '../context/GifsContext';
import { getGif } from '../services/getGifs';

export const useGifs = ({ keyword } = { keyword: null }) => {
   const [loading, setLoading] = useState(false);
   const { gifs, setGifs } = useContext(GifsContext);

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
   }, [keyword, setGifs]);

   return {
      loading,
      gifs,
   };
};
