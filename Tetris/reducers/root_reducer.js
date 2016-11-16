import { combineReducers } from 'redux';
import TetrisReducer from './politburo';

const RootReducer = combineReducers({
  game: TetrisReducer
});

export default RootReducer;
