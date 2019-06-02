import getScore from '../api/getScore'
//import history from '../history'



export const getAllFeateredMatch = () =>async (dispatch) =>{
    const response = await getScore.get('/score/allMatch');
    dispatch({type : "FEATURED_SCORE",payload: response.data.matchList.matches});
}
export const getScorebordForSingleMatch = (matchId,seriesId) =>async (dispatch) =>{
    const response = await getScore.get('/score/scorecards/'+matchId+'/'+seriesId);
    dispatch({type : "MATCH_SCORE",payload: response.data.fullScorecard});
}

export const getLatestNews = () =>async (dispatch) =>{
    const response = await getScore.get('/news');
    dispatch({type : "LATEST_NEWS",payload: response.data});
}

export const getDetailsNews = (newsId) =>async (dispatch) =>{
    const response = await getScore.get('/detailsnews/'+newsId);
    dispatch({type : "DETAIL_NEWS",payload: response.data});
}

export const saveSingleNews=(news)=>{
    return{
        type : 'SAVE_NEWS',
        payload : news
    }
}


export const getMatchInfo = ()=>{
    return{
        type : 'MATCH_INFO'
    }
}

// export const getScoreBoardForSecondInnings = ()=>{
//     return{
//         type : 'SECOUND_INNINGS_SCOREBOARD'
//     }
// }



// export const fetchStreams = () => async dispatch =>{
//     const response = await createStreamApi.get('/streams');
//     dispatch({type : "FETECH_STREAMS",payload : response.data});
// }

// export const fetchStream = (id) => async dispatch =>{
//     const response = await createStreamApi.get('/streams/'+id);
//     dispatch({type : "FETECH_STREAM",payload : response.data});
// }

// export const editStream = (id,formValue) => async dispatch =>{
//     const response = await createStreamApi.patch('/streams/'+id,formValue);
//     dispatch({type : "EDIT_STREAM",payload : response.data});
//     history.push('/');
// }

// export const deleteStream = (id) => async dispatch =>{
//     await createStreamApi.delete('/streams/'+id);
//     dispatch({type : "DELETE_STREAM",payload : id});
//     history.push('/');
// }

