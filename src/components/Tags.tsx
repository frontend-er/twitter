import { Divider, List, ListItem, ListItemText, Typography } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useHomeStyles } from "../Pages/Home/theme";
import { selectIsTagsLoaded, selectTagsItems } from "../store/tags/selectors";





interface TagsProps {
   classes: ReturnType<typeof useHomeStyles>;
};




export const Tags: React.FC<TagsProps> = ({ classes }: TagsProps): React.ReactElement | null => {
   const items = useSelector(selectTagsItems);


   const isloaded = useSelector(selectIsTagsLoaded);


   if (!isloaded) {
      return null
   }

   return (
      <Paper className={classes.rightSideBlock}>
         <Paper className={classes.rightSideBlockHeader} variant="outlined">
            <b>Актуальные темы</b>
         </Paper>
         <List>

            {
               items.map(obj => <React.Fragment key={obj._id}>
                  <ListItem className={classes.rightSideBlockItem}>
                     <Link to={`/home/search?q=${obj.name}`}>

                        <ListItemText
                           primary={obj.name}
                           secondary={
                              <Typography component="span" variant="body2" color="textSecondary">
                                 Твитов: {obj.count}
                              </Typography>
                           }
                        />
                     </Link>

                  </ListItem>
                  <Divider component="li" />



               </React.Fragment>)
            }

         </List>
      </Paper >
   );
}


