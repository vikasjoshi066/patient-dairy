import {StatusBar} from 'expo-status-bar';
import {StyleSheet, View} from 'react-native';
import ScrPatientDiaryHome from "./src/screens/ScrPatientDiaryHome";
import ScrDiaryEntry from "./src/screens/ScrDiaryEntry";
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import {Screens, Colors} from "./src/utils/constants";

export default function App() {

    const Stack = createStackNavigator();

    return (
        <View style={styles.rootView}>
            <StatusBar style="light" />
            <NavigationContainer>
                <Stack.Navigator screenOptions={{
                    headerStyle: {backgroundColor: Colors.secondaryDark},
                    headerTintColor: "white",
                    contentStyle: {backgroundColor: "white"},
                }}>
                    <Stack.Screen name={Screens.ScrPatientDiaryHome} component={ScrPatientDiaryHome}/>
                    <Stack.Screen name={Screens.ScrDiaryEntry} component={ScrDiaryEntry}/>
                </Stack.Navigator>
            </NavigationContainer>
        </View>
    );
}

const styles = StyleSheet.create({
    rootView: {
        flex: 1,
        backgroundColor: '#fff'
    },
});
