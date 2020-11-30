import React, { useState } from 'react';
import { Avatar, IconButton } from '@material-ui/core';
import './Chat.scss';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import MoreVert from '@material-ui/icons/MoreVert';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import MicIcon from '@material-ui/icons/Mic';
import { Message } from '../../models/message.model';
import axios from '../../axios';


type Messages = {
    messages: Message[]
}

const Chat: React.FC<Messages> = (props) => {
    const [messageInput, setMessageInput] = useState<string>('');

    const sendMessageHandler = async (e: React.FormEvent) => {
        e.preventDefault();

        await axios.post('/messages/new', {
            message: messageInput,
            name: "demo name",
            timestamp: 'Just now!',
            received: true,
        });

        setMessageInput('');
    }

    return (
        <div className="chat">
            <div className="chat-header">
                <Avatar />
                <div className="chat-header-info">
                    <h3>Room name</h3>
                    <p>Last seen at...</p>
                </div>
                <div className="chat-header-right">
                    <IconButton>
                        <SearchOutlinedIcon />
                    </IconButton>
                    <IconButton>
                        <AttachFileIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>
            <div className="chat-body">
                {props.messages.map(message => (
                    <p className={`chat-message ${message.received && 'chat-receiver'}`}>
                        <span className="chat-name">{message.name}</span>
                        {message.message}
                        <span className="chat-timestamp">
                            {message.timestamp}
                        </span>
                    </p>
                ))}
            </div>
            <div className="chat-footer">
                <EmojiEmotionsIcon />
                <form>
                    <input value={messageInput} onChange={e => setMessageInput(e.target.value)} placeholder="Type a message" type="text" />
                    <button onClick={sendMessageHandler} type="submit">Send a message</button>
                </form>
                <MicIcon />
            </div>
        </div>
    );
};

export default Chat;