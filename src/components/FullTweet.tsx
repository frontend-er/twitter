import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchTweet } from '../store/ducks/tweet/actionCreators';
import { selectIsTweetLoading, selectTweetData } from '../store/ducks/tweet/selectors';
import { useHomeStyles } from "./../Pages/Home/theme";
import { Avatar, CircularProgress, Paper, Typography } from '@material-ui/core';


const FullTweet: React.FC = (): React.ReactElement | null => {
   const dispatch = useDispatch();
   const tweetData = useSelector(selectTweetData);
   const isLoaded = useSelector(selectIsTweetLoading);
   const params: { id?: string } = useParams();
   const classes = useHomeStyles();
   const id = params.id;

   React.useEffect(() => {
      if (id) {
         dispatch(fetchTweet(id))

      }

   }, [dispatch, id]);



   if (isLoaded) {
      return (


         <div className={classes.tweetsCentred}><CircularProgress /></div>

      )
   }


   if (tweetData) {
      return (
         <div>
            <Paper className={classes.fullTweet} >
               <div className={classes.tweetsHeaderUser} >
                  <Avatar
                     className={classes.tweetAvatar}
                     alt={`Аватарка пользователя ${tweetData.user.fullName}`}
                     src={tweetData.user.avatarUrl}
                  />
                  <Typography>
                     <b>{tweetData.user.fullName}</b>&nbsp;
                     <div>
                        <span className={classes.tweetUserName}>@{tweetData.user.userName}</span>&nbsp;
                     </div>
                  </Typography>


               </div>
               <div>
                  <Typography className={classes.fullTweetText} variant="body1" gutterBottom>
                     {tweetData.text}
                  </Typography>
               </div>




            </Paper>
         </div>
      )
   }



   return null;
}


export default FullTweet;
