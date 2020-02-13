import axios from "axios";
import {baseUrl, userLogin, userSignup, addAddress, getUsers, getProfile, getOrderHistory, fetchOrdersHistory, getFullAddress, fetchFullAddress} from "./user"


const mockEmail = [{
    email: "teste@teste.com",
    password: "123456"
}]

const mockProfile = [{
        id: "De8UACSFgFySnKdXm5hI",
        name: "Astrodev",
        email: "astrodev@future4.com",
        cpf: "111.111.111-11",
        hasAddress: true,
        address: "R. Afonso Braz, 177 - Vila N. Conceição"
}]

const mockOrders = [{order: null}]

const mockAddress = [{
    neighbourhood: "Vila N. Conceição",
    number: "177",
    city: "São Paulo",
    apartment: null,
    state: "SP",
    street: "R. Afonso Braz"
}]

describe("Teste de login", ()=>{
    test("Teste simula a ação de login", async ()=>{
        const dispatchMock = jest.fn()

        axios.post = jest.fn().mockReturnValue({
            status: 200
        })

        await userLogin("teste@teste.com", "123456")(dispatchMock)

        expect(axios.post).toHaveBeenCalledWith(`${baseUrl}/login`, {email:"teste@teste.com", password: "123456"})
    })
})

describe("Teste de signup", ()=>{
    test("Teste simula a ação de signup", async ()=>{
        const dispatchMock = jest.fn()

        axios.post = jest.fn().mockReturnValue({
            status: 200
        })

        await userSignup("Astrodev")(dispatchMock)

        expect(axios.post).toHaveBeenCalledWith(`${baseUrl}/signup`, ("Astrodev"))
    })
})

describe("Testa o getUsers", ()=>{
    test("Verifica se a action tem formato esperado", ()=>{
        const expectedAction = {
            type: "GET_ALL_USERS",
            payload: {
               users: mockProfile
            }
        }
        const action = getUsers(mockProfile)

        expect(action).toEqual(expectedAction)
    })
})

describe("Teste o getOrderHistory", ()=>{
    test("Verifica se a action tem formato esperado", ()=>{
        const expectedAction = {
            type: "GET_ALL_ORDERS",
            payload: {
                orders: mockOrders
            }
        }
        const action = getOrderHistory(mockOrders)

        expect(action).toEqual(expectedAction)
    })
})

describe("Teste o getFullAddress", ()=>{
    test("Verifica se a action tem formato esperado", ()=>{
        const expectedAction = {
            type: "GET_ALL_ADDRESS",
            payload: {
                address: mockAddress
            }
        }
        const action = getFullAddress(mockAddress)

        expect(action).toEqual(expectedAction)
    })
})


describe("Testa a getProfile", () => {
    test("Varifica a chamada da função", async () => {
        const dispatchMock = jest.fn()
        
        axios.get = jest.fn(() => ({
            data: mockProfile
        }))
        const component = jest.spyOn(Storage.prototype, 'setItem');
        localStorage.setItem = component;
        localStorage.setItem("token", "xpto")
        
        const expectedAction = {
            type: "GET_ALL_USERS",
            payload: {
                users: mockProfile.user
            }
        };
        await getProfile()(dispatchMock)
        expect(dispatchMock).toHaveBeenCalledWith(expectedAction)
    })
})
 

// describe("Testa a addAddress", () => {
//     test("Varifica a chamada da função", async () => {
//         const dispatchMock = jest.fn()
        
//         axios.put = jest.fn(() => ({
//             data: mockAddress.user
//         }))
//         const component = jest.spyOn(Storage.prototype, 'setItem');
//         localStorage.setItem = component;
//         localStorage.setItem("token", "xpto")

//         await addAddress(mockAddress)(dispatchMock)

//         expect(axios.put).toHaveBeenCalledWith(`${baseUrl}/address`, mockAddress)
//     })
// })

describe("Testa a fetchOrdersHistory", () => {
    test("Varifica a chamada da função", async () => {
        const dispatchMock = jest.fn()
        
        axios.get = jest.fn(() => ({
            data: mockOrders
        }))
        const component = jest.spyOn(Storage.prototype, 'setItem');
        localStorage.setItem = component;
        localStorage.setItem("token", "xpto")
        
        const expectedAction = {
            type: "GET_ALL_ORDERS",
            payload: {
                orders: mockOrders.user
            }
        };
        await fetchOrdersHistory()(dispatchMock)
        expect(dispatchMock).toHaveBeenCalledWith(expectedAction)
    })
})

describe("Testa a fetchFullAddress", () => {
    test("Varifica a chamada da função", async () => {
        const dispatchMock = jest.fn()
        
        axios.get = jest.fn(() => ({
            data: mockAddress
        }))
        const component = jest.spyOn(Storage.prototype, 'setItem');
        localStorage.setItem = component;
        localStorage.setItem("token", "xpto")
        
        const expectedAction = {
            type: "GET_ALL_ADDRESS",
            payload: {
                address: mockAddress.user
            }
        };
        await fetchFullAddress()(dispatchMock)
        expect(dispatchMock).toHaveBeenCalledWith(expectedAction)
    })
})