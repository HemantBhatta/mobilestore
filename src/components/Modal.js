import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { myContext } from '../context'
import ButtonContainer from '../components/ButtonContainer'



const Modal = () => {
    const { itemsinCart, modalStatus, closeModal, singleproductdet,AddtoCart } = useContext(myContext)

    let singleproduct = singleproductdet.map(product => { return (
        <div className={modalStatus ? 'modalOverlay openmodal' : 'closemodal'}>
            <div className='ModalInner'>
                <div className="modal-Card">
                    <h4>Company: {product.company}</h4>
                    <div className="modal-Img">
                        <img src={product.img} alt="modalimg"  className='modalimg'/>
                    </div>
                    <div className='modalPrice'>
                        <p>{product.title}</p>
                        <p>${product.price}</p>
                    </div>
    <ButtonContainer disabled={product.inCart ? true : false} modal onClick={()=>{AddtoCart(product.id)}}>{product.inCart ? 'In Cart' : 'Add To Cart'}</ButtonContainer>
                    <Link to='/products'><ButtonContainer modal onClick={closeModal}>Store</ButtonContainer></Link>
                </div>
            </div>
        </div>
    ) })


    return (
       <div>
            {singleproduct}
       </div>
    )
}

export default Modal
