import { Button, View, Text, StyleSheet, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useLayoutEffect } from "react";
import { Screens } from "../utils/constants";

import Strings from "../localization/stringTranslationService";
import SetLanguage from "../components/SetLanguage"; // Import SetLanguage

function ScrPatientDiaryHome() {
  const navigation = useNavigation();

  useEffect(() => {
    console.log(Strings);
  });
  useLayoutEffect(() => {
    navigation.setOptions({
      title: Strings.SCR_TTL_PATIENT_DIARY_HOME,
    });
  }, [navigation]);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text>{Strings.WELCOME}</Text>
        <Text>{Strings.LOG_AN_EVENT}</Text>
        <Text>{Strings.CANCEL}</Text>
        <Text>{Strings.HOME}</Text>
        <Text>{Strings.SETTINGS}</Text>
        <Text>{Strings.PROFILE}</Text>
        <Text>{Strings.LOGOUT}</Text>
        <Text>{Strings.SUBMIT}</Text>
        <Text>{Strings.NEXT}</Text>
        <Text>{Strings.PREVIOUS}</Text>
        <Text>{Strings.SAVE}</Text>
        <Text>{Strings.EDIT}</Text>
        <Text>{Strings.DELETE}</Text>
        <Text>{Strings.VIEW}</Text>
        <Text>{Strings.SEARCH}</Text>
        <Text>{Strings.FILTER}</Text>
        <Text>{Strings.RESET}</Text>
        <Text>{Strings.CONFIRM}</Text>
        <Text>{Strings.DECLINE}</Text>
        <Text>{Strings.NOTIFICATION}</Text>
        <Text>{Strings.MESSAGES}</Text>
        <Text>{Strings.LANGUAGE}</Text>
        <Text>{Strings.HELP}</Text>
        <Text>{Strings.ABOUT}</Text>
        <Text>{Strings.TERMS_OF_SERVICE}</Text>
        <Text>{Strings.PRIVACY_POLICY}</Text>
        <Text>{Strings.CONTACT_US}</Text>
        <Text>{Strings.FAQ}</Text>
        <Text>{Strings.FEEDBACK}</Text>
        <Text>{Strings.DASHBOARD}</Text>
        <Text>{Strings.STATISTICS}</Text>
        <Text>{Strings.ANALYTICS}</Text>
        <Text>{Strings.REPORTS}</Text>
        <Text>{Strings.ACTIVITY}</Text>
        <Text>{Strings.PREFERENCES}</Text>
        <Text>{Strings.USER_GUIDE}</Text>
        <Text>{Strings.TUTORIAL}</Text>
        <Text>{Strings.UPDATES}</Text>
        <Text>{Strings.VERSIONS}</Text>
        <Text>{Strings.RESOURCES}</Text>
        <Text>{Strings.COMMUNITY}</Text>
        <Text>{Strings.SUPPORT}</Text>
        <Text>{Strings.SESSION}</Text>
        <Text>{Strings.LOGIN}</Text>
        <Text>{Strings.REGISTER}</Text>
        <Text>{Strings.FORGOT_PASSWORD}</Text>
        <Text>{Strings.RESET_PASSWORD}</Text>
        <Text>{Strings.VERIFY_EMAIL}</Text>
        <Text>{Strings.NEW_PASSWORD}</Text>
        <Text>{Strings.OLD_PASSWORD}</Text>
        <Text>{Strings.REPEAT_PASSWORD}</Text>
        <Text>{Strings.FIRST_NAME}</Text>
        <Text>{Strings.LAST_NAME}</Text>
        <Text>{Strings.EMAIL}</Text>
        <Text>{Strings.PHONE}</Text>
        <Text>{Strings.ADDRESS}</Text>
        <Text>{Strings.CITY}</Text>
        <Text>{Strings.STATE}</Text>
        <Text>{Strings.COUNTRY}</Text>
        <Text>{Strings.ZIP_CODE}</Text>
        <Text>{Strings.SAVE_CHANGES}</Text>
        <Text>{Strings.CANCEL_CHANGES}</Text>
        <Text>{Strings.UPLOAD}</Text>
        <Text>{Strings.DOWNLOAD}</Text>
        <Text>{Strings.REFRESH}</Text>
        <Text>{Strings.EXPAND}</Text>
        <Text>{Strings.COLLAPSE}</Text>
        <Text>{Strings.SHARE}</Text>
        <Text>{Strings.BOOKMARK}</Text>
        <Text>{Strings.FAVORITES}</Text>
        <Text>{Strings.RECENT}</Text>
        <Text>{Strings.LOAD_MORE}</Text>
        <Text>{Strings.NO_RESULTS}</Text>
        <Text>{Strings.ERROR}</Text>
        <Text>{Strings.SUCCESS}</Text>
        <Text>{Strings.WARNING}</Text>
        <Text>{Strings.INFO}</Text>
        <Text>{Strings.LOADING}</Text>
        <Text>{Strings.WELCOME_BACK}</Text>
        <Text>{Strings.GOODBYE}</Text>
        <Text>{Strings.SEE_YOU_SOON}</Text>
        <Text>{Strings.HAVE_A_NICE_DAY}</Text>
        <Text>{Strings.THANK_YOU}</Text>
        <Text>{Strings.SORRY}</Text>
        <Text>{Strings.YES}</Text>
        <Text>{Strings.NO}</Text>
        <Text>{Strings.MAYBE}</Text>
        <Text>{Strings.LATER}</Text>
        <Text>{Strings.TODAY}</Text>
        <Text>{Strings.TOMORROW}</Text>
        <Text>{Strings.YESTERDAY}</Text>
        <Text>{Strings.TIME}</Text>
        <Text>{Strings.DATE}</Text>
        <Text>{Strings.WEEK}</Text>
        <Text>{Strings.MONTH}</Text>
        <Text>{Strings.YEAR}</Text>
        <Text>{Strings.MINUTES}</Text>
        <Text>{Strings.SECONDS}</Text>
        <Text>{Strings.HOURS}</Text>
        <Text>{Strings.DAYS}</Text>
        <Text>{Strings.WEEKS}</Text>
        <Text>{Strings.MONTHS}</Text>
        <Text>{Strings.YEARS}</Text>
        <Text>{Strings.CURRENT_TIME}</Text>
        <Text>{Strings.CURRENT_DATE}</Text>
        <Text>{Strings.HOME_PAGE}</Text>
        <Text>{Strings.CONTACT_PAGE}</Text>
        <Text>{Strings.ABOUT_PAGE}</Text>
        <Text>{Strings.TERMS_PAGE}</Text>
        <Text>{Strings.PRIVACY_PAGE}</Text>
        <Text>{Strings.LOGIN_PAGE}</Text>
        <Text>{Strings.REGISTER_PAGE}</Text>
        <Text>{Strings.PROFILE_PAGE}</Text>
        <Text>{Strings.SETTINGS_PAGE}</Text>
        <Text>{Strings.HELP_PAGE}</Text>
        <Text>{Strings.FAQ_PAGE}</Text>
        <Text>{Strings.FEEDBACK_PAGE}</Text>
        <Text>{Strings.DASHBOARD_PAGE}</Text>
        <Text>{Strings.REPORTS_PAGE}</Text>
        <Text>{Strings.ANALYTICS_PAGE}</Text>
        <Text>{Strings.MESSAGES_PAGE}</Text>
        <Text>{Strings.NOTIFICATIONS_PAGE}</Text>
        <Text>{Strings.ACTIVITIES_PAGE}</Text>
        <Text>{Strings.PREFERENCES_PAGE}</Text>
        <Text>{Strings.RESOURCES_PAGE}</Text>
        <Text>{Strings.COMMUNITY_PAGE}</Text>
        <Text>{Strings.SUPPORT_PAGE}</Text>
        <Text>{Strings.UPDATES_PAGE}</Text>
        <Text>{Strings.PROFILE_PICTURE}</Text>
        <Text>{Strings.CHANGE_PROFILE_PICTURE}</Text>
        <Text>{Strings.UPLOAD_PICTURE}</Text>
        <Text>{Strings.DELETE_PICTURE}</Text>
        <Text>{Strings.UPDATE_SUCCESS}</Text>
        <Text>{Strings.UPDATE_FAILURE}</Text>
        <Text>{Strings.SETTINGS_SAVED}</Text>
        <Text>{Strings.SETTINGS_NOT_SAVED}</Text>
        <Text>{Strings.PLEASE_WAIT}</Text>
        <Text>{Strings.ERROR_OCCURRED}</Text>
        <Text>{Strings.SUCCESS_MESSAGE}</Text>
        <Text>{Strings.FAILURE_MESSAGE}</Text>
        <Text>{Strings.CONTINUE}</Text>
        <Text>{Strings.GO_BACK}</Text>
        <Text>{Strings.WELCOME_MESSAGE}</Text>
        <Text>{Strings.GET_STARTED}</Text>
        <Text>{Strings.LET_US_KNOW}</Text>
        <Text>{Strings.FEEDBACK_THANK_YOU}</Text>
        <Text>{Strings.MORE_INFO}</Text>
        <Text>{Strings.UPDATE_AVAILABLE}</Text>
        <Text>{Strings.NEW_FEATURES}</Text>
        <Text>{Strings.BUG_FIXES}</Text>
        <Text>{Strings.MAINTENANCE_MODE}</Text>
        <Text>{Strings.SYSTEM_ERROR}</Text>
        <Text>{Strings.REQUEST_TIMEOUT}</Text>
        <Text>{Strings.RETRY}</Text>
        <Text>{Strings.CANCELLED}</Text>
        <Text>{Strings.COMPLETED}</Text>
        <Text>{Strings.IN_PROGRESS}</Text>
        <Text>{Strings.PENDING}</Text>
        <Text>{Strings.NOT_STARTED}</Text>
        <Text>{Strings.TASK_COMPLETED}</Text>
        <Text>{Strings.TASK_FAILED}</Text>
        <Text>{Strings.VIEW_DETAILS}</Text>
        <Text>{Strings.START}</Text>
        <Text>{Strings.STOP}</Text>
        <Text>{Strings.PAUSE}</Text>
        <Text>{Strings.RESUME}</Text>
        <Text>{Strings.TRACK}</Text>
        <Text>{Strings.MONITOR}</Text>
        <Text>{Strings.STATISTICS_OVERVIEW}</Text>
        <Text>{Strings.DOWNLOAD_REPORT}</Text>
        <Text>{Strings.EXPORT_DATA}</Text>
        <Text>{Strings.IMPORT_DATA}</Text>
        <Text>{Strings.GENERATE_REPORT}</Text>
        <Text>{Strings.SEND_REPORT}</Text>
        <Text>{Strings.VIEW_STATISTICS}</Text>
        <Text>{Strings.CHECK_UPDATES}</Text>
        <Text>{Strings.VIEW_ACTIVITY_LOG}</Text>
        <Text>{Strings.MANAGE_ACCOUNT}</Text>
        <Text>{Strings.CHANGE_PASSWORD}</Text>
        <Text>{Strings.UPDATE_EMAIL}</Text>
        <Text>{Strings.UPDATE_PHONE}</Text>
        <Text>{Strings.LINK_ACCOUNT}</Text>
        <Text>{Strings.UNLINK_ACCOUNT}</Text>
        <Text>{Strings.VERIFY_ACCOUNT}</Text>
        <Text>{Strings.DEACTIVATE_ACCOUNT}</Text>
        <Text>{Strings.REACTIVATE_ACCOUNT}</Text>
        <Text>{Strings.ACCOUNT_SETTINGS}</Text>
        <Text>{Strings.SECURITY_SETTINGS}</Text>
        <Text>{Strings.PRIVACY_SETTINGS}</Text>
        <Text>{Strings.NOTIFICATION_SETTINGS}</Text>
        <Text>{Strings.PREFERENCES_SETTINGS}</Text>
        <Text>{Strings.ACCOUNT_VERIFIED}</Text>
        <Text>{Strings.ACCOUNT_NOT_VERIFIED}</Text>
        <Text>{Strings.VERIFICATION_PENDING}</Text>
        <Text>{Strings.VERIFICATION_SUCCESS}</Text>
        <Text>{Strings.VERIFICATION_FAILURE}</Text>
        <Text>{Strings.CHANGE_LANGUAGE}</Text>
        <Text>{Strings.SELECT_LANGUAGE}</Text>
        <Text>{Strings.LANGUAGE_CHANGED}</Text>
        <Text>{Strings.LANGUAGE_NOT_CHANGED}</Text>
        <Text>{Strings.ENGLISH}</Text>
        <Text>{Strings.HINDI}</Text>
        <Text>{Strings.FRENCH}</Text>
        <Text>{Strings.SPANISH}</Text>
        <Text>{Strings.GERMAN}</Text>
        <Text>{Strings.ITALIAN}</Text>
        <Text>{Strings.PORTUGUESE}</Text>
        <Text>{Strings.CHINESE}</Text>
        <Text>{Strings.JAPANESE}</Text>
        <Text>{Strings.KOREAN}</Text>
        <Text>{Strings.RUSSIAN}</Text>
        <Text>{Strings.ARABIC}</Text>
        <Text>{Strings.INDONESIAN}</Text>
        <Text>{Strings.TURKISH}</Text>
        <Text>{Strings.SWEDE}</Text>
        <Text>{Strings.DUTCH}</Text>
        <Text>{Strings.NORWEGIAN}</Text>
        <Text>{Strings.FINNISH}</Text>
        <Text>{Strings.DANISH}</Text>
        <Text>{Strings.GREEK}</Text>
        <Text>{Strings.HEBREW}</Text>
        <Text>{Strings.SWAHILI}</Text>
        <Text>{Strings.THAI}</Text>
        <Text>{Strings.VIETNAMESE}</Text>
        <Text>{Strings.FILIPINO}</Text>
        <Text>{Strings.MALAY}</Text>
        <Text>{Strings.CZECH}</Text>
        <Text>{Strings.HUNGARIAN}</Text>
        <Text>{Strings.ROMANIAN}</Text>
        <Text>{Strings.BULGARIAN}</Text>
        <Text>{Strings.SLOVAK}</Text>
        <Text>{Strings.UKRAINIAN}</Text>
        <Text>{Strings.SERBIAN}</Text>
        <Text>{Strings.CROATIAN}</Text>
        <Text>{Strings.SLOVENIAN}</Text>
        <Text>{Strings.LITHUANIAN}</Text>
        <Button
          title={Strings.BTN_LOG_AN_EVENT}
          onPress={() => navigation.navigate(Screens.ScrDiaryEntry)}
        />
        <SetLanguage />
      </View>
    </ScrollView>
  );
}

export default ScrPatientDiaryHome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 100,
    backgroundColor: "white",
  },
});
