import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import {useLocalSearchParams} from 'expo-router'


const Details = () => {
    const searchParams = useLocalSearchParams();
    console.log('searchParams', searchParams.task)

    const [showTextArea, setShowTextArea]= useState(false)
    const [addDecription, setAddDescription] = useState('')
    const [description, setDescription] = useState('')

    const HandleAddPress = ()=>{
        setShowTextArea(true)
    }

    const handleUserInput = (userInput) =>{
        setAddDescription(userInput)
    }

    const handleSave = ()=>{
        setDescription(addDecription)
        setAddDescription('')
        setShowTextArea(false)
    }

    const handleDelete = ()=>{

    }


    return (
        <>
            <View style={styles.DetailsScreen}>
                <View style={styles.TextContiner}>
                    <AntDesign name="delete" size={20} color="black" style={{textAlign:'right'}} onPress={handleDelete}/>
                    <Text>{description}</Text>
                </View>
                {showTextArea && 
                <View>
                    <TextInput
                        placeholder='Add a description'
                        style={styles.TextArea}
                        multiline={true}
                        numberOfLines={10}
                        value={addDecription}
                        onChangeText={handleUserInput}
                    />
                    <FontAwesome name="save" size={24} color="black" onPress={handleSave} style={{textAlign:'right', marginRight:20}}/>
                </View>}
                <View style={styles.AddButton}>
                    <Entypo name="add-to-list" size={25} color="black" onPress={HandleAddPress}/>
                </View>
            </View>
        </>
    )    
}    

const styles = StyleSheet.create({
    DetailsScreen:{
        flex:1,
        backgroundColor:'#202020'
    },
    TextArea:{
        backgroundColor:'#F2D6F1',
        paddingVertical:10,
        marginHorizontal:10,
        paddingBottom:50,
        paddingHorizontal:10,
        marginTop:20,
        borderRadius:10,
        textAlignVertical:'top'
    },
    AddButton:{
        alignItems:'center'
    },
    TextContiner:{
        marginTop:10,
        marginHorizontal:15,
        backgroundColor:'#F2D6F1',
        paddingVertical:10,
        paddingHorizontal:5,
        borderRadius:10,
    }
})

export default Details

