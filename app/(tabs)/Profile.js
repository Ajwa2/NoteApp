import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Profile = () => {
    return (
        <View style={styles.ProfileScreen}>
            <View style={styles.ProfileContainer}>
                <Text style={styles.ProfileText}>Profile </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    ProfileScreen:{
        flex:1,
        backgroundColor:'#202020'
    },
    ProfileContainer:{
        backgroundColor:'#262626',
        paddingVertical:20
    },
    ProfileText:{
        color:'#C2C2C2',
        fontSize:20,
        textAlign:'center',
        fontWeight:'bold'
    }

})

export default Profile
