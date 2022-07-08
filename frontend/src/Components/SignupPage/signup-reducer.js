const initialState = [{
    name:"",
    email:"",
    password:"",
    Cpassword:""
}]

export const add_new_user_reducer = (state=initialState, action)=>{
    switch (action.payload) {
        case "ADD_NEW_USER":
            return {...state,data:action.payload}
    
        default:
            return state;
    }
}