const initialState = {
    allUsers: [],
    allOrders: []
}

const users = (state = initialState, action)=>{
    switch(action.type){
        case "GET_ALL_USERS":
            return{...state, allUsers: action.payload.users}
        case "GET_ALL_ORDERS":
            return{...state, allOrders: action.payload.orders}
        default:
            return state
    }
}

export default users;