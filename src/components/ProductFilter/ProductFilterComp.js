import React,{useContext} from 'react'
import { myContext } from '../../context'


const ProductFilterComp = () => {
    const { allProducts,company,ChangeOptionFilter,price,SortBy,discount} = useContext(myContext)
    let companyList = allProducts.map(product=>{return product.company})
    let discountedProductList = allProducts.filter(product=>{return product.discount == true})
   
    let uniqueCompanyList = [...new Set(companyList),'all']
    let companyOption = uniqueCompanyList.map(company=>{
    return <option value={company}>{company}</option>
    })
   
    return (
        <div className='productFilter-section'>
          <div className='productFilterComp'>
              <div>
                    <label htmlFor="">Select Company:</label><br/>
                    <select className='filterHtml' name="company" id="" value={company} onChange={ChangeOptionFilter}>
                            {companyOption}
                    </select>
              </div>

              <div>
                    <label htmlFor="">Price Ordering:</label><br/>
                    <select className='filterHtml' name="SortBy" id="" value={SortBy} onChange={ChangeOptionFilter}>
                            <option value="SortAscending">Ascending Price</option>
                            <option value="SortDescending">Descending Price</option>
                            <option value="All">All</option>
                    </select>
              </div>

              <div>
                    <label htmlFor="">Discounted Products:</label><br/>
                    <select className='filterHtml' name="discount" id="" value={discount} onChange={ChangeOptionFilter}>
                            <option value="discount">Discounted Products</option>                      
                            <option value="All">All</option>
                    </select>
              </div>
              <div>
                    <label htmlFor="">Price: ${price}</label><br/>
                    <input className='filterHtml' name='price' value={price} type="range" max='30' min='0' onChange={ChangeOptionFilter}/>
              </div>
          </div>
        </div>
    )
}

export default ProductFilterComp
