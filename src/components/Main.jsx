import react from "react"
import { View, TouchableWithoutFeedback, Text } from "react-native"
import RepositoryList from "./RepositoryList";
import Constants from "expo-constants"


function Main() {
    return (
        <View style={{ marginTop: Constants.statusBarHeight, flexGrow: 1 }}>
            <Text>Rate Repository App</Text>
            <RepositoryList></RepositoryList>

        </View>
    )
}

export default Main;