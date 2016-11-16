import React from 'react';
import Grid from '../grid/grid';

class Game extends React.Component {
  constructor(props){
    super(props)
  }


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
      </div>
    )
  }
}

export default Game;
