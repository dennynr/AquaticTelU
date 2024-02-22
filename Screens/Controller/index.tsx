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
  Heading,
} from '@gluestack-ui/themed';

import DataHistory from '../../Data/History';
import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Box, HStack, Pressable, ScrollView} from '@gluestack-ui/themed';
import Header from '../../Components/Controller/Header/Index';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Icon, IconButton, TextInput} from 'react-native-paper';
const Controller = () => {
  const [status, setStatus] = useState('Closed');
  const [time, setTime] = useState('05:00');
  const [timer, setTimer] = useState(null);

  const startTimer = () => {
    if (status === 'Closed') {
      setStatus('Opened');
      let seconds = 300;
      const newTimer = setInterval(() => {
        seconds--;
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        setTime(
          `${String(minutes).padStart(2, '0')}:${String(
            remainingSeconds,
          ).padStart(2, '0')}`,
        );
        if (seconds === 0) {
          clearInterval(newTimer);
          setStatus('Closed');
          setTime('05:00');
        }
      }, 1000);
      setTimer(newTimer);
    } else if (status === 'Opened') {
      clearInterval(timer);
      setStatus('Closed');
      setTime('05:00');
    }
  };

  return (
    <ScrollView flex={1} backgroundColor="white">
      <Box backgroundColor="#0C356A">
        <Box padding={15} flex={1} backgroundColor="#0C356A">
          <Header />
        </Box>
        <Box flex={1}>
          <Box
            mt={25}
            backgroundColor="white"
            borderTopStartRadius={15}
            borderTopEndRadius={15}
            flex={1}
            height="100%">
            <Box p={10}>
              <HStack mt={50} mb={50}>
                <Pressable flex={1}>
                  <Box flex={1} alignItems="center" justifyContent="center">
                    <IconButton
                      onPress={startTimer}
                      style={{
                        backgroundColor:
                          status === 'Opened' ? '#72f68f' : '#F67280',
                        borderRadius: 10,
                        height: 250,
                        width: 250,
                      }}
                      size={100}
                      iconColor="white"
                      icon={status === 'Opened' ? 'door-sliding-open' : 'door-sliding'}></IconButton>
                  </Box>
                </Pressable>
              </HStack>
              <Heading>Gate Controller</Heading>
              <HStack space="xl" mt={10}>

                <VStack>
                  <Text>Status :</Text>
                  <Text>Time :</Text>
                </VStack>
                <VStack>
                  <Text style={{color:status === 'Opened' ? 'green' : 'red'}} color={status === 'Opened' ? 'green' : 'red'}>
                    {status}
                  </Text>
                  <Text>{time}</Text>
                </VStack>
              </HStack>
            </Box>
          </Box>
        </Box>

        <Center>
          {/* <Actionsheet
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
          </Actionsheet> */}
        </Center>
      </Box>
    </ScrollView>
  );
};

export default Controller;
