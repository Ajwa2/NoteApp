import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { IconButton } from '@mui/material';


const TextList = () => {

    const { params } = useRoute()
    const { task, description, handleSave, handleUpdates, isEdit, id } = params
    const [currentTask, setCurrentTask] = useState(task || '')
    const [curerntDescription, setCurrentDescription] = useState(description || '')
    const [showTextField, setShowTextField] = useState(false)


    console.log(isEdit, showTextField, id)
    console.log(task, description, "Task, description")
    
    // useEffect(() => {
    //     setCurrentTask(task)
    //     setCurrentDescription(description)
    // }, [task, description])

    const HandleSavePress = () => {
        handleSave(currentTask, curerntDescription)
        console.log('save')
    }

    const handleUpdate = () => {
        handleUpdates(currentTask, curerntDescription, id)
        console.log('edited', currentTask, curerntDescription, id)
        setShowTextField(false)
    }

    const handleText = (userText) => {
        setCurrentTask(userText)
    }
    const handleDescription = (userDescription) => {
        setCurrentDescription(userDescription)
    }

    return (
        <View style={styles.TextListContainer}>
            <>
                {isEdit && !showTextField ?
                    <View style={styles.TextFieldContainer}>
                        <View style={styles.ButtonContainer}>
                            <Button
                                title={isEdit? 'edit': 'Add'}
                                onPress={() => setShowTextField(true)}
                                color='#93478F'
                            />
                        </View>
                        <View style={styles.TextField}>
                            <Text style={{ color: '#C2C2C2', fontWeight:'bold', fontSize:18 }}>{currentTask}</Text>
                            <Text style={{ color: '#C2C2C2'}}>{curerntDescription}</Text>
                        </View>
                    </View> :
                    <>
                        {isEdit ? (
                            <View>
                                <View>
                                    <View style={styles.TextInputContainer}>
                                        <TextInput
                                            style={styles.AddTextArea}
                                            placeholder='Add Tasks...'
                                            value={currentTask}
                                            onChangeText={handleText}
                                        />
                                    </View>
                                    <View style={styles.TextInputContainer}>
                                        <TextInput
                                            style={{ textAlignVertical: 'top', ...styles.AddTextArea }}
                                            placeholder='Write a description...'
                                            value={curerntDescription}
                                            onChangeText={handleDescription}
                                            multiline={true}
                                            numberOfLines={10}
                                        />
                                    </View>
                                    <View style={{marginTop: 10,marginHorizontal:15}}>
                                    <Button
                                        title='update'
                                        color='#93478F'
                                        onPress={handleUpdate}
                                    />
                                    </View>
                                </View>
                            </View>) :
                            (<View>
                                <View style={styles.TextInputContainer}>
                                    <TextInput
                                        style={styles.AddTextArea}
                                        placeholder='Add Tasks...'
                                        value={currentTask}
                                        onChangeText={handleText}
                                    />
                                </View>
                                <View style={styles.TextInputContainer}>
                                    <TextInput
                                        style={{ textAlignVertical: 'top', ...styles.AddTextArea }}
                                        placeholder='Write a description...'
                                        value={curerntDescription}
                                        onChangeText={handleDescription}
                                        multiline={true}
                                        numberOfLines={10}
                                    />
                                </View>
                                <View style={{marginTop: 10,marginHorizontal:15}}>
                                    <Button
                                        title='save'
                                        color='#93478F'
                                        onPress={HandleSavePress}
                                    />
                                </View>
                            </View>
                            )
                        }
                    </>
                }
            </>
        </View>
    )
}

const styles = StyleSheet.create({
    RenderItem: {
        backgroundColor: '#524848',
        borderRadius: 6,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginHorizontal: 20,
        marginTop: 12,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 3,
        elevation: 2,
        flexDirection: 'row',
    },
    TextListContainer: {
        flex: 1,
        backgroundColor: '#202020'
    },
    AddTextArea: {
        marginHorizontal: 20,
        backgroundColor: 'transparent',
        marginTop: 12,
        paddingVertical: 3,
        flex: 1
    },
    TextInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 15,
        backgroundColor: '#F2D6F7',
        borderRadius: 6,
        paddingHorizontal: 5,
        marginTop: 12,
        borderRadius: 10
    },
    TextDisplay: {
        backgroundColor: '#524848',
        borderRadius: 6,
        marginTop: 12,
        borderRadius: 10,
        marginHorizontal: 15,
        paddingHorizontal: 10,
        paddingVertical: 10
    },
    TextField:{
        backgroundColor:'#524848',
        paddingHorizontal:10,
        paddingVertical:8,
    },
    ButtonContainer:{
        marginBottom:10,
    },
    TextFieldContainer:{
        marginHorizontal:20,
        marginTop:20
    }
})

export default TextList

