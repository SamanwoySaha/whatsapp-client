import React from 'react';
import './App.scss';
import Chat from './components/Chat/Chat';
import Sidebar from './components/Sidebar/Sidebar';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>this is app</h1>
      <Sidebar></Sidebar>
      <Chat></Chat>
    </div>
  );
}

export default App;
