import React, { useContext } from 'react';
import StaticContext from '../../context/StaticContext';

export const Detail = ({ params }) => {
   const context = useContext(StaticContext);

   console.log(context);
   //    console.log(params.id);

   return (
      <div>
         <h3 className='App-title'>{params.id}</h3>
      </div>
   );
};
