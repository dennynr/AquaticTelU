import {Box, HStack, Pressable, Text} from '@gluestack-ui/themed';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome6';

const Header = () => {
  return (
    <Box>
      <HStack>
        <Box flex={1}>
          <Pressable onPress={() => alert('Ini Menu')}>
            <Icon name="bars-progress" size={30} color="white" />
          </Pressable>
        </Box>
        <Box flex={1} justifyContent="center" alignItems="center">
          <Text fontSize={18} bold color="white">
            CONTROLLER
          </Text>
        </Box>
        <Box flex={1} alignItems="flex-end">
          <Pressable onPress={() => alert('Ini Notif')}>
            <Icon name="bell" size={30} color="white" />
          </Pressable>
        </Box>
      </HStack>
    </Box>
  );
};

export default Header;
