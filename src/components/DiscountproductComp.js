import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { myContext } from '../context'


const DiscountproductComp = ({ product }) => {
    const { setSingleProductDetail, AddtoCart,openModal } = useContext(myContext)
    if(!product){
        return null
    }
    return (
        <div className='discount-single'>
            <div className='product-ImgContainer'>
                <Link to={`/products/${product.id}`}>
                    <img src={product.img} alt="singleprod" className='img-fluid' />
                </Link>
                <button disabled={product.inCart ? true : false} onClick={() => { setSingleProductDetail(product.id);openModal() }}>{product.inCart ? 'InCart' : <i className='fas fa-cart-plus'></i>}</button>
            </div>
            <div className='productTitleprice'>
                <p>{product.title}</p>
                <p>${product.price}</p>
            </div>
        </div>
    )
}

export default DiscountproductComp
