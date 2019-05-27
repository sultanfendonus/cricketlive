import React, { Component } from 'react';
import { connect } from 'react-redux'
import {Card,Tag, Button, Icon} from 'antd'
import 'antd/dist/antd.css';

class UpcomingMatch extends Component {

    convertDate(d){
        var parts = d.split(" ");
        return parts[2]+" "+parts[1]+" "+parts[3];
       }

    dateToTime = date => date.toLocaleString('en-US', {
        hour: 'numeric',
        minute: 'numeric'
      });
      
      

    renderMatchStatus(match){
        const d = new Date(match.startDateTime);
        const newDate = this.convertDate(d+' ');


        const dateString = match.startDateTime;
        const userOffset = new Date().getTimezoneOffset()*60*1000;
        const localDate = new Date(dateString);
        const utcDate = new Date(localDate.getTime() + userOffset);
      
      console.log();

        if(match.status==='UPCOMING'){
            return(
                <div>
                    <h3 style={{textAlign: "center",color:"white",fontStyle:"bold",marginBottom:"0em"}}>{newDate}</h3>
                    <h6 style={{textAlign: "center",color:"white",fontStyle:"bold",marginBottom:"0em"}}>{`${this.dateToTime(utcDate)} (${this.dateToTime(localDate)} Your Time)`}</h6>
                    <small>{match.venue.name}</small>

                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <h5 style={{textAlign: "center",color:"white"}}>{match.series.name}</h5>
                    <br/>
                    <Button type="primary">Go to Match Chat<Icon type="right" /></Button>
                </div>
                
            )
        }else{
            return(
                <div></div>
            )
        } 
    }

    renderMatchSummery(match){
        if(match.status === 'UPCOMING'){
            return(
                <div></div>
            )
        }else{
            return(
                <div style = {{textAlign:"center" , color:"white"}}>
                    <h6 style = {{textAlign:"center" , color:"white"}}>{match.currentMatchState}</h6>
                    <p>{match.series.name+", "+match.venue.name}</p>
                   
                    <Button type="primary">View Full Scores<Icon type="right" /></Button>
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

        return (
            <div className="container" style={{color:'white'}}>

                <br/>
                <br/>
                <br/>
                <br/>

                <div className="row py-5">
                    <div className="col-sm-4" style={{alignContent: 'center'}}>
                        <img style={{display: "block", margin: "auto"}} src={match.homeTeam.logoUrl} alt="Home Team flag" class="img-thumbnail my-1" width="200" height="180"/>
                        <h4 style={{textAlign: "center",color:"white",fontStyle:"bold"}}>{match.homeTeam.name}</h4>
                        

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
                        <img style={{display: "block", margin: "auto"}} src={match.awayTeam.logoUrl} alt="away Team Flag" class="img-thumbnail my-1" width="200" height="180"/>
                        <h4 className="mx-2" style={{textAlign: "center",color:"white",fontStyle:"bold"}}>{match.awayTeam.name}</h4>
                        
                    </div>

                </div>

            </div>
        );
    }
}

export default connect(null)(UpcomingMatch);
