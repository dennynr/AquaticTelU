import {EditIcon, ArrowLeftIcon} from 'lucide-react-native';
import { Container } from '../../Components/Login/Index';
import {useState} from 'react';
import {Box} from '@gluestack-ui/themed';
import React from 'react';
const Login = () => {
  return (
    <Box backgroundColor="white" flex={1}>
      <Box
        flex={1}
        backgroundColor="#0C356A"
        alignItems="center"
        justifyContent="center">
        <Container />
      </Box>
    </Box>
  );
};
export default Login;
