import React from 'react'
import './Feeds.css'
import TweetBox from './TweetBox/TweetBox'
import Post from './Post/Post'

const Feeds = () => {
    return (
        <div className="feed">
            {/* Header */}
            <div className="feed__header">
                <h2>Home</h2>
            </div>

            {/* Tweet box */}
            <TweetBox />

            {/* post */}
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        
        </div>
    )
}

export default Feeds;
