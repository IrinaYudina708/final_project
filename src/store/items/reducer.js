// ACTION'S CONSTANTS
const SET_ITEMS = "SET_ITEMS";
const ADD_ITEM = "ADD_ITEM";
const DELETE_ITEM = "DELETE_ITEM";
const UPDATE_ITEM = "UPDATE_ITEM";

let initialState = {
  items: [],
};

const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ITEMS:
      return {
        ...state,
        items: action.items,
      };

    case ADD_ITEM:
      return {
        ...state,
        items: [...state.items, action.item],
      };
  
    case UPDATE_ITEM:
      const updatedItems = [...state.items];
      const shouldUpdateIndex = updatedItems.findIndex(c => c.id === action.item.id);
      if(shouldUpdateIndex !== -1) {
        updatedItems[shouldUpdateIndex] = action.item
      }

      return {
        ...state,
        items: updatedItems,
      };
  
    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter((c) => c.id !== action.id),
      };

    default:
      return state;
  }
};

// ACTION CREATORS
export const setSubcategories = (items) => ({
  type: SET_ITEMS,
  items,
});

export const addItem = (item) => ({
  type: ADD_ITEM,
  item,
});

export const updateItem = (item) => ({
  type: UPDATE_ITEM,
  item,
});

export const deleteItem = (id) => ({
  type: DELETE_ITEM,
  id,
});


export default itemsReducer;
