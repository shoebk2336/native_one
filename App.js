import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { Home } from './pages/Home/Home';
import { NavigationContainer } from '@react-navigation/native';
import { NativeNavigator } from './components/navigator';
export default function App() {

  
  return (
    <NavigationContainer>
    <NativeNavigator/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
