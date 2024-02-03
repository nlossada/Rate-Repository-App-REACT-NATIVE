import React from "react"
import { View, Text, StyleSheet } from "react-native"
import theme from "./theme"


const styles = StyleSheet.create({
    text: {
        fontSize: theme.fontSizes.body,
        color: theme.colors.textPrimary,
        fontFamily: theme.fonts,
        fontWeight: theme.fontWeigths.normal
    },
    bold: {
        fontWeight: theme.fontWeigths.bold
    },
    colorPrimary: {
        color: theme.colors.textPrimary
    },
    colorSecondary: {
        color: theme.colors.textSecondary
    },
    green: {
        color: "#6f7357"
    },
    big: {
        fontSize: theme.fontSizes.subheading
    },

})

export default function StyledText({ children, color, fontSize, fontWeight, style, ...restOfProps }) {
    const textStyles = [
        //min 53.45
        // styles.text,
        //color === "primary" && styles.colorPrimary,

        // bold && styles.bold,
        // pink && styles.pink,
        // green && styles.green,
        // big && styles.big,
        // small && styles.small
    ]

    return (
        //PROPS DE OTRA INDOLE VA A REST
        <Text style={textStyles} {...restOfProps}>
            {children}
        </Text>
    )
}