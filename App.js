import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground, Dimensions } from 'react-native';

const window = Dimensions.get('window');

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('./assets/adaptive-icon.png')}  style={styles.backgroundImage}/>
      <View style={{position:'absolute', alignItems: 'center', top:window.height*0.1, left:window.width*0.3}}>
        <Image source={require('./assets/favicon.png')} />
        <Text style={{ color: 'red', textAlign: "center" }}>Designed App.js to start working on Dapp!</Text>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'flex-start',
  },
  backgroundImage: {
    width: '50%',
    height: '100%',
    marginRight: 'auto',
  },
});
