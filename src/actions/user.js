import axios from "axios";
import { push } from "connected-react-router";
import { routes } from "../containers/Router"

const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/FourFoodA"


export const userLogin = (email, password) => async (dispatch)=>{
    

    const login = {
        email,
        password,
    }

    try{
        const response = await axios.post(`${baseUrl}/login`, login)
        window.localStorage.setItem("token", response.data.token)
        window.alert("Login efetuado")
        dispatch(push(routes.restaurantFeed))
    }catch(error){
        window.alert("Erro no login")
    }
}

export const userSignup = (newUserData) => async (dispatch) => {
    try {
        const response = await axios.post(`${baseUrl}/signup`, newUserData)
        window.localStorage.setItem("token", response.data.token)
        dispatch(push(routes.signupPageAddress))
    } catch(e) {
        window.alert(e.response.data.message)
    }
}

export const addAddress = (addressData) => async (dispatch) => {
    const token = window.localStorage.getItem("token")
    const requestHeader = {
        headers: {
            auth: token,
        }
    }
    try {
        const response = await axios.put(`${baseUrl}/address`, addressData, requestHeader)
        window.localStorage.setItem("token", response.data.token)
        dispatch(push(routes.restaurantFeed))
    } catch(e) {
        window.alert(e.response.data.message)
    }
}