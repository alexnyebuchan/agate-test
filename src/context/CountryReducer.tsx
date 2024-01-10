export const CountryReducer = (state, action) => {
    switch (action.type) {
      case 'SET_SELECTED_COUNTRY':
        return {
            ...state,
            selectedCountry: action.payload,
        };
      case 'SET_SELECTED_CONTINENT':
          return {
            ...state,
            selectedContinent: action.payload,
          };
      default:
        return state;
    }
  };
  