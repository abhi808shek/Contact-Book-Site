const initialState = [{
    email:"",
    password:"",
}]

export const login_reducer = (state=initialState, action)=>{
    switch (action.payload) {
        case "SET_LOGIN_INFO":
            return {...state,data:action.payload}
        default:
            return state;
    }
}