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

    function renderComponents(components:Component[]){
      return components.map((component:Component)=>{
        if(component.name === 'Button'){
          return <Button {...component.props}>{component.props.children}</Button>
        }else if(component.name === 'Space'){
          return <Space {...component.props}>{component.props.children || component.props.type}</Space>
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