import React, { useContext } from 'react';

import GifsContext from '../../context/GifsContext';

export const Detail = ({ params }) => {
   const { gifs } = useContext(GifsContext);
   console.log({ gifs });

   return (
      <div>
         <h3 className='App-title'>{params.id}</h3>
      </div>
   );
};
