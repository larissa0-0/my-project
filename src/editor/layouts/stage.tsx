import React from 'react';
import { Button, Space } from 'antd';

interface Component{
  id:number,
  name:string,
  props:any,
  children?:Component[];
}
function Stage(){
    const components:Component[] = [
      {
        id:1,
        name:'Button',
        props:{
          type:'button',
          children:'按钮'
        },
      },
      {
        id:2,
        name:'Space',
        props:{
          size:'large',
          type:'空间'
        },
        children:[
          {
            id:3,
            name:'button',
            props:{
              type:'button1',
              children:'按钮1'
            }
          },
          {
            id:4,
            name:'button',
            props:{
              type:'button2',
              children:'按钮2'
            }
          }
        ]
      }
    ];

    function renderComponents(components:Component[]):React.ReactNode {
      return components.map((component)=>{
        if(!ComponentMap[component.name]){
          return null;
        }

        if(ComponentMap[component.name]){
          return React.createElement(ComponentMap[component.name],component.props, component.props.children||[])
        }
      })
    }

    return(
      <div>
        {renderComponents(components)}
      </div>
    )
  }
export default Stage;