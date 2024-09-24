import {Colors} from "../utils/constants";
import {Pressable, Text, StyleSheet} from "react-native";
import AnswerButton from "./AnswerButton";

function TileButton({answerText, answerIndex, selectedAnswerIndex, onPressHandler, style}) {
    console.log(answerText);
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

export default TileButton;

const styles = StyleSheet.create({
    btnVerticalAnswer: {
        minHeight: 90,
        minWidth: 100,
        borderRadius: 4,

        // Shadow for iOS
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.1,
        shadowRadius: 6,

        // Shadow for android
        elevation: 3,
    },
})
