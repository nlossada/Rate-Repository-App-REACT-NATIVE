import React from "react"
import { View, Text, StyleSheet } from "react-native"
import theme from "./theme.js"


const styles = StyleSheet.create({
    text: {
        fontSize: theme.fontSizes.body,
        color: theme.colors.textPrimary,
        fontFamily: theme.fonts.main,
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
    big: {
        fontSize: theme.fontSizes.subheading
    },

})

export default function StyledText({ children, color, fontSize,
    fontWeight, style, ...restOfProps }) {
    const textStyles = [
        styles.text,
        color === "primary" && styles.colorPrimary,
        color === "secondary" && styles.colorSecondary,
        fontSize === "subheading" && styles.subheading,
        fontWeight === "bold" && styles.bold,
        style
    ]

    return (
        //PROPS DE OTRA INDOLE VA A REST
        <Text style={textStyles} {...restOfProps}>
            {children}
        </Text>
    )
}