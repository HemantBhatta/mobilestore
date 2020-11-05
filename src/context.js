import React, { Component } from 'react'
import { storeProducts } from './data'
const myContext = React.createContext()

class ContextProvider extends Component {
    state = {
        allProducts: [],
        discountProducts: [],
        cartProducts: [],
        filteredProducts: [],
        totalPrice: 0,
        itemsinCart: 0,
        company: 'all',
        price: 30,
        SortBy: 'All',
        discount:'All',
        singleproductdet:[],
        modalStatus:false


    }

    componentDidMount() {
        this.setStoreProducts()
    }

    setStoreProducts = () => {
        let allProducts = storeProducts.map(product => {
            return { ...product }
        })

        this.setState({ allProducts: allProducts, filteredProducts: allProducts }, () => { this.discountProducts() })
    }

    discountProducts = () => {

        let products = this.state.allProducts.filter(product => {
            return (product.discount === true)
        })
        this.setState({ discountProducts: products })

    }

    filterById = (id) => {
        let product = this.state.allProducts.filter(product => { return product.id === id })
        return product
    }


    setSingleProductDetail = (id) => {
        let product = this.filterById(parseInt(id))
        this.setState({singleproductdet:product})
        
    }

    SingleProductInfo = (id) => {
        let product = this.filterById(parseInt(id))
        return product
        
    }

    AddtoCart = (id) => {
        let cartProducts = this.state.cartProducts
        let allProducts = this.state.allProducts
        let product = this.filterById(parseInt(id))
        console.log(product)
        cartProducts = [...cartProducts, ...product]

        let idindex = allProducts.indexOf(...product)
        let productCs = allProducts[idindex]
        productCs.count = 1
        productCs.inCart = true
        let price = productCs.price
        productCs.total = productCs.count * price
        this.setState({ cartProducts: cartProducts }, () => { this.calculateTotals(); this.calculateItemsInCart() })
    }


    ProductIncrease = (id) => {
        let cartProducts = this.state.cartProducts
        let product = cartProducts.filter(product => { return product.id === id })
        let idindex = cartProducts.indexOf(...product)
        let productCs = cartProducts[idindex]
        productCs.count += 1
        productCs.total = productCs.price * productCs.count
        this.setState({ cartProducts }, () => { this.calculateTotals(); this.calculateItemsInCart() })
    }

    ProductDecrease = (id) => {
        let cartProducts = [...this.state.cartProducts]
        let product = cartProducts.filter(product => { return product.id === id })
        let idindex = cartProducts.indexOf(...product)
        let productCs = cartProducts[idindex]
        productCs.count -= 1
        if (productCs.count < 1) { this.ProductRemove(id) } else {
            productCs.total = productCs.price * productCs.count
            this.setState({ cartProducts }, () => { this.calculateTotals(); this.calculateItemsInCart() })
        }
    }

    ProductRemove = (id) => {
        let cartProducts = this.state.cartProducts
        let product = cartProducts.filter(product => { return product.id === id })
        let Filteredproduct = cartProducts.filter(product => { return product.id !== id })
        let idindex = cartProducts.indexOf(...product)
        let productCs = cartProducts[idindex]
        productCs.count = 0
        productCs.total = 0
        productCs.inCart = false

        this.setState({ cartProducts: Filteredproduct }, () => { this.calculateTotals(); this.calculateItemsInCart() })
    }

    RemoveAllProducts = () => {
        this.setState({ cartProducts: [] }, () => { this.calculateTotals(); this.setStoreProducts(); this.calculateItemsInCart() })
    }

    calculateTotals = () => {

        let totalprice = this.state.cartProducts.reduce((acc, item) => {
            acc = acc + parseInt(item.total)
            return acc
        }, 0)
        this.setState({ totalPrice: totalprice })
    }

    calculateItemsInCart = () => {
        let totalitems = this.state.cartProducts.reduce((acc, item) => {
            acc = acc + parseInt(item.count)
            return acc
        }, 0)
        this.setState({ itemsinCart: totalitems })
    }



    ChangeOptionFilter = (e) => {
        let value = e.target.value
        let name = e.target.name
        console.log(value, name)
        this.setState({ [name]: value }, () => { this.filterAllOptions() })
    }



    filterAllOptions = () => {

        const { allProducts, filteredProducts, company, price, SortBy,discount } = this.state
        let filteredItems = [...allProducts]



        if (company !== 'all') {
            filteredItems = filteredItems.filter(item => item.company === company)
        }


        filteredItems = filteredItems.filter(product => {
            return product.price <= price
        })

        if (SortBy == 'SortAscending') {
            filteredItems = this.sortInAscending(filteredItems)
        }else if(SortBy == 'SortDescending')
        {
            filteredItems = this.sortInDescending(filteredItems)
        }
        else{
            filteredItems = filteredItems
        }



        if (discount === 'discount') {
            filteredItems = filteredItems.filter(item => item.discount === true)
        }



        this.setState({ filteredProducts: filteredItems })



    }


    sortInAscending = (filteredItems) => {
       

        filteredItems.sort(function (a, b) {
            return a.price - b.price;
        });
        return filteredItems
    }

    sortInDescending = (filteredItems) => {
       

        filteredItems.sort(function (a, b) {
            return b.price - a.price;
        });
        return filteredItems
    }


    openModal = () => {
        this.setState({modalStatus:true})
    }


    closeModal = () => {
        this.setState({modalStatus:false})
    }

    render() {

        console.log(this.state.singleproductdet)
        return (
            <myContext.Provider value={{
                ...this.state,
                setSingleProductDetail: this.setSingleProductDetail,
                AddtoCart: this.AddtoCart,
                ProductIncrease: this.ProductIncrease,
                ProductDecrease: this.ProductDecrease,
                ProductRemove: this.ProductRemove,
                RemoveAllProducts: this.RemoveAllProducts,
                ChangeOptionFilter: this.ChangeOptionFilter,
                openModal:this.openModal,
                closeModal:this.closeModal,
                SingleProductInfo:this.SingleProductInfo


            }}>
                {this.props.children}
            </myContext.Provider>
        )
    }
}

const ContextConsumer = myContext.Consumer

export { ContextProvider, myContext, ContextConsumer }
