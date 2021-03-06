
import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';

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
      display: "flex",
      alignItems: "flex-start",
      flex: 1,
      borderLeft: 0,
      borderRight: 0,
      borderTop: 0,
      borderRadius: 0,
      padding: 10,
      '& h5': {
         fontWeight: 900
      },

   },
   tweetsHeaderUser: {
      display: "flex",
      alignItems: "center"
   },


   tweetsHeaderBackButton: {
      marginRight: 20,
   },

   tweetUsername: {
      color: grey[500],
   },

   tweetFooter: {
      display: 'flex',
      position: 'relative',
      left: -13,
      justifyContent: 'space-between',
      maxWidth: 450,

   },
   fullTweet: {
      padding: 21,
   },

   fullTweetText: {
      fontSize: 24,
      marginTop: 20,
      lineHeigth: 1.3234,
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
      '& a': {
         color: "inherit",
         textDecoration: "none",
      }

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

   tweetWrapper: {
      color: "inherit",
      textDecoration: "none"


   }
}));
