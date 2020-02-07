const initialState = {
    allRestaurants: [],
    restaurantDetails: [],
    category: "Todos",
}

const restaurants = (state = initialState, action) => {
    switch (action.type) {
        case "SET_RESTAURANTS_ACTION":
            return { ...state, allRestaurants: action.payload.restaurants }
        case "SET_RESTAURANT_DETAILS":
            return { ...state, restaurantDetails: action.payload.details}
        case "SET_RESTAURANT_CATEGORY":
            return { ...state, category: action.payload.category}
        default:
            return state
    }
}

export default restaurants;