import React from 'react'
import './Sidebar.css'
import SidebarOptions from './SidebarOptions/SidebarOptions'
//Icons
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

//button
import Button from '@material-ui/core/Button';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <TwitterIcon className="sidebar__twitterIcon" />
            <SidebarOptions active text='Home' Icon={HomeIcon} />
            <SidebarOptions text='Explore' Icon={SearchIcon}/>
            <SidebarOptions text='Notification' Icon={NotificationsNoneIcon}/>
            <SidebarOptions text='Message' Icon={MailOutlineIcon}/>
            <SidebarOptions text='Bookmarks' Icon={BookmarkBorderIcon}/>
            <SidebarOptions text='Lists' Icon={ListAltIcon}/>
            <SidebarOptions text='Profile' Icon={PermIdentityIcon}/>
            <SidebarOptions text='More' Icon={MoreHorizIcon}/>
            {/* <SidebarOptions text='Home'/> */}
            <Button variant="outlined" className='sidebar__tweet' fullWidth>Tweet</Button>
        </div>
    )
}

export default Sidebar
