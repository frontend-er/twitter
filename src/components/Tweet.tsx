import React from 'react';
import CommentIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import LikeIcon from '@material-ui/icons/FavoriteBorderOutlined';
import RepostIcon from '@material-ui/icons/RepeatOutlined';
import ShareIcon from '@material-ui/icons/OpenInBrowser';
import classNames from 'classnames';
import { IconButton, Typography } from "@material-ui/core";
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import { useHomeStyles } from "./../Pages/Home/theme";
import { Link } from "react-router-dom";




interface TweetProps {
   text: string
   classes: ReturnType<typeof useHomeStyles>;
   _id: string;
   user: {
      fullName: string;
      username: string;
      avatarUrl: string;

   };


}

export const Tweet: React.FC<TweetProps> = ({ _id, text, user, classes }: TweetProps): React.ReactElement => {
   return (
      <Link className={classes.tweetWrapper} to={`/home/tweet/${_id}`}>


         <Paper className={classNames(classes.tweet, classes.tweetsHeader)} variant="outlined" >
            <Avatar
               className={classes.tweetAvatar}
               alt={`Аватарка пользователя ${user.fullName}`}
               src={user.avatarUrl}
            />
            <div>
               <Typography>
                  <b>{user.fullName}</b>&nbsp;
                  <span className={classes.tweetUsername}>@{user.username}</span>&nbsp;
                  <span className={classes.tweetUsername}>·</span>&nbsp;
                  <span className={classes.tweetUsername}>1 ч</span>
               </Typography>
               <Typography variant="body1" gutterBottom>
                  {text}
               </Typography>
               <div className={classes.tweetFooter}>
                  <div>
                     <IconButton>
                        <CommentIcon style={{ fontSize: 20 }} />
                     </IconButton>
                     <span>1</span>
                  </div>
                  <div>
                     <IconButton>
                        <RepostIcon style={{ fontSize: 20 }} />
                     </IconButton>
                  </div>
                  <div>
                     <IconButton>
                        <LikeIcon style={{ fontSize: 20 }} />
                     </IconButton>
                  </div>
                  <div>
                     <IconButton>
                        <ShareIcon style={{ fontSize: 20 }} />
                     </IconButton>
                  </div>
               </div>
            </div>



         </Paper>
      </Link>

   );
}


