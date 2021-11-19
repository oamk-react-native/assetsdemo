import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Image } from 'react-native';
import { useFonts } from 'expo-font';
import StyleSheet from './styles/Styles';

export default function App() {

  // https://docs.expo.dev/versions/latest/sdk/font/
  const [loaded] = useFonts({
    Helvetica: require('./assets/fonts/Helvetica.ttf'),
    Oswald: require('./assets/fonts/Oswald.ttf'),
    Merriweather: require('./assets/fonts/Merriweather-Regular.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={StyleSheet.container}>
      <Text style={StyleSheet.text}>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Image source={require('./assets/images/image.png')} style={{width: 200,height: 200}} />
    </View>
  );
}

/* const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text : {
    fontFamily: 'Merriweather'
  }
}); */
