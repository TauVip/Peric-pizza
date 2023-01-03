import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPizzas } from '../../actions/pizzaActions'
import Pizza from '../Pizza'
import './index.css'

const Pizzas = () => {
  const dispatch = useDispatch()
  const pizzasState = useSelector(state => state.getAllPizzasReducer)
  const { pizzas, loading, error } = pizzasState

  useEffect(() => {
    dispatch(getAllPizzas())
  }, [dispatch])

  return (
    <div className='ps-container'>
      <div className='ps-row'>
        <div className='ps-col'>
          <div className='ps-cards'>
            {loading ? (
              <h2 className='loading'>Loading...</h2>
            ) : error ? (
              <h2 className='error'>Error...</h2>
            ) : (
              pizzas.map(pizza => <Pizza key={pizza._id} pizza={pizza} />)
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
export default Pizzas
