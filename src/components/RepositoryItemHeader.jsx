import React from "react"
import { View, StyleSheet, Image } from "react-native"
import StyledText from "./StyledText"
import theme from "./theme"

function RepositoryItemHeader(props) {
    return (
        <View style={{ flexDirection: "row", paddingBottom: 2 }}>
            <View style={{ paddingRight: 10 }} >
                <Image style={styles.image} source={{ uri: props.ownerAvatarUrl }}></Image>
            </View>

            <View style={{ paddingRight: 15 }}>
                <StyledText fontSize="subheading" fontWeight="bold">{props.fullname}</StyledText>
                <StyledText>{props.description}</StyledText>
                <StyledText style={styles.language}>Language: {props.language}</StyledText>

            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    language: {
        padding: 4,
        color: theme.colors.textSecondary,
        backgroundColor: theme.colors.primary,
        //para fondo solo use espacio necesario -> si no usa toda linea el background
        alignSelf: "flex-start"
    },
    //si o si estilar imagen, si no no aparece
    image: {
        width: 60,
        height: 60,
        borderRadius: 4,
    }
})

export default RepositoryItemHeader