import React from 'react';
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import Typography from '@material-ui/core/Typography';
import { IconButton } from '@material-ui/core';
import { Button } from '@material-ui/core';
import Hidden from '@material-ui/core/Hidden';
import CreateIcon from '@material-ui/icons/Create';
import { useHomeStyles } from "./../Pages/Home/theme";
import { ModalBlock } from './ModalBlock';
import { AddTweetForm } from "./AddTweetForm";
import { Link } from "react-router-dom";

interface SideMenuProps {
   classes: ReturnType<typeof useHomeStyles>
}


export const SideMenu: React.FC<SideMenuProps> = ({ classes }: SideMenuProps): React.ReactElement => {

   const [visibleAddTweet, setSetVisibleAddTweet] = React.useState<boolean>(false);

   const handleClickOpenAddTweet = () => {
      setSetVisibleAddTweet(true)
   }

   const onCloseAddTweet = () => {
      setSetVisibleAddTweet(false);
   }

   return (

      <ul className={classes.sideMenuList}>
         <li className={classes.sideMenuItem}>
            <Link to="/home">
               <IconButton>
                  <TwitterIcon className={classes.logoIcon} color="primary" />

               </IconButton>
            </Link>
         </li>
         <li className={classes.sideMenuItem}>
            <div>
               <SearchIcon className={classes.sideMenuListItemIcon} />
               <Hidden smDown>
                  <Typography className={classes.sideMenuListLabel} variant="h6">
                     Поиск
                  </Typography>
               </Hidden>


            </div>

         </li>
         <li className={classes.sideMenuItem}>
            <div>
               <NotificationsIcon className={classes.sideMenuListItemIcon} />
               <Hidden smDown>

                  <Typography className={classes.sideMenuListLabel} variant="h6">Уведомления </Typography>
               </Hidden>

            </div>

         </li>
         <li className={classes.sideMenuItem}>

            <div>
               <MailOutlineIcon className={classes.sideMenuListItemIcon} />
               <Hidden smDown>

                  <Typography className={classes.sideMenuListLabel} variant="h6">Сообщения </Typography>
               </Hidden>

            </div>

         </li>
         <li className={classes.sideMenuItem}>

            <div>
               <BookmarkBorderIcon className={classes.sideMenuListItemIcon} />
               <Hidden smDown>

                  <Typography className={classes.sideMenuListLabel} variant="h6">Закладки </Typography>
               </Hidden>

            </div>
         </li>
         <li className={classes.sideMenuItem}>

            <div>
               <ListAltIcon className={classes.sideMenuListItemIcon} />
               <Hidden smDown>

                  <Typography className={classes.sideMenuListLabel} variant="h6">Список </Typography>
               </Hidden>

            </div>

         </li>
         <li className={classes.sideMenuItem} >
            <div>
               <PersonOutlineIcon className={classes.sideMenuListItemIcon} />
               <Hidden smDown>

                  <Typography className={classes.sideMenuListLabel} variant="h6">Профиль </Typography>
               </Hidden>

            </div>
         </li>

         <li className={classes.sideMenuItem}>
            <Button onClick={handleClickOpenAddTweet} className={classes.sideMenuTweetButton} variant="contained" color="primary">
               <Hidden smDown>Твитнуть</Hidden>
               <Hidden mdUp>
                  <CreateIcon />
               </Hidden>

            </Button>


            <ModalBlock onClose={onCloseAddTweet} visible={visibleAddTweet} title="" >

               <div style={{ width: 550 }}>
                  <AddTweetForm maxRows={15} classes={classes} />

               </div>

            </ModalBlock>
         </li>
      </ul>
   );
}


