import axios from "axios";
import { push } from "connected-react-router";
import { routes } from "../containers/Router"

//Actions
export const setRestaurantAction = (restaurants) => ({
    type: "SET_RESTAURANTS_ACTION",
    payload: {
        restaurants,
    }
})

export const setRestaurantCategory = (category) => ({
    type: "SET_RESTAURANT_CATEGORY",
    payload: {
        category
    }
})

export const setRestaurantId = (restaurantId) => ({
    type: "SET_RESTAURANT_ID",
    payload: {
        restaurantId
    }
})


export const setRestaurantDetails = (details) => ({
    type: "SET_RESTAURANT_DETAILS",
    payload: {
        details
    }
})

export const addToCart = (products) => ({
    type: "ADD_TO_CART",
    payload: {
        products
    }
})

export const clearCart = () => ({
    type: "CLEAR_CART",
    payload: {
        products: []
    }
})

export const refreshCart = (products) => ({
    type: "REFRESH_CART",
    payload: {
        products
    }
})

//Integração API
const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/FourFoodA"

const token = window.localStorage.getItem("token")
const requestHeader = {
    headers: {
        auth: token
    }
}

export const fetchRestaurants = () => async (dispatch) => {
    try {
        const response = await axios.get(`${baseUrl}/restaurants`, requestHeader)
        dispatch(setRestaurantAction(response.data.restaurants))
    } catch (error) {
        window.alert(error.response.data.message)
    }
}

export const fetchRestaurantsDetails = (restaurantId) => async (dispatch) => {
    try {
        const response = await axios.get(`${baseUrl}/restaurants/${restaurantId}`, requestHeader)
        dispatch(setRestaurantDetails(response.data.restaurant))
        dispatch(push(routes.restaurantDetails))
    } catch (err) {
        window.alert(err.response.data.message)
    }
}

export const placeOrder = (orderData, restaurantId) => async (dispatch) => {
    try {
        const response = await axios.post(`${baseUrl}/restaurants/${restaurantId}/order`, orderData, requestHeader)
        window.alert("Pedido enviado com sucesso")
        dispatch(clearCart())
    } catch (e) {
        window.alert(e.response.data.message)
    }   
}