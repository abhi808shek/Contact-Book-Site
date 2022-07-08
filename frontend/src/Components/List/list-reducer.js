const initialState ={
    allContacts:[]
}

 const all_contacts_reducer = (state=initialState,action)=>{
    switch (action.type) {
        case "GET_ALL_USER_CONTACT_DETAIL":
            return {...state ,allContacts:action.payload }
        case "DELETE_SINGLE_USER_CONTACT_DETAIL":
            // state.allContacts = state.allContacts.filter((contact)=>contact._id !== action.payload)
            return {...state }
            // case "Addd":
            // return {...state ,allContacts:[...state.allContacts,action.payload]}
        default:
        return state;
    }
}

export default all_contacts_reducer;