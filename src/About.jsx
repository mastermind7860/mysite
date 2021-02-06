import React from 'react'
import web from '../src/images/roc.jpg'
import {NavLink} from 'react-router-dom'
import Common from "./Common";


function About() {
  return (
    <>
        <Common 
            name="Welcome To About Section" 
            imgsrc={web} 
            visit="/contact" 
            btnName="Contact Now"/>
    </>
      
  );
}

export default About;
