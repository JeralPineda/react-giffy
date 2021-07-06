import React, { useState } from 'react';
import { useLocation } from 'wouter';
import { ListOfGifs } from '../../components/ListOfGifs';
import { TrendingSearches } from '../../components/TrendingSearches';
import { useGifs } from '../../hooks/useGifs';

export const Home = () => {
   const [keyword, setKeyword] = useState('');
   const [path, pushLocation] = useLocation();
   const { loading, gifs } = useGifs();

   const handleSubmit = (e) => {
      //    navegar a otra ruta
      e.preventDefault();
      pushLocation(`/search/${keyword}`);
   };

   const handleChange = (e) => {
      setKeyword(e.target.value);
   };

   return (
      <>
         <form onSubmit={handleSubmit}>
            <button>Buscar</button>
            <input placeholder='Busca un gif aquí...' type='text' value={keyword} onChange={handleChange} />
         </form>

         <div className='App-main'>
            <div className='App-results'>
               <h3 className='App-title'>Ultima búsqueda</h3>
               <ListOfGifs gifs={gifs} />
            </div>
            <div className='App-category'>
               <TrendingSearches />
            </div>
         </div>
      </>
   );
};
