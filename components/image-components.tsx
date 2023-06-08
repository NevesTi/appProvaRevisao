import { Component } from "react";
import { Image, StyleSheet } from "react-native";

export default class ImageComponent extends Component{
    render() {
        return (
            <Image style={styles.image} source={{ uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp4FiuTI7T0A7-VkWUmMXQxpv_k7xDpbfF3w&usqp=CAU' }} />


        );
    }
}

const styles = StyleSheet.create({
    image:{
        width:300,
        height:300,
        borderRadius:20,
         },
    
})