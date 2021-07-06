import React from 'react';

import { ListOfGifs } from 'components/ListOfGifs';
import { Loader } from 'components/Spinner';
import { useGifs } from 'hooks/useGifs';

export const SearchResults = ({ params }) => {
   const { keyword } = params;

   const { loading, gifs } = useGifs({ keyword });

   return <>{loading ? <Loader /> : <ListOfGifs gifs={gifs} />}</>;
};
