import React, { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { ListOfGifs } from '../../components/ListOfGifs';
import { useGifs } from '../../hooks/useGifs';

const popularGifs = ['Calvin Harris', 'Marvel'];
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
            <input type='text' value={keyword} onChange={handleChange} />
            <button>Buscar</button>
         </form>

         <h3 className='App-title'>Ultima búsqueda</h3>

         <ListOfGifs gifs={gifs} />

         <h3 className='App-title'>Los gifs mas populares</h3>

         <ul>
            {
               popularGifs.map((popGif) => (
                  <li key={popGif}>
                     <Link to={`/search/${popGif}`}>Gifs de {popGif}</Link>
                  </li>
               )) //
            }
         </ul>
      </>
   );
};
