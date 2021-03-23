const Promotion=()=>{
    const style = {
        backgroundImage: "url('img/zagh/10.jpg')",
      };
    return(
        <div class="discount_section" style={style}>
        <div class="wrap">
            <div class="wrap_float">
                <div class="section_content">
                    <div class="tag">SALE</div>
                    <h2 class="section_title">Discount <span class="discount_tag">20% off</span> </h2>
                     
                    <div class="buttons">
                        <a href="tour-list.html" class="btn">See Promotionq</a>
                        <a href="tour-list.html" class="btn btn__choose_tour">Choose Promotion</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
export default Promotion;