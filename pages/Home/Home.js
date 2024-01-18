import {  Text,Button, Alert, View, TextInput, Image,StyleSheet, SafeAreaView } from "react-native"

export const Home=({navigation})=>{
    return (
        <SafeAreaView
        style={{
            marginTop:50
        }}
        >
        <View
        style={{
            
            padding:10
        }}
        >
        
        <TextInput placeholder="Search"/>
        </View>
        <View>
        <Text
        style={{
            fontSize:40,
            fontWeight:"bold",
            textAlign:"center"
        }}
        >Welcome to Amaze Villa</Text>
        <Image source={{uri:"https://upload.wikimedia.org/wikipedia/en/8/86/Avatar_Aang.png"}}
        style={{width:400,height:400}}
        />
        </View>
        <Button title='Navigate' onPress={()=>navigation.navigate('Menu')}/>
        </SafeAreaView>
        
        )
}

