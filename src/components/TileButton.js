import React from 'react';
import {StyleSheet} from 'react-native';
import CarousalAnswerButton from './CarousalAnswerButton';

const TileButton = ({
                        answerText,
                        answerIndex,
                        selectedAnswerIndex,
                        onPressHandler,
                        imageSuffix,
                        btnStyle
                    }) => {
    return (
        <CarousalAnswerButton
            answerText={answerText}
            onPressHandler={onPressHandler}
            answerIndex={answerIndex}
            selectedAnswerIndex={selectedAnswerIndex}
            imageSuffix={imageSuffix}
            btnStyle={[styles.btnVerticalAnswer, btnStyle]}
        />
    );
};

const styles = StyleSheet.create({
    btnVerticalAnswer: {
        height: 90,
        width: 100,
        borderRadius: 4,
        // Shadow for iOS
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 3},
        shadowOpacity: 0.1,
        shadowRadius: 6,
        // Shadow for Android
        elevation: 3,
    },
});

export default TileButton;
