import axios from "axios";
import { push } from "connected-react-router";
import { routes } from "../containers/Router"

const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/FourFoodA"

const setRestaurantAction = (restaurants) => ({
    type: "SET_RESTAURANTS_ACTION",
    payload: {
        restaurants,
    }
})

export const fetchRestaurants = () => async(dispatch) =>{
    const token = window.localStorage.getItem("token")

    try{
        const response = await axios.get(`${baseUrl}/restaurants`,{
            headers:{
                auth: token
            }
        })
        dispatch(setRestaurantAction(response.data.restaurants))
    }catch(error){
        window.alert(error.response.data.message)
    }
}   

