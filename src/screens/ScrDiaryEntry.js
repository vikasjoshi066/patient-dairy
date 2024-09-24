import React from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useLayoutEffect } from 'react';
import {Strings, Colors, Screens} from '../utils/constants';
import DualChoiceQuestion from '../components/DualChoiceQuestion';
import VerticalMultipleChoiceQuestion from '../components/VerticalMultipleChoiceQuestion';
import CarousalChoiceQuestion from '../components/CarousalChoiceQuestion';
import CollectionTiles from '../components/CollectionTiles';
import BLADDER_QUESTIONS from '../models/questionsModel';

const QuestionComponent = ({ row }) => {
    switch (row.order) {
        case 1:
        case 3:
            return (
                <DualChoiceQuestion
                    questionText={row.question}
                    answer1Text={row.answers[0].answer}
                    answer2Text={row.answers[1].answer}
                />
            );
        case 2:
            return (
                <VerticalMultipleChoiceQuestion
                    questionText={row.question}
                    answers={row.answers}
                />
            );
        case 4:
        case 5:
            return (
                <CarousalChoiceQuestion
                    questionText={row.question}
                    questionInstructionText={row.order === 4 ? row.questionDescription : 'Swipe to view all options'}
                    answers={row.answers}
                />
            );
        case 6:
            return (
                <CollectionTiles
                    questionText={row.question}
                    questionInstructionText={row.questionDescription}
                    answers={row.answers}
                />
            );
        default:
            return null;
    }
};

const Button = ({ onPress, style, textStyle, children }) => (
    <TouchableOpacity style={style} onPress={onPress}>
        <Text style={textStyle}>{children}</Text>
    </TouchableOpacity>
);

const ScrDiaryEntry = ({ navigation }) => {
    useLayoutEffect(() => {
        navigation.setOptions({
            title: Strings.SCR_TTL_DIARY_ENTRY,
        });
    }, [navigation]);

    const handleCancel = () => {
        navigation.navigate(Screens.ScrPatientDiaryHome);
    };

    const handleSave = () => {
        // Add save logic here
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.content}>
                {BLADDER_QUESTIONS.map((row, index) => (
                    <QuestionComponent key={index} row={row} />
                ))}

                <View style={styles.btnContainer}>
                    <Button
                        onPress={handleCancel}
                        style={styles.cancelButton}
                        textStyle={styles.buttonTextCancel}
                    >
                        Cancel
                    </Button>
                    <Button
                        onPress={handleSave}
                        style={styles.saveButton}
                        textStyle={styles.buttonTextSave}
                    >
                        Save
                    </Button>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    content: {
        flex: 1,
        marginBottom: 40,
    },
    btnContainer: {
        flexDirection: 'row',
        marginHorizontal: 16,
        marginTop: 32,
        marginBottom: 40,
        gap: 16,
    },
    cancelButton: {
        backgroundColor: 'white',
        borderColor: Colors.primary,
        borderWidth: 1,
        minHeight: 45,
        minWidth: 168,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
    },
    saveButton: {
        backgroundColor: Colors.primary,
        borderColor: Colors.primary,
        minHeight: 45,
        minWidth: 168,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
    },
    buttonTextCancel: {
        textAlign: 'center',
        color: Colors.primary,
        fontSize: 18,
    },
    buttonTextSave: {
        textAlign: 'center',
        color: 'white',
        fontSize: 18,
    },
});

export default ScrDiaryEntry;
