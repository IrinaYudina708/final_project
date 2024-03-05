// ACTION'S CONSTANTS
const SET_CATEGORIES = "SET_CATEGORIES";
const SET_CATEGORY = "SET_CATEGORY";
const ADD_CATEGORY = "ADD_CATEGORY";
const DELETE_CATEGORY = "DELETE_CATEGORY";
const UPDATE_CATEGORY = "UPDATE_CATEGORY";

let initialState = {
  categories: [],
  category: {}
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CATEGORIES:
      return {
        ...state,
        categories: action.categories,
    };
    
    case SET_CATEGORY:
        return {
          ...state,
          category: action.category,
    };

    case ADD_CATEGORY:
      return {
        ...state,
        categories: [...state.categories, action.category],
      };

    case UPDATE_CATEGORY:
      const updatedCategories = [...state.categories];
      const shouldUpdateIndex = updatedCategories.findIndex(c => c.id === action.category.id);

      if(shouldUpdateIndex !== -1) {
        updatedCategories[shouldUpdateIndex] = action.category
      }

      return {
        ...state,
        categories: updatedCategories,
      };

    case DELETE_CATEGORY:
      return {
        ...state,
        categories: state.categories.filter((c) => c.id !== action.id),
      };

    default:
      return state;
  }
};

// ACTION CREATORS
export const setCategories = (categories) => ({
    type: SET_CATEGORIES,
    categories,
  });

  export const setCategory = (category) => ({
    type: SET_CATEGORY,
    category,
  });

  export const addCategory = (category) => ({
    type: ADD_CATEGORY,
    category,
  });
  
  export const updateCategory = (category) => ({
    type: UPDATE_CATEGORY,
    category,
  });
  
  export const deleteCategory = (id) => ({
    type: DELETE_CATEGORY,
    id,
  });

  export default categoryReducer;
  