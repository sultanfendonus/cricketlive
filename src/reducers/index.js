import {combineReducers} from 'redux';
import authReducer from './authReducers';
import featuredScore from './featuredScore'
import scoreBoardReducers from './scoreBoardReducers';
import newsReduces from './newsReduces';
import detailsNewsReducers from './detailsNewsReducers';
import saveSingleNewsReducer from './saveSingleNewsReducer';

export default combineReducers({
    authStatus : authReducer,
    featuredScores : featuredScore,
    scoreBoard : scoreBoardReducers,
    news : newsReduces,
    detailNews : detailsNewsReducers,
    singleNews : saveSingleNewsReducer
})