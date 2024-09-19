import {Colors} from "../utils/constants";
import {Pressable, Text, StyleSheet} from "react-native";
import AnswerButton from "./AnswerButton";

function VerticalAnswerButton({answerText, answerIndex, selectedAnswerIndex, onPressHandler}) {
    return (
        <AnswerButton
            answerText={answerText}
            onPressHandler={onPressHandler}
            answerIndex={answerIndex}
            selectedAnswerIndex={selectedAnswerIndex}
            verticalBtnStyle={styles.btnVerticalAnswer}
        />
    )
}

export default VerticalAnswerButton;

const styles = StyleSheet.create({
    btnVerticalAnswer: {
        marginTop: 16,
        minHeight: 58,
        width: '100%',
    },
})
