

import merge from 'lodash/merge';


const defaultState = Object.freeze({
  game: "Tetris",
  players: "Gorbachev"
});

const TetrisReducer = (oldState = defaultState, action) => {
  Object.freeze(oldState);
  let newState
  switch(action.type) {
    default:
      return oldState;
  }
}

export default TetrisReducer;
