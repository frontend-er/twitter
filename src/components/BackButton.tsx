import React from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { IconButton } from '@material-ui/core';
import { useHistory } from 'react-router-dom';







const BackButton: React.FC = (): React.ReactElement => {
   const history = useHistory();

   const handleClick = () => {
      history.goBack();
   }

   return (
      <IconButton onClick={handleClick} style={{ marginRight: 20, marginTop: -6, marginBottom: -6 }} color="primary">
         <ArrowBackIcon />
      </IconButton>
   );
}


export default BackButton;
