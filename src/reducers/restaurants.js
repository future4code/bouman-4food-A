const initialState ={
    allRestaurants:[],
}

const restaurants = (state = initialState, action) =>{
    switch(action.type){
        case "SET_RESTAURANTS_ACTION":
            return{...state, allRestaurants: action.payload.restaurants}
        default:
            return state
    }
}

export default restaurants;