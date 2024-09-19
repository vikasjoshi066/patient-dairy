import {StyleSheet, View, Text} from "react-native";
import {useLayoutEffect} from "react";
import {Strings} from "../utils/constants";

function ScrDiaryEntry({ navigation }) {

    useLayoutEffect(() => {
        navigation.setOptions({
            title: Strings.SCR_TTL_DIARY_ENTRY,
        });
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Diary Entry
            </Text>
        </View>
    )
}

export default ScrDiaryEntry;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})
