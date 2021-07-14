import axios from "axios";
import { TweetState } from "./../../store/ducks/tweets/contracts/state";


export const TweetsApi = {
   fetchTweets(): Promise<TweetState['items']> {
      return axios.get('/tweets').then(({ data }) => data);
   }

}