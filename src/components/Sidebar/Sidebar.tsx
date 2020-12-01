import React from 'react';
import './Sidebar.scss';
import ChatIcon from '@material-ui/icons/Chat';
import { Avatar, IconButton } from '@material-ui/core';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import MoreVert from '@material-ui/icons/MoreVert';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import SidebarChat from '../SidebarChat/SidebarChat';

const Sidebar = () => {
    const photo = `${sessionStorage.getItem('photo')}`;

    return (
        <div className='sidebar'>
            <div className="sidebar-header">
                <Avatar src={photo} />
                <div className="sidebar-header-right">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>
            <div className="sidebar-search">
                <div className="sidebar-search-container">
                    <SearchOutlinedIcon />
                    <input type="text" placeholder="Search or start a new chat" />
                </div>
            </div>
            <div className="sidebar-chats">
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
            </div>
        </div>
    );
};

export default Sidebar;