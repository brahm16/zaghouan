import { PRODUCTS } from "../../shared/productsS";
import React, { Component } from 'react'
import Store from "./Store";


export default class Products extends Component{
    constructor(props) {
        super(props);
    
        this.state = {
          prod:PRODUCTS
        };
      }
    render(){

        const all = this.state.prod.map((p) => {
            return (
                <Store key={p.id}  name={p.name} description={p.description} prix={p.prix}/>
              );
            });

    return(

        <>
        {all}

        </>
    )
}
}