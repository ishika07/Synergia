import React, { useState, useContext ,useEffect} from 'react';
import axios from 'axios'
import UserContext from '../context/UserContext';
import {Button } from 'antd';
import './home.css'
import { Tabs } from 'antd';
import Typed from 'react-typed';
import { NavLink } from "react-router-dom";
import web from '../components/img2.svg';

function Home() {
  
  const { TabPane } = Tabs;

  const { userData, setUserData } = useContext(UserContext);
  
  let salutation = 'Welcome to Home Page';
  if (userData.user) {
    salutation = `Welcome ${userData.user.name}, this is the Homepage `;

  }

  


  return (
    <div id='home-main'>
      
          <div className='home-svg' style={{ overflow: 'hidden',position:'absolute',top:0,left:0}}></div>
          <Typed
                    strings={['Learn. Grow. Conquer.',
                    'Learn At Your Own Pace']}
                    typeSpeed={80}
                    loop
                    style={{fontSize:'30px',color:'black',fontFamily:'Verdana'}}
                />
            <br/>
            <br/><br/>
        <h1 style={{color:'#4cbae6',marginBottom:'0'}}><strong> Synergy <sup style={{fontSize:'25px'}}>/ˈsɪnədʒi/</sup> </strong></h1>
        <h2 style={{marginTop:'0'}}>                  
         The extra energy, power, success that is achieved by<br/>
         people working together instead of on their own.                                      
         </h2>
        <div className="mt-3">
        <NavLink to={'/register'} className="btn-get-started ">
        Get Started
        </NavLink>
        </div>
        <div className="header-img">
         <img
          src={web}
          className="img-fluid animated"
          alt="Home img"
          />
        </div> 
          
         
    
    </div>

  );
}

export default Home;