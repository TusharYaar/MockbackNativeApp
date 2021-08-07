import React from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import {
  Avatar,
  Button,
  Headline,
  Caption,
  Subheading,
  IconButton,
} from "react-native-paper";

import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

import {useTheme} from "@react-navigation/native";

import { useSelector, useDispatch } from "react-redux";

import { logoutUser } from "../store/actions/user";
import { updateMockspaces } from "../store/actions/mockspaces";

const CustomDrawer = (props) => {
  const dispatch = useDispatch();
  const {colors} = useTheme();  
  const user = useSelector((state) => state.user);
  const mockspacesData = useSelector((state) => state.mockspaces);

  const handleLogoutBtnClick = () => {
    dispatch(logoutUser());
  };

  return (
    <SafeAreaView {...props} style={styles.screen}>
      <View>
        <View style={styles.userDetails}>
          <Avatar.Icon size={36} icon="account" />
          <View style={styles.userDetailsText}>
            <Headline>{user.firstName + " " + user.lastName}</Headline>
            <Caption>{user.email}</Caption>
          </View>
        </View>
        <View style={styles.mockspaceSummary}>
          <Subheading style={styles.mockspacesNumber}>
            {mockspacesData.mockspaces.length} Mockspace/s
          </Subheading>
          <IconButton
            icon="refresh"
            color={colors.text}
            size={20}
            onPress={() => dispatch(updateMockspaces())}
          />
        </View>
      </View>
      <DrawerContentScrollView {...props}>
        <View style={styles.flex}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <Button onPress={handleLogoutBtnClick} icon="logout-variant">
        Logout
      </Button>
    </SafeAreaView>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  flex: {
    flex: 1,
  },
  userDetails: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  userDetailsText: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  mockspaceSummary: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
  },
  mockspacesNumber: {
    padding: 10,
  },
  
});
