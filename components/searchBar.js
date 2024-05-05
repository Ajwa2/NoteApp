import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { TextInput } from '@react-native-material/core';

const SearchBar = ({todoList,setTodoList}) => {
    const [searchItem, setSearchItem] = useState('')
    const [searchResults, setSearchResults] = useState([])

    console.log(todoList)

    useEffect(()=>{
        const filteredResults = todoList.filter((item)=> item.task.toLowerCase().includes(searchItem.toLowerCase()));
        setSearchResults(filteredResults);
    },[searchItem,todoList])
    return (
        <View>
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
        </View>
    )
}


const styles = StyleSheet.create({
    SearchContainer:{
        marginTop:10,
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'#524848',
        marginHorizontal:10,
        borderRadius:10,
        paddingHorizontal:10,
    },
    TextInput:{
        paddingLeft:5,
        color:'white',
        flex:1,
        backgroundColor:'transparent'
    }
})

export default SearchBar