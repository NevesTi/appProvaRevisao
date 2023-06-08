import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TouchableHighlight, View, Image } from 'react-native';
import TitleComponent from './components/title-components';
import ImageComponent from './components/image-components';
import BottonComponent from './components/botton-components';

export default function App() {


  return (
    <View style={styles.container}>
     <TitleComponent/>
     <ImageComponent/>
     <BottonComponent/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#808080',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical:30,
  },

  

  

 

});
