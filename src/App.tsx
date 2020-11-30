import React from 'react';
import './App.scss';
import Chat from './components/Chat/Chat';
import Sidebar from './components/Sidebar/Sidebar';

const App: React.FC = () => {
  return (
    <div className="app">
      <div className="app-body">
        <Sidebar></Sidebar>
        <Chat></Chat>
      </div>
    </div>
  );
}

export default App;
