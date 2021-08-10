import React, { useState, useEffect } from 'react';

// components
import BigBanner from '../components/banners/BigBanner'
import Spacer from '../components/common/Spacer'
import CenteredLoader from '../components/common/CenteredLoader'
import CategorySelection from '../components/flatlist/CategorySelection'
import ProductList from '../components/flatlist/ProductList'

// modules
import { categories, products } from '../modules'

// interface
import ICategoryDetail from '../models/categorydetail'
import IProductList from '../models/productlist'

const CategoryDetail = () => {
  const [categoryLoading, setCategoryLoading] = useState(true);
  const [productsLoading, setProductsLoading] = useState(true);

  const [categoryDetail, setCategoryDetail] = useState<ICategoryDetail>()
  const [productList, setProductList] = useState<IProductList[]>()

  useEffect(() => {
    getCategoryDetail()
    getProductList()
  }, [])

  const getCategoryDetail = async () => {
    const response = await categories.getDetail()
    setCategoryDetail(response)
    setCategoryLoading(false)
  }

  const getProductList = async () => {
    const response = await products.getList()
    setProductList(response)
    setProductsLoading(false)
  }

  return (
    <>
      {
        (!categoryLoading && !productsLoading) ?
        <>
          <BigBanner title={categoryDetail?.name} />
          <Spacer height={10} />
          <CategorySelection data={categoryDetail?.subCategories} />
          <Spacer height={10} />
          <ProductList data={productList} />
        </>
        : <CenteredLoader />
      }
    </>
  );
}

export default React.memo(CategoryDetail)