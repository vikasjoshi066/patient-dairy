import {Button, View, StyleSheet} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {useLayoutEffect} from "react";
import {Screens, Strings} from "../utils/constants";


function ScrPatientDiaryHome() {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            title: Strings.SCR_TTL_PATIENT_DIARY_HOME,
        });
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Button title={Strings.BTN_LOG_AN_EVENT} onPress={() => navigation.navigate(Screens.ScrDiaryEntry)}/>
        </View>
    )
}

export default ScrPatientDiaryHome;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 100,
        backgroundColor: 'white',
    }
})
