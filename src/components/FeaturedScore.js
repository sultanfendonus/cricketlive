import React, { Component } from 'react'
import {getAllFeateredMatch} from '../actions/index'
import {connect} from 'react-redux'
import _ from 'lodash'
import {Card,Tag} from 'antd'
import 'antd/dist/antd.css';
import '../css/custom.css'


class FeaturedScore extends Component {

    componentDidMount(){
        this.props.getAllFeateredMatch();
    }

    matchIdentifier(list){
        if(!list.name){
            return(
                <div></div>
            )
            
        }else{
            return(
                <Tag color="green">{list.name}</Tag>
            )
        }
    }

    renderConvertedDate(time){
       let d = new Date(time);
       
       return(
           <small>{d.toLocaleString()} (Your Time)</small>
           
       )
    }

    renderMatchSummeryTextIfMatchisLive(list){
        if(list.currentMatchState === "Live"){
            return(
                <Tag color="magenta">{list.matchSummaryText}</Tag>
            )
        }

    }

    //Callback method 
    onItemSelect = (formValues)=>{
        this.props.onClick(formValues);
    }

    

    render() {

        console.log(this.props.status);

        let renderMatches;

        if(this.props.allFeaturedMatch){
            

            let matches = this.props.allFeaturedMatch;
            if(this.props.status==='UPCOMING'){
                matches =  _.filter(matches, { 'status': "UPCOMING" });
            }
            // matches = _.orderBy(matches, ['isLive'],['asc']);
           
            // if(matches[0].currentMatchState==="Live"){

            // }else{
            //     matches = _.orderBy(matches, ['status'],['desc']);
            // }
            

            
            
            renderMatches = matches.map(list=>{
                return(

                    <div key={list.id}>
                        <a onClick={()=>this.onItemSelect({list})} href="#" className="list-group-item list-group-item-action"> 

                        <div>
                            <div>
                                <img src={list.homeTeam.logoUrl} className="rounded-circle float-left" alt="..." width="45" height="45"/>
                            </div>

                            <div>
                                <img src={list.awayTeam.logoUrl} className="rounded-circle float-right" alt="..." width="45" height="45"/>
                            </div>

                        </div>
                        
                            <div>
                                <div className="d-flex w-100 justify-content-between"> 
                                <h6 className="mb-1">{list.homeTeam.shortName+" vs "+list.awayTeam.shortName}</h6>
                                <br />
                                {this.renderConvertedDate(list.startDateTime)}
                                </div>
                                <p className="mb-1">{list.series.name+", "+list.venue.name}</p>
                                
                                {this.matchIdentifier(list)}
                                <Tag color="cyan">{list.currentMatchState}</Tag>
                                {this.renderMatchSummeryTextIfMatchisLive(list)}
                                

                            </div>
                            
                        </a>
                    </div>
                    
                   
                )
            })

       }else{
           return(
               <div>
                        <Card style={{ width: 450, marginTop: 16 }} loading="true">
                        </Card>
                        <Card style={{ width: 450, marginTop: 16 }} loading="true">
                        </Card>
                        <Card style={{ width: 450, marginTop: 16 }} loading="true">
                        </Card>
                        <Card style={{ width: 450, marginTop: 16 }} loading="true">
                        </Card>

               </div>
                
           )
                
       }
       


        return (

                <div className="list-group example-1 square scrollbar-cyan bordered-cyan">
                    {renderMatches}
                </div>

        );
    }
}

const mapStateToProps=(state)=>{
    //console.log(state);
    return{
        allFeaturedMatch : state.featuredScores.allMatch
    }
}

export default connect(mapStateToProps,{getAllFeateredMatch})(FeaturedScore);