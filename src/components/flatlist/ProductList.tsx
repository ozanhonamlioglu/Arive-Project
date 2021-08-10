import React from 'react'
import { FlatList, View } from 'react-native'

// components
import ProductListItem from '../flatlistItems/ProductListItem'

// interface
import IProductList from '../../models/productlist'

interface Props {
    data?: IProductList[]
}

const ProductList: React.FC<Props> = (props) => {
    return (
        <FlatList
            data={props.data}
            keyExtractor={(item, index) => "CustomAcordion-" + index}
            renderItem={({ item, index }) => <ProductListItem {...item} /> }
            numColumns={2}
            columnWrapperStyle={{ justifyContent: 'space-between' }}
            showsVerticalScrollIndicator={false}
            style={{ flex: 1 }}
        />
    )
}

export default ProductList
