import React from 'react';

import { useNearScreen } from 'hooks/useNearScreen';
import { TrendingSearches } from './TrendingSearches';

export const LazyTrending = () => {
   const { isNearScreen, fromRef } = useNearScreen({ distance: '200px' });

   return <div ref={fromRef}>{isNearScreen ? <TrendingSearches /> : null}</div>;
};
