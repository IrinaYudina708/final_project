import dataUpload from '../../api/dataUpload';
import {setCategories} from "./reducer";

export const getCategories = () => {
    return (dispatch) =>{
        dataUpload.fetchCategories().then((data) => {
            dispatch(setCategories(data));
        }).catch((error) => {
            console.log(error);
        })
    }
}