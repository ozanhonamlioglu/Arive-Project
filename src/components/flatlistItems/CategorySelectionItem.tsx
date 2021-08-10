import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

// interface
import { ISubCategory } from '../../models/categorydetail'

const CategorySelectionItem: React.FC<ISubCategory> = (props) => {
    return (
        <TouchableOpacity style={styles.container}>
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
