import React, { Component } from 'react';
import { connect } from 'react-redux'
import 'antd/dist/antd.css';
import { Card } from 'antd';
import {getLatestNews} from '../actions/index'

class LatestNews extends Component {

    componentDidMount(){
        this.props.getLatestNews();
    }

    

    renderLatestNews(){
        return this.props.latestNews.map(news =>{
            return(
                <div class="card shadow-sm p-1 mb-2 bg-white rounded">
                    <img class="card-img-top img-fluid" src={news.thumbnail} alt={news.title}/>
                    <div class="card-block">
                        <h5 class="card-title m-1">{news.title}</h5>
                        <p class="card-text m-1">{news.discriptions}</p>
                        <p class="card-text m-1"><small class="text-muted">{news.date}</small></p>
                    </div>
                </div>
            )
        })

        
        
    }

    render() {
        console.log(this.props.latestNews)
        return (
            
            <div className="col-sm-8 mt-3">
                <div class="card-columns">

                    {this.renderLatestNews()}
            </div>
    </div>
                
            
        );
    }
}

const mapStateToProps = (state) => {
    return{
        latestNews : state.news.news
    }
}




export default connect( mapStateToProps, {getLatestNews} )(LatestNews);