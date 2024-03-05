import {getItems} from "../store/items/thunk";
import React from 'react';
import { EVENT } from "../constants/constants";
import { useDispatch, useSelector } from "react-redux";
import Pagination from './Pagination';

const MultiSelect = () => {
    const itemsPerPage = 2;
    const dispatch = useDispatch();
    const allItems = useSelector(state => state.items.items);
    const category = useSelector(state => state.categories.category);
    const [currentPage, setCurrentPage] =  React.useState(1);
    const [selectedItem, setSelectedItem] =  React.useState({selectedOptions: [], concatSelectedFilms: ''});

    let items = allItems.filter(item => item.parent_id == category.key);

    React.useEffect(() => {
      if (Object.keys(category).length !== 0) {
        resetComponentValues();
      }
    }, [category])

    React.useEffect(() => {
      dispatch(getItems());
    }, []);
 
    //Logic for displaying current items
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

    const handlePageClick = (event) => {
      setCurrentPage(event.target.id);
    };

    const toggleDropdown = () => {
      let dropdown = document.querySelector('#dropdown');
      dropdown.classList.toggle('opened');
    };

    const resetComponentValues = () => {
      let dropdown = document.querySelector('#dropdown');
      dropdown.classList.remove('opened');
      setCurrentPage(1);
      inputValueUpdate([]);
      setSelectedItem({selectedOptions: [], concatSelectedFilms: ''});
    }

    const inputValueUpdate = (elements) => {
      let inputVal = elements.join('; ');
      return inputVal;
    }

    const selectOption = (e) => {
      let selectedFilms = selectedItem.selectedOptions;
      let option = e.currentTarget.textContent;
      if (selectedFilms.includes(option)) {
        selectedFilms.splice(selectedFilms.indexOf(option), 1);
      } else {
        selectedFilms.push(option);
      }
      let inputText = inputValueUpdate(selectedFilms);
      setSelectedItem({selectedOptions: selectedFilms, concatSelectedFilms: inputText});
    };
  
    return (
      <div id="dropdown"  className="dropdown">
        <input id="input" type="text" placeholder="Pick a film" data-event={EVENT.CLICK} onClick={toggleDropdown} readOnly value={selectedItem.concatSelectedFilms}>
        </input>
        <ul className="options"> 
          { currentItems.map((opt) => (<li className={"option " + (selectedItem.selectedOptions.includes(opt.name) ? 'active' : '')} key={opt.id} value={opt.name} data-event={EVENT.SELECT_MULTISELECT} onClick={selectOption}>{opt.name}</li>)) }
          <Pagination items={items} currentPage={currentPage} itemsPerPage={itemsPerPage} handleClick = {handlePageClick}/>
        </ul>
      </div>
    )
}
  
export default MultiSelect;