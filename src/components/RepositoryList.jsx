import react from "react"
import { FlatList, View, Text } from "react-native"
import repositories from "../data/repositories"
import RepositoryItem from "./RepositoryItem";


function RepositoryList() {
    return (
        <FlatList
            data={repositories}
            ItemSeparatorComponent={() => <Text> </Text>}
            //metodo de como renderizar cada item - le cambio nombre a repo porque ya esta con ese nombre
            renderItem={({ item: repo }) =>
                <RepositoryItem {...repo} />
            }
        >
        </FlatList>
    )
    //<Scroll> para texto solo
}

export default RepositoryList;
