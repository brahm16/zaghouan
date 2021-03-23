const Jeux=()=>{
    const style1 = {
        backgroundImage: "url('img/header2.jpg')",
      };
    return (
        <>
<div className="page_content destinations-page">
    <div className="wrap">
        <div className="wrap_float">
            <div className="section-subtitle">EXPLORE TOURS BY DESTINATIONS</div>
            <div className="section-title">Destinations</div>
                <div className="popular_destination__slider">             
                   <div className="slide_item">
                       <a href="tour-list.html" className="slide_item_img">
                           <div className="sq_parent">
                               <div className="sq_wrap">
                                   <div className="sq_content" style={style1}></div>
                               </div>
                            </div>
                       </a>
                       <a href="single.html" className="slide_item_content">
                           <div className="flag">
                               <img src="img/eng.svg" alt=""/>
                           </div>
                           <h3 className="slide_title">
                               England
                           </h3>
                           <p className="slide_text">
                               Etiam porta sem malesuada magna mollis euismod. Maecenas sed diam eget risus varius blandit sit amet non magna.
                           </p>
                       </a>
                       <div className="slide_footer">
                           <div className="hours">15 tours</div>
                           <div className="tours_link">
                               <a href="tour-list.html">View all tours</a>
                           </div>
                       </div>
                   </div>
                   <div className="slide_item">
                       <a href="tour-list.html" className="slide_item_img">
                           <div className="sq_parent">
                               <div className="sq_wrap">
                                   <div className="sq_content" style={style1}></div>
                               </div>
                            </div>
                       </a>
                       <a href="single.html" className="slide_item_content">
                           <div className="flag">
                               <img src="img/japan.svg" alt=""/>
                           </div>
                           <h3 className="slide_title">
                               Japan
                           </h3>
                           <p className="slide_text">
                               Etiam porta sem malesuada magna mollis euismod. Maecenas sed diam eget risus varius blandit sit amet non magna.
                           </p>
                       </a>
                       <div className="slide_footer">
                           <div className="hours">15 tours</div>
                           <div className="tours_link">
                               <a href="tour-list.html">View all tours</a>
                           </div>
                       </div>
                   </div>
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
    </div>
</div>

        </>

    )
}
export default Jeux;