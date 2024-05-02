import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FallBack = () => {
    return (
        <View style={styles.FallBackContainer}>
            <Image
                style={styles.FallBackImage}
                source={require('../assets/note2.png')}
            />
            <Text style={styles.FallBackText}>
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    FallBackContainer:{
        alignItems:'center',
        marginTop:100,
    },
    FallBackImage:{
        height:200,
        width:200,
    },
    FallBackText:{
        textAlign:'center',
        fontWeight:'bold',
    }
})

export default FallBack

