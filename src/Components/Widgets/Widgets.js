import React from 'react'
import './Widgets.css'
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed
}
    from 'react-twitter-embed';
import SearchIcon from '@material-ui/icons/Search';

function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets__input">
                <SearchIcon className="widgets__searchIcon" />
                <input placeholder='Search Twitter' />
            </div>
            <div className="widgets__widgetContainer">
                <h2>What's happening</h2>
                <TwitterTweetEmbed tweetId={"1276711378502311936"} />
                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="ParthSh19231012"
                    options={{ height: 400 }}
                />
                <TwitterShareButton
                    url={"https://www.facebook.com/parthshrivastava11/"}
                    options={{ text: "#reactjs is awesome", via: "ParthSh19231012" }}
                />
                <small>
                    © Made by <span style={{color: 'var(--twitter-color)', fontWeight:'bold'}}>Parth Shrivastava</span> 🚀
            </small>
            </div>

        </div>
    )
}

export default Widgets
