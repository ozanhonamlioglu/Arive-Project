import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'

interface Props {
    title?: string
}

const BigBanner: React.FC<Props> = (props) => {
    return (
        <View style={styles.container}>
            <Image style={{ flex: 1 }} source={{uri: "https://www.cargill.com.tr/image/1432096933208/beauty-landing-hero.jpg"}} />
            <View style={styles.overlay}>
                <Text style={styles.text}>{props.title}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        overflow: 'hidden'
    },
    overlay: {
        position: 'absolute',
        height: 200,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    text: {
        fontWeight: 'bold',
        fontSize: 30,
        color: '#fff'
    }
})

export default React.memo(BigBanner)
