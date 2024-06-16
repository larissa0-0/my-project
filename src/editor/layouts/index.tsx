import React from 'react';
import Header from './header';
import Material from './material';
import Stage from './stage';
import Setting from './setting';
import "./index.scss"

function Layout(){
    return(
      <div className="layout">
        <div className='header'>
          <Header/>
        </div>
        <div className='content'>
          <div className='left'>
            <Material/>
          </div>
          <div className='box'>
            <Stage/>
          </div>
          <div className='right'>
            <Setting/>
          </div>
        </div>
      </div>
    )
  }
export default Layout;