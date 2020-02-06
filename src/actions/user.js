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
        if(response.data.user.hasAddress === false){
            window.alert("Você não tem nenhum endereço cadastrado. Por favor cadastre agora.")
            dispatch(push(routes.signupPageAddress))
        }else{
            dispatch(push(routes.restaurantFeed))
        }
    }catch(error){
        window.alert(error.response.data.message)
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

const getUsers = (users)=>({
    type: "GET_ALL_USERS",
    payload:{
        users,
    }
})

export const getOrderHistory = (orders)=>({
    type: "GET_ALL_ORDERS",
    payload:{
        orders,
    }
})

export const getProfile = () => async (dispatch)=>{
    const token = window.localStorage.getItem("token")

    const response = await axios.get(`${baseUrl}/profile`, {
        headers:{
            auth: token,
        }
    })
    dispatch(getUsers(response.data.user))
}

export const fetchOrdersHistory = () => async (dispatch) => {
    const token = window.localStorage.getItem("token")

    const response = await axios.get(`${baseUrl}/orders/history`, {
        headers:{
            auth: token,
        }
    })
    dispatch(getOrderHistory(response.data.orders))
}