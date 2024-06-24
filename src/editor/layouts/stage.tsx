import React from 'react';
import { Button, Space, Input  } from 'antd';

interface Component{
  id:number,
  name:string,
  props:any,
  children?:Component[];
}


function Stage(){
  // 定义一些示例组件
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
          type:'space'
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
      },{
        id:3,
        name:'Input',
        props:{
          type:'input',
          size:'small'
        }
      }
    ];
    const ComponentMap:Record<string, React.ComponentType<any>>  = {
      Button,
      Space,
      Input
    }

    function renderComponents(components:Component[]):React.ReactNode {
      return components.map((component)=>{
        const Component = ComponentMap[component.name];
        if(!Component){
          return null;
        }

          // 递归渲染 children
        const children = component.children ? renderComponents(component.children) : component.props.children;

        return (
          <Component key={component.id} {...component.props}>
            {children}
          </Component>
        );
    
      })
    }

    return(
      <div>
        {renderComponents(components)}
      </div>
    )
  }
export default Stage;