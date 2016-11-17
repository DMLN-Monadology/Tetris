import React from 'react';
import Row from './row';

class Grid extends React.Component {
  constructor(props){
    super(props)

    this.rows = [];
    for ( let i = 19; i > 0; i--) {
      this.rows.push(i)
    };
  }


  render() {
    return (
      <div>
        <ol className="Grid">
          {this.rows.map( row_num => (
            <Row
              key={row_num}
              row_num={row_num}
              blocks={this.props.blocks}
              current_block={this.props.current_block}
              removeRow={this.props.removeRow}
              />
          ))
        }
        </ol>
      </div>
    )
  }
}

export default Grid;
