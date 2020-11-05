import React, { useState, useContext } from 'react'
import { myContext } from '../context'
import ButtonContainer from '../components/ButtonContainer'
import {Link} from 'react-router-dom'


const Singleproduct = (props) => {
    const { SingleProductInfo } = useContext(myContext)
    let id = props.match.params.id
    let product = SingleProductInfo(id)
    let productDets = product.map(prod => {
        return (
            <div className='single-prodComp'>
                <img src={`/${prod.img}`} alt="img"  className='single-prodImg'/>
                <div className='single-prodDetail'>
                    <h2>Brand: {prod.company}</h2>
                    <h3>Title: {prod.title}</h3>
                    <h3>Price: ${prod.price}</h3>
                    <h3> Discount Offered : <b>{prod.discount ? 'Yes' : 'No'}</b></h3>
                    <p><b>Description</b>: {prod.info}</p>
                    <Link to='/products'><ButtonContainer modal>back to products</ButtonContainer></Link>
                </div>
            </div>
        )
    })

    return (
        <div className='single-ProdSection'>
            {productDets}
        </div>
    )
}

export default Singleproduct







// import {myContext} from '../context'


// class Singleproduct extends React.Component{

//     state = {
//         id:this.props.match.params.id
//     }

// static contextType = myContext
// render(){
//     let {getSingleProductDetail} = this.context
//     let product = getSingleProductDetail(this.state.id)


//     return (
//         <div>
//        hello
//         </div>
//     )
// }}
