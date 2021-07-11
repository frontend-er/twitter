import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TwitterIcon from '@material-ui/icons/Twitter';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import FormGroup from '@material-ui/core/FormGroup';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import { ModalBlock } from '../components/ModalBlock';



export const useStylesSignIn = makeStyles((theme) => ({
   wrapper: {
      display: 'flex',
      height: 'calc(100vh - 84px)',
   },
   blueSide: {
      backgroundColor: '#71C9F8',
      flex: '0 0 50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      position: 'relative',


   },
   blueSideBigIcon: {
      position: 'absolute',
      left: "50%",
      top: "54%",
      transform: 'translate(-50%, -50%)',
      width: "350%",
      height: "350%",
      zIndex: 1,
   },
   blueSideList: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      width: 380,
      zIndex: 2,

      '& h6': {
         alignItems: 'center',
         dispaly: 'flex',
         color: '#ffffff',
         fontWeight: 700,
         fontSize: 20,

      }
   },

   blueSideListItem: {
      position: 'relative',
      zIndex: 2,

      marginBottom: 40
   },

   blueSideListIcon: {
      fontSize: 32,
      marginRight: 15

   },
   loginSide: {
      flex: '0 0 50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',


   },

   loginSideIcon: {
      fontSize: 45,

   },
   loginSideWrapper: {
      width: 380,

   },

   loginSideTitle: {
      fontWeight: 700,
      fontSize: 32,
      marginBottom: 45,
      marginTop: 20,

   },

   loginButton: {
      width: 380,
      marginBottom: 10,

   }

}));

function SingIn() {

   const classes = useStylesSignIn();
   const [visibleModal, setVisibleModal] = React.useState<'signIn' | 'signUp'>();

   const handleClickOpenSignIn = (): void => {
      setVisibleModal('signIn');
   };

   const handleClickOpenSignUp = (): void => {
      setVisibleModal('signUp');
   };

   const handleCloseModal = (): void => {
      setVisibleModal(undefined);
   };



   return (
      <div className={classes.wrapper}>
         <section className={classes.blueSide}>
            <ul className={classes.blueSideList}>
               <TwitterIcon color="primary" className={classes.blueSideBigIcon} />

               <li className={classes.blueSideListItem}> <Typography variant="h6"> <SearchIcon className={classes.blueSideListIcon} />Read about whtai is in your interest.</Typography></li>
               <li className={classes.blueSideListItem}><Typography variant="h6"><PeopleOutlineIcon className={classes.blueSideListIcon} /> New News with our touch.</Typography></li>
               <li className={classes.blueSideListItem}><Typography variant="h6"><ChatBubbleOutlineIcon className={classes.blueSideListIcon} />Join conversation.</Typography></li>
            </ul>
         </section>
         <section className={classes.loginSide}>
            <div className={classes.loginSideWrapper}>
               <TwitterIcon color="primary" className={classes.loginSideIcon} />
               <Typography variant='h4' className={classes.loginSideTitle}>Learn about what is happend in world rigth now</Typography>
               <Typography>
                  <b>Join Twitter now and relax!</b>
               </Typography>
               <br />
               <div >
                  <Button className={classes.loginButton} variant="contained" color="primary">SingIn</Button>

               </div>
               <div >
                  <Button className={classes.loginButton} variant="outlined" color="primary">LogIn</Button>

               </div>

               <ModalBlock
                  visible={visibleModal === 'signIn'}
                  onClose={handleCloseModal}
                  classes={classes}
                  title="Войти в аккаунт">
                  <FormControl className={classes.loginFormControl} component="fieldset" fullWidth>
                     <FormGroup aria-label="position" row>
                        <TextField
                           className={classes.loginSideField}
                           autoFocus
                           id="email"
                           label="E-Mail"
                           InputLabelProps={{
                              shrink: true,
                           }}
                           variant="filled"
                           type="email"
                           fullWidth
                        />
                        <TextField
                           className={classes.loginSideField}
                           autoFocus
                           id="password"
                           label="Пароль"
                           InputLabelProps={{
                              shrink: true,
                           }}
                           variant="filled"
                           type="password"
                           fullWidth
                        />
                        <Button onClick={handleCloseModal} variant="contained" color="primary" fullWidth>
                           Войти
                        </Button>
                     </FormGroup>
                  </FormControl>
               </ModalBlock>
               <ModalBlock
                  visible={visibleModal === 'signUp'}
                  onClose={handleCloseModal}
                  classes={classes}
                  title="Создайте учетную запись">
                  <FormControl className={classes.loginFormControl} component="fieldset" fullWidth>
                     <FormGroup aria-label="position" row>
                        <TextField
                           className={classes.registerField}
                           autoFocus
                           id="name"
                           label="Имя"
                           InputLabelProps={{
                              shrink: true,
                           }}
                           variant="filled"
                           type="name"
                           fullWidth
                        />
                        <TextField
                           className={classes.registerField}
                           autoFocus
                           id="email"
                           label="E-Mail"
                           InputLabelProps={{
                              shrink: true,
                           }}
                           variant="filled"
                           type="email"
                           fullWidth
                        />
                        <TextField
                           className={classes.registerField}
                           autoFocus
                           id="password"
                           label="Пароль"
                           InputLabelProps={{
                              shrink: true,
                           }}
                           variant="filled"
                           type="password"
                           fullWidth
                        />
                        <Button variant="contained" color="primary" fullWidth>
                           Далее
                        </Button>
                     </FormGroup>
                  </FormControl>
               </ModalBlock>

            </div>

         </section>
      </div>
   )
}




export default SingIn;