import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { cartReducer } from './reducers/cartReducer'
import { getAllPizzasReducer } from './reducers/pizzaReducer'

const finalReducer = combineReducers({ getAllPizzasReducer, cartReducer })

const cartItems = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : []
const initialState = { cartReducer: { cartItems } }

const composeEnchancers = composeWithDevTools({})
const store = createStore(
  finalReducer,
  initialState,
  composeEnchancers(applyMiddleware(thunk))
)
export default store
