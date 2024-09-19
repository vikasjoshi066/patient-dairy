import {Text, View, StyleSheet} from "react-native";
import {Colors} from "../utils/constants";

function QuestionText({questionText}) {
    return (
        <View>
            <Text style={styles.questionText}>{questionText}</Text>
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
