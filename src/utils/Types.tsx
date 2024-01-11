import { Dispatch, ReactNode } from "react";

export interface CountryContextType {
    dispatch: Dispatch<{}>;
    state: {
      selectedCountry: string;
      selectedContinent: string;
    };
  }

export interface ComponentProps {
    children: ReactNode;
  }


export interface CountriesbyContinent {
    continent: string,
    country: string
}

export interface CountriesByCapitol {
    country: string,
    city: string | null
}

export interface State {
    selectedCountry: string,
    selectedContinent: string,
}