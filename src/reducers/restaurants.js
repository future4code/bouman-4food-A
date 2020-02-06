const initialState = {
    allRestaurants: [],
    restaurantDetails: [],
}

const restaurants = (state = initialState, action) => {
    switch (action.type) {
        case "SET_RESTAURANTS_ACTION":
            return { ...state, allRestaurants: action.payload.restaurants }
        case "SET_RESTAURANT_DETAILS":
            return { ...state, restaurantDetails: action.payload.details}
        default:
            return state
    }
}

export default restaurants;