import { Stack } from "expo-router";
import { StyleSheet } from "react-native";

export default function Layout(){
    return (
        <Stack screenOptions={{
            headerStyle: styles.header ,
            headerTintColor: '#C2C2C2'
            
        }}>
            <Stack.Screen name="(tabs)" options={{headerShown:false}} />
            <Stack.Screen name="Details" options={{presentation:'modal',headerTitle:''}}/>
            <Stack.Screen name="Checklist" options={{presentation:'modal',headerTitle:''}}/>
            <Stack.Screen name="Textlist" options={{presentation:'modal',headerTitle:''}}/>
        </Stack>
    )
}

const styles = StyleSheet.create({
    header:{
        backgroundColor:'#262626',
        paddingVertical:-5,
    }

})