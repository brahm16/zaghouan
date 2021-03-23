
import React, { Component } from 'react';
import { PROMOTIONS } from "../../shared/promotions";
import Promotion from "./Promotion";
export default class PromotionsS extends Component{
    constructor(props) {
        super(props);
    
        this.state = {
          prod:PROMOTIONS
        };
      }
    render(){

        const all = this.state.prod.map((p , index) => {
            return (
                <Promotion p1={p} key={index}/>
              );
            });

    return(

        <>
        {all}

        </>
    )
}
}