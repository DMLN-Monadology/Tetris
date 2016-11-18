import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import GameContainer from './components/game/game_container'

import configureStore from './store/store';

import {rotateBlock} from './actions/block_actions';

document.addEventListener('DOMContentLoaded', () => {
  Modal.setAppElement(document.body)
  const root = document.getElementById('root');

  const preloadedState = {
    game: {
      blocks: ["0102","0103","0104","0105","0106","0107","0108", "0109", "0110",
               "0202","0203","0204","0205","0206","0207","0208", "0209", "0210",
               "0302","0303","0304","","0306","0307","0308", "0309", "0310",
               "0402","0403","0404","0405","0406","0407","0408", "0409", "0410"],
      current_block: ["1201","1101","1001","0901"],
      score: 0,
      lost: false
    }
  };

  let store = configureStore(preloadedState);

  ReactDOM.render(<GameContainer store={store}/>, root);

  window.rotateBlock = rotateBlock;

  window.store = store;
});
