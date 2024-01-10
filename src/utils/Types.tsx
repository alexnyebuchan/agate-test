import { ReactNode } from "react";

export interface CountryContextType {
    selectedCountry: string;
    selectedContinent: string;
  }

export interface ComponentProps {
    children: ReactNode;
  }

export  interface Action {
    type: string;
    payload: string; 
}