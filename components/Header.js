import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = () => {
    return (
    <View style={styles.HeaderContainer}>
        <View style={{flexDirection:'row'}}>
            <Text style={{color:'#C2C2C2',fontSize:25}}>Todo</Text><Text style={{color:'#FEFEFE',fontSize:25}}>List</Text>
        </View>
        <View style={styles.HeaderImgContainer}>
            <Image
                source={require('../assets/pppp.png')}
                style={styles.HeaderImg}
            />
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    HeaderContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingVertical:15,
        alignItems:'center',
        paddingHorizontal:13,
        backgroundColor:'#262626'
    },
    HeaderImgContainer:{
        borderRadius:10
    },
    HeaderImg:{
        width:33,
        height:33,
    }
})

export default Header

