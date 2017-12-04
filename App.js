import React from 'react';
import {
    StatusBar,
    View
} from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { Constants } from 'expo';
import DeckMain from './components/DeckMain';
import DeckDetail from './components/DeckDetail';
import AddEntry from './components/AddEntry';
import AddQuestion from './components/AddQuestion';
import QuizMain from './components/QuizMain';
import reducer from './reducers'
import { setLocalNotification } from './utils/helpers';


const Tabs = TabNavigator({
    Decks: {
        screen: DeckMain,
        navigationOptions: {
            tabBarLabel: 'Decks',
            tabBarIcon: ({ tintColor }) => <Ionicons name="ios-home" size={30} color={tintColor} />
        }
    },
    AddEntry: {
        screen: AddEntry,
        navigationOptions: {
            tabBarLabel: 'Add Deck',
            tabBarIcon: ({ tintColor }) => <FontAwesome name="plus-square" size={30} color={tintColor} />
        }
    }
});

const MainNavigator =  StackNavigator({
    Home: {
        screen: Tabs,
        navigationOptions: {
            title: "Flash Cards",
            headerTintColor: "white",
            headerStyle: {
                backgroundColor: "green"

            }
        }
    },
    DeckDetail: {
        screen: DeckDetail,
        navigationOptions: {
            headerTintColor: "white",
            headerStyle: {
                backgroundColor: "green"

            }
        }
    },
    AddQuestion: {
        screen: AddQuestion,
        navigationOptions: {
            headerTintColor: "white",
            headerStyle: {
                backgroundColor: "green"

            }
        }
    },
    QuizMain: {
        screen: QuizMain,
        navigationOptions: {
            headerTintColor: "white",
            headerStyle: {
                backgroundColor: "green"

            }
        }
    }
});

export default class App extends React.Component {
    componentDidMount() {
        setLocalNotification();
    }

    render() {
        const store = createStore(reducer, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store}>
                <View style={{ flex: 1 }}>

                    <MainNavigator />
                </View>
            </Provider>
        );
    }
}