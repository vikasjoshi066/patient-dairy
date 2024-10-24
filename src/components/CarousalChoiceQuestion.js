import QuestionText from "./QuestionText";
import { ScrollView, StyleSheet, View } from "react-native";
import CarousalAnswerButton from "./CarousalAnswerButton";
import { useState } from "react";

function CarousalChoiceQuestion({
  questionOrder,
  questionText,
  questionInstructionText,
  answers,
  handleAnswerChange,
}) {
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(-1);

  function onPressHandler(selectedAnswerIndex) {
    setSelectedAnswerIndex(selectedAnswerIndex);
    handleAnswerChange(questionOrder, questionText, selectedAnswerIndex);
  }

  return (
    <View style={styles.container}>
      <QuestionText questionText={questionText} />
      <QuestionText
        questionText={questionInstructionText}
        isQuestionInstruction={true}
      />
      <View style={styles.answerContainer}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {answers.map((answer, index) => (
            <CarousalAnswerButton
              answerText={answer.answer}
              answerIndex={answer.value}
              selectedAnswerIndex={selectedAnswerIndex}
              onPressHandler={onPressHandler.bind(this, answer.value)}
              imageSuffix={answer.answerIdentifier}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

export default CarousalChoiceQuestion;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginTop: 30,
  },
  answerContainer: {
    marginTop: 24,
    flexDirection: "row",
  },
});
