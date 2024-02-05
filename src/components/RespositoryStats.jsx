import React from "react"
import { View } from "react-native"
import StyledText from "./StyledText"


//en lugar de 52350 aparecera 52.3k
const parseThousands = value => {
    return value >= 1000
        ? `${Math.round(value / 100) / 10}k`
        : value
}

const RespositoryStats = (props) => {
    return (
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
            <View>
                <StyledText fontWeight="bold">Forks:</StyledText>
                <StyledText>{parseThousands(props.forksCount)}</StyledText>
            </View>

            <View>
                <StyledText fontWeight="bold">Review:</StyledText>
                <StyledText> {parseThousands(props.reviewCount)} </StyledText>
            </View>

            <View>
                <StyledText fontWeight="bold">Rating: </StyledText>
                <StyledText>{parseThousands(props.ratingAverage)}</StyledText>

            </View>
        </View>
    )
}


export default RespositoryStats