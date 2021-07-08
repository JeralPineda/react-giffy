import { useContext, useEffect, useState } from 'react';
import GifsContext from 'context/GifsContext';
import { getGif } from 'services/getGifs';

const initPage = 0;

export const useGifs = ({ keyword } = { keyword: null }) => {
   const [loading, setLoading] = useState(false);
   const [loadingNextPge, setLoadingNextPge] = useState(false);
   const [page, setPage] = useState(initPage);
   const { gifs, setGifs } = useContext(GifsContext);

   //   Recuperamos la keyword del localstorage
   const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random';

   useEffect(() => {
      setLoading(true);

      getGif({ keyword: keywordToUse }).then((gifs) => {
         setGifs(gifs);
         setLoading(false);

         //  Guardamos la keyword en el localstorage
         localStorage.setItem('lastKeyword', keyword);
      });
   }, [keyword, keywordToUse, setGifs]);

   useEffect(() => {
      if (page === initPage) return;

      setLoadingNextPge(true); //antes de hacer la llamada se pone a cargar

      getGif({ keyword: keywordToUse, page }).then((nextGifs) => {
         //   obtenemos el estado anterior
         setGifs((prevGifs) => prevGifs.concat(nextGifs));

         setLoadingNextPge(false);
      });
   }, [keywordToUse, page, setGifs]);

   return {
      loading,
      loadingNextPge,
      gifs,
      setPage,
   };
};
