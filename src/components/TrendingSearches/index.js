import React, { Suspense } from 'react';

import { useNearScreen } from 'hooks/useNearScreen';
import { Loader } from 'components/Spinner';

const TrendingSearches = React.lazy(() => import('./TrendingSearches'));

export const LazyTrending = () => {
   const { isNearScreen, fromRef } = useNearScreen({ distance: '200px' });

   return (
      <div ref={fromRef}>
         <Suspense fallback={<Loader />}>{isNearScreen ? <TrendingSearches /> : <Loader />}</Suspense>
      </div>
   );
};
