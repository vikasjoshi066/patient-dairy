import React from "react";
import { StyleSheet } from "react-native";
import CarousalAnswerButton from "./CarousalAnswerButton";

const TileButton = ({
  answerText,
  answerIndex,
  selectedAnswerIndex,
  onPressHandler,
  imageSuffix,
  btnStyle,
  multipleSelection,
  setSelectedAnswerIndex,
}) => {
  return (
    <CarousalAnswerButton
      answerText={answerText}
      onPressHandler={onPressHandler}
      answerIndex={answerIndex}
      selectedAnswerIndex={selectedAnswerIndex}
      imageSuffix={imageSuffix}
      multipleSelection={multipleSelection}
      btnStyle={[styles.btnVerticalAnswer, btnStyle]}
      setSelectedAnswerIndex={setSelectedAnswerIndex}
    />
  );
};

const styles = StyleSheet.create({
  btnVerticalAnswer: {
    height: 90,
    width: 100,
    borderRadius: 4,
    // Shadow for iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    // Shadow for Android
    elevation: 3,
  },
});

export default TileButton;
