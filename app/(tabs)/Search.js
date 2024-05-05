import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';



const Search = () => {
    return (
        <View style={styles.SearchScreen}>
            <View style={styles.SearchContainer}>
                <FontAwesome name="search" size={18} color='#949292'/>
                <TextInput
                    style={styles.TextInput}
                    placeholder='Search note...'
                    placeholderTextColor='#949292'
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    SearchScreen:{
        flex:1,
        backgroundColor:'#202020',
    },
    SearchContainer:{
        marginTop:40,
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'#524848',
        marginHorizontal:10,
        borderRadius:10,
        paddingHorizontal:10,
        paddingVertical:8
    },
    TextInput:{
        paddingLeft:5,
        color:'white'
    }
})

export default Search

