import {applyMiddleware} from 'redux';
import GridMiddleware from './grid_middleware';

const RootMiddleware = applyMiddleware(
  GridMiddleware
);

export default RootMiddleware;
