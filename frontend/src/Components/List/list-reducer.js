const initialState = {
  allContacts: [],
  updateContacts:{}
};

const all_contacts_reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_USER_CONTACT_DETAIL":
      return { ...state, allContacts: action.payload };
    case "DELETE_SINGLE_USER_CONTACT_DETAIL":
      state.allContacts = state.allContacts.filter(
        (contact) => contact._id !== action.payload
      );
      return { ...state };
    case "DELETE_ALL_USER_CONTACT_DETAIL":
      return { ...state, allContacts: [] };
    case "GET_SINGLE_USER_CONTACT_DETAIL":
      const fileterdData = state.allContacts.filter((item)=>item.id === action.payload.id) 
      console.log(fileterdData);
      return { ...state, updateContacts:fileterdData };
    case "ADD_USER_CONTACT_DETAIL":
      return { ...state, allContacts: [action.payload, ...state.allContacts] };
    default:
      return state;
  }
};

export default all_contacts_reducer;
