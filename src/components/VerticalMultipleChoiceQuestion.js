import {Pressable, StyleSheet, Text, View} from "react-native";
import {Colors} from "../utils/constants";
import {useState} from "react";
import AnswerButton from "./AnswerButton";
import QuestionText from "./QuestionText";
import VerticalAnswerButton from "./VerticalAnswerButton";

function VerticalMultipleChoiceQuestion({questionText, answers}) {
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);

    function onPressHandler(selectedAnswerIndex) {
        setSelectedAnswerIndex(selectedAnswerIndex);
    }

    return (
        <View style={styles.container}>
            <QuestionText questionText={questionText}/>
            <View style={styles.answerContainer}>
                {answers.map((answer, index) => (
                    <VerticalAnswerButton answerText={answer} answerIndex={index}
                                          selectedAnswerIndex={selectedAnswerIndex}
                                          onPressHandler={onPressHandler.bind(this, index)}/>
                ))}
            </View>
        </View>
    )
}

export default VerticalMultipleChoiceQuestion;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 16,
        marginTop: 24,
    },
    answerContainer: {
    },
})
