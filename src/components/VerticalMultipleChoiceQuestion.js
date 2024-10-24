import { StyleSheet, View } from "react-native";
import { useState } from "react";
import QuestionText from "./QuestionText";
import VerticalAnswerButton from "./VerticalAnswerButton";

function VerticalMultipleChoiceQuestion({
  questionOrder,
  questionText,
  answers,
  handleAnswerChange,
}) {
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);

  function onPressHandler(selectedAnswerIndex) {
    setSelectedAnswerIndex(selectedAnswerIndex);
    handleAnswerChange(questionOrder, questionText, selectedAnswerIndex);
  }

  return (
    <View style={styles.container}>
      <QuestionText questionText={questionText} />
      <View>
        {answers.map((answer, index) => (
          <VerticalAnswerButton
            answerText={answer.answer}
            answerIndex={index}
            selectedAnswerIndex={selectedAnswerIndex}
            onPressHandler={onPressHandler.bind(this, index)}
          />
        ))}
      </View>
    </View>
  );
}

export default VerticalMultipleChoiceQuestion;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginTop: 24,
  },
});
