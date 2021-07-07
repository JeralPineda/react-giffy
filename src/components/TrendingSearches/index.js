import React, { useEffect, useState } from 'react';

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

   useEffect(() => {
      const onChange = (entries) => {
         const el = entries[0];

         if (el.isIntersecting) {
            setShow(true);
         }
      };
      const observer = new IntersectionObserver(onChange, {
         rootMargin: '100px',
      });

      observer.observe(document.getElementById('lazyTrending'));
   }, []);

   return <div id='lazyTrending'>{show ? <TrendingSearches /> : null}</div>;
};
