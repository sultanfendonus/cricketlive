import React from 'react'
import FeaturedScore from './FeaturedScore';
import MatchSummery from './MatchSummery';
import _ from 'lodash'
import '../css/backgroundImage.css'
import UpcomingMatch from './UpcomingMatch';
import 'antd/dist/antd.css';
import { Radio } from 'antd';
import '../css/main.css'
import LatestNews from './LatestNews';


class HomePage extends React.Component {

    state = { matchInfo : {}, matchView : 'ALL'}

    onSelectedList = (matchInfo)=>{

        this.setState({matchInfo : matchInfo})
        
    }

    renderMatchSummeryOrUpcomingMatch(match){
        if(_.isEmpty(match)){
            return (
                <LatestNews />
                
            );
        }else{

            if(match.list.status === "UPCOMING"){
                return(
                    <div className="col-sm-8 bgimg">
                        <UpcomingMatch matchInfo = {match}/>
                    </div>
                    
                )
            }else{
                return(
                    <div className="col-sm-8">
                        <MatchSummery matchInfo = {match}/>
                    </div>
                )

            }
        }
    }

    renderFeaturedMatchView(){
        if(this.state.matchView ==='ALL'){
            return(
                <FeaturedScore 
                            onClick={this.onSelectedList}
                            status = {"ALL"}
                        />
            )
        }else{
            return(
                <FeaturedScore 
                            onClick={this.onSelectedList}
                            status = {"UPCOMING"}
                        />
            )
        }
    }
    
    render() {
        return (
            
                <div className="row">
                    <div className="col-sm-4">
                        <div className="content-center-innings">
                            <Radio.Group  defaultValue="a" buttonStyle="solid">
                                <Radio.Button onClick={()=>this.setState({matchView : 'ALL'})} value="a">Featured Match</Radio.Button>
                                <Radio.Button onClick={()=>this.setState({matchView : 'UPCOMING'})} value="b">Upcoming Match</Radio.Button>
                            </Radio.Group>
                        </div>
                        {this.renderFeaturedMatchView()}  

                        
                    </div>
                  

                    {this.renderMatchSummeryOrUpcomingMatch(this.state.matchInfo)}

                    

                </div>
                
            
            
        );
    }
}

export default HomePage;