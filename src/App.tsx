import React from 'react';
import './App.css';
import Layout from './editor/layouts';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend'

const App:React.FC = () => {
  return (
      <DndProvider backend={HTML5Backend}>
        <Layout />
      </DndProvider> 
  );
}

export default App;

