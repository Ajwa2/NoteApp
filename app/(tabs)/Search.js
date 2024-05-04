import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect } from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { useState } from 'react';
import Home from './Home'


const Search = () => {
    const {todoList} = Home.props
    const [searchItem, setSearchItem] = useState('')
    const [searchResults, setSearchResults] = useState([])

    console.log(todoList)

    useEffect(()=>{
        const filteredResults = todoList.filter((item)=> item.task.toLowerCase().includes(searchItem.toLowerCase()));
        setSearchResults(filteredResults);
    },[searchItem,todoList])

    return (
        <View style={styles.SearchScreen}>
            <View style={styles.SearchContainer}>
                <FontAwesome name="search" size={18} color='#949292'/>
                <TextInput
                    style={styles.TextInput}
                    placeholder='Search note...'
                    placeholderTextColor='#949292'
                    value={searchItem}
                    onChangeText={setSearchItem}
                />
            </View>

            <FlatList
            data={searchResults}
            keyExtractor={(item)=> item.id.toString()}
            renderItem={({item})=>{
                return (
                    <View>
                        <Text>{item.task}</Text>
                    </View>
                )
            }}
            />
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

