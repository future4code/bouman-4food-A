const initialState = {
    allUsers: [],
    allOrders: [],
    allAddress: [],
}

const users = (state = initialState, action)=>{
    switch(action.type){
        case "GET_ALL_USERS":
            return{...state, allUsers: action.payload.users}
        case "GET_ALL_ORDERS":
            return{...state, allOrders: action.payload.orders}
        case "GET_ALL_ADDRESS":
                return{...state, allAddress: action.payload.address}
        default:
            return state
    }
}

export default users;