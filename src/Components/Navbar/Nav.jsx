import React from 'react'
import "./Nav.css";
import { SiTwitter } from 'react-icons/si';
function Nav() {
  return (
    <div className='container'>
    <div className='conatiner1'>
      <div>
    <ul>
        <li><a>Home</a></li>
        <li><a>Moments</a></li>
        <li><a>Notification</a></li>
        <li><a>Messages</a></li>
    </ul>
    </div>
    
    <div>
    < SiTwitter className='twitterIcon'/>
    </div>
    <div>
      <button className='tweetButton'>Tweet</button>
    </div>
    </div>
    </div>
  )
}

export default Nav;