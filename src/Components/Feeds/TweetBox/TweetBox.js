import React, { useState } from 'react'
import './TweetBox.css'
import { Avatar, Button } from '@material-ui/core';
import db from '../../../firebase'

const TweetBox = () => {
    const [tweetMsg, setTweetMsg] = useState("")
    const [tweetImg, setTweetImg] = useState("")

    const sendTweet = e => {
        e.preventDefault();
        if (!tweetMsg || tweetMsg == "") {
            return
        }
        db.collection("posts").add({
            avatar: "https://cdn.iconscout.com/icon/free/png-512/avatar-370-456322.png",
            displayName: "Parth Shrivastava",
            image: tweetImg,
            text: tweetMsg,
            username: "parth1997",
            verified: true,
            timeStamp: JSON.stringify(Date.now())
        })
        setTweetMsg("")
        setTweetImg("")


    }

    return (
        <div className="tweetBox">
            <form>
                <div className="TweetBox__input">
                    <Avatar src="https://cdn.iconscout.com/icon/free/png-512/avatar-370-456322.png" />
                    <input onChange={e => setTweetMsg(e.target.value)} value={tweetMsg} placeholder="What's happening" />
                </div>
                <input className="TweetBox__imageInput" onChange={e => setTweetImg(e.target.value)} value={tweetImg} placeholder="Optional: Image URL" />
                <Button tyep="submit" onClick={sendTweet} className='tweetBox__tweetButton'>Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
