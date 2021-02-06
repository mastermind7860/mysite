import React from 'react'
import web from '../src/images/roc.jpg'
import Common from './Common'



function Home() {
  return (
    <>
        <Common 
            name="Grow Your Bussiness With" 
            imgsrc={web} 
            visit="/service" 
            btnName="Get Started"/>
    </>
      
  );
}

export default Home;

