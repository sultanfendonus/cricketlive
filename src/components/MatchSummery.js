import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import {Card,Tag, Button, Icon} from 'antd'
import 'antd/dist/antd.css';
import {Link} from 'react-router-dom'
import {getAllFeateredMatch} from '../actions/index'


class MatchSummery extends React.Component {

    
    renderMatchStatus(match){
        if(match.status==='LIVE'){
            return(
                <Tag color="#87d068">{match.status}</Tag>
            )
        }else{
            return(
                <Tag color="#108ee9">{match.status}</Tag>
            )
        } 
    }

    renderMatchSummery(match){
        if(match.status === 'UPCOMING'){
            return(
                <div></div>
            )
        }else if(match.status === 'LIVE'){
            return(
                <div style = {{textAlign:"center" , color:"white"}}>
                    <p style = {{textAlign:"center" , color:"white",fontStyle:"bold" , fontSize:"15px"}}>{match.matchSummaryText}</p>
                    <p>{match.series.name+", "+match.venue.name}</p>
                   
                    <Link to={`/fullScore/${match.id}/${match.series.id}/${match.status}`}> <Button type="primary">View Full Scores<Icon type="right" /> </Button> </Link>
                    
                </div>
                
                
            )
        }
        else{
            return(
                <div style = {{textAlign:"center" , color:"white"}}>
                    <h6 style = {{textAlign:"center" , color:"white"}}>{match.currentMatchState}</h6>
                    <p>{match.series.name+", "+match.venue.name}</p>
                   
                    <Link to={`/fullScore/${match.id}/${match.series.id}/${match.status}`}> <Button type="primary">View Full Scores<Icon type="right" /> </Button> </Link>
                </div>
                
                
            )
        }
    }

    renderHomeTeamMatchScore(match){
        if(match.status === 'UPCOMING'){
            return(
                <div></div>
            )
        }else{
            const matchStr = match.scores.homeScore;
            const resultMatchStr = matchStr.replace("-", "/");
            return(
                <div style={{textAlign:"center"}}>
                    <h4 className="pt-3" style = {{color:"white",marginBottom:"0em"}}>{resultMatchStr}</h4>
                    <p style = {{color:"white"}}>({match.scores.homeOvers})</p>
                </div>
            )
        }
    }

    renderAwayTeamMatchScore(match){
        if(match.status === 'UPCOMING'){
            return(
                <div></div>
            )
        }else{
            const matchStr = match.scores.awayScore;
            const resultMatchStr = matchStr.replace("-", "/");
            return(
                <div className="col-sm-4" style={{textAlign:"center"}}>
                    <h4 className="pt-3 mr-3" style = {{color:"white",marginBottom:"0em"}}>{resultMatchStr}</h4>
                    <p style = {{color:"white"}}>({match.scores.awayOvers})</p>
                </div>
            )
        }
    }


    render() {

        const match = this.props.matchInfo.list;
        if(_.isEmpty(this.props.matchInfo)){
            return (
                <div>null</div>
                
            );
        }
        return (
            
            <div className="container" style={{background: 'black', color:'white'}}>
                <div className="row py-3">
                    <div className="col-sm-4" style={{alignContent: 'center'}}>
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-8">
                                    <img style={{display: "block", margin: "auto"}} src={match.homeTeam.logoUrl} alt="Home Team flag" className="img-thumbnail my-1" width="150" height="130"/>
                                    <p style={{textAlign: "center"}}>{match.homeTeam.name}</p>
                                </div>
                                
                                    {this.renderHomeTeamMatchScore(match)}
                                

                            </div>

                        </div>
                        

                    </div>

                    <div className="col-sm-4">
                        <br/>
                        <br/>
                        <br/>
                        
                        <div style={{textAlign: "center"}}>
                            {this.renderMatchStatus(match)}
                        </div>

                        <br/>
                        <br/>
                        

                        {this.renderMatchSummery(match)}

                        
                        
                        
                    </div>
                    <div className="col-sm-4">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-4">
                                    {this.renderAwayTeamMatchScore(match)}

                                </div>
                                <div className="col-sm-8">
                                    <div>
                                        <img style={{display: "block", margin: "auto"}} src={match.awayTeam.logoUrl} alt="away Team Flag" class="img-thumbnail my-1" width="150" height="130"/>
                                        <p className="mx-2" style={{textAlign: "center"}}>{match.awayTeam.name}</p>
                                    </div>
                                    
                                </div>

                            </div>

                        </div>
                        
                    </div>

                </div>

            </div>
            
        );
    }
}

const mapStateToProps = (state) => ({
    
})

export default connect(null,{getAllFeateredMatch} )(MatchSummery);