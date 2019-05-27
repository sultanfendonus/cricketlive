const INITIAL_STATE = {
    allMatch : null,
}

export default (state = INITIAL_STATE,action)=>{
    switch(action.type){
        case 'FEATURED_SCORE': 
        return {...state, allMatch : action.payload};

        default: 
        return state;
    }

}