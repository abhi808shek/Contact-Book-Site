const initialState = [{
    updatedUserData:{}
}]

export const add_new_user_reducer = (state=initialState, action)=>{
    switch (action.payload) {
        case "UPDATE_USER":
            return {...state,updatedUserData:action.payload}
    
        default:
            return state;
    }
}