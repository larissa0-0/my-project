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
          type:'primary',
          children:'按钮'
        },
      },
      {
        id:2,
        name:'Space',
        props:{
          size:'large',
        },
        children:[
          {
            id:3,
            name:'Button',
            props:{
              type:'primary',
              children:'按钮1'
            }
          },
          {
            id:4,
            name:'Button',
            props:{
              type:'primary',
              children:'按钮2'
            }
          }
        ]
      },
      // {
      //   id:3,
      //   name:'Input',
      //   props:{
      //     type:'input',
      //     size:'small'
      //   }
      // }
    ];
    const ComponentMap:Record<string, React.ComponentType<any>>  = {
      Button,
      Space,
      // Input
    }

    function renderComponents(components:Component[]):React.ReactNode {
      return components.map((component)=>{
        const Component = ComponentMap[component.name];

        console.log(Component, 'Component=====');
        
        if(!Component){
          return null;
        }

        // 递归渲染 children
        const children = component.children ? renderComponents(component.children) : component.props.children;


        console.log(children,'children===children====');
        
        return (
          <Component key={component.id} {...component.props}>
            {children}
          </Component>
        );

        // if (ComponentMap[component.name]) {
        //   console.log(ComponentMap[component.name], 'ComponentMap[component.name]========');
        //   return React.createElement(ComponentMap[component.name], component.props, component.props.children || renderComponents(component.children || []))
        // }

    
      })
    }

    return(
      <div>
        {renderComponents(components)}
      </div>
    )
  }
export default Stage;