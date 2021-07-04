import React from 'react';

export const Detail = ({ params }) => {
   console.log(params.id);

   return (
      <div>
         <h3 className='App-title'>{params.id}</h3>
      </div>
   );
};
