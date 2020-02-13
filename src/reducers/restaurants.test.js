import {
    setRestaurantAction,
    setRestaurantDetails,
    setRestaurantCategory,
    setRestaurantId,
    addToCart,
    clearCart,
    refreshCart,
} from '../actions/restaurantsActions'
import { restaurants } from './restaurants'


describe('reducer restaurants tasks', () => {
    test('test de setRestaurantAction', () => {
        // Preparação
        const currentState = {
            allRestaurants: [],
        }

        const action = setRestaurantAction(["restaurants"])

        // Execução
        const newState = restaurants(currentState, action)

        // Verificação

        expect(newState.allRestaurants).toHaveLength(1)

    })

    test('test de setRestaurantDetails', () => {
        // Preparação
        const currentState = {
            restaurantDetails: undefined,
        }

        const action = setRestaurantDetails(["details"])

        // Execução
        const newState = restaurants(currentState, action)

        //Verificação

        expect(newState.restaurantDetails).toHaveLength(1)

    })
    test('test de setRestaurantCategory', () => {
        // Preparação
        const currentState = {
            category: "",
        }

        const action = setRestaurantCategory(["category"])

        // Execução
        const newState = restaurants(currentState, action)

        //Verificação

        expect(newState.category).toHaveLength(1)

    })
    test('test de setRestaurantId', () => {
        // Preparação
        const currentState = {
            selectedRestaurantId: "",
        }

        const action = setRestaurantId(["1"])

        // Execução
        const newState = restaurants(currentState, action)

        //Verificação

        expect(newState.selectedRestaurantId).toHaveLength(1)

    })

    test('test de addToCart', () => {
        // Preparação
        const currentState = {
            cart: {
                products: [],
            },
        }

        const mockData = {
            id: "5omTFSOBYiTqeiDwhiBx",
            photoUrl: 'test',
            name: "Bibsfiha queijo",
            description: "Esfiha deliciosa, receita secreta do Habibs.",
            category: "Salgado",
            price: 1,
            quantity: "3"
        }

        const action = addToCart(mockData)

        // Execução
        const newState = restaurants(currentState, action)

        //Verificação

        expect(newState.cart.products).toHaveLength(1)

    })
    test('test de clearCart', () => {
        // Preparação
        const currentState = {
            cart: {
                products: [],
            },
        }

        const action = clearCart([])

        // Execução
        const newState = restaurants(currentState, action)

        //Verificação

        expect(newState.cart.products).toHaveLength(0)

    })
    test('test de refreshCart', () => {
        // Preparação
        const currentState = {
            cart: {
                products: [],
            },
        }

        const mockData = [
            {
                id: "5omTFSOBYiTqeiDwhiBx",
                photoUrl: 'test',
                name: "Bibsfiha queijo",
                description: "Esfiha deliciosa, receita secreta do Habibs.",
                category: "Salgado",
                price: 1,
                quantity: "3"
            }
        ]

        const action = refreshCart(mockData)

        // Execução
        const newState = restaurants(currentState, action)

        //Verificação

        expect(newState.cart.products).toHaveLength(1)

    })
})
