import React from 'react';
import $ from 'jquery';
import Grid from '../grid/grid';
import  {numberize, hits_a_block} from '../../logic/block_utilities_logic';

class Game extends React.Component {
  constructor(props){
    super(props)
    this.nachat = this.nachat.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentDidMount() {
    $(document).on('keydown', event => this.handleKeyDown(event));
  }

  componentWillReceiveProps(newProps) {
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
  }

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


  render() {

    return (
      <div>
        <h1>Tetris Game Component!</h1>
        <h2>{this.props.game.score}</h2>
        <div>
          <Grid current_block={this.props.game.current_block}
                blocks={this.props.game.blocks}
                removeRow={this.props.removeRow}
          />
        </div>
        <button onClick={this.props.rotateBlock}>
          Rotate
        </button>
        <button onClick={this.props.shiftBlockLeft}>
          Left
        </button>
        <button onClick={this.props.shiftBlockRight}>
          Right
        </button>
        <button onClick={this.props.shiftBlockDown}>
          Down
        </button>
        <button onClick={this.nachat}>
          begin
        </button>
      </div>
    )
  }
}

export default Game;
