import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../../components/Header'

const Calender = () => {
    return (
        <View style={styles.CalenderScreen}>
            <View style={styles.CalenderContainer}>
                <Text style={styles.CalenderText}>Calender</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    CalenderScreen:{
        flex:1,
        backgroundColor: '#202020'
    },
    CalenderContainer:{
        backgroundColor:'#262626',
        paddingVertical:20
    },
    CalenderText:{
        color:'#C2C2C2',
        fontSize:20,
        textAlign:'center',
        fontWeight:'bold'
    }
})

export default Calender
