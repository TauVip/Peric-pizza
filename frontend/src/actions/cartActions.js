export const addToCartAction =
  (pizza, quantity, variant) => (dispatch, getState) => {
    let cartItems = {
      _id: pizza._id,
      name: pizza.name,
      variant,
      quantity,
      image: pizza.image,
      prices: pizza.prices,
      price: pizza.prices[0][variant] * quantity
    }
    dispatch({ type: 'ADD_TO_CART', payload: cartItems })

    const cartItem = getState().cartReducer.cartItems
    localStorage.setItem('cartItems', JSON.stringify(cartItem))
  }
