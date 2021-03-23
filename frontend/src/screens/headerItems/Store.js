const Store=({name,description,prix})=>{
    const style={
        backgroundImage:"url(img/usa.jpg)"
    }
    return (
<>
<div class="page_content single-page tour-single dark">
<div className="single-sidebar">
                        <div className="tour--info">
                            <div className="top" style={style}>
                                <div className="tags">
                                    <div className="tag discount">{prix}</div>
                                    <div className="tag new">New</div>
                                </div>
                                <div className="flex-bottom">
                                    <div className="rating">
                                       <div className="stars">
                                           <div className="star active"></div>
                                           <div className="star active"></div>
                                           <div className="star active"></div>
                                           <div className="star active"></div>
                                           <div className="star"></div>
                                       </div>
                                       <div className="reviews_count">
                                           (2 Reviews) 
                                       </div>
                                    </div>
                                    <div className="_title">{name}</div>
                                    <div className="count">{description}</div>
                                </div>
                            </div>
                            <div className="bottom">
                                <div className="cost">
                                    <div className="new-cost">{prix+'DT'}</div>
                                </div>
                                <button className="btn getModal" data-href="#book-now">
                                    Book now
                                </button>
                                
                            </div>
                        </div>
                    </div> 
                    </div>
</>

    )
}
export default Store;