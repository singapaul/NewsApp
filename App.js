import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Sport from './Screens/Sport';
import Tech from './Screens/Tech';
import Business from './Screens/Business';
import Politics from './Screens/Politics';
import All from './Screens/All';
import Icon from 'react-native-vector-icons/Feather';
import {services} from './Services';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Sport') {
              iconName = focused ? 'globe' : 'globe';
            } else if (route.name === 'Business') {
              iconName = focused ? 'briefcase' : 'briefcase';
            } else if (route.name === 'Tech') {
              iconName = focused ? 'smartphone' : 'smartphone';
            } else if (route.name === 'All') {
              iconName = focused ? 'home' : 'home';
            } else if (route.name === 'Politics') {
              iconName = focused ? 'archive' : 'archive';
            }

            // You can return any component that you like here!
            return (
              <View>
                <Icon name={iconName} size={size} color={color} />
              </View>
            );
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen name="Sport" component={Sport} />
        <Tab.Screen name="Tech" component={Tech} />
        <Tab.Screen name="All" component={All} />
        <Tab.Screen name="Politics" component={Politics} />
        <Tab.Screen name="Business" component={Business} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
