import React from 'react';

import { ListOfGifs } from 'components/ListOfGifs';
import { Loader } from 'components/Spinner';
import { useGifs } from 'hooks/useGifs';

export const SearchResults = ({ params }) => {
   const { keyword } = params;

   const { loading, gifs, setPage } = useGifs({ keyword });

   const handleNextPage = () => setPage((prevPage) => prevPage + 1);

   return (
      <>
         {loading ? <Loader /> : <ListOfGifs gifs={gifs} />}
         <br />
         <button onClick={handleNextPage}>Next page</button>
      </>
   );
};
