import React from 'react';
import classNames from 'classnames';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import IconButton from '@material-ui/core/IconButton';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import EmojiIcon from '@material-ui/icons/SentimentSatisfiedOutlined';
import { useHomeStyles } from "./../Pages/Home/theme";
import { useDispatch, useSelector } from "react-redux";
import { fetchAddTweets } from '../store/ducks/tweets/actionCreators';
import { selectAddFormState } from '../store/ducks/tweets/selectors';
import { AddFormState } from '../store/ducks/tweets/contracts/state';
import Snackbar from '@material-ui/core/Snackbar';
interface AddTweetFormProps {
   classes: ReturnType<typeof useHomeStyles>;
   maxRows?: number;
}




const MAX_LENGTH = 280;


export const AddTweetForm: React.FC<AddTweetFormProps> = ({
   classes,
   maxRows,
}: AddTweetFormProps): React.ReactElement => {

   const [text, setText] = React.useState<string>('');
   const [visibleNotification, setVisibleNotification] = React.useState<boolean>(false);

   const textLimitPercent = (text.length / MAX_LENGTH) * 100;

   const dispatch = useDispatch();

   const addFormState = useSelector(selectAddFormState)


   React.useEffect(() => {
      if (addFormState === AddFormState.ERROR) {
         setVisibleNotification(true)
      }
   }, [addFormState]);

   const handleClosaNotification = () => {
      setVisibleNotification(false)
   }



   const onHandleChangeTextarea = (e: React.FormEvent<HTMLTextAreaElement>): void => {
      if (e.currentTarget) {
         setText(e.currentTarget.value)
      }
   }

   const textareaaLengthWrning = (): Object => {
      if (textLimitPercent === 100) {
         return { color: "red" }
      } else if (textLimitPercent >= 80) {
         return { color: "orange" }

      }

      return {}

   }




   const handleClickAddTweet = () => {
      dispatch(fetchAddTweets(text));
      setText('');
   }


   return (
      <div>

         <Snackbar
            open={visibleNotification}
            onClose={handleClosaNotification}
            message="Ошибка при добавлении твита :("
            anchorOrigin={{ vertical: "top", horizontal: 'right' }}
         />
         <div className={classes.addFormBody}>
            <Avatar
               className={classes.tweetAvatar}
               alt={`Аватарка пользователя UserAvatar`}
               src="https://sun9-80.userapi.com/impf/c850428/v850428238/7505f/BbDcfMtMTpw.jpg?size=720x959&quality=96&sign=b91d4c12c182ada7e2a9a122cf596e76&type=album"
            />
            <TextareaAutosize
               onChange={onHandleChangeTextarea}
               className={classes.addFormTextarea}
               placeholder="Что происходит?"
               rowsMax={maxRows}
               maxLength={MAX_LENGTH}
            />
         </div>
         <div className={classes.addFormBottom}>
            <div className={classNames(classes.tweetFooter, classes.addFormBottomActions)}>
               <IconButton color="primary">
                  <ImageOutlinedIcon style={{ fontSize: 26 }} />
               </IconButton>
               <IconButton color="primary">
                  <EmojiIcon style={{ fontSize: 26 }} />
               </IconButton>
            </div>
            <div className={classes.addFormBottomRight}>
               {
                  text &&
                  <>
                     <span>{text.length}</span>

                     <div className={classes.addFormCircleProgress}>

                        <CircularProgress
                           variant="determinate"
                           size={20}
                           thickness={5}
                           value={textLimitPercent}
                           style={textareaaLengthWrning()}
                        />
                        <CircularProgress
                           style={{ color: 'rgba(0, 0, 0, 0.1)' }}
                           variant="determinate"
                           size={20}
                           thickness={5}
                           value={100}
                        />
                     </div>

                  </>
               }
               <Button
                  onClick={handleClickAddTweet}
                  disabled={addFormState === AddFormState.LOADING || textLimitPercent === 100 || textLimitPercent === 0}
                  color="primary"
                  variant="contained">
                  {addFormState === AddFormState.LOADING ? <CircularProgress color="inherit" size={14} /> : "Tweet"}
               </Button>
            </div>
         </div>
      </div>
   );
};


