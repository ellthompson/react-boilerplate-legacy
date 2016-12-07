const defaultReducer = {
    isFetching: true,
    isError: false,
    item: null
};

export default function reducer(state = defaultReducer, action) {
    switch (action.type) {
        case 'FETCH_ACTION':
            return {
                ...state,
                isFetching: true,
                isError: false
            }
        case 'FETCH_ACTION_SUCCESS':
            return {
                ...state,
                isFetching: false,
                item: action.item
            }
        case 'FETCH_ACTION_FAILURE':
            return {
                ...state,
                isFetching: false,
                isError: true
            }
        default:
            return state;
    }
}
