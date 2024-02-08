import React, { useState } from 'react';
import {
  FormControlLabel,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  AlertCircleIcon,
  ChevronDownIcon,
  Image,
  Box,
  Input,
  InputField,
  Button,
  ButtonText,
  VStack,
  Heading,
  Icon,
  SearchIcon,
  FormControl,
  Text,
} from '@gluestack-ui/themed';
import {TextInput} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
const Container = () => {
  const navigation = useNavigation();
  const  [hiddenPw , setHiddenPw] = useState(true)
  return (
    <Box
      backgroundColor="white"
      width={'80%'}
      p={20}
      rounded={10}
      softShadow="4"
      shadowColor="black">
      <Box alignItems="center">
        <Image
          source={require('../../../src/Images/Logo.jpg')}
          alt="logo"
          resizeMode="contain"
          w={'80%'}
          h={200}
        />
      </Box>
      <VStack space="md" mt={10}>
        <Box>
          <FormControl isInvalid={false} size={'xl'} isDisabled={false}>
            <TextInput
              mode="outlined"
              label="Email"
              placeholder="Example@mail.com"
            />
            <FormControlError>
              <FormControlErrorIcon as={AlertCircleIcon} />
              <FormControlErrorText>
                Atleast 6 characters are required.
              </FormControlErrorText>
            </FormControlError>
          </FormControl>
        </Box>
        <Box>
          <FormControl isInvalid={false} size={'xl'} isDisabled={false}>
            <TextInput
              mode="outlined"
              label="Password"
              placeholder="Password"
              secureTextEntry={hiddenPw}
              right={<TextInput.Icon icon="eye" onPress={() => setHiddenPw(!hiddenPw)} />}
            />
            <FormControlError>
              <FormControlErrorIcon as={AlertCircleIcon} />
              <FormControlErrorText>
                Atleast 6 characters are required.
              </FormControlErrorText>
            </FormControlError>
          </FormControl>
        </Box>
      </VStack>
      <Button
        mb={20}
        mt={20}
        rounded={10}
        action={'primary'}
        variant={'solid'}
        size={'lg'}
        backgroundColor="#0174BE"
        isDisabled={false}
        onPress={() => navigation.navigate('Tabs')}>
        <ButtonText color="#FFF0CE">Masuk</ButtonText>
      </Button>
    </Box>
  );
};

export default Container;
