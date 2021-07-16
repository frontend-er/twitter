import axios from "axios";
import { Tweet, TweetState } from "./../../store/ducks/tweets/contracts/state";


export const TweetsApi = {
   fetchTweets(): Promise<TweetState['items']> {
      return axios.get('/tweets').then(({ data }) => data);
   },

   fetchTweetData(id: string): Promise<Tweet[]> {
      return axios.get('tweets?_id=' + id).then(({ data }) => data);
   }

}