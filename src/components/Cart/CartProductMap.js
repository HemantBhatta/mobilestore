import React,{useContext} from 'react'
import { myContext } from '../../context'

const CartProductMap = ({ product }) => {
    const { ProductIncrease,ProductDecrease,ProductRemove } = useContext(myContext)
    return (
        <div>
            <div className='cartTitle-section'>
                <p><img src={`/${product.img}`} alt="" className='cart-Image' /></p>
                <p>{product.title}</p>
                <p>{product.count}</p>
                <p>{product.price}</p>
                <div className='cart-Action'>
                    <p onClick={()=>{ProductDecrease(product.id)}}><i className='fas fa-minus'></i></p>
                    <p>{product.count}</p>
                    <p onClick={()=>{ProductIncrease(product.id)}}><i className='fas fa-plus'></i></p>
                </div>
                
                <p onClick={()=>{ProductRemove(product.id)}}><i className='fas fa-trash'></i></p>
                <p>{product.total}</p>
            </div>
        </div>
    )
}

export default CartProductMap
