import axios from "axios";
import { push } from "connected-react-router";
import { routes } from "../containers/Router"

const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/FourFoodA"





export const setRestaurantAction = (restaurants) => ({
    type: "SET_RESTAURANTS_ACTION",
    payload: {
        restaurants,
    }
})


export const fetchRestaurants = () => async (dispatch) => {
    const token = window.localStorage.getItem("token")
    const requestHeader = {
        headers: {
            auth: token
        }
    }
    try {
        const response = await axios.get(`${baseUrl}/restaurants`, requestHeader)
        dispatch(setRestaurantAction(response.data.restaurants))
    } catch (error) {
        window.alert(error.response.data.message)
    }
}

export const fetchRestaurantsDetails = (restaurantId) => async (dispatch) => {
    const token = window.localStorage.getItem("token")
    const requestHeader = {
        headers: {
            auth: token
        }
    }
    try {
        const response = await axios.get(`${baseUrl}/restaurants/${restaurantId}`, requestHeader)
        dispatch(setRestaurantDetails(response.data.restaurant))
        dispatch(push(routes.restaurantDetails))
    } catch (err) {
        window.alert(err.response.data.message)
    }
}

export const setRestaurantDetails = (details) => ({
    type: "SET_RESTAURANT_DETAILS",
    payload: {
        details
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