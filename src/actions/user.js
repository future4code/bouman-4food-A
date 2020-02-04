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