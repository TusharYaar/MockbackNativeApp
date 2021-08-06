import React from "react";
import { Platform } from "react-native";

import { Button as Btn } from "react-native-paper";

const Button = (props) => {
  return (
    <Btn
        disabled={props.disabled}
        icon={props.icon}
      onPress={props.onPress}
      style={props.style}
      mode={Platform.OS === "android" ? "contained" : "text"}
    >
      {props.children}
    </Btn>
  );
};

export default Button;

