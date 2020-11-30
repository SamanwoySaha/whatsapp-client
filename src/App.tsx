import React, { useEffect, useState } from 'react';
import './App.scss';
import Chat from './components/Chat/Chat';
import Sidebar from './components/Sidebar/Sidebar';
import Pusher from 'pusher-js';
import axios from './axios';
import { Message } from './models/message.model';

const App: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  useEffect(() => {
    axios.get('/messages/sync')
      .then(res => setMessages(res.data))
  }, [])

  useEffect(() => {
    const pusher = new Pusher('677a639ac12bb7cadbb3', {
      cluster: 'eu'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (newMessage: any) => {
      setMessages([...messages, newMessage]);
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    }
  }, [messages]);

  console.log(messages);

  return (
    <div className="app">
      <div className="app-body">
        <Sidebar></Sidebar>
        <Chat messages={messages} ></Chat>
      </div>
    </div>
  );
}

export default App;
