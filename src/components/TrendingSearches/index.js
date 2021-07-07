import React, { useEffect, useState } from 'react';

import { getTrendingTerms } from 'services/getTrendingTermsService';
import Category from 'components/Category';
import { useNearScreen } from 'hooks/useNearScreen';

const TrendingSearches = () => {
   const [trends, setTrends] = useState([]);

   useEffect(() => {
      getTrendingTerms().then(setTrends);
   }, []);

   return <Category name='Tendencias' options={trends} />;
};

export const LazyTrending = () => {
   const { isNearScreen, fromRef } = useNearScreen({ distance: '200px' });

   return <div ref={fromRef}>{isNearScreen ? <TrendingSearches /> : null}</div>;
};
