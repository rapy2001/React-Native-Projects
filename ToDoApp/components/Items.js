import React from "react";
import {View,Text,TouchableOpacity,TextInput,Button} from "react-native";

const Items = () => {
    const [item,setItem] = React.useState({
        text:''
    });
    const [items,setItems] = React.useState([]);
    // console.log(item);
    return (
        <View>
            <View>
                <TextInput
                    placeholder = 'Add a To Do' 
                    onChangeText = {(text) => setItem({text:text})}
                    value = {item.text}
                />
                <Button title = 'Add To Do' onPress = {() => {setItem({text:''});setItems([...items,item])}}/>
            </View>
            {
                items.map((item,ind) => {
                    return (
                        <TouchableOpacity key = {ind}>
                            <Text>{item.text}</Text>
                        </TouchableOpacity>
                    )
                })
            }
        </View>
    )
}

export default Items;