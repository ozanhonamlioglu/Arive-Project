import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

// interface
import { ISubCategory } from '../../models/categorydetail'

interface Props extends ISubCategory {
    callback?: (id: string) => void
}

const CategorySelectionItem: React.FC<Props> = (props) => {
    return (
        <TouchableOpacity style={styles.container} onPress={() => props.callback?.(props.id)}>
            <Text>{props.name}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ddd",
        margin: 5,
        padding: 10,
        borderRadius: 10
    }
})

export default React.memo(CategorySelectionItem)
