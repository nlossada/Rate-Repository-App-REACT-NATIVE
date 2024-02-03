import React from "react"
import { View, StyleSheet, Image } from "react-native"
import RespositoryStats from "./RespositoryStats"
import RepositoryItemHeader from "./RepositoryItemHeader"




function RepositoryItem(props) {
    return (

        <View key={props.id} style={styles.container}>

            <RepositoryItemHeader {...props} />
            <RespositoryStats {...props} />

        </View>

    )
}



//ESTILOS: o archivo aparte 
const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingBottom: 5,
        paddingTop: 10
    },
})

export default RepositoryItem;