import React from 'react';
import ReactDOM from 'react-dom';
import GameContainer from './components/game/game_container'

import configureStore from './store/store';

import {rotateBlock} from './actions/block_actions';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');

  const preloadedState = {
    game: {
      blocks: [],
      current_block: ["0804","0904","1004","0704"]
    }
  };

  let store = configureStore(preloadedState);

  ReactDOM.render(<GameContainer store={store}/>, root);

  window.rotateBlock = rotateBlock;

  window.store = store;
});
