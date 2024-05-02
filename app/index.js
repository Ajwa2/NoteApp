import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Redirect } from 'expo-router'
import { Colors } from '../constants/Colors'

const index = () => {
    return (
            <Redirect href='/(tabs)/Home'/>
    )
}

const styles = StyleSheet.create({
    Screen:{
        // backgroundColor: Colors.darkBlackHex
    }

})

export default index

