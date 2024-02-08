import {View, Text} from 'react-native';
import React from 'react';
import {
  Menu,
  MenuItem,
  MenuItemLabel,
  Button,
  ButtonText,
} from '@gluestack-ui/themed';
const Index = () => {
  return (
    <Menu
      placement="top"
      trigger={({...triggerProps}) => {
        return (
          <Button {...triggerProps}>
            <ButtonText>Menu</ButtonText>
          </Button>
        );
      }}>
      <MenuItem key="Community" textValue="Community">
        {/* <Icon as={GlobeIcon} size="sm" mr="$2" /> */}
        <MenuItemLabel size="sm">Community</MenuItemLabel>
      </MenuItem>
      <MenuItem key="Plugins" textValue="Plugins">
        {/* PuzzleIcon is imported from 'lucide-react-native' */}
        {/* <Icon as={PuzzleIcon} size="sm" mr="$2" /> */}
        <MenuItemLabel size="sm">Plugins</MenuItemLabel>
      </MenuItem>
      <MenuItem key="Theme" textValue="Theme">
        {/* PaintBucket is imported from 'lucide-react-native' */}
        {/* <Icon as={PaintBucket} size="sm" mr="$2" /> */}
        <MenuItemLabel size="sm">Theme</MenuItemLabel>
      </MenuItem>
      <MenuItem key="Settings" textValue="Settings">
        {/* <Icon as={SettingsIcon} size="sm" mr="$2" /> */}
        <MenuItemLabel size="sm">Settings</MenuItemLabel>
      </MenuItem>
      <MenuItem key="Add account" textValue="Add account">
        {/* <Icon as={AddIcon} size="sm" mr="$2" /> */}
        <MenuItemLabel size="sm">Add account</MenuItemLabel>
      </MenuItem>
    </Menu>
  );
};

export default Index;
