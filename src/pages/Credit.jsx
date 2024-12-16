import React, { useState, useContext, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

function Credit() {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [levels, setLevels] = useState([]);

  // Filter the products based on type 'course' and category 'credit'
  const filterByTypeAndCategory = (products) => {
    return products.filter(item => item.type === 'course' && item.category === 'credit');
  };

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory(prev => prev.filter(item => item !== e.target.value));
    } else {
      setSubCategory(prev => [...prev, e.target.value]);
    }
  };

  const toggleLevels = (e) => {
    if (levels.includes(e.target.value)) {
      setLevels(prev => prev.filter(item => item !== e.target.value));
    } else {
      setLevels(prev => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let productsCopy = products.slice();
    if (showSearch && search.trim() !== '') {
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
    }
    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory));
    }
    if (levels.length > 0) {
      productsCopy = productsCopy.filter(item => levels.includes(item.level));
    }

    // Filter products by type 'course' and category 'credit' by default
    productsCopy = filterByTypeAndCategory(productsCopy);

    setFilterProducts(productsCopy);
  };

  useEffect(() => {
    applyFilter();
  }, [products, search, showSearch, subCategory, levels]);

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      {/* Filter */}
      <div className='min-w-60'>
        <p onClick={() => setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>
          FILTERS
          <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt="" />
        </p>

        {/* SubCategory filter */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>SubCategories</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'swe'} onChange={toggleSubCategory} /> SWE
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'ai'} onChange={toggleSubCategory} /> AI
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'bio'} onChange={toggleSubCategory} /> BIO
            </p>
          </div>
        </div>

        {/* Levels filter */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>Levels</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'level1'} onChange={toggleLevels} /> Level 1
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'level2'} onChange={toggleLevels} /> Level 2
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'level3'} onChange={toggleLevels} /> Level 3
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'level4'} onChange={toggleLevels} /> Level 4
            </p>
          </div>
        </div>
      </div>

      {/* Map products */}
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols gap-4 gap-y-6'>
        {filterProducts.map((item, index) => (
          <ProductItem key={index} name={item.name} id={item._id} subCategory={item.subCategory} image={item.image} />
        ))}
      </div>
    </div>
  );
}

export default Credit;
