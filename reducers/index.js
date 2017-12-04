import { combineReducers } from 'redux';
import DeckReducer from './decks';
import DeckDetailReducer from './deck';

export default combineReducers({
    decks: DeckReducer,
    deckDetail: DeckDetailReducer
});
