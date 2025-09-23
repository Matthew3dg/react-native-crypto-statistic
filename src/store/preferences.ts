import {create} from 'zustand';

type PreferencesState = {
  vsCurrency: string;
  perPage: number;
  setVsCurrency: (currency: string) => void;
  setPerPage: (count: number) => void;
};

export const usePreferencesStore = create<PreferencesState>(set => ({
  vsCurrency: 'usd',
  perPage: 25,
  setVsCurrency: currency => set({vsCurrency: currency.toLowerCase()}),
  setPerPage: count => set({perPage: Math.max(1, Math.min(count, 250))}),
}));
