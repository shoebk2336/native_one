import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Home } from "../pages/Home/Home"
import { NativeMenu } from "../pages/Menu/Menu"

const Stack=createNativeStackNavigator()

export const NativeNavigator=()=>{
    return (<>
        <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />
        <Stack.Screen name="Menu" component={NativeMenu} />
    </Stack.Navigator>
        </>)
}