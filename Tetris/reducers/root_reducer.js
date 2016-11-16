import { combineReducers } from 'redux';
import TetrisReducer from './grid_reducer';

const RootReducer = combineReducers({
  game: TetrisReducer
});

export default RootReducer;
