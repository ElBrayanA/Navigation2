import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () =>{

    const navigation = useNavigation();

    return(
        <View>
            <Text
                Style={{
                    fontSize: 30,
                    textAling:"center",
                    marginTop:"20%"
                }}
            >HomeScreen</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate("Stack")}
                style={{
                    backgroundColor: "blue",
                    padding: 10,
                    margin: "10%",
                    width:"50%",
                    alignSelf:"center",
                    borderRadius:10,
                }}
                >
                    <Text
                    Style={{
                        fontSize:15,
                        textAling:"center",
                        color:"white",
                    }}>
                        Go to stack screen
                    </Text>

                </TouchableOpacity>

        </View>
    )
}

export default HomeScreen;