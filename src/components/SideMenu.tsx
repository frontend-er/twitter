import React from 'react';
import { useHomeStyles } from "./../Pages/Home/Home";
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
interface SideMenuProps {
   classes: ReturnType<typeof useHomeStyles>
}


export const SideMenu: React.FC<SideMenuProps> = ({ classes }: SideMenuProps): React.ReactElement => {
   return (

      <ul className={classes.sideMenuList}>
         <li className={classes.sideMenuItem}>
            <IconButton>
               <TwitterIcon className={classes.logoIcon} color="primary" />

            </IconButton>
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
            <Button className={classes.sideMenuTweetButton} variant="contained" color="primary">
               <Hidden smDown>Твитнуть</Hidden>
               <Hidden mdUp>
                  <CreateIcon />
               </Hidden>

            </Button>
         </li>
      </ul>
   );
}


