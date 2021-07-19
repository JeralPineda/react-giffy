import React, { useCallback, useEffect, useRef } from 'react';
import debounce from 'just-debounce-it';

import { ListOfGifs } from 'components/ListOfGifs';
import { Loader } from 'components/Spinner';
import { useGifs } from 'hooks/useGifs';
import { useNearScreen } from 'hooks/useNearScreen';

export const SearchResults = ({ params }) => {
   const { keyword } = params;

   const { loading, gifs, setPage } = useGifs({ keyword });

   const externalRef = useRef();
   const { isNearScreen } = useNearScreen({ externalRef: loading ? null : externalRef, once: false });

   const debounceHandleNextPage = useCallback(
      debounce(() => setPage((prevPage) => prevPage + 1), 200),
      [setPage]
   );

   useEffect(() => {
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
