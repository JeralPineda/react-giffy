import { useEffect, useState } from 'react';

import { getTrendingTerms } from 'services/getTrendingTermsService';
import Category from 'components/Category';

export const TrendingSearches = () => {
   const [trends, setTrends] = useState([]);

   useEffect(() => {
      getTrendingTerms().then(setTrends);
   }, []);

   return <Category name='Tendencias' options={trends} />;
};
