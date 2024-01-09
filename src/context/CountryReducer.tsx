export const CountryReducer = (state, action) => {
    switch (action.type) {
      case 'SET_SELECTED_COUNTRY':
        return {
            ...state,
            selectedCountry: action.payload,
        };
      default:
        return state;
    }
  };
  