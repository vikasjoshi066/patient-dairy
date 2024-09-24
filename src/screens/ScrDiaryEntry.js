import React, {useState} from 'react';
import {StyleSheet, View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {useLayoutEffect} from 'react';
import {Strings, Colors, Screens} from '../utils/constants';
import QuestionComponent from '../components/QuestionComponent';
import BLADDER_QUESTIONS from '../models/questionsModel';

const Button = ({onPress, style, textStyle, children}) => (
    <TouchableOpacity style={style} onPress={onPress}>
        <Text style={textStyle}>{children}</Text>
    </TouchableOpacity>
);

const ScrDiaryEntry = ({navigation}) => {
    const [questionAnswers, setQuestionAnswers] = useState({});

    const handleAnswerChange = (questionOrder, question, answer) => {
        setQuestionAnswers(prevAnswers => ({
            ...prevAnswers,
            [questionOrder]: {"questions": question, "answer": answer}
        }));
    };

    useLayoutEffect(() => {
        navigation.setOptions({
            title: Strings.SCR_TTL_DIARY_ENTRY,
        });
    }, [navigation]);

    const handleCancel = () => {
        navigation.navigate(Screens.ScrPatientDiaryHome);
    };

    const handleSave = () => {
        console.log("Review questions before saved ", questionAnswers);
    };

    const renderQuestions = () => {
        let questions = [];
        for (let i = 0; i < BLADDER_QUESTIONS.length; i++) {
            const question = BLADDER_QUESTIONS[i];

            if (question.order === 1) {
                questions.push(
                    <QuestionComponent key={question.order} row={question} handleAnswerChange={handleAnswerChange}/>
                );
            } else if (question.order === i + 1 && questionAnswers[i]) {
                questions.push(
                    <QuestionComponent key={question.order} row={question} handleAnswerChange={handleAnswerChange}/>
                );
            }
        }
        return questions;
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.content}>
                {renderQuestions()}

                {questionAnswers[BLADDER_QUESTIONS.length] && <View style={styles.btnContainer}>
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
                </View>}
            </View>
        </ScrollView>
    );
};

export default ScrDiaryEntry;

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
