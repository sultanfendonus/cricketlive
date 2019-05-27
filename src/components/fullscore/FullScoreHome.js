import React, { Component } from 'react'
import { connect } from 'react-redux'
import 'antd/dist/antd.css';
import { Radio } from 'antd';
import '../../css/main.css'
import {getScorebordForSingleMatch} from '../../actions'
import ScoreBoard from './ScoreBoard';


class FullScoreHome extends Component {

    state = {inningsIdentifier : 0}

    componentDidMount(){
        this.props.getScorebordForSingleMatch(this.props.matchId,this.props.seriesId);
        //this.props.getScoreBoardForSecondInnings('45730','2182');
    }

        renderScoreBoard(scoreBoard1,scoreBoard2){
            if(this.state.inningsIdentifier===1){
                return(
                    <ScoreBoard batsmen = {scoreBoard1} />
                )
            }else if(this.state.inningsIdentifier===2){
                return(
                    <ScoreBoard batsmen = {scoreBoard2} />
                )
            }else{
                if(this.props.status==="COMPLETED"){
                    return(
                        <ScoreBoard batsmen = {scoreBoard2} />
                    )
                }else{
                    return(
                        <ScoreBoard batsmen = {scoreBoard1} />
                    )
                }
                
            }
            
        
    }

    selectInnings(innings){
        if(innings===1){
            this.setState({inningsIdentifier : 1})
        }else if(innings===2){
            this.setState({inningsIdentifier : 2})
        }
    }

    x = ()=>{
        if(this.props.scores[1]){
            return(
                <Radio.Button onClick={()=>this.selectInnings(1)} value="a">{this.props.scores[0].shortName}</Radio.Button>
            )
        }
    }

    y = ()=>{
        if(this.props.scores[1]){
            return(
                <Radio.Button onClick={()=>this.selectInnings(2)} value="a">{this.props.scores[1].shortName}</Radio.Button>
            )                                   
        }
    }

    renderInnings(){
        if(this.props.scores){
            if(this.props.scores[0].id===1){
                return(
                    <Radio.Group  defaultValue="a" buttonStyle="solid">
                        <Radio.Button onClick={()=>this.selectInnings(1)} value="a">{this.props.scores[0].shortName}</Radio.Button>
                        {this.x()}
                        
                    </Radio.Group>
                )
            }else if(this.props.scores[1].id===1){
                return(
                    <Radio.Group  defaultValue="a" buttonStyle="solid">
                        {this.y()}
                        
                        <Radio.Button onClick={()=>this.selectInnings(1)} value="b">{this.props.scores[0].shortName}</Radio.Button>
                    </Radio.Group>
                )
            }
        }
        
        
    }

    renderHeaderMenu(){
        return(
            <div className="content-center">
                <Radio.Group  defaultValue="a" buttonStyle="solid">
                    <Radio.Button value="a">Scorecard</Radio.Button>
                    <Radio.Button value="b">Commentary</Radio.Button>
                    <Radio.Button value="c">Highlights</Radio.Button>
                    <Radio.Button value="d">Graphs</Radio.Button>
                </Radio.Group>

                <br/>
                <br/>
                <div className="content-center-innings">
                
                {this.renderInnings()}

                </div>

                
            </div>
        )
            
    }




    

 
    render() {

        let scoreBoard1,scoreBoard2;

        

        if(this.props.scores){
            if(this.props.scores[0]){
                scoreBoard1 = this.props.scores[0].batsmen;
            }
            if(this.props.scores[1]){
                scoreBoard2 = this.props.scores[1].batsmen;
            }
            //scoreBoard1 = this.props.scores[0].batsmen;
            //scoreBoard2 = this.props.scores[1].batsmen;

            return (
                <div className="container">
                    <div className="row">
                        <div className="col-sm">
    
                        </div>
                        <div className="col-sm-12">
                            {this.renderHeaderMenu()}
                        </div>
                        <div className="col-sm">
    
                        </div>
    
                    </div>
                    {this.renderScoreBoard(scoreBoard1,scoreBoard2)}
                    
                </div>
            );
        }else{
            return(
                <div className="container">
                <div className="row">
                    <div className="col-sm">

                    </div>
                    <div className="col-sm-12">
                        {this.renderHeaderMenu()}
                    </div>
                    <div className="col-sm">

                    </div>

                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm">

                        </div>
                        <div className="col-sm-10">
                        </div>
                        <div className="col-sm">

                        </div>

                    </div>

                </div>
            </div>
            )
        

        }
    }
}

const mapStateToProps = (state,ownProps) => {
    console.log(state);
    return{
        scores : state.scoreBoard.score,
        matchId : ownProps.match.params.matchId,
        seriesId : ownProps.match.params.seriesId,
        status : ownProps.match.params.status,
    }
}


export default connect(mapStateToProps,{getScorebordForSingleMatch})(FullScoreHome);