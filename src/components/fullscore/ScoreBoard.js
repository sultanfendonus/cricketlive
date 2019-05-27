import React, { Component } from 'react'
import 'antd/dist/antd.css';
import '../../css/main.css'


class ScoreBoard extends Component {

 
    renderNotOutStarIndicator(list){
        if(list.runs){
            return '*'
        }
    }

    render() {
        let scoreBoard;
        if(this.props.batsmen){
            scoreBoard = this.props.batsmen;

            //List of Score Cards ........................
            let lists = scoreBoard.map(list=>{
                if(list.howOut === "not out" || list.howOut === ""){
                    return(
                        <tr style={{height:"60px"}}>
                            <th scope="row">
                                <div className="wrapper">
                                    <img style={{height: "56px", width: "54px", padding: "0", overflow: "hidden", margin: " 4px"}} src={list.imageURL || "https://www.cricket.com.au/-/media/Players/Men/male-silhouette.ashx?mw=240"} alt="..."/>
                                </div>
                                
                                </th>
                            <td className="not-out-text-bold">{list.name}</td>
                            <td className="not-out-text-bold">{list.howOut}</td>
                            <td className="not-out-text-bold">{list.runs}{this.renderNotOutStarIndicator(list)}</td>
                            <td className="not-out-text-bold">{list.balls}</td>
                            <td className="not-out-text-bold">{list.fours}</td>
                            <td className="not-out-text-bold">{list.sixes}</td>
                            <td className="not-out-text-bold">{list.strikeRate}</td>
                        </tr>
                        
            
                    )
                }
                return(
                    <tr style={{height:"60px"}} className="table-active">
                        <th scope="row">
                            <div className="wrapper">
                                <img style={{height: "56px", width: "54px", padding: "0", overflow: "hidden", margin: " 4px"}} src={list.imageURL || 'https://www.cricket.com.au/-/media/Players/Men/male-silhouette.ashx?mw=240'} alt="..."/>
                            </div>
                            
                            </th>
                        <td className="text-bold">{list.name}</td>
                        <td>{list.howOut}</td>
                        <td>{list.runs}</td>
                        <td>{list.balls}</td>
                        <td>{list.fours}</td>
                        <td>{list.sixes}</td>
                        <td>{list.strikeRate}</td>
                    </tr>
                )
            })

            return (
                    <div className="container">
                        <div className="row py-3">
                            <div className="col-sm">
    
                            </div>
                            <div className="col-sm-10">
                                
                                <table class="table">
                                    <thead>
                                    <tr>
                                        <th scope="col"></th>
                                        <th className="text-extra-bold" scope="col">Batsmen</th>
                                        <th scope="col"> </th>
                                        <th scope="col">Runs</th>
                                        <th scope="col">Balls</th>
                                        <th scope="col">4s</th>
                                        <th scope="col">6s</th>
                                        <th scope="col">S/R</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                        {lists}
                                    </tbody>
                                </table>
    
                            </div>
                            <div className="col-sm">
    
                            </div>
    
                        </div>
    
                    </div>
               
            );
        }else{
            return(
                <div>
                    <p>Loading</p>
                </div>
            )
        

        }

        
          
        
        
    }
}


export default ScoreBoard;