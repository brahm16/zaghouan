import { NavLink } from "react-router-dom";
import { MotionAnimate } from 'react-motion-animate'
import 'react-motion-animate/dist/index.css'


const Services=()=>{
 
    const style2 = {
        backgroundImage: "url('img/slide4.jpg')",
      };
    return (
     

                  <div class="blog blog-section last-section" style={style2}>
           <div class="wrap">
               <div class="wrap_float">
                   <div class="top_part">
                   <MotionAnimate
                          animation='scrollOpacity'
                          ease={[0.17, 0.67, 0.97, -0.48]}
                          scrollPositions={[0.2, 0.5, 0.6, 0.8]}>

                      
                       <h2 class="section_title">
                           Services
                       </h2>
                       </MotionAnimate>

                      
                   </div>
                   <MotionAnimate
                          animation='scrollOpacity'
                          ease={[0.17, 0.67, 0.97, -0.48]}
                          scrollPositions={[0.2, 0.5, 0.6, 0.8]}>

                          <div>Define your own scroll opacity trigger positions and easing</div>
                          </MotionAnimate>
                          <MotionAnimate
                          animation='scrollOpacity'
                          ease={[0.17, 0.67, 0.97, -0.48]}
                          scrollPositions={[0.2, 0.5, 0.6, 0.8]}>
                   <div class="section_content">
                       <a href="blog-single.html" class="blog_item">
                           <div class="blog_item_img">
                               <img src="img/zagh/festival.jpg" alt="" />
                           </div>
                           <div class="blog_item_date">
                               JUNE 6/2019 | UNCATEGORIZED
                           </div>
                           <h3 class="blog_item_title">
                               Festival
                           </h3>
                           <p class="blog_item_text">
                               A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.
                           </p>
                       </a>
                       <a href="blog-single.html" class="blog_item">
                           <div class="blog_item_img">
                               <img src="img/zagh/x.jpg" alt="" />
                           </div>
                           <div class="blog_item_date">
                               JUNE 6/2019 | UNCATEGORIZED
                           </div>
                           <h3 class="blog_item_title">
                               Pack play
                           </h3>
                           <p class="blog_item_text">
                               A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.
                           </p>
                       </a>
                   </div>
                   </MotionAnimate>
                   <MotionAnimate
                          animation='scrollOpacity'
                          ease={[0.17, 0.67, 0.97, -0.48]}
                          scrollPositions={[0.2, 0.5, 0.6, 0.8]}>

                   <div class="show-more">
                   <NavLink className="btn" to="/services"><span>View all </span></NavLink>

                      
                   </div>
                   </MotionAnimate>

               </div>
           </div>
       </div>
      
       
    )
}
export default Services;