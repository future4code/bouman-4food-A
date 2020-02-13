import { getUsers, getOrderHistory, getFullAddress } from "../actions/user";
import users from './users';


describe('User reducers', () => {
  const currentState = {
    allUsers: [],
    allOrders: [],
    allAddress: [],
  }

  test('test get all user', () => {
    const userList = [
      {
        "id": "1",
        "name": "teste",
        "email": "teste@teste.com",
        "cpf": "000.000.000-00",
        "hasAddress": true,
        "address": "R. Teste - 111, Teste"
      },
      {
        "id": "2",
        "name": "teste2",
        "email": "teste2@teste.com",
        "cpf": "000.000.111-00",
        "hasAddress": true,
        "address": "R. Teste2 - 111, Teste"
      },
    ]
    const action = getUsers(userList)
    const newState = users(currentState, action)
    expect(newState.allUsers).toHaveLength(2)
  })

  test('test get order history', () => {
    const orderList = [
        {
            "totalPrice": 28,
            "restaurantName": "Habibs",
            "createdAt": 1581170863402,
            "expiresAt": 1581174463402
        },
        {
            "totalPrice": 20,
            "restaurantName": "Habibs",
            "createdAt": 1580945522244,
            "expiresAt": 1580949122244
        }
    ]

    const action = getOrderHistory(orderList)
    const newState = users(currentState, action)
    expect(newState.allOrders).toHaveLength(2)
  })

  test('test get full address', () => {
    const addressList = [
      {
        "neighbourhood": "Vila N. Conceição",
        "number": "177",
        "city": "São Paulo",
        "apartment": null,
        "state": "SP",
        "street": "R. Afonso Braz"
      }
    ]
    const action = getFullAddress(addressList)
    const newState = users(currentState, action)
    expect(newState.allAddress).toHaveLength(1)
  })
})