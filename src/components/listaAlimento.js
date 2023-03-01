import { FlatList, View } from "react-native/types";
import { Component } from "react/cjs/react.production.min"

export default listaAlimento extends Component {
    state = {
        alimento: [
            { alimento: "Banana", calorias: 25 },
            { alimento: "Maçã", calorias: 12 },
            { alimento: "Pessego", calorias: 20 },
            { alimento: "Maracujá", calorias: 5 },
            { alimento: "Amora", calorias: 3 },
        ],
    };
};
render (){
    return{
        <View>
        <FlatList 
        />
    }
}