import React from 'react'
import { View, ActivityIndicator } from 'react-native'

const CenteredLoader = () => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <ActivityIndicator />
        </View>
    )
}

export default React.memo(CenteredLoader)
