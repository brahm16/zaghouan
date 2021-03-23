import React, { useRef, useState, useCallback } from 'react'
import ReactDOM from 'react-dom'
import { useSpring, animated } from 'react-spring'
import MainLanding from "./MainLanding";

import Promotion from "./Promotion";
import Places from "./Places";
import Header from "./Header";
import Footer from "./Footer";
import About from "./About";
import Products from "./Products";
import Search from "./Search";
import Services from './Services';
import { FadeTransform } from 'react-animation-components'




function Landing() {
  
  


   
    return (
      <>
      <FadeTransform in transformProps={{
                exitTransform: 'scale(1) translateY(-50%)'
            }}>
          <Header />
          <MainLanding  />
          
          </FadeTransform>
       
          <Services />
          

         
          <About />

          <Places />
          <Search />
          <Promotion />
=
          <Footer />
          </>
    );
  
}

export default Landing;