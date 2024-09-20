import {Text, View, StyleSheet} from "react-native";
import {Colors} from "../utils/constants";


function QuestionText({questionText, isQuestionInstruction}) {
    return (
        <View>
            <Text style={[
                styles.questionText,
                {
                    fontSize: isQuestionInstruction != null ? 14 : 20,
                    marginTop: isQuestionInstruction != null ? 11 : 0,
                }] }>{questionText}</Text>
        </View>
    )
}

export default QuestionText;

const styles = StyleSheet.create({
    questionText: {
        fontSize: 20,
        color: Colors.primaryDark,
        textAlign: 'center',
    },
})
