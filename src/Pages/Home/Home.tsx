import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import { createStyles, InputBase, makeStyles, withStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import grey from '@material-ui/core/colors/grey';
import Paper from '@material-ui/core/Paper';
import { Tweet } from "../../components/Tweet";
import { Theme } from '@material-ui/core';
import { SideMenu } from '../../components/SideMenu';
import { AddTweetForm } from "./../../components/AddTweetForm";
import { InputAdornment } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/SearchOutlined';
import PersonAddIcon from '@material-ui/icons/PersonAddOutlined';



import ListItem from '@material-ui/core/ListItem/ListItem';
import Divider from '@material-ui/core/Divider/Divider';
import ListItemAvatar from '@material-ui/core/ListItemAvatar/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar/Avatar';
import ListItemText from '@material-ui/core/ListItemText/ListItemText';
import List from '@material-ui/core/List/List';
import Button from '@material-ui/core/Button/Button';


//Список дел 

// Сделать форму отправки твитов и постов
// Поробывать сделать пункт главное менню
//  Сделать правую часть твитера 
// Пооробывать выровнить отступы 



export const useHomeStyles = makeStyles((theme: Theme) => ({



   wrapper: {
      height: "100vh"
   },
   sideMenuList: {
      position: "sticky",
      top: 10,
      listStyle: "none",
      padding: 0,
      margin: 0,
      width: 230,

   },
   logo: {
      margin: "10px 0px"
   },

   logoIcon: {
      fontSize: 36
   },

   sideMenuItem: {

      marginTop: 10,
      cursor: 'pointer',
      "&:hover": {
         "& div": {
            backgroundColor: 'rgb(29, 161, 242, 0.1)',

         },
         "& h6": {
            color: theme.palette.primary.main,
         },
         "& svg path": {
            fill: theme.palette.primary.main,
         },

      },


      "& div": {
         display: "inline-flex",
         alignItems: "center",
         position: 'relative',
         left: -10,
         padding: ' 0 25px 0 20px',
         borderRadius: 30,
         height: 47,
         margin: 4,
         transition: 'all 0.2s ease-in-out'

      },

   },
   sideMenuListLabel: {
      fontWeight: 700,
      fontSize: 20,
      padding: 5,
      marginLeft: 10
   },
   sideMenuListItemIcon: {
      fontSize: 35,
      marginLeft: -5,
   },
   tweetsWraper: {
      borderRadius: 0,
      height: '100%',
      borderTop: 0,
      borderBottom: 0
   },
   tweetsCentred: {
      marginTop: 50,
      textAlign: 'center',
   },


   tweet: {
      display: 'flex',
      cursor: 'pointer',
      "&:hover": {
         backgroundColor: 'rgb(245, 248, 250)',
      }
   },
   tweetAvatar: {
      width: theme.spacing(6.5),
      height: theme.spacing(6.5),
      marginRight: 15,

   },
   tweetsHeader: {
      borderLeft: 0,
      borderRight: 0,
      borderTop: 0,
      borderRadius: 0,
      padding: 10,
      '& h5': {
         fontWeight: 900
      },

   },

   tweetUserName: {
      color: grey[500],
   },

   tweetFooter: {
      display: "flex",
      justifyContent: 'space-between',
      width: 450
   },

   sideMenuTweetButton: {
      marginTop: 25,
      padding: theme.spacing(3),
   },
   rightSide: {
      paddingTop: 20,
      position: 'sticky',
      top: 0,
   },
   rightSideBlock: {
      backgroundColor: '#F5F8FA',
      borderRadius: 15,
      marginTop: 20,
      '& .MuiList-root': {
         paddingTop: 0,
      },
   },
   rightSideBlockHeader: {
      borderTop: 0,
      borderLeft: 0,
      borderRight: 0,
      backgroundColor: 'transparent',
      padding: '13px 18px',
      '& b': {
         fontSize: 20,
         fontWeight: 800,
      },
   },
   rightSideBlockItem: {
      cursor: 'pointer',
      '& .MuiTypography-body1': {
         fontWeight: 700,
      },
      '& .MuiListItemAvatar-root': {
         minWidth: 50,
      },
      '& .MuiListItemText-root': {
         margin: 0,
      },
      '&:hover': {
         backgroundColor: '#edf3f6',
      },
   },
   addForm: {
      padding: 20,
   },
   addFormBody: {
      display: 'flex',
      width: '100%',
   },
   addFormBottom: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
   },
   addFormBottomActions: {
      marginTop: 10,
      paddingLeft: 70,
   },
   addFormTextarea: {
      width: '100%',
      border: 0,
      fontSize: 20,
      outline: 'none',
      fontFamily: 'inherit',
      resize: 'none',
   },
   addFormBottomLine: {
      height: 12,
      backgroundColor: '#E6ECF0',
   },
   addFormCircleProgress: {
      position: 'relative',
      width: 20,
      height: 20,
      margin: '0 10px',
      '& .MuiCircularProgress-root': {
         position: 'absolute',
      },
   },
   addFormBottomRight: {
      display: 'flex',
      alignItems: 'center',
   },
}));



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
                  {
                     [...new Array(12).fill(<Tweet text="Много коментов про верстку, хочу поддержать автора. Одно такое видео должно быть точно, потому что понятно хотя бы как целиком проект делается. Например я вообще не начинающий и вообще не фронтендер, а бекендер, которому надо это изучить, и это оказалось удобно в формате видео. Именно так я и собирался делать, брать готовую либу компонентов и собирать из конструктора, верстать руками я естественно не буду. И лично мне полезно было поглядеть."
                        user={{
                           fullName: '@killwolf',
                           userName: '@killwolf',
                           avatarUrl: "https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
                        }}
                        classes={classes}
                     />
                     )]
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
                                 src="https://pbs.twimg.com/profile_images/1267938486566428673/US6KRPbA_normal.jpg"
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
