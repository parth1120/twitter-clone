import React, { useState, useEffect } from 'react'
import './Feeds.css'
import TweetBox from './TweetBox/TweetBox'
import Post from './Post/Post'
import db from '../../firebase'
import FlipMove from 'react-flip-move'

const Feeds = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection('posts').onSnapshot(snapshot => {
            let postsList = snapshot.docs.map(doc => doc.data())
            postsList = postsList.sort((a, b) => new Date(parseFloat(b.timeStamp)).getTime() - new Date(parseFloat(a.timeStamp)).getTime())
            setPosts(postsList);
        }

        )
    }, [])    // inside [] => if "name" is written then it will only run when name changes **
    return (
        <div className="feed">
            {/* Header */}
            <div className="feed__header">
                <h2>Home</h2>
            </div>

            {/* Tweet box */}
            <TweetBox />

            {/* post */}
            <FlipMove>
                {posts.map((post, index) => (
                    <Post
                        key={index}
                        displayName={post.displayName}
                        username={post.username}
                        verified={post.verified}
                        text={post.text}
                        avatar={post.avatar}
                        image={post.image}
                    />
                ))}

            </FlipMove>

        </div>
    )
}

export default Feeds;


// avatar
// "https://cdn.iconscout.com/icon/free/png-512/avatar-370-456322.png"
// displayName
// "Parth Shrivastava"
// image
// "https://media1.tenor.com/images/248b8caa1166163806bf3f932fd0f3a8/tenor.gif?itemid=9396805"
// text
// "Dynamic Posts from firebase realtime 🔥"
// username
// "parth1997"
// verified
// true