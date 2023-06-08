import { Component } from "react";
import { TouchableHighlight, Text, StyleSheet } from "react-native";

export default class BottonComponent  extends Component {

    render() {
        return (
            <TouchableHighlight style={styles.button} onPress={() => { }}>
            <Text style={styles.titleButton}>Clik</Text>
          </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    button:{
        justifyContent:'center',
        alignItems:'center',
      backgroundColor:'#0000FF',
      width:100,
      height:100,
      borderRadius:50,
      margin:40,
      
      },
    
      titleButton:{
        fontSize:17,  
      }
})
