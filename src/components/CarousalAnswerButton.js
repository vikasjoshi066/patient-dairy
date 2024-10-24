import React from 'react';
import {Pressable, Text, StyleSheet, Image} from 'react-native';
import {Colors, ImageMap} from '../utils/constants';

const CarouselAnswerButton = ({
                                  answerText,
                                  answerIndex,
                                  selectedAnswerIndex,
                                  setSelectedAnswerIndex,
                                  onPressHandler,
                                  btnStyle,
                                  imageSuffix,
                                  multipleSelection
                              }) => {
    let isSelected = selectedAnswerIndex === answerIndex;
    if (multipleSelection === true) {
        if (selectedAnswerIndex.includes("None")) {
            setSelectedAnswerIndex([])
        }
        isSelected = selectedAnswerIndex.includes(answerIndex);
    }

    return (
        <Pressable
            style={({pressed}) => [
                styles.btnAnswer,
                isSelected && styles.btnAnswerSelected,
                btnStyle,
            ]}
            android_ripple={{color: Colors.secondary}}
            onPress={onPressHandler}
        >
            <Image
                style={styles.btnAnswerImage}
                source={ImageMap[imageSuffix]}
                resizeMode="center"
            />
            <Text style={styles.btnAnswerText}>{answerText}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    btnAnswer: {
        borderWidth: 2,
        borderColor: Colors.disabledGrey,
        width: 100,
        height: 114,
        padding: 10,
        borderRadius: 8,
        marginHorizontal: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnAnswerSelected: {
        backgroundColor: Colors.secondary,
        borderColor: Colors.primary,
    },
    btnAnswerImage: {
        flex: 1,
        width: 100,
        height: 57,
    },
    btnAnswerText: {
        marginTop: 16,
        flex: 1,
        color: Colors.appBlack,
        fontSize: 14,
        textAlign: 'center',
    },
});

export default CarouselAnswerButton;
