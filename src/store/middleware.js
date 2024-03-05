import { EVENT } from "../constants/constants";
import { ADD_USER_ACTION } from "./user_actions/reducer";

export const trackUserActivityMiddleware = (store) => (next) => (action) => {
  if(action.type === ADD_USER_ACTION && action.user_action.eventName === EVENT.SELECT && action.user_action.eventValue !== ''){
    return;
  }
  return next(action);
};