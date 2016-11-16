import merge from 'lodash/merge';

import {CREATE_NEW_BLOCK, ROTATE_BLOCK} from '../actions/block_actions.js'
import rotate from '../logic/moving_block_logic';

const defaultState = Object.freeze({
  blocks: [],
  current_block: []
});

const GridReducer = (oldState = defaultState, action) => {
  Object.freeze(oldState);
  let newState = merge({}, oldState)
  switch(action.type) {
    case CREATE_NEW_BLOCK:
      newState.current_block.concat(action.block)
      return newState;
    case ROTATE_BLOCK:
      newState.current_block = [];
      let block_coordinates = oldState.current_block
      newState.current_block = rotate(block_coordinates);
      return newState;
    default:
      return oldState;
  }
}

export default GridReducer;
