import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToCartAction } from '../../actions/cartActions'
import Quick from '../Quick'
import './index.css'

const Pizza = ({ pizza }) => {
  const dispatch = useDispatch()

  const [quantity, setQuantity] = useState(1)
  const [variant, setVariant] = useState('small')
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const addToCart = () => {
    dispatch(addToCartAction(pizza, quantity, variant))
  }

  return (
    <div className='p-card'>
      <div className='p-card-header'>
        <img className='p-image' src={pizza.image} alt={pizza.name} />
        <h2 className='p-title' onClick={handleShow}>
          {pizza.name}
        </h2>
      </div>
      <div className='p-card-body'>
        <div className='p-left'>
          <span className='variants'>Variants</span>
          <div className='p-select'>
            <select value={variant} onChange={e => setVariant(e.target.value)}>
              {pizza.variants.map(variant => (
                <option value={variant} key={variant}>
                  {variant}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className='p-right'>
          <span className='variants'>Quantity</span>
          <div className='p-select quantity'>
            <select
              value={quantity}
              onChange={e => setQuantity(e.target.value)}
            >
              {[...Array(5).keys()].map((x, i) => (
                <option value={i + 1} key={i}>
                  {i + 1}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className='p-card-footer'>
        <div className='p-f-left'>
          <p className='price'>
            <span>Price:</span> $
            {(pizza.prices[0][variant] * quantity).toFixed(2)}
          </p>
        </div>
        <div className='p-f-right'>
          <button className='btn' onClick={addToCart}>
            Add
          </button>
        </div>
      </div>

      {show && <Quick handleClose={handleClose} pizza={pizza} />}
    </div>
  )
}
export default Pizza
