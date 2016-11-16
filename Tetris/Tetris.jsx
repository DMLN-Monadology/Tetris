import React from 'react';
import ReactDOM from 'react-dom';
import GameContainer from './components/game/game_container'

import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');

  const preloadedState = {
    game: {
      blocks: [],
      current_block: []
    }
  };

  let store = configureStore(preloadedState);

  ReactDOM.render(<GameContainer store={store}/>, root);

  window.store = store;
});
