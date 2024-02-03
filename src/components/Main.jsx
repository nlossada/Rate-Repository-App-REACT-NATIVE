import React from "react"
import { View } from "react-native"
import RepositoryList from "./RepositoryList";
import AppBar from "./AppBar";
import { Route, Routes } from "react-router-native";
import Signin from "./Signin";



function Main() {
    return (
        <View style={{ flex: 1 }}>
            <AppBar />
            <Routes>
                <Route
                    path="/"
                    element={<RepositoryList />}>

                </Route>
                <Route
                    path="/signin"
                    element={<Signin />}>

                </Route>
            </Routes>


        </View>
    )
}

export default Main;