import React from 'react';
import './Loader.css';

export const Loader = () => {
   return (
      <>
         <h3>Cargando...</h3>
         <div className='spinner'>
            <div className='inner one'></div>
            <div className='inner two'></div>
            <div className='inner three'></div>
         </div>
      </>
   );
};
