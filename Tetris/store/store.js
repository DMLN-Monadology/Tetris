import { createStore } from 'redux';
import GridReducer from '../reducers/root_reducer';


const configureStore = (preloadedState = {} ) => (
  createStore(
    GridReducer,
    preloadedState,
  )
);

export default configureStore;
