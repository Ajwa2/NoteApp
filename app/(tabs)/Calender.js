import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../../components/Header'
import { Calendar } from 'react-native-calendars'

const Calender = () => {
    return (
        <View style={styles.CalenderScreen}>
            <View style={styles.CalenderContainer}>
                <Text style={styles.CalenderText}>Calender</Text>
            </View>
            <View style={styles.CalenderWrapper}>
                <Calendar 
                    enableSwipeMonths
                    markingType='custom'
                    markedDates={{}}
                    style={styles.Calendar}
                    theme={{
                        monthTextColor:'#93478F',
                        textMonthFontSize:20,
                        textMonthFontWeight:'bold',
                        arrowColor:'#93478F',
                        calendarBackground:'transparent',
                        dayTextColor:'#C2C2C2',
                        textInactiveColor:'#93478F',
                        textSectionTitleColor:'#C2C2C2',
                        textDayFontWeight:'bold',
                        textDisabledColor:'#524848'
                    }}
                />
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
    },
    CalenderWrapper:{
        marginTop:10
    },
    Calendar:{
        backgroundColor:'transparent'
    }
})

export default Calender
