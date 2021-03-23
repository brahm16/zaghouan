import React, { Component } from 'react'
export default class Promotion extends Component{

render(){
    const style2 = {
        backgroundImage: "url('img/prevnap2.jpg')",
      };
    return(

        
<>     

                       <a href="single.html" className="_item">
                            <div className="left">
                                <div className="img" style={style2}></div>
                                <div className="tag discount">{this.props.p1.forfait+"%"}</div>
                            </div>
                            <div className="right">
                                <div className="_title">Autumn in Japan</div>
                                <div className="cost">
                                    <b>{this.props.p1.prixP+"$"}</b>
                                    <span className="old_cost">$3,880</span>
                                </div>
                                <div className="time">{this.props.p1.date+"Days"}</div>
                            </div>
                        </a>
                        
      
</>

    )
}

}