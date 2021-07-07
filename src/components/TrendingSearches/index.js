import React, { useEffect, useRef, useState } from 'react';

import { getTrendingTerms } from 'services/getTrendingTermsService';
import Category from '../Category';

const TrendingSearches = () => {
   const [trends, setTrends] = useState([]);

   useEffect(() => {
      getTrendingTerms().then(setTrends);
   }, []);

   return <Category name='Tendencias' options={trends} />;
};

export const LazyTrending = () => {
   const [show, setShow] = useState(false);

   const elementRef = useRef();

   useEffect(() => {
      let observer = '';

      const onChange = (entries, observer) => {
         const el = entries[0];

         if (el.isIntersecting) {
            setShow(true);
            observer.disconnect(); //una ves que se hace la interseccion se desconecta
         }
      };

      Promise.resolve(typeof IntersectionObserver !== 'undefined' ? IntersectionObserver : import('intersection-observer')).then(() => {
         const observer = new IntersectionObserver(onChange, {
            rootMargin: '100px',
         });

         observer.observe(elementRef.current);
      });

      return () => observer && observer.disconnect(); //cuando el componente se deje de utilizar no se muestre y limpie el elemento cuando no esta disponible
   });

   return <div ref={elementRef}>{show ? <TrendingSearches /> : null}</div>;
};
