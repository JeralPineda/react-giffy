import React from 'react';

import { ListOfGifs } from '../../components/ListOfGifs';
import { Loader } from '../../components/Spinner';
import { useGifs } from '../../hooks/useGifs';

export const SearchResults = ({ params }) => {
   const { keyword } = params;

   const { loading, gifs } = useGifs({ keyword });

   /*
   const [loading, setLoading] = useState(false);

   const [gifs, setGifs] = useState([]);

   useEffect(() => {
      setLoading(true);
      getGif({ keyword }).then((gifs) => {
         setGifs(gifs);
         setLoading(false);
      });
   }, [keyword]);
   */

   return <>{loading ? <Loader /> : <ListOfGifs gifs={gifs} />}</>;
};
