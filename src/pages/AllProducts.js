import React,{useContext} from 'react'
import Fronthero from '../components/Fronthero'
import Banner from '../components/Banner'
import { myContext } from '../context'
import DiscountproductComp from '../components/DiscountproductComp'
import ButtonContainer from '../components/ButtonContainer'
import ProductFilterComp from '../components/ProductFilter/ProductFilterComp'
import Title from '../components/Title'
import {Link} from 'react-router-dom'


const AllProducts = () => {
    const { allProducts,filteredProducts } = useContext(myContext)
    return (
        <div className='allproduct-Section'>
             
             <Fronthero classn = 'mainFront-products'>
                    <Banner title='All Mobiles' description='Get your mobiles now'>
                            <Link to='/'><ButtonContainer>return home</ButtonContainer></Link>
                    </Banner>
            </Fronthero>
            <Title title='get your all products here'/>
                <div>
                    <ProductFilterComp/>
                </div>
            <div className='allprodsec-Inner'>
                {filteredProducts.map(product=>{
                    return <DiscountproductComp product={product}/>
                })}
            </div>

        </div>
    )
}

export default AllProducts
