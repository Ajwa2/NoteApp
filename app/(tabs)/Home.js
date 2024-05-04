import { Button, FlatList, Modal, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import { useNavigation } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import FallBack from '../../components/FallBack';
import moment from 'moment';


const Home = () => {

    const navigation = useNavigation();
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [todoList, setTodoList] = useState([]);
    const [isEdit, setIsEdit] = useState(false)
    const [currentItem, setCurrentItem] = useState(null)

    const handleSave = (task, description) => {
        if (task && description === '') {
            return;
        }
        setTodoList([...todoList,
            { task, description, date: new Date().getTime(), id: new Date() }])
        setIsModalVisible(false)
        navigation.navigate('Home')
    }

    const handleSaveInHome = (task,checklists)=>{
        setTodoList([...todoList,
            { task, checklists, date: new Date().getTime(), id: new Date() }])
            setIsModalVisible(false)
            setIsEdit(true)
            navigation.navigate('Home')
    }

    console.log("todoList", todoList,isEdit)

    const handleTextPress = (item) => {
        const { task, description,id,checklists } = item
        console.log("item from handleTextPress", item)
        setCurrentItem({ ...item })
        if(item.description){
            navigation.navigate('Textlist', 
            {task, description, id, handleUpdates, isEdit: true })
        }else{
            navigation.navigate('Checklist',{task, checklists, handleUpdates, id ,isEdit: true })
        }
        setIsEdit(true)
    }

    const handleUpdates = (updatedTask, updatedDescription, id) => {
        const updateTodoList = todoList.map((item) => {
            if (item.id === id) {
                if(item.description){
                    return { ...item, task: updatedTask, description: updatedDescription }
                }
                return{...item,task:updatedTask, checklists:[updatedDescription]}
            }
            return { ...item };
        })
        setTodoList(updateTodoList);
        setCurrentItem(null)
        setIsEdit(false)
    }

    const handleDelete = (id) => {
        const updatedTodoList = todoList.filter((addToDo) => addToDo.id !== id)
        setTodoList(updatedTodoList)
    }

    const limitText = (text, maxLength) => {
        if (text.length <= maxLength) {
            return text;
        } else {
            return `${text.slice(0, maxLength)}...`;
        }
    };

    return (
        <View style={{
            flex: 1,
            backgroundColor: '#202020'
        }}>
            <Header />
            <View>
                <View>
                    <FlatList
                        data={todoList}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => {
                            return (
                                <View style={styles.RenderItem}>
                                    <TouchableOpacity style={{ flex: 1 }} onPress={() => handleTextPress(item)}>
                                        <Text style={styles.RenderText}>{limitText(item.task, 15)}</Text>
                                        {item.description && <Text style={{ color: 'grey' }}>{limitText(item.description,50)}</Text>}
                                        <Text style={{ fontSize: 12, textAlign: 'right', color: 'grey' }}>{moment(item.date).format('MMMM Do YYYY, h:mm:ss a')}</Text>
                                    </TouchableOpacity>
                                    <AntDesign name="delete" size={24} color="#C2C2C2" onPress={() => handleDelete(item.id)} />
                                    {limitText(item.checklists,15) && <AntDesign name="check" size={24} color="#C2C2C2" />}
                                </View>
                            )
                        }}
                    />
                    
                </View>
                {todoList.length == 0 && <FallBack />}
                <View style={styles.AddContainer}>
                    <TouchableOpacity>
                        <MaterialIcons name="add-circle" size={55} color="#93478F" onPress={() => setIsModalVisible(true)} />
                    </TouchableOpacity>
                </View>

                <Modal
                    visible={isModalVisible}
                    animationType='fade'
                    onRequestClose={() => setIsModalVisible(false)}
                    transparent
                >
                    <View style={styles.ModalContainer}>
                        <View style={styles.innerModal}>
                            <AntDesign name="closecircleo" size={20} color="#BBBBBB" style={{ textAlign: 'right' }} onPress={() => setIsModalVisible(false)} />
                            <Text style={styles.ModalText}>Add</Text>
                            <TouchableOpacity style={styles.ModalNote} onPress={() => navigation.navigate('Textlist', { handleSave, isEdit:false })}>
                                <AntDesign name="filetext1" size={24} color='#BBBBBB' />
                                <Text style={{ color: '#FEFEFE', }}>Text</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.ModalChecklist} onPress={() => navigation.navigate('Checklist', {handleSaveInHome,isEdit:false})}>
                                <AntDesign name="checkcircle" size={24} color="#BBBBBB" />
                                <Text style={{ color: '#FEFEFE' }}>CheckList</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    ModalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    ScreenContainer: {
        flex: 1,
        backgroundColor: '#202020'
    },
    AddContainer: {
        alignItems: 'center',
        marginTop: 15,
    },
    ModalText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#FEFEFE'
    },
    ModalNote: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        paddingVertical: 15,
    },
    ModalChecklist: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    innerModal: {
        width: "80%",
        backgroundColor: '#424242',
        paddingHorizontal: 20,
        paddingVertical: 20,
        borderRadius: 10,
    },
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
    RenderIcon: {
        flexDirection: 'row',
        gap: 10
    },
    RenderText: {
        flex: 1,
        fontSize: 17,
        color: 'white',
        fontWeight: 'bold'
    },
    ChecklistRenderItem:{
        flexDirection:'row'
    }
})

export default Home

