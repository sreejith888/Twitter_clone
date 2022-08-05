import React from 'react'
import "./Article.css";
import { FcBusinessman,FcBusinesswoman } from 'react-icons/fc';
function Article() {
  return (
    <div className='mainContainer'>
      <div className='subContainer'>
        <div className='profileCard'>
<div className='header'>
  <p>RATATOUILLE</p>
</div>
<div className='image'>
<img className='picture' src='https://static01.nyt.com/images/2020/12/12/lens/09xp-ratatouille-photo/09xp-ratatouille-photo-mediumSquareAt3X.jpg'
alt='mice'/> <p className='name'><b>Remy</b></p> <br/> 
<p className='name'>@remy</p>
</div>
<div className='reach'>
  <div className='firstList'><ul><li>Tweets</li> <li>Following</li> <li>Followers</li> </ul></div>
  <div className='secondList'><ul><li>5049</li> <li>324</li> <li>809</li></ul></div>
</div>

        </div>

        <div >
<ul className='recentTweets'>
  
  <li className="listItem">
  <img className='picture' src='https://static01.nyt.com/images/2020/12/12/lens/09xp-ratatouille-photo/09xp-ratatouille-photo-mediumSquareAt3X.jpg'
alt='mice'/>
  <p className='heading'><span><b>Remy</b><span id="smooth">@remy Nov  19</span></span></p>
  <p className='description'>I am taking this class called CS1320 qnd TAs are all so <b>cool</b>!</p>
  </li>

  <li className="listItem">
  <img className='picture' src='https://static01.nyt.com/images/2020/12/12/lens/09xp-ratatouille-photo/09xp-ratatouille-photo-mediumSquareAt3X.jpg'
alt='mice'/>
   <p className='heading'> <span><b>Remy</b><span id="smooth">@remy Nov  19</span></span></p>
  <p className='description'>its 2007,you just got home from school.Ratatouillie in thearers.</p>
  </li>

  <li className="listItem">
  <img className='picture' src='https://static01.nyt.com/images/2020/12/12/lens/09xp-ratatouille-photo/09xp-ratatouille-photo-mediumSquareAt3X.jpg'
alt='mice'/>
    <p className='heading'><span><b>Remy</b><span id="smooth">@remy Nov  19</span></span></p>
  <p className='Small-description'>its 2007,you just got home from school.Ratatouillie in thearers.</p>
  </li>

  <li className="listItem">
  <img className='picture' src='https://static01.nyt.com/images/2020/12/12/lens/09xp-ratatouille-photo/09xp-ratatouille-photo-mediumSquareAt3X.jpg'
alt='mice'/>
   <p className='heading'> <span><b>Remy</b><span id="smooth">@remy Nov  19</span></span></p>
  <p className='Small-description'>its 2007,you just got home from school.Ratatouillie in thearers.</p>
  </li>

  <li className="listItem">
  <img className='picture' src='https://static01.nyt.com/images/2020/12/12/lens/09xp-ratatouille-photo/09xp-ratatouille-photo-mediumSquareAt3X.jpg'
alt='mice'/>
   <p className='heading'> <span><b>Remy</b><span id="smooth">@remy Nov  19</span></span></p>
  <p className='Small-description'>its 2007,you just got home from school.Ratatouillie in thearers.</p>
  </li>


</ul>
        </div>

        <div className='follow'>
          <h1>Who to follow</h1>
          <div>
          <img  className='picture' src='https://i.pinimg.com/originals/16/ed/00/16ed00c0e313d7acce0ef15654c44cb1.jpg'/>
          <span><b>Linguini</b><span color='grey'>@linguini</span></span><br/>
          <button className='flw-btn'>Follow</button>
          </div>
          <hr/>
          <div>
          <img className='picture' src='https://i.pinimg.com/originals/dd/8a/90/dd8a905e3381b4268d4997397e30f849.jpg'/><span><b>CS1320 TA</b><span color='grey'>@cs1320ta</span></span><br/>
          <button className='flw-btn'>Follow</button>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Article;