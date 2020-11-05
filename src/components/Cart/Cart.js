import React from 'react'
import CartTitle from './CartTitle'
import Cartdescription from './Cartdescription'
import CartTotal from './CartTotal'


function Cart() {
    return (
        <div>
            <CartTitle/>
            <Cartdescription/>
            <CartTotal/>
        </div>
    )
}

export default Cart
