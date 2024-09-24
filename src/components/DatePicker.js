import React, {useState, useEffect} from 'react';
import {View, Modal, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {Calendar} from 'react-native-calendars';
import Icon from 'react-native-vector-icons/MaterialIcons';

const DatePicker = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedDate, setSelectedDate] = useState('');

    // Set default date to today when component mounts
    useEffect(() => {
        const today = new Date();
        setSelectedDate(today.toISOString().split('T')[0]); // Set to YYYY-MM-DD format
    }, []);

    const onDayPress = (day) => {
        setSelectedDate(day.dateString);
        setIsModalVisible(false);
    };

    const formatDate = (date) => {
        const options = {year: 'numeric', month: 'short', day: '2-digit'};
        return new Date(date).toLocaleDateString('en-US', options);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.datePicker} onPress={() => setIsModalVisible(true)}>
                <Text style={styles.dateText}>
                    {selectedDate ? formatDate(selectedDate) : 'Select a Date'}
                </Text>
                <Icon name="arrow-drop-down" size={24} color="black"/>
            </TouchableOpacity>

            {/* Modal for Calendar */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={isModalVisible}
                onRequestClose={() => setIsModalVisible(false)}
            >
                <View style={styles.modalBackground}>
                    <View style={styles.modalContainer}>
                        <Calendar
                            onDayPress={onDayPress}
                            markedDates={{
                                [selectedDate]: {selected: true, marked: true, selectedColor: 'blue'},
                            }}
                            style={styles.calendar}
                        />
                        <TouchableOpacity onPress={() => setIsModalVisible(false)} style={styles.closeButton}>
                            <Text style={styles.closeButtonText}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    datePicker: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 24,
    },
    dateText: {
        fontSize: 18,
    },
    modalBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
    },
    modalContainer: {
        width: '90%',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        elevation: 5,
    },
    calendar: {
        marginTop: 10,
    },
    closeButton: {
        marginTop: 20,
        backgroundColor: '#007BFF',
        borderRadius: 5,
        padding: 10,
        alignItems: 'center',
    },
    closeButtonText: {
        color: 'white',
        fontSize: 16,
    },
});

export default DatePicker;
