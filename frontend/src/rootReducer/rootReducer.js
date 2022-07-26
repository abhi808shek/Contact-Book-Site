import {combineReducers} from "redux"
import all_contacts_reducer from "../Components/List/list-reducer"
import {add_new_user_reducer} from "../Components/SignupPage/signup-reducer"
import {login_reducer} from "../Components/LoginPage/login-reducer"

const rootReducer = combineReducers({
    all_contacts_reducer,
    add_new_user_reducer,
    login_reducer
})


export default rootReducer;