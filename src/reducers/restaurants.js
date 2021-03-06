const initialState = {
    allRestaurants: [],
    restaurantDetails: undefined,
    category: "Todos",
    selectedRestaurantId: "",
    cart: {
        products: [],
    },
}

export const restaurants = (state = initialState, action) => {
    switch (action.type) {
        case "SET_RESTAURANTS_ACTION":
            return { ...state, allRestaurants: action.payload.restaurants }
        case "SET_RESTAURANT_DETAILS":
            return { ...state, restaurantDetails: action.payload.details }
        case "SET_RESTAURANT_CATEGORY":
            return { ...state, category: action.payload.category }
        case "SET_RESTAURANT_ID":
            return { ...state, selectedRestaurantId: action.payload.restaurantId }
        case "ADD_TO_CART":
            return { ...state, cart: { ...state.cart, products: [...state.cart.products, action.payload.products] } }
        case "CLEAR_CART":
            return { ...state, cart: { products: [] } }
        case "REFRESH_CART":
            return { ...state, cart: { products: action.payload.products }}
        default:
            return state
    }
}

export default restaurants;