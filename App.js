import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('./assets/adaptive-icon.png')} style={styles.backgroundImage}/>
      <Image source={require('./assets/favicon.png')} />
      <Text style={{ color: 'red', textAlign:"center"}}>Designed App.js to start working on Dapp!</Text>
      <StatusBar style="auto" />       
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    flex: 1,
    width: '50%', 
    height: '100%', 
    marginRight:'auto'
  },
});
