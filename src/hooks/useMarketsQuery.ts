import {useQuery, keepPreviousData} from '@tanstack/react-query';
import {fetchMarkets, MarketCoin} from '../api/coingecko';
import {usePreferencesStore} from '../store/preferences';

export function useMarketsQuery(page: number) {
  const vsCurrency = usePreferencesStore(s => s.vsCurrency);
  const perPage = usePreferencesStore(s => s.perPage);

  return useQuery<MarketCoin[], Error>({
    queryKey: ['markets', vsCurrency, page, perPage],
    queryFn: () => fetchMarkets(vsCurrency, page, perPage),
    placeholderData: keepPreviousData,
    staleTime: 30_000,
  });
}
