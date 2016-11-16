import merge from 'lodash/merge';

import {CREATE_NEW_BLOCK,
        ROTATE_BLOCK,
        SHIFT_BLOCK_LEFT,
        SHIFT_BLOCK_RIGHT,
        SHIFT_BLOCK_DOWN,
        RECORD_FALLEN_BLOCK
} from '../actions/block_actions.js'
import {rotate} from '../logic/rotate_block_logic';
import {moveBlockLeft,
        moveBlockRight,
        moveBlockDown
} from '../logic/moving_block_logic';

const defaultState = Object.freeze({
  blocks: [],
  current_block: []
});

const GridReducer = (oldState = defaultState, action) => {
  Object.freeze(oldState);
  let newState = merge({}, oldState)
  newState.current_block = [];
  let current_block_coordinates = oldState.current_block;
  switch(action.type) {
    case CREATE_NEW_BLOCK:
      newState.current_block.concat(action.block)
      return newState;
    case ROTATE_BLOCK:
      newState.current_block = rotate(current_block_coordinates);
      return newState;
    case SHIFT_BLOCK_LEFT:
      newState.current_block = moveBlockLeft(current_block_coordinates);
      return newState;
    case SHIFT_BLOCK_RIGHT:
      newState.current_block = moveBlockRight(current_block_coordinates);
      return newState;
    case SHIFT_BLOCK_DOWN:
      newState.current_block = moveBlockDown(current_block_coordinates);
      return newState;
    case RECORD_FALLEN_BLOCK:
      let fallen_block = oldState.current_block;
      newState.blocks = oldState.blocks.concat(fallen_block);
      return newState;
    default:
      return oldState;
  }
}

export default GridReducer;
