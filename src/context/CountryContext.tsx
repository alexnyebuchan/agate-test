import { createContext } from 'react';
import { CountryContextType } from '../utils/Types';

const initialState = {
  selectedCountry: '',
  selectedContinent: '',
};

export const CountryContext = createContext<CountryContextType>({
  dispatch: function (): void {
    throw new Error('Function not implemented.');
  },
  state: initialState,
});
