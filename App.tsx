import {GluestackUIProvider, Text, Box} from '@gluestack-ui/themed';
import {config} from '@gluestack-ui/config'; // Optional if you want to use default theme
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login, Home, History, Notifications} from './Screens/Index';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome6';
const Stack = createNativeStackNavigator();
const noHead = {headerShown: false};
const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color}) => {
          let iconName;
          switch (route.name) {
            case 'Home':
              return (
                <Icon name="square-poll-vertical" size={30} color="#0C356A" />
              );
            case 'History':
              return (
                <Icon name="clock-rotate-left" size={30} color="#0C356A" />
              );
            default:
              return null;
          }
        },
        tabBarIconStyle: {
          // marginTop: ,
        },
        tabBarStyle: {
          height: 70,
          borderColor: '#021C35',
          backgroundColor: '#fff',
          borderRadius: 10,
        },
        tabBarLabel: ({focused}) => {
          // Mengembalikan null jika tab sedang difokuskan
          return focused ? null : <Text style={{display: 'none'}}></Text>;
        },
      })}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          ...noHead,
        }}
      />
      <Tab.Screen
        name="History"
        component={History}
        options={{
          ...noHead,
        }}
      />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              ...noHead,
              statusBarColor: '#0C356A',
              statusBarStyle: 'white',
            }}
          />
          <Stack.Screen
            name="Tabs"
            component={Tabs}
            options={{
              ...noHead,
              statusBarColor: '#0C356A',
              statusBarStyle: 'white',
            }}
          />
          <Stack.Screen
            name="Notif"
            component={Notifications}
            options={{
              statusBarColor: '#0C356A',
              statusBarStyle: 'white',
              title: 'Notifications',
              headerStyle: {
                backgroundColor: '#0C356A', // Warna latar belakang header
              },
              headerTintColor: '#ffffff', // Warna teks header
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GluestackUIProvider>
  );
}
