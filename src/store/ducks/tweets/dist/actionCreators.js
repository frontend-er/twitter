"use strict";
exports.__esModule = true;
exports.fetchTweets = exports.setTweets = exports.TweetsActionType = void 0;
var TweetsActionType;
(function (TweetsActionType) {
    TweetsActionType["SET_TWEETS"] = "tweets/SET_TWEETS";
    TweetsActionType["FETCH_TWEETS"] = "tweets/FETCH_TWEETS";
})(TweetsActionType = exports.TweetsActionType || (exports.TweetsActionType = {}));
exports.setTweets = function (payload) { return ({
    type: TweetsActionType.SET_TWEETS,
    payload: payload
}); };
exports.fetchTweets = function () { return ({
    type: TweetsActionType.FETCH_TWEETS
}); };
