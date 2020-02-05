const initialState = {
    allUsers: []
}

const users = (state = initialState, action)=>{
    switch(action.type){
        case "GET_ALL_USERS":
            return{...state, allUsers: action.payload.users}
        default:
            return state
    }
}

export default users;