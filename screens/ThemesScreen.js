import React, { useState,useEffect } from "react";

import { StyleSheet, View, FlatList, Dimensions } from "react-native";

import Themes from "../data/themes";

import ThemeCard from "../components/ThemeCard";
import Button from "../components/Button";

import { useSelector, useDispatch } from "react-redux";

import { useTheme } from "@react-navigation/native";

import { updateUserTheme } from "../store/actions/user";
const ThemesScreen = () => {
  const windowWidth = Dimensions.get("window").width;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentThemeIndex, setCurrentThemeIndex] = useState(0);
  const currentTheme = useSelector((state) => state.user.theme);
  const dispatch = useDispatch();
  const {colors } = useTheme();
  useEffect(() => {
    const currentThemeIndex = Themes.findIndex(
      (theme) => theme.label === currentTheme
    );
    if (currentThemeIndex < 0 || currentThemeIndex > Themes.length - 1)
      setCurrentThemeIndex(0);
    else setCurrentThemeIndex(currentThemeIndex);
  }, [currentTheme]);

  const updateCurrentSlideIndex = (event) => {
    const offset = Math.round(event.nativeEvent.contentOffset.x / windowWidth);
    setCurrentIndex(offset);
  };

  const updateTheme = () => {
    const theme = Themes[currentIndex];
    dispatch(updateUserTheme(theme.label));
  };
  const showPageIndicator = Themes.map((_, index) => (
    <View
      key={index}
      style={[
        styles.indicator,
        index === currentIndex ? {...styles.activeIndicator, backgroundColor: colors.accent} : null
      ]}
    />
  ));
  return (
    <View style={styles.screen}>
      <FlatList
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        data={Themes}
        keyExtractor={(item) => item.label}
        renderItem={({ item }) => <ThemeCard theme={item} />}
      />
      <View style={styles.footer}>
        <View style={styles.pageIndicator}>{showPageIndicator}</View>
        <Button
          onPress={updateTheme}
          style={styles.button}
          disabled={currentThemeIndex === currentIndex}
        >
          Set Theme
        </Button>
      </View>
    </View>
  );
};

export default ThemesScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "space-between",
  },
  button: {
    marginVertical: 40,
    marginHorizontal: 20,
  },
  pageIndicator: {
    flexDirection: "row",
    justifyContent: "center",
  },
  indicator: {
    width: 5,
    height: 5,
    backgroundColor: "gray",
    marginHorizontal: 5,
    borderRadius: 20,
  },
  activeIndicator: {
    width: 10,
  },
});
