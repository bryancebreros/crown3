import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import {CartContext} from '../../contexts/cart.context'
import Button from '../button/button.component'
import CartItem from '../cart-item/cart-item.component'

import {CartDropdownContainer, EmptyMessage, CartItems} from './cart-dropdown.styles'

const CartDropdown = () => {
    const {cartItems} = useContext(CartContext);
    const navigate = useNavigate();

    const goToCheckout = () => {
        navigate('/checkout')
    }
    return (
        <CartDropdownContainer>
            <CartItems>
                {cartItems.length > 0 ? ( 
                    cartItems.map((item) => (
                    <CartItem key={item.id} cartItem={item} />
                ))
                ): (
                <EmptyMessage> Empty cart</EmptyMessage>
                )}
            </CartItems>
            <Button onClick={goToCheckout}>GO TO CHECKOUT</Button>

        </CartDropdownContainer>
    )
}

export default CartDropdown;