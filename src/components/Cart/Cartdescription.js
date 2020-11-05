import React ,{useContext} from 'react'
import { myContext } from '../../context'
import CartProductMap from './CartProductMap'

function Cartdescription() {
    const { cartProducts } = useContext(myContext)
    let cartdescMap = cartProducts.map(cartprod=>{
        return <CartProductMap product={cartprod}/>
    })
    return (
        <div className=''>
         {cartdescMap}
        </div>
    )
}

export default Cartdescription
