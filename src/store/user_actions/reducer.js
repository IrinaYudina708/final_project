// ACTION'S CONSTANTS
export const ADD_USER_ACTION = "ADD_USER_ACTION";
const DELETE_USER_ACTION = "DELETE_USER_ACTION";
const UPDATE_USER_ACTION = "UPDATE_USER_ACTION";

let initialState = {
    user_actions: []
};

const userActionsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER_ACTION:
            return {
                ...state,
                user_actions: [...state.user_actions, action.user_action]
            };
        case UPDATE_USER_ACTION:
            const updatedUserActions = [...state.user_actions];
            const shouldUpdateIndex = updatedUserActions.findIndex(c => c.id === action.user_action.id);
            if(shouldUpdateIndex !== -1) {
                updatedUserActions[shouldUpdateIndex] = action.user_action
            }
      
            return {
              ...state,
              user_actions: updatedUserActions,
            };
        
        case DELETE_USER_ACTION:
            return {
              ...state,
              user_actions: state.user_actions.filter((c) => c.id !== action.id),
            };
      
        default:
            return state;
    }
};

// ACTION CREATORS
export const addUserAction = (user_action) => ({ 
    type: ADD_USER_ACTION, 
    user_action 
});

export const updateUserAction = (user_action) => ({
    type: UPDATE_USER_ACTION,
    user_action,
});
  
export const deleteUserAction = (id) => ({
    type: DELETE_USER_ACTION,
    id,
});

export default userActionsReducer;