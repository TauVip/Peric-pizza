import { useSelector } from 'react-redux'
import Navbar from '../components/Navbar'
import './cart.css'

const Cart = () => {
  const cartState = useSelector(state => state.cartReducer)
  const cartItems = cartState.cartItems

  return (
    <div className='cart-container'>
      <div className='cart-row'>
        <Navbar />
      </div>
      <div className='cart-row'>
        <h1 className='cart-title'>Your Cart</h1>
      </div>
      <div className='cart-row'>
        <div className='cart-col'>
          {cartItems.map((item, i) => (
            <div className='cart-card' key={i}>
              <div className='cart-header'>
                <h2 className='cart-subtitle'>{item.name}</h2>
                <span className='cart-variant'>{item.variant}</span>
              </div>
              <div className='cart-body'>
                <img src={item.image} alt={item.name} />
              </div>
            </div>
          ))}
        </div>
        <div className='cart-col'>Right</div>
      </div>
    </div>
  )
}
export default Cart
