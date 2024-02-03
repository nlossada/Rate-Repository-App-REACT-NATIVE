import React from "react"
import { View, StyleSheet, ScrollView } from "react-native"
import StyledText from "./StyledText"
import theme from "./theme"
import Constants from "expo-constants"
import { Link, useLocation } from "react-router-native"

//funcion generica para hacer links de la app bar
function AppBarTab({ children, to }) {
    //Para habilitar estilos segun activo o no, si no poner en cada route pathname === "/"
    const { pathname } = useLocation();
    const active = pathname === to
    const textStyles = [
        styles.text,
        active && styles.active

    ]
    return (

        <Link to={to}>
            <StyledText style={textStyles}>
                {children}
            </StyledText>

        </Link>
    )
}



function AppBar() {

    return (
        <View style={styles.container}>
            <ScrollView horizontal style={styles.scroll}>
                <AppBarTab to="/">Repositories</AppBarTab>
                <AppBarTab to="/signin">Sign In</AppBarTab>

            </ScrollView>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: theme.appBar.primary,
        paddingTop: Constants.statusBarHeight + 25,
        paddingLeft: 10,
    },
    scroll: {
        paddingBottom: 20

    },
    text: {
        color: theme.appBar.textSecondary,
        fontWeight: theme.fontWeigths.bold,
        fontSize: theme.fontSizes.subheading,
        paddingHorizontal: 10,
    },
    active: {
        color: theme.appBar.textPrimary
    }

})

export default AppBar