import React from 'react';
import Header from './header';
import Material from './material';
import Stage from './stage';
import Setting from './setting';
import "./index.scss";

import { Allotment } from "allotment";
import "allotment/dist/style.css";

const Layout: React.FC = () =>{
    return(
      <div className="layout">
        <div className='header'>
          <Header/>
        </div>
        {/* <div className='content'> */}
        <Allotment>
          <Allotment.Pane preferredSize={200} maxSize={400} minSize={200}>
            <div className='left'>
              <Material/>
            </div>
          </Allotment.Pane>
          <Allotment.Pane>
            <div className='box'>
              <Stage/>
            </div>
          </Allotment.Pane>
          <Allotment.Pane preferredSize={300} maxSize={500} minSize={300}>
            <div className='right'>
              <Setting/>
            </div>
          </Allotment.Pane>
        </Allotment>
        {/* </div> */}
      </div>
    )
  }
export default Layout;