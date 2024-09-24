import QuestionText from "./QuestionText";
import {ScrollView, StyleSheet, View} from "react-native";
import CarousalAnswerButton from "./CarousalAnswerButton";
import {useState} from "react";

function CarousalChoiceQuestion({questionText, questionInstructionText, answers}) {
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);

    function onPressHandler(selectedAnswerIndex) {
        setSelectedAnswerIndex(selectedAnswerIndex);
    }

    return (
        <View style={styles.container}>
            <QuestionText questionText={questionText}/>
            <QuestionText questionText={questionInstructionText} isQuestionInstruction={true}/>
            <View style={styles.answerContainer}>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                    {answers.map((answer, index) => (
                        <CarousalAnswerButton
                            answerText={answer.answer}
                            answerIndex={answer.value}
                            selectedAnswerIndex={selectedAnswerIndex}
                            onPressHandler={onPressHandler.bind(this, answer.value)}
                            imageSuffix={answer.answerIdentifier}
                        />
                    ))}
                    {/*<CarousalAnswerButton*/}
                    {/*    answerText={"Not Urgent at all"}*/}
                    {/*    answerIndex={0}*/}
                    {/*    selectedAnswerIndex={selectedAnswerIndex}*/}
                    {/*    onPressHandler={onPressHandler.bind(this, 0)}*/}
                    {/*    imageSuffix={"urgency_level_not_urgent"}*/}
                    {/*/>*/}
                    {/*<CarousalAnswerButton*/}
                    {/*    answerText={"Somewhat Urgent"}*/}
                    {/*    answerIndex={1}*/}
                    {/*    selectedAnswerIndex={selectedAnswerIndex}*/}
                    {/*    onPressHandler={onPressHandler.bind(this, 0)}*/}
                    {/*    imageSuffix={"urgency_level_somewhat_urgent"}*/}
                    {/*/>*/}
                    {/*<CarousalAnswerButton*/}
                    {/*    answerText={"Pretty Urgent"}*/}
                    {/*    answerIndex={2}*/}
                    {/*    selectedAnswerIndex={selectedAnswerIndex}*/}
                    {/*    onPressHandler={onPressHandler.bind(this, 0)}*/}
                    {/*    imageSuffix={"urgency_level_pretty_urgent"}*/}
                    {/*/>*/}
                    {/*<CarousalAnswerButton*/}
                    {/*    answerText={"Very Urgent"}*/}
                    {/*    answerIndex={3}*/}
                    {/*    selectedAnswerIndex={selectedAnswerIndex}*/}
                    {/*    onPressHandler={onPressHandler.bind(this, 1)}*/}
                    {/*    imageSuffix={"urgency_level_very_urgent"}*/}
                    {/*/>*/}
                    {/*<CarousalAnswerButton*/}
                    {/*    answerText={"Extremely Urgent"}*/}
                    {/*    answerIndex={4}*/}
                    {/*    selectedAnswerIndex={selectedAnswerIndex}*/}
                    {/*    onPressHandler={onPressHandler.bind(this, 2)}*/}
                    {/*    imageSuffix={"urgency_level_extremely_urgent"}*/}
                    {/*/>*/}
                    {/*<CarousalAnswerButton*/}
                    {/*    answerText={"No Warning"}*/}
                    {/*    answerIndex={5}*/}
                    {/*    selectedAnswerIndex={selectedAnswerIndex}*/}
                    {/*    onPressHandler={onPressHandler.bind(this, 3)}*/}
                    {/*    imageSuffix={"urgency_level_no_warning"}*/}
                    {/*/>*/}
                </ScrollView>
            </View>
        </View>
    )
}

export default CarousalChoiceQuestion;


const styles = StyleSheet.create({
    container: {
        marginHorizontal: 16,
        marginTop: 30,
    },
    answerContainer: {
        marginTop: 24,
        flexDirection: 'row',
    },
})
