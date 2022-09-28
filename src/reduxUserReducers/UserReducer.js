import { ADD_USER } from "../reduxUserActions/UserTypes";

const initialState = {
    numOfUsers : 0,
    ratingCount:0
}

//Reducer is a function that takes in the state object and an action
//here action = UserAction which ADD_USER
const userReducer = (state = initialState, action)=>{
    switch (action.type) {
        case 'ADD_USER':
            return {
                ...state,
                numOfUsers: state.numOfUsers + 1
            }
            break;
    
        default:
            return state;
    }
}

export default userReducer;