import React, { useState, useRef } from "react";
import { StyleSheet, View, FlatList, Dimensions, Animated } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useDispatch } from "react-redux";
import { setOnboarding } from "../store/actions/user";
import OnboardingData from "../data/onboardingData";
import OnboardingPage from "../components/OnboardingPage";
import { useTheme } from "@react-navigation/native";

import Button from "../components/Button";
const OnboardingScreen = () => {
  const windowWidth = Dimensions.get("window").width;
  const [currentIndex, setCurrentIndex] = useState(0);
  const list = useRef(null);
  const dispatch = useDispatch();
  const { colors, dark } = useTheme();
  const updateCurrentSlideIndex = (event) => {
    const offset = Math.round(event.nativeEvent.contentOffset.x / windowWidth);
    setCurrentIndex(offset);
  };

  const markDone = () => {
    dispatch(setOnboarding(true));
  };
const goNext = () => {
    const nextIndex = currentIndex + 1;
    const offset = nextIndex * windowWidth;
    list?.current.scrollToOffset({offset});
    setCurrentIndex(nextIndex);
};
const goPrev = () => {
    const nextIndex = currentIndex - 1;
    const offset = nextIndex * windowWidth;
    list?.current.scrollToOffset({offset});
    setCurrentIndex(nextIndex);
};
  const showPageIndicator = OnboardingData.map((_, index) => (
    <View
      key={index}
      style={[
        styles.indicator,
        index === currentIndex
          ? { ...styles.activeIndicator, backgroundColor: colors.accent }
          : null,
      ]}
    />
  ));
  return (
    <SafeAreaView style={[styles.screen,{backgroundColor: colors.background }]}>
      <Animated.View style={styles.container}>
        <FlatList
          pagingEnabled
          horizontal
          ref={list}
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={updateCurrentSlideIndex}
          data={OnboardingData}
          renderItem={({ item }) => <OnboardingPage page={item} dark={dark} />}
        />
        <View style={styles.pageIndicator}>{showPageIndicator}</View>
        <View style={styles.bottomBar}>
          {currentIndex === OnboardingData.length - 1 && (
            <Button onPress={markDone}>Let's Mock It</Button>
          )}
          {currentIndex < OnboardingData.length - 1 && <Button onPress={goNext}>Next</Button>}
          {currentIndex > 0 && <Button onPress={goPrev} >Prev</Button>}
        </View>
      </Animated.View>
    </SafeAreaView>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#121212",
  },
  container: {
    flex: 1,
  },
  fontColor: {
    color: "#fff",
  },
  list: {
    flex: 1,
    flexGrow: 1,
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
  bottomBar: {
    height: 60,
    width: "100%",
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
});
