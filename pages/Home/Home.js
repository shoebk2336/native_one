import {  Text,Button, Alert, View, TextInput, Image } from "react-native"

export const Home=()=>{
    return (<>
        <Text>Home page</Text>
        <Button title="Press me "
        onPress={()=>console.warn('pressed')}
        />        
        <View
        style={{
            backgroundColor:"blue",
            padding:10
        }}
        >
        <TextInput placeholder="Enter Name"
        style={{
            color:"white",
            borderWidth:2,
            borderColor:"red"
            
            
        }}
        />
        </View>
        <Image source={{uri:"https://youtooz.com/cdn/shop/products/avatar-avatarstateaang_1000x1000_min-oj40.png?v=1650324185"}}
        style={{width: 400, height: 400}}
        />
        </>)
}