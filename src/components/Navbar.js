import React,{useContext} from 'react'
import {Link} from 'react-router-dom'
import { myContext } from '../context'


const Navbar = () => {
    const { itemsinCart } = useContext(myContext)
    return (
        <div className='nav'>
            <div className="navInner">
                <div className='navbar-left'>
                    <Link to='/'><p className='logo'>Ziroun Store</p></Link>
                    <div className='navbar-cart'>
                        <p><i className='fas fa-align-right'></i></p>
                        <p>cart <span><i className='fas fa-cart-plus'></i></span></p>
                    </div>
                </div>
                <div className='navbar-right'>
                    <Link to='/'><p>Home</p></Link>
    <Link to='/cart'> <p className='cartCount-sec'>Cart <span><i className='fas fa-cart-plus'></i><b>{itemsinCart}</b></span></p></Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar
