import {StyleSheet, View, Text, ScrollView, TouchableOpacity} from "react-native";
import {useLayoutEffect, useState} from "react";
import {Strings, Colors} from "../utils/constants";
import DualChoiceQuestion from "../components/DualChoiceQuestion";
import VerticalMultipleChoiceQuestion from "../components/VerticalMultipleChoiceQuestion";
import CarousalChoiceQuestion from "../components/CarousalChoiceQuestion";
import BLADDER_QUESTIONS from "../models/questionsModel";
import CollectionTiles from "../components/CollectionTiles";

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

                <CollectionTiles
                    questionText={"Did you change a protective product?"}
                    questionInstructionText={"Select all that apply"}
                    answers={["1", "2", "3", "4", "5", "6", "7"]}
                />

                <View style={styles.btnContainer}>
                    <TouchableOpacity style={styles.cancelButton} onPress={() => {}}>
                        <Text style={styles.buttonTextCancel}>Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.saveButton} onPress={() => {}}>
                        <Text style={styles.buttonTextSave}>Save</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </ScrollView>
    )
}

export default ScrDiaryEntry;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        marginBottom: 40
    },
    btnContainer: {
        flex: 1,
        marginHorizontal: 16,
        flexDirection: 'row',
        marginTop: 32,
        marginBottom: 40,
        gap: 16,
    },
    cancelButton: {
        backgroundColor: "white",
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
        textAlign: "center",
        color: Colors.primary,
        fontSize: 18,
    },
    buttonTextSave: {
        textAlign: "center",
        color: "white",
        fontSize: 18,
    }
})
