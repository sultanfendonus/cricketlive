import React, { Component } from 'react'
import { connect } from 'react-redux'
import {getDetailsNews} from '../../actions'

class NewsDetails extends Component {
    

    componentDidMount(){
        this.props.getDetailsNews(this.props.id1+'/'+this.props.id2);
    }

    render() {
        console.log(this.props.newsTitle);

        return (
            <div className="container">
                <div className="row">
                <div className="col-sm-1">

                </div>
                    <div className="col-sm">
                        <div class="card">
                            <img class="card-img-top" src={this.props.newsTitle.thumbnail} alt="Card image cap"/>
                            <div class="card-body">
                            <h5 class="card-title m-1">{this.props.newsTitle.title}</h5>
                            <p class="card-text">{this.props.news.contentFirstPart}</p>
                            <p class="card-text">{this.props.news.contentSecoundPart}</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-1">

                    </div>

                </div>

            </div>
            
        );
    }
}



const mapStateToProps = (state,ownProps)=>{
    return{
        id1 : ownProps.match.params.category,
        id2 : ownProps.match.params.url,
        news : state.detailNews.news,
        newsTitle : state.singleNews.news
    }
}


export default connect( mapStateToProps,{getDetailsNews} )(NewsDetails);