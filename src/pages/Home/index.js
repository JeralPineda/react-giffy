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
            <button>Buscar</button>
            <input placeholder='Busca un gif aquí...' type='text' value={keyword} onChange={handleChange} />
         </form>

         <div className='App-main'>
            <div class='App-results'>
               <h3 className='App-title'>Ultima búsqueda</h3>
               <ListOfGifs gifs={gifs} />
            </div>
            <div class='App-category'>
               {/* <TrendingSearches /> */}
               <ul>
                  {
                     popularGifs.map((popGif) => (
                        <li key={popGif}>
                           <Link to={`/search/${popGif}`}>Gifs de {popGif}</Link>
                        </li>
                     )) //
                  }
               </ul>
            </div>
         </div>
      </>
   );
};
