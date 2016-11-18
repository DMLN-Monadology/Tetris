import React from 'react';
import $ from 'jquery';
import Modal from 'react-modal';
import Grid from '../grid/grid';
import {modalCSS} from './modalCSS';
import  {numberize, hits_a_block} from '../../logic/block_utilities_logic';

class Game extends React.Component {
  constructor(props){
    super(props)
    this.nachat = this.nachat.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.state = { startModalOpen: true,
                   endModalOpen: this.props.game.lost
                   };
    this.onStartModalClose = this.onStartModalClose.bind(this);
    this.onEndModalClose = this.onEndModalClose.bind(this);
  }

  componentDidMount() {
    $(document).on('keydown', event => this.handleKeyDown(event));
  }

  componentWillReceiveProps(newProps) {
    this.setState({ startModalOpen: false,
                    endModalOpen: newProps.game.lost
                  });


    let current_block_coordinates = newProps.game.current_block.map(numberize)

    let struck_bottom = false
    let y_coordinates = [];
    current_block_coordinates.map( coordinate => {
      y_coordinates.push(coordinate[0])
    });
    let y_min = Math.min.apply(Math, y_coordinates);
    if (y_min === 1) {struck_bottom = true};

    if (hits_a_block(newProps.game.current_block, newProps.game.blocks))
      {struck_bottom = true};

    if (struck_bottom) {
      newProps.recordFallenBlock();
    }
  };

  nachat() {
    window.setInterval( () => {
      this.props.shiftBlockDown();
    }, 500);
  };

  handleKeyDown(event){
    event.preventDefault();
    switch(event.keyCode) {
      case 37:
        return this.props.shiftBlockLeft();
      case 38:
        return this.props.rotateBlock();
      case 39:
        return this.props.shiftBlockRight();
      case 40:
        return this.props.shiftBlockDown();
    }
  }

  onStartModalClose() {
    this.setState({startModalOpen: false,
                   endModalOpen: false});
    this.nachat();
  };

  onEndModalClose() {
    this.setState({startModalOpen: false,
                   endModalOpen: false});
    this.props.createNewBlock();
  }


  render() {

    return (
      <div className="Body">
        <div className="Title">Tetris on React/Redux!</div>
        <div className="Score">Current Score:</div>
        <div className="Score">{this.props.game.score}</div>
        <div>
          <Grid current_block={this.props.game.current_block}
                blocks={this.props.game.blocks}
                removeRow={this.props.removeRow}
                className="Grid"
          />
        </div>

        <Modal
          isOpen={this.state.startModalOpen}
          onRequestClose={this.onStartModalClose}
          style={modalCSS}
        >
        <h1>Welcome to Tetris!</h1>
        <h2>Built with only React & Redux</h2>
        <h3>A game by Alexey L. Pajitnov (1984)</h3>
        <h3>Implemented by Duc (Stian) M. L. Nguyen (2016)</h3>
        <button onClick={this.onStartModalClose}>START</button>
        <h2>Controls: Arrow Keys</h2>

        </Modal>

        <Modal
          isOpen={this.state.endModalOpen}
          onRequestClose={this.onEndModalClose}
          style={modalCSS}
        >
          <h1>Thank You for Playing!</h1>
          <h2>I hope you enjoyed it!</h2>
          <h3>Your score was: </h3>
          <h4>{this.props.game.score}</h4>
          <button onClick={this.onEndModalClose}>New Game</button>
        </Modal>

      </div>
    )
  }
}

export default Game;

// <button onClick={this.props.rotateBlock}>
//   Rotate
// </button>
// <button onClick={this.props.shiftBlockLeft}>
//   Left
// </button>
// <button onClick={this.props.shiftBlockRight}>
//   Right
// </button>
// <button onClick={this.props.shiftBlockDown}>
//   Down
// </button>

// isOpen={}
// onAfterOpen={}
// onRequestClose={}
// style={}




// onRequestClose={this.onEndModalClose}


// <button onClick={this.onEndModalClose}>Close</button>
