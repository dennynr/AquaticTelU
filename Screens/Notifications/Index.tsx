import {
  Actionsheet,
  ActionsheetIcon,
  ActionsheetBackdrop,
  ActionsheetContent,
  ActionsheetDragIndicator,
  ActionsheetDragIndicatorWrapper,
  ActionsheetItem,
  ActionsheetItemText,
  ActionsheetFlatList,
  ActionsheetScrollView,
  ActionsheetSectionList,
  ActionsheetSectionHeaderText,
  ActionsheetVirtualizedList,
  Button,
  ButtonText,
  VStack,
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  Input,
  InputField,
  InputIcon,
  InputSlot,
  AddIcon,
  Image,
  Center,
} from '@gluestack-ui/themed';
import DataHistory from '../../Data/History';
import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Box, HStack, Pressable, ScrollView} from '@gluestack-ui/themed';
import Header from '../../Components/Notif/Header/Index';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Icon, IconButton, TextInput} from 'react-native-paper';

const Notifications = () => {
  const [showActionsheet, setShowActionsheet] = React.useState(false);
  const [dateShow, setdateShow] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const handleClose = () => setShowActionsheet(!showActionsheet);
  const showDatePicker = () => {
    setdateShow(true);
  };
  const hideDatePicker = () => {
    setdateShow(false);
  };
  const handleDateChange = (event, selected) => {
    hideDatePicker();
    if (selected) {
      setSelectedDate(selected);
    }
  };
  return (
    <ScrollView flex={1} backgroundColor="white">
      <Box backgroundColor="#0C356A">
        {/* <Box padding={15} flex={1} backgroundColor="#0C356A">
          <Header />
        </Box> */}
        <Box flex={1}>
          <Box
            mt={25}
            backgroundColor="white"
            borderTopStartRadius={15}
            borderTopEndRadius={15}
            flex={1}
            height="100%" // Set height to '100%'
          >
            <Box p={10}>
              {/* <HStack mt={2}>
                <Pressable onPress={showDatePicker} flex={6}>
                  <TextInput
                    mode="outlined"
                    label="Tanggal"
                    outlineStyle={{
                      borderRadius: 10,
                    }}
                    placeholder="Pilih Tanggal"
                    value={selectedDate.toDateString()}
                    right={<TextInput.Icon icon="calendar" />}
                    editable={false}
                  />
                </Pressable>
                <Pressable onPress={() => setShowActionsheet(true)} flex={1}>
                  <Box flex={1} alignItems="center" justifyContent="center">
                    <IconButton
                      style={{
                        borderWidth: 1,
                        borderRadius: 10,
                        height: 47,
                      }}
                      icon={'filter-variant'}
                    />
                  </Box>
                </Pressable>
              </HStack> */}
              {/* <Box mt={10} borderWidth={1} borderColor="#B6B6B6" /> */}
              <Box mt={10}>
                {DataHistory.map(data => (
                  <Box
                    key={data.id}
                    py={10}
                    px={10}
                    backgroundColor={
                      data.status === 'Normal' ? '#F0F9FF' : '#FFF1F0'
                    }
                    rounded={15}
                    mb={10}>
                    <HStack space="xl">
                      <Box
                        alignItems="center"
                        backgroundColor="white"
                        rounded={15}>
                        <IconButton
                          icon={
                            data.status === 'Normal'
                              ? 'weather-cloudy'
                              : 'weather-pouring'
                          }
                          size={35}
                          iconColor={
                            data.status === 'Normal' ? '#BEE7FF' : '#FFBEBE'
                          }
                        />
                      </Box>
                      <VStack>
                        <Text style={{fontWeight: 'bold', fontSize: 18}}>
                          {data.tanggal}
                        </Text>
                        <Box py={8} borderRadius={7}>
                          <Text
                            style={{
                              color:
                                data.status === 'Normal'
                                  ? '#45BBFF'
                                  : '#FF4545',
                            }}>
                            {data.status}
                          </Text>
                        </Box>
                      </VStack>
                    </HStack>
                  </Box>
                ))}
              </Box>

              {dateShow && (
                <DateTimePicker
                  value={selectedDate}
                  mode="date"
                  display="default"
                  onChange={handleDateChange}
                />
              )}
            </Box>
          </Box>
        </Box>

        <Center>
          <Actionsheet
            isOpen={showActionsheet}
            onClose={handleClose}
            zIndex={999}>
            <ActionsheetBackdrop />
            <ActionsheetContent h="$72" zIndex={999}>
              <ActionsheetDragIndicatorWrapper>
                <ActionsheetDragIndicator />
              </ActionsheetDragIndicatorWrapper>
              <ActionsheetItem onPress={handleClose}>
                <ActionsheetItemText>Delete</ActionsheetItemText>
              </ActionsheetItem>
              <ActionsheetItem onPress={handleClose}>
                <ActionsheetItemText>Share</ActionsheetItemText>
              </ActionsheetItem>
              <ActionsheetItem onPress={handleClose}>
                <ActionsheetItemText>Play</ActionsheetItemText>
              </ActionsheetItem>
              <ActionsheetItem onPress={handleClose}>
                <ActionsheetItemText>Favourite</ActionsheetItemText>
              </ActionsheetItem>
              <ActionsheetItem onPress={handleClose}>
                <ActionsheetItemText>Cancel</ActionsheetItemText>
              </ActionsheetItem>
            </ActionsheetContent>
          </Actionsheet>
        </Center>
      </Box>
    </ScrollView>
  );
};

export default Notifications;
