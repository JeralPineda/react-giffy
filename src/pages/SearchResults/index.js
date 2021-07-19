import React, { useCallback, useEffect, useRef } from 'react';

import { ListOfGifs } from 'components/ListOfGifs';
import { Loader } from 'components/Spinner';
import { useGifs } from 'hooks/useGifs';
import { useNearScreen } from 'hooks/useNearScreen';
import debounce from 'just-debounce-it';

export const SearchResults = ({ params }) => {
   const { keyword } = params;

   const { loading, gifs, setPage } = useGifs({ keyword });

   const externalRef = useRef();
   const { isNearScreen } = useNearScreen({ externalRef: loading ? null : externalRef, once: false });

   //    const handleNextPage = () => setPage((prevPage) => prevPage + 1);

   //    const handleNextPage = () => console.log('next page');

   const debounceHandleNextPage = useCallback(
      debounce(() => console.log('next page'), 1000),
      []
   );

   useEffect(() => {
      console.log(isNearScreen);
      if (isNearScreen) debounceHandleNextPage();
   }, [debounceHandleNextPage, isNearScreen]);

   return (
      <>
         {loading ? (
            <Loader />
         ) : (
            <>
               <h3 className='App-title'>{decodeURI(keyword)}</h3>
               <ListOfGifs gifs={gifs} />
               <div className='visor' ref={externalRef}></div>
            </>
         )}
      </>
   );
};
