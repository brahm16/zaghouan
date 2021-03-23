import { blue } from '@material-ui/core/colors';
import React, { Component } from 'react';
import { CATEGORIES } from "../../shared/Categories";
import Jeux from './Jeux';
import Store from './Store';
import Events from './Events';
import PromotionsS from './PromotionsS';
import Products from './Products';
import Footer from '../Item/Footer';
import Header from '../Item/Header';
export default class Services extends Component{
    constructor(props) {
        super(props);
    
        this.state = {
          prod:CATEGORIES,
          idC:0
        };
        this.handleCategorieItem=this.handleCategorieItem.bind(this)
      }
      handleCategorieItem(v){
          this.setState(prev=>({
              ...prev,
              idC:v
          })
              

          );

      }
      render(){
        const style1 = {
            backgroundImage: "url('img/prevnap2.jpg')",
          };
          const style2 = {
            backgroundImage: "url('img/prevnap2.jpg')",
          };
          const style3 = {
            backgroundColor: "#FFFFFF",
            Color: "#FF0000",
           
          };

            return(
                <>
            <Header />
        <div className="page_content blog-page">
            <div className="wrap">
                <div className="wrap_float">
                    <div className="title">
                        Blog 2 Columns Right Sidebar
                    </div>
                    <div className="main">
                        <div className="blog-list">
                            {this.state.idC===0? <Products /> : ("")}
                            {this.state.idC===1? <Events/> : ("")}
                            {this.state.idC===3? <Jeux /> : ("")}
                            
                         
                         
                         {/*  <a href="blog-single.html" className="blog-item">
                                <div className="_img" style={style2}>
                                    <div className="sq_parent">
                                       <div className="sq_wrap">
                                           <div className="sq_content"></div>
                                       </div>
                                    </div>
                                </div>
                                <div className="_date">JUNE 6/2019 | UNCATEGORIZED</div>
                                <div className="_title">
                                    Pack wisely before traveling
                                </div>
                                <div className="_text">
                                    A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.
                                </div>
            </a>*/}
                        </div>
                        <div className="pagination">
                            <ul>
                                <li className="prev"><a href="#"></a></li>
                                <li className="current"><a href="#">1</a></li>
                                <li><a href="#">2</a></li>
                                <li><a href="#">3</a></li>
                                <li><a href="#">4</a></li>
                                <li className="next"><a href="#"></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="sidebar">
                        <div className="categories--list">
                            <div className="block-title">Categories</div>
                            <ul>
                                {this.state.prod.map((p)=>(
                                     <li>
                                     <button style={style3} onClick={()=>{this.handleCategorieItem(p.id)}}>
                                     <span className="count">{p.nbrPossible}</span>
                                     <span className="_title">{p.categName}</span>

                                     </button>
                                        
                                 </li>

                                ))}
                               
                            </ul>
                        </div> 
                        <div className="latest_tours">
                        <div className="block-title">
                        Promotions Stores
                    </div>
                        <div className="list">
                       <PromotionsS></PromotionsS>
                       </div>
                    </div>
                        <div className="text_widget" style={style2}>
                            <div className="_title">
                                Text Widget
                            </div>
                            <div className="_text">
                                Nulla vitae elit libero, a pharetra augue. Nulla vitae elit libero, a pharetra augue. Nulla vitae elit libero, a pharetra augue. Donec sed odio dui. Etiam porta sem malesuada.
                            </div>
                        </div>
                        <div className="recent_photo">
                            <div className="block-title">
                                Recent photo
                            </div>
                            <div className="photos">
                                <a href="#" className="item">
                                    <div className="sq_parent">
                                       <div className="sq_wrap">
                                           <div className="sq_content">
                                               <img src="img/gal-1.jpg" alt="" />
                                           </div>
                                       </div>
                                    </div>
                                </a>
                                <a href="#" className="item">
                                    <div className="sq_parent">
                                       <div className="sq_wrap">
                                           <div className="sq_content">
                                               <img src="img/gal-2.jpg" alt="" />
                                           </div>
                                       </div>
                                    </div>
                                </a>
                                <a href="#" className="item">
                                    <div className="sq_parent">
                                       <div className="sq_wrap">
                                           <div className="sq_content">
                                               <img src="img/gal-3.jpg" alt="" />
                                           </div>
                                       </div>
                                    </div>
                                </a>
                                <a href="#" className="item">
                                    <div className="sq_parent">
                                       <div className="sq_wrap">
                                           <div className="sq_content">
                                               <img src="img/gal-4.jpg" alt="" />
                                           </div>
                                       </div>
                                    </div>
                                </a>
                                <a href="#" className="item">
                                    <div className="sq_parent">
                                       <div className="sq_wrap">
                                           <div className="sq_content">
                                               <img src="img/gal-5.jpg" alt="" />
                                           </div>
                                       </div>
                                    </div>
                                </a>
                                <a href="#" className="item">
                                    <div className="sq_parent">
                                       <div className="sq_wrap">
                                           <div className="sq_content">
                                               <img src="img/gal-6.jpg" alt="" />
                                           </div>
                                       </div>
                                    </div>
                                </a>
                                <a href="#" className="item">
                                    <div className="sq_parent">
                                       <div className="sq_wrap">
                                           <div className="sq_content">
                                               <img src="img/gal-7.jpg" alt="" />
                                           </div>
                                       </div>
                                    </div>
                                </a>
                                <a href="#" className="item">
                                    <div className="sq_parent">
                                       <div className="sq_wrap">
                                           <div className="sq_content">
                                               <img src="img/gal-8.jpg" alt="" />
                                           </div>
                                       </div>
                                    </div>
                                </a>
                                <a href="#" className="item">
                                    <div className="sq_parent">
                                       <div className="sq_wrap">
                                           <div className="sq_content">
                                               <img src="img/gal-9.jpg" alt="" />
                                           </div>
                                       </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
        
                </>
            )
}
}