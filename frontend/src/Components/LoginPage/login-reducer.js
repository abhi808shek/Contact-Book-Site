const initialState = [{
   userId:null,
   data:null,
}]

export const login_reducer = (state=initialState, action)=>{
    switch (action.type) {
        case "SET_LOGIN_INFO":
            return {...state,data:action.payload,userId:action.userId}
            case "REMOVE_LOGOUT_INFO":
            return {...state,data:null,userId:null}
            case "SET_USER_ID":
            return {...state,userId:action.payload}
        default:
            return state;
    }
}