import {StyleSheet, View} from "react-native";
import {useState} from "react";
import QuestionText from "./QuestionText";
import TileButton from "./TileButton";

function CollectionTiles({questionText, questionInstructionText, answers}) {
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);

    function onPressHandler(selectedAnswerIndex) {
        setSelectedAnswerIndex(selectedAnswerIndex);
    }

    const getRows = () => {
        // Group the answers into chunks of 3
        const rows = [];
        for (let i = 0; i < answers.length; i += 3) {
            rows.push(answers.slice(i, i + 3));
        }
        return rows;
    };

    return (
        <View style={styles.container}>
            <QuestionText questionText={questionText} />
            <QuestionText questionText={questionInstructionText} isQuestionInstruction={true}/>

            {getRows().map((row, rowIndex) => (
                <View key={rowIndex} style={styles.answerContainer}>
                    {row.map((answer, tileIndex) => (
                        <TileButton
                            key={tileIndex}
                            answerText={answer.answer}
                            answerIndex={answer.answer}
                            selectedAnswerIndex={selectedAnswerIndex}
                            imageSuffix={answer.answerIdentifier}
                            onPressHandler={() => onPressHandler(answer.answer)}
                        />
                    ))}
                </View>
            ))}
        </View>
    )
}

export default CollectionTiles;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 16,
        marginTop: 54,
    },
    answerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 16,
        marginBottom: 10,
        marginTop: 24,
    },
});

