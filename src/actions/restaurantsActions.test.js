import axios from "axios";
import {setRestaurantAction, setRestaurantDetails, setRestaurantCategory, fetchRestaurants, fetchRestaurantsDetails} from "./restaurantsActions";

const mockRestaurants = [
    {
        id: "1",
        description: "Habib's é uma rede de restaurantes de comida rápida brasileira especializada em culinária árabe, os restaurantes vendem mais de 600 milhões de esfirras por ano. A empresa emprega 22 mil colaboradores e tem 421 unidades distribuídas em mais de cem municípios em 20 unidades federativas.",
        shipping: 6,
        address: "Rua das Margaridas, 110 - Jardim das Flores",
        name: "Habibs",
        logoUrl: "http://soter.ninja/futureFoods/logos/habibs.jpg",
        deliveryTime: 60,
        category: "Árabe"
      }
]

const mockDetails = [
    {
        id: "CnKdjU6CyKakQDGHzNln",
        category: "Salgado",
        price: "1",
        photoUrl: "https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/65c38aa8-b094-413d-9a80-ddc256bfcc78/201907031404_66194495.jpg",
        name: "Bibsfiha carne",
        description: "Esfiha deliciosa, receita secreta do Habibs."
    }
]


describe("Testa o setRestaurantAction", ()=>{
    test("Verifica se a action tem formato esperado", ()=>{
        const expectedAction = {
            type: "SET_RESTAURANTS_ACTION",
            payload: {
                restaurants: mockRestaurants
            }
        }
        const action = setRestaurantAction(mockRestaurants)

        expect(action).toEqual(expectedAction)
    })
})

describe("Testa o setRestaurantDetails", ()=>{
    test("Verifica se a action tem formato esperado", ()=>{
        const expectedAction = {
            type: "SET_RESTAURANT_DETAILS",
            payload: {
                details: mockDetails
            }
        }
        const action = setRestaurantDetails(mockDetails)

        expect(action).toEqual(expectedAction)
    })
})

describe("Testa o setRestaurantCategory", ()=>{
    test("Verifica se a action tem formato esperado", ()=>{
        const expectedAction = {
            type: "SET_RESTAURANT_CATEGORY",
            payload: {
                category: mockDetails
            }
        }
        const action = setRestaurantCategory(mockDetails)

        expect(action).toEqual(expectedAction)
    })
})

describe("Testa a fetchRestaurants", () => {
    test("Varifica a chamada da função", async () => {
        const dispatchMock = jest.fn()
        
        axios.get = jest.fn(() => ({
            data: mockRestaurants
        }))
        const component = jest.spyOn(Storage.prototype, 'setItem');
        localStorage.setItem = component;
        localStorage.setItem("token", "xpto")
        
        const expectedAction = {
            type: "SET_RESTAURANTS_ACTION",
            payload: {
                restaurants: mockRestaurants.restaurants
            }
        };
        await fetchRestaurants()(dispatchMock)
        expect(dispatchMock).toHaveBeenCalledWith(expectedAction)
    })
})

describe("Testa a fetchRestaurantsDetails", () => {
    test("Varifica a chamada da função", async () => {
        const dispatchMock = jest.fn()
        
        axios.get = jest.fn(() => ({
            data: mockDetails
        }))
        const component = jest.spyOn(Storage.prototype, 'setItem');
        localStorage.setItem = component;
        localStorage.setItem("token", "xpto")
        
        const expectedAction = {
            type: "SET_RESTAURANT_DETAILS",
            payload: {
                details: mockDetails.products
            }
        };
        await fetchRestaurantsDetails()(dispatchMock)
        expect(dispatchMock).toHaveBeenCalledWith(expectedAction)
    })
})