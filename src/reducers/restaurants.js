const initialState = {
    allRestaurants: [],
    restaurantDetails: undefined,
    category: "Todos",
    selectedRestaurantId: "",
    cart: {
        products: [{}],
        paymentMethod: [{}]
    },
}



export const restaurants = (state = initialState, action) => {
    switch (action.type) {
        case "SET_RESTAURANTS_ACTION":
            return { ...state, allRestaurants: action.payload.restaurants }
        case "SET_RESTAURANT_DETAILS":
            return { ...state, restaurantDetails: action.payload.details}
        case "SET_RESTAURANT_CATEGORY":
            return { ...state, category: action.payload.category}
        case "SET_RESTAURANT_ID":

            return {...state, selectedRestaurantId: action.payload.restaurantId}
        case "ADD_TO_CART":
            return {...state, cart: state.cart.products.push(action.payload)}
        default:
            return state
    }
}


export default restaurants;