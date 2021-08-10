import React from 'react'
import { View, Text } from 'react-native'

interface Props {
    height: number
}

const Spacer: React.FC<Props> = (props) => {
    return (
        <View style={{ height: props.height }} />
    )
}

export default React.memo(Spacer)
