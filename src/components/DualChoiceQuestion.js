import {Pressable, StyleSheet, Text, View} from "react-native";
import {Colors} from "../utils/constants";
import {useState} from "react";

function DualChoiceQuestion({questionText, answer1Text, answer2Text}) {
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);

    function onPressHandler(selectedAnswerIndex) {
        setSelectedAnswerIndex(selectedAnswerIndex);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.questionText}>{questionText}</Text>
            <View style={styles.answerContainer}>
                <Pressable
                    style={({pressed}) =>
                        [styles.btnAnswer, selectedAnswerIndex === 0 ? styles.btnAnswerSelected : null]}
                    android_ripple={{color: Colors.secondary}}
                    onPress={onPressHandler.bind(this, 0)}
                >
                    <Text style={styles.btnAnswerText}> {answer1Text} </Text>
                </Pressable>
                <Pressable style={({pressed}) =>
                    [styles.btnAnswer, selectedAnswerIndex === 1 ? styles.btnAnswerSelected : null]}
                           android_ripple={{color: Colors.secondary}}
                           onPress={onPressHandler.bind(this, 1)}
                >
                    <Text style={styles.btnAnswerText}> {answer2Text} </Text>
                </Pressable>
            </View>
        </View>
    )
}

export default DualChoiceQuestion;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 16,
        marginTop: 30,
    },
    questionText: {
        fontSize: 20,
        color: Colors.primaryDark,
        textAlign: 'center',
    },
    answerContainer: {
        marginTop: 24,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
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
