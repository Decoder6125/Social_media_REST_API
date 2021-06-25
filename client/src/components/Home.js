import React from 'react'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import SendIcon from '@material-ui/icons/Send';
import './form.css';
const Home = () => {
    return (
       <>
       <div className="post_card">
           <div className="post_name">Debtanu Dey</div>
           <div className="post_image"><img src="https://i.pinimg.com/originals/d6/8f/71/d68f712248a77ff122bfbad8be5a162d.jpg" height="100%" width="100%"></img></div>
           <div className="post_likes"><FavoriteBorderIcon /></div>
           <div className="post_comments">
           <input className="comment" placeholder="comment" />
                 <button className="submit" type="submit"><SendIcon/></button>
           </div>
       </div>

       <div className="post_card">
           <div className="post_name">Debtanu Dey</div>
           <div className="post_image"><img src="https://i.pinimg.com/originals/d6/8f/71/d68f712248a77ff122bfbad8be5a162d.jpg" height="100%" width="100%"></img></div>
           <div className="post_likes"><FavoriteBorderIcon /></div>
           <div className="post_comments">
           <input className="comment" placeholder="comment" />
                 <button className="submit" type="submit"><SendIcon/></button>
           </div>
       </div><br></br>
       </>
    )
}

export default Home
