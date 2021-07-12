import React from 'react';
import CommentTweet from '@material-ui/icons/ChatBubbleOutlineOutlined';
import LikeTweet from '@material-ui/icons/FavoriteBorderOutlined';
import RepostTweet from '@material-ui/icons/RepeatOutlined';
import ShareTweet from '@material-ui/icons/OpenInBrowser';
import classNames from 'classnames';
import { IconButton, Typography } from "@material-ui/core";
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import { useHomeStyles } from "../Pages/Home/Home";
import { Grid } from '@material-ui/core';



interface TweetProps {
   text: string
   classes: ReturnType<typeof useHomeStyles>;
   user: {
      fullName: string;
      userName: string;
      avatarUrl: string;

   };


}

export const Tweet: React.FC<TweetProps> = ({ text, user, classes }: TweetProps): React.ReactElement => {
   return (


      <Paper className={classNames(classes.tweet, classes.tweetsHeader)} variant="outlined" >
         <Grid container spacing={3}>
            <Grid item xs={1}>
               <Avatar className={classes.tweetAvatar} alt={`Аватарка пользователя ${user.userName}`} src={user.avatarUrl} />

            </Grid>
            <Grid item xs={11}>
               <Typography>
                  <b>{user.fullName}</b>&nbsp;
                  <span className={classes.tweetsUserName}>{user.userName}</span>&nbsp;
                  <span className={classes.tweetsUserName}>.</span>&nbsp;
                  <span className={classes.tweetsUserName}>1 ч</span>
               </Typography>
               <Typography variant="body1" gutterBottom >
                  {text}
               </Typography>
               <div className={classes.tweetFooter}>
                  <div>
                     <IconButton>
                        <CommentTweet />
                     </IconButton>
                     <span>1</span>

                  </div>
                  <div>
                     <IconButton>
                        <RepostTweet />
                     </IconButton>
                     <span>3</span>

                  </div>
                  <div>
                     <IconButton>
                        <LikeTweet />
                     </IconButton>
                     <span>1</span>

                  </div>
                  <div>
                     <IconButton>
                        <ShareTweet />
                     </IconButton>
                     <span>1</span>

                  </div>
               </div>


            </Grid>

         </Grid>

      </Paper>
   );
}


