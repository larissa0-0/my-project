import React from 'react';
import Header from './header';
import Material from './material';
import Stage from './stage';
import Setting from './setting';


function Layout(){
    return(
      <div>
        <Header/>
        <Material/>
        <Stage/>
        <Setting/>
      </div>
    )
  }
export default Layout;