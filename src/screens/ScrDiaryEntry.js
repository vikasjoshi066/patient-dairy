import {StyleSheet, View, Text, ScrollView} from "react-native";
import {useLayoutEffect, useState} from "react";
import {Strings} from "../utils/constants";
import DualChoiceQuestion from "../components/DualChoiceQuestion";
import VerticalMultipleChoiceQuestion from "../components/VerticalMultipleChoiceQuestion";
import CarousalChoiceQuestion from "../components/CarousalChoiceQuestion";
import BLADDER_QUESTIONS from "../models/questionsModel";

function ScrDiaryEntry({navigation}) {
    useLayoutEffect(() => {
        navigation.setOptions({
            title: Strings.SCR_TTL_DIARY_ENTRY,
        });
    }, [navigation]);

    return (
        <ScrollView style={styles.container}>
            <View style={styles.container}>
                <DualChoiceQuestion
                    questionText={"Did it wake you up from sleeping?"}
                    answer1Text={"Yes"}
                    answer2Text={"No"}
                />

                <VerticalMultipleChoiceQuestion
                    questionText={"Did it wake you up from sleeping?"}
                    answers={["1", "2", "3"]}
                />


                <CarousalChoiceQuestion
                    questionText={"How urgent did it feel?"}
                    questionInstructionText={"Swipe to view all options"}/>

            </View>
        </ScrollView>
    )
}

export default ScrDiaryEntry;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    }
})
