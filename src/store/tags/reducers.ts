import produce, { Draft } from 'immer';
import { TagsActions, TagsActionType } from './actionCreators';
import { LoadingState, TagsState } from './contracts/state';


const initialTagsState: TagsState = {
   items: [],
   loadingState: LoadingState.NEVER
}

export const tagsReducer = produce((daraft: Draft<TagsState>, action: TagsActions) => {
   switch (action.type) {
      case TagsActionType.SET_TAGS:
         daraft.items = action.payload;
         daraft.loadingState = LoadingState.LOADED;
         break;

      case TagsActionType.FETCH_TAGS:
         daraft.items = [];
         daraft.loadingState = LoadingState.LOADING;
         break;

      case TagsActionType.SET_TAGS_LOADING_STATE:
         daraft.loadingState = action.payload;
         break;


      default:
         return;
   }



}, initialTagsState)