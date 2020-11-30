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
import moment from 'moment';
import SendIcon from '@material-ui/icons/Send';

type Messages = {
    messages: Message[]
}

const Chat: React.FC<Messages> = (props) => {
    const [messageInput, setMessageInput] = useState<string>('');

    const sendMessageHandler = async (e: React.FormEvent) => {
        e.preventDefault();
        if (messageInput) {

            await axios.post('/messages/new', {
                message: messageInput,
                name: `${localStorage.getItem('name')}`,
                timestamp: `${new Date().toISOString()}`,
            });

            setMessageInput('');
        }
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
                    <p className={`chat-message ${localStorage.getItem('name') === message.name && 'chat-receiver'}`}>
                        <span className="chat-name">{message.name}</span>
                        {message.message}
                        <span className="chat-timestamp">
                            {moment().format("MMM Do YY") === moment(message.timestamp).format("MMM Do YY")
                                ? moment(message.timestamp).format('LT')
                                : moment(message.timestamp).format('lll')
                            }
                        </span>
                    </p>
                ))}
            </div>
            <div className="chat-footer">
                <EmojiEmotionsIcon />
                <form>
                    <input value={messageInput} onChange={e => setMessageInput(e.target.value)} placeholder="Type a message" type="text" />
                    <button onClick={sendMessageHandler} type="submit"><SendIcon /></button>
                </form>
                <MicIcon />
            </div>
        </div>
    );
};

export default Chat;