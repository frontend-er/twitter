import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import { Container, createStyles, InputBase, withStyles } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { Tweet } from "../../components/Tweet";
import { SideMenu } from '../../components/SideMenu';
import { AddTweetForm } from "../../components/AddTweetForm";
import PersonAddIcon from '@material-ui/icons/PersonAddOutlined';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Route } from "react-router-dom";

import ListItem from '@material-ui/core/ListItem/ListItem';
import Divider from '@material-ui/core/Divider/Divider';
import ListItemAvatar from '@material-ui/core/ListItemAvatar/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar/Avatar';
import ListItemText from '@material-ui/core/ListItemText/ListItemText';
import List from '@material-ui/core/List/List';
import Button from '@material-ui/core/Button/Button';
import { useHomeStyles } from './theme';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTweets } from '../../store/ducks/tweets/dist/actionCreators';
import { selectIsTweetsLoading, selectTweetsItems } from "./../../store/ducks/tweets/selectors";
import BackButton from '../../components/BackButton';
import FullTweet from "./../../components/FullTweet";
import { fetchTags } from '../../store/ducks/tags/actionCreators';
import { Tags } from '../../components/Tags';


//Список дел 

// Сделать форму отправки твитов и постов
// Поробывать сделать пункт главное менню
//  Сделать правую часть твитера 
// Пооробывать выровнить отступы 




const SearchTextField = withStyles(() =>
   createStyles({
      input: {
         borderRadius: 20,
         backgroundColor: '#E6ECF0',
         padding: 0,
         height: 45
      }

   })
)(InputBase);


function Home() {

   const classes = useHomeStyles();
   const dispatch = useDispatch();

   const tweets = useSelector(selectTweetsItems);
   const isLoading = useSelector(selectIsTweetsLoading);





   React.useEffect(() => {
      dispatch(fetchTweets())
      dispatch(fetchTags())

   }, [dispatch]);




   return (
      <Container className={classes.wrapper} maxWidth="lg">
         <Grid container spacing={3}>
            <Grid item sm={1} md={3}>
               <SideMenu classes={classes} />

            </Grid>
            <Grid item sm={8} md={6}>
               <Paper className={classes.tweetsWraper} variant="outlined" >
                  <Paper>
                     <Paper className={classes.tweetsHeader} variant="outlined" >

                        <Route path='/home/:any' >
                           <BackButton />
                        </Route>

                        <Route path={['/home', '/home/search']} exact>
                           <Typography variant="h5" > Твиты </Typography>
                        </Route>
                        <Route path="/home/tweet">
                           <Typography variant="h5" > Твитнуть </Typography>
                        </Route >

                     </Paper>


                     <Route path={['/home', '/home/search']} exact>
                        <Paper>

                           <div className={classes.addForm}>
                              <AddTweetForm classes={classes} />
                           </div>
                           <div className={classes.addFormBottomLine} />
                        </Paper>
                     </Route >

                  </Paper>



                  <Route path="/home" exact >
                     {isLoading ? <div className={classes.tweetsCentred}><CircularProgress /></div> :
                        tweets.map(tweet =>
                           <Tweet key={tweet._id} {...tweet}
                              classes={classes}
                           />
                        )
                     }
                  </Route>



                  <Route path="/home/tweet/:id" component={FullTweet} exact />




               </Paper>
            </Grid>
            <Grid item sm={3} md={3}>
               <div className={classes.rightSide}>
                  <SearchTextField

                     placeholder="Поиск по Твиттеру"

                     fullWidth
                  />
                  <Tags classes={classes} />
                  <Paper className={classes.rightSideBlock}>
                     <Paper className={classes.rightSideBlockHeader} variant="outlined">
                        <b>Кого читать</b>
                     </Paper>
                     <List>
                        <ListItem className={classes.rightSideBlockItem}>
                           <ListItemAvatar>
                              <Avatar
                                 alt="Remy Sharp"
                                 src="https://sun9-29.userapi.com/impg/c854528/v854528533/2508be/Y5A0kBFbZS4.jpg?size=750x752&quality=96&sign=9d2e218b948349d2898fd071faf19c29&type=album"
                              />
                           </ListItemAvatar>
                           <ListItemText
                              primary="Dock Of Shame"
                              secondary={
                                 <Typography component="span" variant="body2" color="textSecondary">
                                    @FavDockOfShame
                                 </Typography>
                              }
                           />
                           <Button color="primary">
                              <PersonAddIcon />
                           </Button>
                        </ListItem>
                        <Divider component="li" />
                     </List>
                  </Paper>
               </div>

            </Grid>


         </Grid >
      </Container >

   );
}


export default Home;
