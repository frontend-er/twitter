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
   }, [dispatch]);




   return (
      <Container className={classes.wrapper} maxWidth="lg">
         <Grid container spacing={3}>
            <Grid item xs={3}>
               <SideMenu classes={classes} />

            </Grid>
            <Grid item xs={6}>
               <Paper className={classes.tweetsWraper} variant="outlined" >
                  <Paper className={classes.tweetsHeader} variant="outlined" >
                     <Typography variant="h5" > Главная</Typography>


                  </Paper>
                  <Paper>
                     <div className={classes.addForm}>
                        <AddTweetForm classes={classes} />
                     </div>
                     <div className={classes.addFormBottomLine} />
                  </Paper>
                  {isLoading ? <div className={classes.tweetsCentred}><CircularProgress /></div> :
                     tweets.map(tweet =>
                        < Tweet key={tweet._id} text={tweet.text}
                           user={tweet.user}
                           classes={classes}
                        />
                     )
                  }
               </Paper>
            </Grid>
            <Grid item xs={3}>
               <div className={classes.rightSide}>
                  <SearchTextField

                     placeholder="Поиск по Твиттеру"

                     fullWidth
                  />
                  <Paper className={classes.rightSideBlock}>
                     <Paper className={classes.rightSideBlockHeader} variant="outlined">
                        <b>Актуальные темы</b>
                     </Paper>
                     <List>
                        <ListItem className={classes.rightSideBlockItem}>
                           <ListItemText
                              primary="Санкт-Петербург"
                              secondary={
                                 <Typography component="span" variant="body2" color="textSecondary">
                                    Твитов: 3 331
                                 </Typography>
                              }
                           />
                        </ListItem>
                        <Divider component="li" />
                        <ListItem className={classes.rightSideBlockItem}>
                           <ListItemText
                              primary="#коронавирус"
                              secondary={
                                 <Typography component="span" variant="body2" color="textSecondary">
                                    Твитов: 163 122
                                 </Typography>
                              }
                           />
                        </ListItem>
                        <Divider component="li" />
                        <ListItem className={classes.rightSideBlockItem}>
                           <ListItemText
                              primary="Беларусь"
                              secondary={
                                 <Typography component="span" variant="body2" color="textSecondary">
                                    Твитов: 13 554
                                 </Typography>
                              }
                           />
                        </ListItem>
                        <Divider component="li" />
                     </List>
                  </Paper>
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
      </Container>

   );
}


export default Home;
