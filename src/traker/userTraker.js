import { addUserAction } from "../store/user_actions/reducer";
import { useDispatch } from "react-redux";
import { EVENT } from "../constants/constants";

export const useTrackUserAction = () => {
  const dispatch = useDispatch();
  const trackUserActions = (e) => {
  const eventName = e.target.dataset.event
    dispatch(
      addUserAction({
        id: new Date().getTime(),
        eventName,
        eventValue: (eventName==EVENT.SELECT) ? e.target.dataset.flags : e.target.textContent,
      })
    );
  }
    return trackUserActions;
};
