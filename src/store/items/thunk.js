import dataUpload from '../../api/dataUpload';
import {setSubcategories} from "./reducer";

export const getItems = () => {
    return (dispatch) =>{
        dataUpload.fetchItems().then((data) => {
            dispatch(setSubcategories(data));
        }).catch((error) => {
            console.log(error);
        })
    }
}