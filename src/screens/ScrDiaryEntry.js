import {StyleSheet, View, Text} from "react-native";
import {useLayoutEffect, useState} from "react";
import {Strings} from "../utils/constants";
import DualChoiceQuestion from "../components/DualChoiceQuestion";
import VerticalMultipleChoiceQuestion from "../components/VerticalMultipleChoiceQuestion";

function ScrDiaryEntry({navigation}) {
    useLayoutEffect(() => {
        navigation.setOptions({
            title: Strings.SCR_TTL_DIARY_ENTRY,
        });
    }, [navigation]);

    return (
        <View style={styles.container}>
            <DualChoiceQuestion
                questionText={"Did it wake you up from sleeping?"}
                answer1Text={"Yes"}
                answer2Text={"No"}
            />
            <VerticalMultipleChoiceQuestion questionText={"Did it wake you up from sleeping?"}
                                            answers={["1", "2", "3"]}/>
        </View>
    )
}

export default ScrDiaryEntry;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    }
})
