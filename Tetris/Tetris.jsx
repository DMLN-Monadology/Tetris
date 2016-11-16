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
      current_block: ["1204", "1205", "1305", "1306"]
    }
  };

  let store = configureStore(preloadedState);

  ReactDOM.render(<GameContainer store={store}/>, root);

  window.rotateBlock = rotateBlock;

  window.store = store;
});
