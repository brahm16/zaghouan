import { MotionAnimate } from 'react-motion-animate'
import 'react-motion-animate/dist/index.css'

const About=()=>{
    const style = {
        backgroundImage: "url('img/zagh/about.jpg')",
    };    return(
 
        <div className="page_content single-page about-page"   >
        <div className="content-head">
            <div className="wrap">
                <div className="wrap_float">
                    <div className="main">
                        <div className="section-top">
                        <MotionAnimate
                          animation='scrollOpacity'
                          ease={[0.17, 0.67, 0.97, -0.48]}
                          scrollPositions={[0.2, 0.5, 0.6, 0.8]}>
                            <div className="title">
                                About Us
                            </div>
                            </MotionAnimate>
                         
                        </div>
                        <MotionAnimate
                          animation='scrollOpacity'
                          ease={[0.17, 0.67, 0.97, -0.48]}
                          scrollPositions={[0.2, 0.5, 0.6, 0.8]}>
                       <div className="description">
                           <div className="description-title">
                               Amet Etiam Quam
                           </div>
                           <div className="text">
                               <div className="left">
                                   <p>
                                       Curabitur blandit tempus porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Etiam porta sem malesuada magna mollis euismod. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                   </p>
                                   <p>
                                       Maecenas sed diam eget risus varius blandit sit amet non magna. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec ullamcorper nulla non metus auctor
                                   </p>
                               </div>
                               <div className="right">
                                   <p>
                                       Curabitur blandit tempus porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Etiam porta sem malesuada magna mollis euismod. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                   </p>
                               </div>
                           </div>
                       </div>
                       </MotionAnimate>
                    </div>
                </div>
            </div>
        </div>
        <MotionAnimate
                          animation='scrollOpacity'
                          ease={[0.17, 0.67, 0.97, -0.48]}
                          scrollPositions={[0.2, 0.5, 0.6, 0.8]}>
        <div className="content-body">
            <div className="wrap">
                <div className="wrap_float">
                    <div className="statistic" id="statistic">
                        <div className="stat-item">
                            <div className="val spincrement" data-start="50">357</div>
                            <div className="text">Reservation for circuits this year</div>
                        </div>
                        <div className="stat-item" data-start="1150">
                            <div className="val spincrement">34354</div>
                            <div className="text">People visit zaghouan</div>
                        </div>
                        <div className="stat-item">
                            <div className="val spincrement" data-start="850">2021</div>
                            <div className="text">We have been working since 2021</div>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
        </MotionAnimate>

    </div>
  
    
    )
   
}
export default About;