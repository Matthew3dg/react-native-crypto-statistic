import axios from 'axios';

export const coingeckoClient = axios.create({
  baseURL: 'https://api.coingecko.com/api/v3',
  timeout: 15000,
});

export type MarketCoin = {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  price_change_percentage_24h: number | null;
  market_cap_rank: number | null;
};

export async function fetchMarkets(
  vsCurrency: string,
  page: number,
  perPage: number,
): Promise<MarketCoin[]> {
  const {data} = await coingeckoClient.get<MarketCoin[]>('/coins/markets', {
    params: {
      vs_currency: vsCurrency,
      order: 'market_cap_desc',
      per_page: perPage,
      page,
      price_change_percentage: '24h',
      locale: 'en',
      precision: 2,
    },
  });
  return data;
}
