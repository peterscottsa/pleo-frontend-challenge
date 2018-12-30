//Filters Reducer
const filtersReducerDefaultState = {
    text: "",
    sortByCurrency: "",
    startDate: null,
    endDate: null
};

export default (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case "SET_TEXT_FILTER":
            return {
                ...state,
                text: action.text
            };
        case "SORT_BY_CURRENCY":
            return {
                ...state,
                sortByCurrency: action.currencyCode
            };
        case "SET_START_DATE":
            return {
                ...state,
                startDate: action.startDate
            };
        case "SET_END_DATE":
            return {
                ...state,
                endDate: action.endDate
            };
        default:
            return state;
    }
};
