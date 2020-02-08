import { setRestaurantAction, setRestaurantDetails,setRestaurantCategory,setRestaurantId } from '../actions/restaurantsActions'
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
            category: "Todos",
        }

        const action = setRestaurantCategory(["category"])

        // Execução
        const newState = restaurants(currentState, action)

        //Verificação

        expect(newState.category).toHaveLength(1)

    }) 
    /* test('test de setRestaurantId', () => {
        // Preparação
        const currentState = {
            selectedRestaurantId: "",
        }

        const action = setRestaurantId(["restaurantId"])

        // Execução
        const newState = restaurants(currentState, action)

        //Verificação

        expect(newState.selectedRestaurantId).toHaveLength(1)

    })  */
})



/* 
        "SET_RESTAURANTS_ACTION":
            return { ...state, allRestaurants: action.payload.restaurants }
        case "SET_RESTAURANT_DETAILS":
            return { ...state, restaurantDetails: action.payload.details}
        case "SET_RESTAURANT_CATEGORY":
            return { ...state, category: action.payload.category}
        case "SET_RESTAURANT_ID": */