import { Tabs } from "expo-router";
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { StyleSheet } from "react-native";

export default function Layout(){
    return (
        <Tabs screenOptions={{
            tabBarStyle: styles.tabBarStyle,
            tabBarShowLabel:false,
            
        }}>
            <Tabs.Screen name="Home" options={{
                tabBarLabel:'Home',
                tabBarLabelStyle:{color:'black'},
                headerShown:false,
                tabBarIcon:({focused})=> <FontAwesome5 name="tasks" size={24} color={focused? "#93478F" : "#C2C2C2"} />
            }}/>
            <Tabs.Screen name="Calender" options={{
                tabBarLabel:'Calender',
                tabBarLabelStyle:{color:'black'},
                headerShown:false,
                tabBarIcon:({focused})=> <AntDesign name="calendar" size={24} color={focused? "#93478F" : "#C2C2C2"} />
            }}/>
            {/* <Tabs.Screen name="Add" options={{
                tabBarLabel:'search',
                tabBarLabelStyle:{color:'black'},
                headerShown:false,
                tabBarIcon:({focused})=> <AntDesign name="search1" size={24} color={focused? "#93478F" : "#C2C2C2"} />
            }}/> */}
            <Tabs.Screen name="Search" options={{
                tabBarLabel:'search',
                tabBarLabelStyle:{color:'black'},
                headerShown:false,
                tabBarIcon:({focused})=> <AntDesign name="search1" size={24} color={focused? "#93478F" : "#C2C2C2"} />
            }}/>
            <Tabs.Screen name="Profile" options={{
                tabBarLabel:'Profile',
                tabBarLabelStyle:{color:'black'},
                headerShown:false,
                tabBarIcon:({focused})=> <FontAwesome name="user" size={24} color={focused? "#93478F" : "#C2C2C2"} />
            }}/>
        </Tabs>
    )
}

const styles = StyleSheet.create({
    tabBarStyle: {
        backgroundColor: '#262626',
        borderTopColor:'transparent',
        position:'absolute',
    }
})