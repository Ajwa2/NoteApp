    import { FlatList, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';

const Checklist = () => {
    const { params } = useRoute()
    const {handleSaveInHome,task,checklists,id,isEdit} = params
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [addChecklist, setAddChecklist] = useState('')
    const [addToChecklist, setAddToChecklist] = useState(checklists || [])
    const [addTitle,setAddTitle] = useState(task || '')



    console.log("checklist", addTitle,addToChecklist,isEdit,id)

    const handleOk = () => {
        setAddToChecklist([...addToChecklist,
        { id: new Date(), task: addChecklist, isCompleted: false, date: new Date().getTime() }])
        setIsModalVisible(false)
    }

    const handleSaveChecklist =()=>{
        handleSaveInHome(addTitle,addToChecklist)
    }

   

    return (
        <View style={styles.ChecklistScreen}>
            <View style={{display:'none',...styles.TextFieldContainer}}> 
                <View style={styles.TextField}>
                    <Text style={{flex:1,color:'white'}}>{addTitle}</Text>
                    <MaterialIcons name="edit" size={24} color="#C2C2C2" />
                </View>
            </View>
            <View style={styles.TitleTextAreaContainer}>
                <TextInput
                    placeholder='Add Title'
                    style={styles.TitleTextArea}
                    value={addTitle}
                    onChangeText={(userInput)=>setAddTitle(userInput)}
                />
                <Entypo name="save" size={24} color="black" onPress={handleSaveChecklist} />
            </View>
            <TouchableOpacity style={styles.AddContainer} onPress={() => setIsModalVisible(true)}>
                <Ionicons name="add-circle-outline" size={30} color="#C2C2C2" />
                <Text style={styles.CheckText}>Add Item</Text>
            </TouchableOpacity>

            <FlatList
                data={addToChecklist}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity>
                            <View style={styles.RenderItem}>
                                <Text style={{ color: "white" }}>{item.task}</Text>
                            </View>
                        </TouchableOpacity>
                    )
                }}
            />

            <Modal
                visible={isModalVisible}
                animationType='fade'
                onRequestClose={() => setIsModalVisible(false)}
                transparent>
                <View style={styles.ModalContainer}>
                    <View style={styles.innerModal}>
                        <Text style={styles.ModalText}>Add Item</Text>
                        <TextInput
                            style={styles.TextArea}
                            placeholderTextColor='#BBBBBB'
                            value={addChecklist}
                            onChangeText={(userInput) => setAddChecklist(userInput)} />
                        <View style={styles.ModalFooter}>
                            <View>
                                <Text style={{ color: "#BBBBBB" }}>NEXT</Text>
                            </View>
                            <View style={{ flexDirection: 'row', gap: 10 }}>
                                <Text style={{ color: "#BBBBBB" }} onPress={() => setIsModalVisible(false)}>CANCEL</Text>
                                <Text style={{ color: "#BBBBBB" }} onPress={handleOk}>OK</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}


const styles = StyleSheet.create({
    ChecklistScreen: {
        flex: 1,
        backgroundColor: '#202020'
    },
    AddContainer: {
        flexDirection: 'row',
        backgroundColor: 'black',
        alignItems: 'center',
        marginTop: 20,
        marginHorizontal: 10,
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 15,
        gap: 15
    },
    CheckText: {
        color: '#C2C2C2',
        fontSize: 19
    },
    ModalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    innerModal: {
        width: "80%",
        backgroundColor: '#424242',
        paddingHorizontal: 20,
        paddingVertical: 20,
        borderRadius: 10,
    },
    ModalText: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#FEFEFE'
    },
    ModalFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10
    },
    TextArea: {
        marginTop: 8,
        borderBottomColor: '#F2D6F1',
        borderBottomWidth: 2,
        color: '#BBBBBB'
    },
    RenderItem: {
        backgroundColor: '#524848',
        borderRadius: 6,
        paddingHorizontal: 13,
        paddingVertical: 10,
        marginHorizontal: 20,
        marginTop: 12,
        flexDirection: 'row',
    },
    TitleTextAreaContainer:{
        marginHorizontal: 15,
        backgroundColor: '#F2D6F7',
        borderRadius: 6,
        paddingHorizontal: 5,
        marginTop: 12,
        borderRadius: 10,
        flexDirection:'row',
        alignItems:'center'
    },
    TitleTextArea: {
        marginHorizontal: 20,
        backgroundColor: 'transparent',
        marginTop: 12,
        paddingVertical: 3,
        flex:1
    },
    TextField:{
        backgroundColor:'#524848',
        paddingHorizontal:10,
        paddingVertical:8,
        flexDirection:'row'
    },
    TextFieldContainer:{
        marginHorizontal:20,
        marginTop:20
    }
})

export default Checklist

