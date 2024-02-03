import React from "react"
import { View, StyleSheet } from "react-native"
import StyledText from "./StyledText"



function RepositoryItem({ repo }) {
    return (

        <View key={repo.id} style={styles.container}>
            <StyledText big bold pink>Id: {repo.id}</StyledText>
            <StyledText green>Name: {repo.fullname}</StyledText>
            <StyledText green>Description: {repo.description}</StyledText>
            <StyledText green>Language: {repo.language}</StyledText>
            <StyledText small>Forks: {repo.forksCounts}</StyledText>
            <StyledText small>Review: {repo.reviewCount}</StyledText>
            <StyledText small>Rating: {repo.ratingAverage}</StyledText>
        </View>


    )
    //<Scroll> para texto solo
}

//o archivo aparte - FORMA RECOMENDADA
const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingBottom: 5,
        paddingTop: 10
    }
})

export default RepositoryItem;