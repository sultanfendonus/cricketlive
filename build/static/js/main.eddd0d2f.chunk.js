(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{126:function(e,t,a){e.exports=a(221)},155:function(e,t,a){},215:function(e,t,a){},221:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(27),c=a.n(l),s=a(18),o=a(33),i=a(113),m=a(40),u=a(11),d=a(12),h=a(15),p=a(13),E=a(14),v=a(28),y=a.n(v),f=a(55),g=a(114),w=a.n(g).a.create({baseURL:"http://128.199.235.135:5000"}),b=function(){return function(){var e=Object(f.a)(y.a.mark(function e(t){var a;return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.get("/score/allMatch");case 2:a=e.sent,t({type:"FEATURED_SCORE",payload:a.data.matchList.matches});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},N=a(47),O=a.n(N),S=a(225),x=a(222),M=(a(37),a(155),function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).onItemSelect=function(e){a.props.onClick(e)},a}return Object(E.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.props.getAllFeateredMatch()}},{key:"matchIdentifier",value:function(e){return e.name?r.a.createElement(S.a,{color:"green"},e.name):r.a.createElement("div",null)}},{key:"renderConvertedDate",value:function(e){var t=new Date(e);return r.a.createElement("small",null,t.toLocaleString()," (Your Time)")}},{key:"renderMatchSummeryTextIfMatchisLive",value:function(e){if("Live"===e.currentMatchState)return r.a.createElement(S.a,{color:"magenta"},e.matchSummaryText)}},{key:"render",value:function(){var e,t=this;if(console.log(this.props.status),!this.props.allFeaturedMatch)return r.a.createElement("div",null,r.a.createElement(x.a,{style:{width:450,marginTop:16},loading:"true"}),r.a.createElement(x.a,{style:{width:450,marginTop:16},loading:"true"}),r.a.createElement(x.a,{style:{width:450,marginTop:16},loading:"true"}),r.a.createElement(x.a,{style:{width:450,marginTop:16},loading:"true"}));var a=this.props.allFeaturedMatch;return"UPCOMING"===this.props.status&&(a=O.a.filter(a,{status:"UPCOMING"})),e=a.map(function(e){return r.a.createElement("div",{key:e.id},r.a.createElement("a",{onClick:function(){return t.onItemSelect({list:e})},href:"#",className:"list-group-item list-group-item-action"},r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("img",{src:e.homeTeam.logoUrl,className:"rounded-circle float-left",alt:"...",width:"45",height:"45"})),r.a.createElement("div",null,r.a.createElement("img",{src:e.awayTeam.logoUrl,className:"rounded-circle float-right",alt:"...",width:"45",height:"45"}))),r.a.createElement("div",null,r.a.createElement("div",{className:"d-flex w-100 justify-content-between"},r.a.createElement("h6",{className:"mb-1"},e.homeTeam.shortName+" vs "+e.awayTeam.shortName),r.a.createElement("br",null),t.renderConvertedDate(e.startDateTime)),r.a.createElement("p",{className:"mb-1"},e.series.name+", "+e.venue.name),t.matchIdentifier(e),r.a.createElement(S.a,{color:"cyan"},e.currentMatchState),t.renderMatchSummeryTextIfMatchisLive(e))))}),r.a.createElement("div",{className:"list-group example-1 square scrollbar-cyan bordered-cyan"},e)}}]),t}(n.Component)),T=Object(s.b)(function(e){return{allFeaturedMatch:e.featuredScores.allMatch}},{getAllFeateredMatch:b})(M),j=a(224),k=a(25),I=a(32),C=function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(d.a)(t,[{key:"renderMatchStatus",value:function(e){return"LIVE"===e.status?r.a.createElement(S.a,{color:"#87d068"},e.status):r.a.createElement(S.a,{color:"#108ee9"},e.status)}},{key:"renderMatchSummery",value:function(e){return"UPCOMING"===e.status?r.a.createElement("div",null):"LIVE"===e.status?r.a.createElement("div",{style:{textAlign:"center",color:"white"}},r.a.createElement("p",{style:{textAlign:"center",color:"white",fontStyle:"bold",fontSize:"15px"}},e.matchSummaryText),r.a.createElement("p",null,e.series.name+", "+e.venue.name),r.a.createElement(I.a,{to:"/fullScore/".concat(e.id,"/").concat(e.series.id,"/").concat(e.status)}," ",r.a.createElement(j.a,{type:"primary"},"View Full Scores",r.a.createElement(k.a,{type:"right"})," ")," ")):r.a.createElement("div",{style:{textAlign:"center",color:"white"}},r.a.createElement("h6",{style:{textAlign:"center",color:"white"}},e.currentMatchState),r.a.createElement("p",null,e.series.name+", "+e.venue.name),r.a.createElement(I.a,{to:"/fullScore/".concat(e.id,"/").concat(e.series.id,"/").concat(e.status)}," ",r.a.createElement(j.a,{type:"primary"},"View Full Scores",r.a.createElement(k.a,{type:"right"})," ")," "))}},{key:"renderHomeTeamMatchScore",value:function(e){if("UPCOMING"===e.status)return r.a.createElement("div",null);var t=e.scores.homeScore.replace("-","/");return r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("h4",{className:"pt-3",style:{color:"white",marginBottom:"0em"}},t),r.a.createElement("p",{style:{color:"white"}},"(",e.scores.homeOvers,")"))}},{key:"renderAwayTeamMatchScore",value:function(e){if("UPCOMING"===e.status)return r.a.createElement("div",null);var t=e.scores.awayScore.replace("-","/");return r.a.createElement("div",{className:"col-sm-4",style:{textAlign:"center"}},r.a.createElement("h4",{className:"pt-3 mr-3",style:{color:"white",marginBottom:"0em"}},t),r.a.createElement("p",{style:{color:"white"}},"(",e.scores.awayOvers,")"))}},{key:"render",value:function(){var e=this.props.matchInfo.list;return O.a.isEmpty(this.props.matchInfo)?r.a.createElement("div",null,"null"):r.a.createElement("div",{className:"container",style:{background:"black",color:"white"}},r.a.createElement("div",{className:"row py-3"},r.a.createElement("div",{className:"col-sm-4",style:{alignContent:"center"}},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-8"},r.a.createElement("img",{style:{display:"block",margin:"auto"},src:e.homeTeam.logoUrl,alt:"Home Team flag",className:"img-thumbnail my-1",width:"150",height:"130"}),r.a.createElement("p",{style:{textAlign:"center"}},e.homeTeam.name)),this.renderHomeTeamMatchScore(e)))),r.a.createElement("div",{className:"col-sm-4"},r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{style:{textAlign:"center"}},this.renderMatchStatus(e)),r.a.createElement("br",null),r.a.createElement("br",null),this.renderMatchSummery(e)),r.a.createElement("div",{className:"col-sm-4"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-4"},this.renderAwayTeamMatchScore(e)),r.a.createElement("div",{className:"col-sm-8"},r.a.createElement("div",null,r.a.createElement("img",{style:{display:"block",margin:"auto"},src:e.awayTeam.logoUrl,alt:"away Team Flag",class:"img-thumbnail my-1",width:"150",height:"130"}),r.a.createElement("p",{className:"mx-2",style:{textAlign:"center"}},e.awayTeam.name))))))))}}]),t}(r.a.Component),A=Object(s.b)(null,{getAllFeateredMatch:b})(C),L=(a(215),function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).dateToTime=function(e){return e.toLocaleString("en-US",{hour:"numeric",minute:"numeric"})},a}return Object(E.a)(t,e),Object(d.a)(t,[{key:"convertDate",value:function(e){var t=e.split(" ");return t[2]+" "+t[1]+" "+t[3]}},{key:"renderMatchStatus",value:function(e){var t=new Date(e.startDateTime),a=this.convertDate(t+" "),n=e.startDateTime,l=60*(new Date).getTimezoneOffset()*1e3,c=new Date(n),s=new Date(c.getTime()+l);return console.log(),"UPCOMING"===e.status?r.a.createElement("div",null,r.a.createElement("h3",{style:{textAlign:"center",color:"white",fontStyle:"bold",marginBottom:"0em"}},a),r.a.createElement("h6",{style:{textAlign:"center",color:"white",fontStyle:"bold",marginBottom:"0em"}},"".concat(this.dateToTime(s)," (").concat(this.dateToTime(c)," Your Time)")),r.a.createElement("small",null,e.venue.name),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("h5",{style:{textAlign:"center",color:"white"}},e.series.name),r.a.createElement("br",null),r.a.createElement(j.a,{type:"primary"},"Go to Match Chat",r.a.createElement(k.a,{type:"right"}))):r.a.createElement("div",null)}},{key:"renderMatchSummery",value:function(e){return"UPCOMING"===e.status?r.a.createElement("div",null):r.a.createElement("div",{style:{textAlign:"center",color:"white"}},r.a.createElement("h6",{style:{textAlign:"center",color:"white"}},e.currentMatchState),r.a.createElement("p",null,e.series.name+", "+e.venue.name),r.a.createElement(j.a,{type:"primary"},"View Full Scores",r.a.createElement(k.a,{type:"right"})))}},{key:"renderHomeTeamMatchScore",value:function(e){if("UPCOMING"===e.status)return r.a.createElement("div",null);var t=e.scores.homeScore.replace("-","/");return r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("h4",{className:"pt-3",style:{color:"white",marginBottom:"0em"}},t),r.a.createElement("p",{style:{color:"white"}},"(",e.scores.homeOvers,")"))}},{key:"renderAwayTeamMatchScore",value:function(e){if("UPCOMING"===e.status)return r.a.createElement("div",null);var t=e.scores.awayScore.replace("-","/");return r.a.createElement("div",{className:"col-sm-4",style:{textAlign:"center"}},r.a.createElement("h4",{className:"pt-3 mr-3",style:{color:"white",marginBottom:"0em"}},t),r.a.createElement("p",{style:{color:"white"}},"(",e.scores.awayOvers,")"))}},{key:"render",value:function(){var e=this.props.matchInfo.list;return r.a.createElement("div",{className:"container",style:{color:"white"}},r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"row py-5"},r.a.createElement("div",{className:"col-sm-4",style:{alignContent:"center"}},r.a.createElement("img",{style:{display:"block",margin:"auto"},src:e.homeTeam.logoUrl,alt:"Home Team flag",class:"img-thumbnail my-1",width:"200",height:"180"}),r.a.createElement("h4",{style:{textAlign:"center",color:"white",fontStyle:"bold"}},e.homeTeam.name)),r.a.createElement("div",{className:"col-sm-4"},r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{style:{textAlign:"center"}},this.renderMatchStatus(e)),r.a.createElement("br",null),r.a.createElement("br",null),this.renderMatchSummery(e)),r.a.createElement("div",{className:"col-sm-4"},r.a.createElement("img",{style:{display:"block",margin:"auto"},src:e.awayTeam.logoUrl,alt:"away Team Flag",class:"img-thumbnail my-1",width:"200",height:"180"}),r.a.createElement("h4",{className:"mx-2",style:{textAlign:"center",color:"white",fontStyle:"bold"}},e.awayTeam.name))))}}]),t}(n.Component)),U=Object(s.b)(null)(L),D=a(223),B=(a(83),function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.props.getLatestNews()}},{key:"saveTheNewsShortDetailsToAction",value:function(e){this.props.saveSingleNews(e)}},{key:"renderLatestNews",value:function(){var e=this;return this.props.latestNews.map(function(t){return r.a.createElement(I.a,{to:"/news-details".concat(t.link),onClick:function(){return e.saveTheNewsShortDetailsToAction(t)},class:"card shadow-sm p-1 mb-2 bg-white rounded"},r.a.createElement("img",{class:"card-img-top img-fluid",src:t.thumbnail,alt:t.title}),r.a.createElement("div",{class:"card-block"},r.a.createElement("h5",{class:"card-title m-1"},t.title),r.a.createElement("p",{class:"card-text m-1"},t.discriptions),r.a.createElement("p",{class:"card-text m-1"},r.a.createElement("small",{class:"text-muted"},t.date))))})}},{key:"render",value:function(){return console.log(this.props.latestNews),r.a.createElement("div",{className:"col-sm-8 mt-3"},r.a.createElement("div",{class:"card-columns"},this.renderLatestNews()))}}]),t}(n.Component)),F=Object(s.b)(function(e){return{latestNews:e.news.news}},{getLatestNews:function(){return function(){var e=Object(f.a)(y.a.mark(function e(t){var a;return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.get("/news");case 2:a=e.sent,t({type:"LATEST_NEWS",payload:a.data});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},saveSingleNews:function(e){return{type:"SAVE_NEWS",payload:e}}})(B),G=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={matchInfo:{},matchView:"ALL"},a.onSelectedList=function(e){a.setState({matchInfo:e})},a}return Object(E.a)(t,e),Object(d.a)(t,[{key:"renderMatchSummeryOrUpcomingMatch",value:function(e){return O.a.isEmpty(e)?r.a.createElement(F,null):"UPCOMING"===e.list.status?r.a.createElement("div",{className:"col-sm-8 bgimg"},r.a.createElement(U,{matchInfo:e})):r.a.createElement("div",{className:"col-sm-8"},r.a.createElement(A,{matchInfo:e}))}},{key:"renderFeaturedMatchView",value:function(){return"ALL"===this.state.matchView?r.a.createElement(T,{onClick:this.onSelectedList,status:"ALL"}):r.a.createElement(T,{onClick:this.onSelectedList,status:"UPCOMING"})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-4"},r.a.createElement("div",{className:"content-center-innings"},r.a.createElement(D.a.Group,{defaultValue:"a",buttonStyle:"solid"},r.a.createElement(D.a.Button,{onClick:function(){return e.setState({matchView:"ALL"})},value:"a"},"Featured Match"),r.a.createElement(D.a.Button,{onClick:function(){return e.setState({matchView:"UPCOMING"})},value:"b"},"Upcoming Match"))),this.renderFeaturedMatchView()),this.renderMatchSummeryOrUpcomingMatch(this.state.matchInfo))}}]),t}(r.a.Component),_=function(){return r.a.createElement("div",{className:"d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm"},r.a.createElement("h5",{className:"my-0 mr-md-auto font-weight-normal"},"Fendonus Limited"),r.a.createElement("nav",{className:"my-2 my-md-0 mr-md-3"},r.a.createElement(I.a,{className:"p-2 text-dark",to:"/"},"Home")))},P=a(21),V=Object(P.a)(),R=function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(d.a)(t,[{key:"renderNotOutStarIndicator",value:function(e){if(e.runs)return"*"}},{key:"render",value:function(){var e=this;if(this.props.batsmen){var t=this.props.batsmen.map(function(t){return"not out"===t.howOut||""===t.howOut?r.a.createElement("tr",{style:{height:"60px"}},r.a.createElement("th",{scope:"row"},r.a.createElement("div",{className:"wrapper"},r.a.createElement("img",{style:{height:"56px",width:"54px",padding:"0",overflow:"hidden",margin:" 4px"},src:t.imageURL||"https://www.cricket.com.au/-/media/Players/Men/male-silhouette.ashx?mw=240",alt:"..."}))),r.a.createElement("td",{className:"not-out-text-bold"},t.name),r.a.createElement("td",{className:"not-out-text-bold"},t.howOut),r.a.createElement("td",{className:"not-out-text-bold"},t.runs,e.renderNotOutStarIndicator(t)),r.a.createElement("td",{className:"not-out-text-bold"},t.balls),r.a.createElement("td",{className:"not-out-text-bold"},t.fours),r.a.createElement("td",{className:"not-out-text-bold"},t.sixes),r.a.createElement("td",{className:"not-out-text-bold"},t.strikeRate)):r.a.createElement("tr",{style:{height:"60px"},className:"table-active"},r.a.createElement("th",{scope:"row"},r.a.createElement("div",{className:"wrapper"},r.a.createElement("img",{style:{height:"56px",width:"54px",padding:"0",overflow:"hidden",margin:" 4px"},src:t.imageURL||"https://www.cricket.com.au/-/media/Players/Men/male-silhouette.ashx?mw=240",alt:"..."}))),r.a.createElement("td",{className:"text-bold"},t.name),r.a.createElement("td",null,t.howOut),r.a.createElement("td",null,t.runs),r.a.createElement("td",null,t.balls),r.a.createElement("td",null,t.fours),r.a.createElement("td",null,t.sixes),r.a.createElement("td",null,t.strikeRate))});return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row py-3"},r.a.createElement("div",{className:"col-sm"}),r.a.createElement("div",{className:"col-sm-10"},r.a.createElement("table",{class:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"}),r.a.createElement("th",{className:"text-extra-bold",scope:"col"},"Batsmen"),r.a.createElement("th",{scope:"col"}," "),r.a.createElement("th",{scope:"col"},"Runs"),r.a.createElement("th",{scope:"col"},"Balls"),r.a.createElement("th",{scope:"col"},"4s"),r.a.createElement("th",{scope:"col"},"6s"),r.a.createElement("th",{scope:"col"},"S/R"))),r.a.createElement("tbody",null,t))),r.a.createElement("div",{className:"col-sm"})))}return r.a.createElement("div",null,r.a.createElement("p",null,"Loading"))}}]),t}(n.Component),H=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(l)))).state={inningsIdentifier:0},a.x=function(){if(a.props.scores[1])return r.a.createElement(D.a.Button,{onClick:function(){return a.selectInnings(1)},value:"a"},a.props.scores[0].shortName)},a.y=function(){if(a.props.scores[1])return r.a.createElement(D.a.Button,{onClick:function(){return a.selectInnings(2)},value:"a"},a.props.scores[1].shortName)},a}return Object(E.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.props.getScorebordForSingleMatch(this.props.matchId,this.props.seriesId)}},{key:"renderScoreBoard",value:function(e,t){return 1===this.state.inningsIdentifier?r.a.createElement(R,{batsmen:e}):2===this.state.inningsIdentifier?r.a.createElement(R,{batsmen:t}):"COMPLETED"===this.props.status?r.a.createElement(R,{batsmen:t}):r.a.createElement(R,{batsmen:e})}},{key:"selectInnings",value:function(e){1===e?this.setState({inningsIdentifier:1}):2===e&&this.setState({inningsIdentifier:2})}},{key:"renderInnings",value:function(){var e=this;if(this.props.scores){if(1===this.props.scores[0].id)return r.a.createElement(D.a.Group,{defaultValue:"a",buttonStyle:"solid"},r.a.createElement(D.a.Button,{onClick:function(){return e.selectInnings(1)},value:"a"},this.props.scores[0].shortName),this.x());if(1===this.props.scores[1].id)return r.a.createElement(D.a.Group,{defaultValue:"a",buttonStyle:"solid"},this.y(),r.a.createElement(D.a.Button,{onClick:function(){return e.selectInnings(1)},value:"b"},this.props.scores[0].shortName))}}},{key:"renderHeaderMenu",value:function(){return r.a.createElement("div",{className:"content-center"},r.a.createElement(D.a.Group,{defaultValue:"a",buttonStyle:"solid"},r.a.createElement(D.a.Button,{value:"a"},"Scorecard"),r.a.createElement(D.a.Button,{value:"b"},"Commentary"),r.a.createElement(D.a.Button,{value:"c"},"Highlights"),r.a.createElement(D.a.Button,{value:"d"},"Graphs")),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"content-center-innings"},this.renderInnings()))}},{key:"render",value:function(){var e,t;return this.props.scores?(this.props.scores[0]&&(e=this.props.scores[0].batsmen),this.props.scores[1]&&(t=this.props.scores[1].batsmen),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm"}),r.a.createElement("div",{className:"col-sm-12"},this.renderHeaderMenu()),r.a.createElement("div",{className:"col-sm"})),this.renderScoreBoard(e,t))):r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm"}),r.a.createElement("div",{className:"col-sm-12"},this.renderHeaderMenu()),r.a.createElement("div",{className:"col-sm"})),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm"}),r.a.createElement("div",{className:"col-sm-10"}),r.a.createElement("div",{className:"col-sm"}))))}}]),t}(n.Component),W=Object(s.b)(function(e,t){return console.log(e),{scores:e.scoreBoard.score,matchId:t.match.params.matchId,seriesId:t.match.params.seriesId,status:t.match.params.status}},{getScorebordForSingleMatch:function(e,t){return function(){var a=Object(f.a)(y.a.mark(function a(n){var r;return y.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,w.get("/score/scorecards/"+e+"/"+t);case 2:r=a.sent,n({type:"MATCH_SCORE",payload:r.data.fullScorecard});case 4:case"end":return a.stop()}},a)}));return function(e){return a.apply(this,arguments)}}()}})(H),q=function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.props.getDetailsNews(this.props.id1+"/"+this.props.id2)}},{key:"render",value:function(){return console.log(this.props.newsTitle),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-1"}),r.a.createElement("div",{className:"col-sm"},r.a.createElement("div",{class:"card"},r.a.createElement("img",{class:"card-img-top",src:this.props.newsTitle.thumbnail,alt:"Card image cap"}),r.a.createElement("div",{class:"card-body"},r.a.createElement("h5",{class:"card-title m-1"},this.props.newsTitle.title),r.a.createElement("p",{class:"card-text"},this.props.news.contentFirstPart),r.a.createElement("p",{class:"card-text"},this.props.news.contentSecoundPart)))),r.a.createElement("div",{className:"col-sm-1"})))}}]),t}(n.Component),z=Object(s.b)(function(e,t){return{id1:t.match.params.category,id2:t.match.params.url,news:e.detailNews.news,newsTitle:e.singleNews.news}},{getDetailsNews:function(e){return function(){var t=Object(f.a)(y.a.mark(function t(a){var n;return y.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w.get("/detailsnews/"+e);case 2:n=t.sent,a({type:"DETAIL_NEWS",payload:n.data});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}})(q),J=function(){return r.a.createElement(m.b,{history:V},r.a.createElement("div",null,r.a.createElement("div",{className:"container-fluid"},r.a.createElement(_,null),r.a.createElement(m.a,{path:"/",exact:!0,component:G}),r.a.createElement(m.a,{path:"/fullScore/:matchId/:seriesId/:status",exact:!0,component:W}),r.a.createElement(m.a,{path:"/news-details/:category/:url",exact:!0,component:z}))))},X=a(16),Y={isSignedIn:null,userId:null},K={allMatch:null},Q={score:null,info:null},Z={news:[]},$={news:{}},ee={news:{}},te=Object(o.c)({authStatus:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SIGN_IN":return Object(X.a)({},e,{isSignedIn:!0,userId:t.payload});case"SIGN_OUT":return Object(X.a)({},e,{isSignedIn:!1,userId:null});default:return e}},featuredScores:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FEATURED_SCORE":return Object(X.a)({},e,{allMatch:t.payload});default:return e}},scoreBoard:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"MATCH_SCORE":return t.payload?Object(X.a)({},e,{score:t.payload.innings}):Object(X.a)({},e,{score:null});case"MATCH_INFO":return Object(X.a)({},e,{info:t.payload});default:return e}},news:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LATEST_NEWS":return Object(X.a)({},e,{news:t.payload});default:return e}},detailNews:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"DETAIL_NEWS":return Object(X.a)({},e,{news:t.payload});default:return e}},singleNews:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SAVE_NEWS":return Object(X.a)({},e,{news:t.payload});default:return e}}}),ae=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||o.d,ne=Object(o.e)(te,ae(Object(o.a)(i.a)));c.a.render(r.a.createElement(s.a,{store:ne},r.a.createElement(J,null)),document.querySelector("#root"))},83:function(e,t,a){}},[[126,1,2]]]);
//# sourceMappingURL=main.eddd0d2f.chunk.js.map