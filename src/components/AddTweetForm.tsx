import React from 'react';
import classNames from 'classnames';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import IconButton from '@material-ui/core/IconButton';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import EmojiIcon from '@material-ui/icons/SentimentSatisfiedOutlined';
import { useHomeStyles } from "./../Pages/Home/Home";

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
   const textLimitPercent = Math.round((text.length / 280) * 100);
   const textCount = MAX_LENGTH - text.length;

   const handleChangeTextare = (e: React.FormEvent<HTMLTextAreaElement>): void => {
      if (e.currentTarget) {
         setText(e.currentTarget.value);
      }
   };

   const handleClickAddTweet = (): void => {
      setText('');
   };

   return (
      <div>
         <div className={classes.addFormBody}>
            <Avatar
               className={classes.tweetAvatar}
               alt={`Аватарка пользователя UserAvatar`}
               src="https://sun9-80.userapi.com/impf/c850428/v850428238/7505f/BbDcfMtMTpw.jpg?size=720x959&quality=96&sign=b91d4c12c182ada7e2a9a122cf596e76&type=album"
            />
            <TextareaAutosize
               onChange={handleChangeTextare}
               className={classes.addFormTextarea}
               placeholder="Что происходит?"
               value={text}
               rowsMax={maxRows}
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
               {text && (
                  <>
                     <span>{textCount}</span>
                     <div className={classes.addFormCircleProgress}>
                        <CircularProgress
                           variant="static"
                           size={20}
                           thickness={5}
                           value={text.length >= MAX_LENGTH ? 100 : textLimitPercent}
                           style={text.length >= MAX_LENGTH ? { color: 'red' } : undefined}
                        />
                        <CircularProgress
                           style={{ color: 'rgba(0, 0, 0, 0.1)' }}
                           variant="static"
                           size={20}
                           thickness={5}
                           value={100}
                        />
                     </div>
                  </>
               )}
               <Button
                  onClick={handleClickAddTweet}
                  disabled={text.length >= MAX_LENGTH}
                  color="primary"
                  variant="contained">
                  Твитнуть
               </Button>
            </div>
         </div>
      </div>
   );
};
