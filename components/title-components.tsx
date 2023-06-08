import { Component, } from "react";
import { StyleSheet, Text } from "react-native";

export default class TitleComponent extends Component {
    render() {
        return (
            <Text style={styles.title}>Titulo</Text>

        );
    }

}
const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        justifyContent: 'center',
        margin: 40,

    },
})