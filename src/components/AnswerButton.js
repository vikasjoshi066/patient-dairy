import {Colors} from "../utils/constants";
import {Pressable, Text, StyleSheet} from "react-native";

function AnswerButton({answerText, answerIndex, selectedAnswerIndex, onPressHandler, verticalBtnStyle}) {
    return (
        <Pressable
            style={({pressed}) =>
                [styles.btnAnswer,
                    selectedAnswerIndex === answerIndex ? styles.btnAnswerSelected : null,
                    verticalBtnStyle]
            }
            android_ripple={{color: Colors.secondary}}
            onPress={onPressHandler}
        >
            <Text style={styles.btnAnswerText}> {answerText} </Text>
        </Pressable>
    )
}

export default AnswerButton;

const styles = StyleSheet.create({
    btnAnswer: {
        borderWidth: 2,
        borderColor: Colors.disabledGrey,
        minWidth: 163,
        minHeight: 78,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnAnswerSelected: {
        backgroundColor: Colors.secondary,
        borderColor: Colors.primary,
    },
    btnAnswerText: {
        color: Colors.appBlack,
        fontSize: 18,
    }
})
