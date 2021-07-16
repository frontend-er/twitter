import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchTweet } from '../store/ducks/tweet/actionCreators';
import { selectIsTweetLoading, selectTweetData } from '../store/ducks/tweet/selectors';
import { Tweet } from './Tweet';
import { useHomeStyles } from "./../Pages/Home/theme";
import { CircularProgress } from '@material-ui/core';

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
            < Tweet classes={classes} {...tweetData} />

         </div>
      )
   }



   return null;
}


export default FullTweet;
