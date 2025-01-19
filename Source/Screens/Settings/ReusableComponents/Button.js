import React from "react";
import { Text, TouchableOpacity } from 'react-native';
import { colors } from "../Assets/Constants/colors";


const CustomButton = (props) => {
    return (
        <TouchableOpacity
            onPress={() => props.navigation.navigate(props.nav)}
            style={{
                height: props.height,
                alignItems: "center",
                justifyContent: 'center',
                elevation: 3,
                borderRadius: 8,
                backgroundColor: colors.liamtra,
                width: props.width,
                padding: 10,
                alignSelf: 'center',
                marginTop: 20
            }}>
            <Text style={{ fontSize: props.size, color: props.color, fontWeight: 'bold' }}>{props.title}</Text>
        </TouchableOpacity>
    );
}

export default CustomButton;