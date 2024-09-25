import React from "react";
import {View, Text, StyleSheet, TouchableOpacity,Image} from "react-native";


const styles = StyleSheet.create({
    container: {
      paddingTop: 50,
    },
    tinyLogo: {
      width: 100,
      height: 100,
    },
    logo: {
      width: 66,
      height: 58,
    },
  });

const SettingScreen = () =>{
    return(
        <View>
            <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />

        </View>
    )
}

export default SettingScreen;