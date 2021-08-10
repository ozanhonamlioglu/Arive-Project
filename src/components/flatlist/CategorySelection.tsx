import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'

// interfaces
import { ISubCategory } from '../../models/categorydetail'

// components
import CategorySelectionItem from '../flatlistItems/CategorySelectionItem'

interface Props {
    data?: ISubCategory[]
    callback?: (id: string) => void
}

const CategorySelection: React.FC<Props> = (props) => {
    return (
        <View>
        <FlatList
            data={props.data}
            keyExtractor={(item, index) => "CustomAcordion-" + index}
            renderItem={({ item, index }) => <CategorySelectionItem {...item} callback={props.callback} /> }
            horizontal
        /></View>
    )
}

export default React.memo(CategorySelection)
