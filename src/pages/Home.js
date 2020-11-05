import React,{useContext} from 'react'
import Fronthero from '../components/Fronthero'
import Banner from '../components/Banner'
import DiscountproductComp from '../components/DiscountproductComp'
import ButtonContainer from '../components/ButtonContainer'
import {Link} from 'react-router-dom'
import Title from '../components/Title'
import { myContext } from '../context'



const Home = () => {
    const {discountProducts} = useContext(myContext)
    return (
        <div className='Home-Component'>
           
            <Fronthero classn = 'mainFront'>
                    <Banner title='Get Your Mobiles' description='Buy mobile starting from $2'>
                    <Link to='/products'><ButtonContainer>all products</ButtonContainer></Link>
                    </Banner>
            </Fronthero>

            <Title title='Products on Discount'/>
            <div className='discount-part'>
                <div className='discount-partinner'>

                    {discountProducts.map(product=>{
                        return <DiscountproductComp product={product}/>
                    })}
                </div>
            </div>

            
        </div>
    )
}

export default Home
