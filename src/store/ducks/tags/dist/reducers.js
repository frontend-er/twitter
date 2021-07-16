"use strict";
exports.__esModule = true;
exports.tweetsReducer = void 0;
var immer_1 = require("immer");
var actionCreators_1 = require("./actionCreators");
var state_1 = require("./contracts/state");
var initialtweetsState = {
    items: [],
    loadingState: state_1.LoadingState.NEVER
};
exports.tweetsReducer = immer_1["default"](function (daraft, action) {
    var type = action.type, payload = action.payload;
    if (type === actionCreators_1.TweetsActionType.SET_TWEETS) {
        daraft.items = payload;
    }
}, initialtweetsState);
