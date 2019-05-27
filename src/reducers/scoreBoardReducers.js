const INITIAL_STATE = {
    score : null,
    info : null
}

export default (state = INITIAL_STATE,action)=>{
    switch(action.type){
        case 'MATCH_SCORE': 
        if(action.payload){
            return {...state, score : action.payload.innings};
        }else{
            return {...state, score: null};
        }
        

        case 'MATCH_INFO':
            return{...state, info:action.payload}
            
            

        default: 
        return state;
    }

}