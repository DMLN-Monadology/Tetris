import merge from 'lodash/merge';

import {LINE_PIECE,
        SQUARE,
        T_BLOCK,
        SQUIGGLY,
        REVERSE_SQUIGGLY,
        L_BLOCK,
        REVERSE_L_BLOCK
} from './blocks';

import {CREATE_NEW_BLOCK,
        ROTATE_BLOCK,
        SHIFT_BLOCK_LEFT,
        SHIFT_BLOCK_RIGHT,
        SHIFT_BLOCK_DOWN,
        RECORD_FALLEN_BLOCK,
        REMOVE_ROW
} from '../actions/block_actions.js'

import {rotate} from '../logic/rotate_block_logic';

import {moveBlockLeft,
        moveBlockRight,
        moveBlockDown
} from '../logic/moving_block_logic';

import {move_all_blocks_down, struck_ceiling} from '../logic/block_utilities_logic';

const blocks = [
        LINE_PIECE,
        SQUARE,
        T_BLOCK,
        SQUIGGLY,
        REVERSE_SQUIGGLY,
        L_BLOCK,
        REVERSE_L_BLOCK]

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
    // case CREATE_NEW_BLOCK:
    //   newState.current_block.concat(action.block)
    //   return newState;
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
      let randomBlockNum = Math.floor(Math.random()*(7))
      let newBlock = blocks[randomBlockNum]
      // newState.current_block = ["1404","1304","1204","1104"]
      let all_fallen_blocks = oldState.blocks.concat(fallen_block);
      if (struck_ceiling(all_fallen_blocks)) {
        newState.blocks = [];
        newState.current_block = newBlock;
        newState.lost = true;
      } else {
        newState.blocks = all_fallen_blocks;
        newState.current_block = newBlock;
        newState.lost = false;
      }
      return newState;
    case REMOVE_ROW:
      let new_blocks = [];
      oldState.blocks.forEach(coordinate => {
        if (coordinate.slice(0,2) !== action.row_num) {
          new_blocks.push(coordinate)
        };
      })
      let shifted_blocks = move_all_blocks_down(new_blocks, action.row_num)
      newState.blocks = shifted_blocks;
      newState.current_block = oldState.current_block;
      newState.score = oldState.score + 1000
      return newState;
    default:
      return oldState;
  }
}

export default GridReducer;
