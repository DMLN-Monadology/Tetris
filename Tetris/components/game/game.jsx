import React from 'react';
import Grid from '../grid/grid';
import  {numberize, hits_a_block} from '../../logic/block_utilities_logic';

class Game extends React.Component {
  constructor(props){
    super(props)
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


  render() {
    return (
      <div>
        <h1>Tetris Game Component!</h1>
        <div>
          <Grid current_block={this.props.game.current_block} blocks={this.props.game.blocks}/>
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
      </div>
    )
  }
}

export default Game;
