import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'

// interfaces
import { ISubCategory } from '../../models/categorydetail'

// components
import CategorySelectionItem from '../flatlistItems/CategorySelectionItem'

interface Props {
    data?: ISubCategory[]
}

const CategorySelection: React.FC<Props> = (props) => {
    return (
        <View>
        <FlatList
            data={props.data}
            keyExtractor={(item, index) => "CustomAcordion-" + index}
            renderItem={({ item, index }) => <CategorySelectionItem {...item} /> }
            horizontal
        /></View>
    )
}

export default React.memo(CategorySelection)
