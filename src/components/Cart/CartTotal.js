import React,{useContext} from 'react'
import { myContext } from '../../context'
import ButtonContainer from '../ButtonContainer'
import {Link} from 'react-router-dom'


const CartTotal = () => {
    const { totalPrice,RemoveAllProducts } = useContext(myContext)
    return (
        <div className='cartTotal-section'>
            <div>
               { totalPrice>0 ?<Link to='/'><ButtonContainer modal onClick={RemoveAllProducts}>Clear Cart</ButtonContainer></Link>:''}
                <p>{totalPrice>0 ? `Cart Totals :${totalPrice}` : <p className='empty_cart'>You Dont Have Any Products In Cart.</p>} </p>
            </div>
        </div>
    )
}

export default CartTotal
