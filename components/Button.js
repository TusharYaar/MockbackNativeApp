import React from "react";
import { Platform } from "react-native";

import { Button as Btn } from "react-native-paper";
import {useTheme} from "@react-navigation/native";

const Button = (props) => {
  const {colors} = useTheme();  
  return (
    <Btn
        disabled={props.disabled}
        icon={props.icon}
      onPress={props.onPress}
      color={colors.accent}
      style={props.style}

      mode={Platform.OS === "android" ? "contained" : "text"}
    >
      {props.children}
    </Btn>
  );
};

export default Button;

