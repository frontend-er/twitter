import axios from "axios";
import { TweetState } from "./../../store/ducks/tweets/contracts/state";


export const TweetsApi = {
   fetchTweets(): Promise<TweetState['items']> {
      return axios.get('https://trycode.pw/c/EKOSX.json').then(({ data }) => data);
   }

}