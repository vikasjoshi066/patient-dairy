import {Pressable, StyleSheet, Text, View} from "react-native";
import {Colors} from "../utils/constants";
import {useState} from "react";
import AnswerButton from "./AnswerButton";
import QuestionText from "./QuestionText";

function DualChoiceQuestion({questionText, answer1Text, answer2Text}) {
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);

    function onPressHandler(selectedAnswerIndex) {
        setSelectedAnswerIndex(selectedAnswerIndex);
    }

    return (
        <View style={styles.container}>
            <QuestionText questionText={questionText}/>
            <View style={styles.answerContainer}>
                <AnswerButton answerText={answer1Text} answerIndex={0} selectedAnswerIndex={selectedAnswerIndex}
                              onPressHandler={onPressHandler.bind(this, 0)}/>
                <AnswerButton answerText={answer2Text} answerIndex={1} selectedAnswerIndex={selectedAnswerIndex}
                              onPressHandler={onPressHandler.bind(this, 1)}/>
            </View>
        </View>
    )
}

export default DualChoiceQuestion;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 16,
        marginTop: 30,
    },
    answerContainer: {
        marginTop: 24,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
})
