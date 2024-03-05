import MultiSelect from './components/MultiSelect';
import  {Select}  from "./components/Select";
import { addUserAction } from "./store/user_actions/reducer";
import {useTrackUserAction} from "./traker/userTraker"
import { useDispatch } from "react-redux";
import "./styles/Component.css";
import "./styles/App.css";

export default function App() {
  const traker = useTrackUserAction();
  const handleClick = (e) => {
    traker(e);
  }
  return (
    <div onClick={handleClick} className="main">
        <Select/>
        <MultiSelect />
    </div>
  );
}
