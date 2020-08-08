import React from 'react'
import './Post.css'
import { Avatar, Button } from '@material-ui/core';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';

const Post = () => {
    return (
        <div className="post">
            <div className="post__avatar">
                <Avatar src="https://cdn.iconscout.com/icon/free/png-512/avatar-370-456322.png" />
            </div>
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>
                            Parth Shrivastava{" "} <span className='post__headerSpecial'>
                                <VerifiedUserIcon className="post__badge" />  @parth1197
                            </span>
                        </h3>
                    </div>
                    <div className="post__headerDescription">
                        <p>Build my own twitter clone 🚀 </p>
                    </div>
                </div>
                <img src="https://media1.tenor.com/images/248b8caa1166163806bf3f932fd0f3a8/tenor.gif?itemid=9396805" alt="this slowpoke moves" />
                <div className="post__footer">
                    <ChatBubbleOutlineIcon fontSize="small" />
                    <RepeatIcon fontSize="small" />
                    <FavoriteBorderIcon fontSize="small" />
                    <PublishIcon fontSize="small" />
                </div>
            </div>

        </div>
    )
}

export default Post
