import {Colors} from "../utils/constants";
import {Pressable, Text, StyleSheet, Image} from "react-native";

const imageMap = {
    'urgency_level_not_urgent': require("../../assets/images/urgency_level_not_urgent.png"),
    'urgency_level_somewhat_urgent': require("../../assets/images/urgency_level_somewhat_urgent.png"),
    'urgency_level_pretty_urgent': require("../../assets/images/urgency_level_pretty_urgent.png"),
    'urgency_level_very_urgent': require("../../assets/images/urgency_level_very_urgent.png"),
    'urgency_level_extremely_urgent': require("../../assets/images/urgency_level_extremely_urgent.png"),
    'urgency_level_no_warning': require("../../assets/images/urgency_level_no_warning.png"),
    // Add more images here
};



function CarousalAnswerButton({answerText, answerIndex, selectedAnswerIndex, onPressHandler, verticalBtnStyle, imageSuffix}) {
    console.log(imageSuffix);
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
            <Image
                style={styles.btnAnswerImage}
                source={imageMap[imageSuffix]}
                resizeMode="center"
            />
            <Text style={styles.btnAnswerText}> {answerText} </Text>
        </Pressable>
    )
}

export default CarousalAnswerButton;

const styles = StyleSheet.create({
    btnAnswer: {
        borderWidth: 2,
        borderColor: Colors.disabledGrey,
        width: 100,
        height: 114,
        padding: 10,
        borderRadius: 8,
        marginHorizontal:4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnAnswerSelected: {
        backgroundColor: Colors.secondary,
        borderColor: Colors.primary,
    },

    btnAnswerImage:{
        flex:1,
        width: 100,
        height: 57,
    },

    btnAnswerText: {
        flex:1,
        color: Colors.appBlack,
        fontSize: 14,
        textAlign: 'center',
    }
})
