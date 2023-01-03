import { useSelector } from 'react-redux'
import './index.css'

const Navbar = () => {
  const cartState = useSelector(state => state.cartReducer)

  return (
    <div className='n-navbar'>
      <div className='n-row'>
        <div className='n-col'>
          <a href='/' className='n-logo'>
            Miljan Peric
          </a>
        </div>
        <div className='n-col'>
          <a href='/login'>Login</a>
          <a href='/cart'>
            Cart <span className='badge'>{cartState.cartItems.length}</span>
          </a>
        </div>
      </div>
    </div>
  )
}
export default Navbar
