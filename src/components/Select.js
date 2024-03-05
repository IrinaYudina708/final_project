import {getCategories} from "../store/category/thunk";
import {setCategory} from "../store/category/reducer";
import React from "react";
import { EVENT } from "../constants/constants";
import { useDispatch, useSelector } from "react-redux";

export const Select = () => {
    const dispatch = useDispatch();
    const categories = useSelector(state => state.categories.categories);

    React.useEffect(() => {
      dispatch(getCategories());
    }, []);
      
    const toggleDropdown = (event) => {
      let dropdown = document.querySelector('#category_dropdown');
      dropdown.classList.toggle('opened');
    };

    const handleSelect = (e) => {
      let input = document.querySelector('#input_category');
      input.value = e.currentTarget.textContent;
      dispatch(setCategory({key: e.target.getAttribute('data-key'), value: e.target.textContent}));
    };
    
    return (
      <div id="category_dropdown" className="dropdown"  onClick={toggleDropdown} data-event={EVENT.CLICK}>
        <input id="input_category" type="text" data-event={EVENT.CLICK} placeholder="Pick the category" readOnly />
        <ul className="options"> 
          { categories.map((opt) => (<li className="option" data-key={opt.id} key={opt.id} value = {opt.name} data-event={EVENT.SELECT} data-flags={opt.flags} onClick={handleSelect}> {opt.name}</li>)) }
        </ul>
      </div>
    )
};