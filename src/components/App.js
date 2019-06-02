import React from 'react';
import {Router, Route} from 'react-router-dom';
import HomePage from './HomePage'
import Header from './Header';
import history from '../history'
import FullScoreHome from './fullscore/FullScoreHome';
import NewsDetails from './news/NewsDetails';

const App = ()=>{
    return(
        <Router history={history}>
        <div>
            <div className="container-fluid">
            
                <Header />
                <Route path='/' exact component ={HomePage} />
                <Route path='/fullScore/:matchId/:seriesId/:status' exact component ={FullScoreHome} />
                <Route path='/news-details/:category/:url' exact component ={NewsDetails} />

            
            </div>
        </div>
        </Router>
    )
}

export default App;