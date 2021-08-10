import React from 'react'
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native'

// interface
import IProductList from '../../models/productlist'

const ProductListItem: React.FC<IProductList> = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.image}>
                <Image style={{ width: 100, height: 100 }} source={{uri: "https://media.bodyandfit.com/i/bodyandfit/gold-standard-100-whey-protein_Image_01?locale=en-gb,*"}} />
            </View>
            <View>
                <Text style={styles.title}>{props.brand.name}</Text>
            </View> 
            <View>
                <Text style={styles.content}>{props.name}</Text>
            </View>
            <View>
                <Text style={styles.price}>{props.Price}€</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('screen').width / 2.3,
        marginBottom: 10
    },
    image: {
        height: 180,
        overflow: 'hidden',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#eeeeee'
    },
    title: {
        color: '#7e7e7e'
    },
    content: {
        fontWeight: 'bold'
    },
    price: {
        fontWeight: 'bold',
        fontSize: 18
    }
})

export default React.memo(ProductListItem)
