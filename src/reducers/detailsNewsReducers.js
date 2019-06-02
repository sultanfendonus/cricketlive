const initialState = {
    news : {}
}

export default (state = initialState, action) => {
    switch (action.type) {

    case 'DETAIL_NEWS':
        return { ...state, news: action.payload }

    default:
        return state
    }
}