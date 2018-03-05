import React from 'react';
import { StyleSheet, Text, View, StatusBar, Platform } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import Decks from './views/Decks';
import NewDeck from './views/NewDeck';
import { Constants } from 'expo';
import DeckDetail from './views/DeckDetail';
import NewCard from './views/NewCard';
import Quiz from './views/Quiz';
import { Ionicons } from '@expo/vector-icons';
import { setNotificationForTomorrow } from './utils/helpers';

const Tabs = TabNavigator({
  Decks: {
    screen: Decks,
    navigationOptions: {
      tabBarIcon: ({tintColor}) => <Ionicons name="ios-list-box-outline" size={24} color={tintColor}/>
    }
  },
  NewDeck: {
    screen: NewDeck,
    navigationOptions: {
      tabBarIcon: ({tintColor}) => <Ionicons name="ios-add-circle-outline" size={24} color={tintColor}/>
    }
  }
}, {
  tabBarOptions: {
    activeTintColor: Platform.OS === 'ios' ? '#00ffba' : 'white',
    inactiveTintColor: '#000',
    indicatorStyle: {
      backgroundColor: 'white'
    },
    style: {
      backgroundColor: Platform.OS === 'ios' ? 'white' : '#00ffba',
    },
  }
});


const MainNavigator = StackNavigator({
  Home: {
    screen: Tabs,
    navigationOptions: {
      header: null,
      // title: 'Decks',
    }
  },
  DeckDetail: {
    screen: DeckDetail,
    navigationOptions: {
      headerTitle: 'Deck Detail',
      headerBackTitle: null,
      headerTintColor: Platform.OS === 'ios' ? '#000' : '#fff',
      headerStyle: {
        backgroundColor: Platform.OS === 'ios' ? 'white' : '#000',
        height: 30,
      }
    }
  },
  NewCard: {
    screen: NewCard,
    navigationOptions: {
      headerTitle: 'New Card Form',
      headerBackTitle: null,
      headerTintColor: Platform.OS === 'ios' ? '#000' : '#fff',
      headerStyle: {
        backgroundColor: Platform.OS === 'ios' ? 'white' : '#000',
        height: 30,
      }
    }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      headerTitle: 'Quiz',
      headerBackTitle: null,
      headerTintColor: Platform.OS === 'ios' ? '#000' : '#fff',
      headerStyle: {
        backgroundColor: Platform.OS === 'ios' ? 'white' : '#000',
        height: 30,
      }
    }
  }
});

const CustomStatusBar = ({ backgroundColor, ...props}) => {
  return (
    <View style={{height: Constants.statusBarHeight, backgroundColor}}>
      <StatusBar
        backgroundColor={backgroundColor}
        barStyle="light-content"
      />
    </View>
  )
};

export default class App extends React.Component {
  componentDidMount() {
    setNotificationForTomorrow()
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <CustomStatusBar backgroundColor="#000"/>
        <MainNavigator />
      </View>
    );
  }
}
