import React from 'react'
import './TweetBox.css'
import { Avatar, Button } from '@material-ui/core';

const TweetBox = () => {
    return (
        <div className="tweetBox">
            <form>
                <div className="TweetBox__input">
                    <Avatar src="https://cdn.iconscout.com/icon/free/png-512/avatar-370-456322.png"/>
                    <input placeholder="What's happening"/>
                </div>
                <input className="TweetBox__imageInput" placeholder="Optional: Image URL"/>
                <Button className='tweetBox__tweetButton'>Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
