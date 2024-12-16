import React, {useEffect, useContext, useState}from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

const RelatedProduct = ({category, subCategory}) => {
    const {products} = useContext(ShopContext);
    const [related, setRelated] = useState([])

    useEffect(()=>{
        if(products.length > 0) {
            let productsCopy = products.slice();
            productsCopy = productsCopy.filter((item)=>(item.category === category ));
            productsCopy = productsCopy.filter((item)=>(item.subCategory === subCategory ));
            setRelated(productsCopy.slice(0, 5))
        }
    },[])

  return (
    <div className='my-24'>
        <div className='text-center text-3xl py-2'>
            <Title txt1={'RELATED'} txt2={'BOOKS'}/>
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-col-5 gap-4 gap-y-6'>
            {related.map((item, index)=>(
                <ProductItem key={index} id={item._id} name={item.name} price={item.price} author={item.author} image={item.image} />
            ))}
        </div>
      
    </div>
  )
}

export default RelatedProduct
