const initialState = {
    
}

export const add_new_user_contact_reducer = (state=initialState, action)=>{
    switch (action.payload) {
        case "ADD_NEW_USER_CONTACT":
            return {...state,data:action.payload}
    
        default:
            return state;
    }
}