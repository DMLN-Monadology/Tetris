import React from 'react';
import Column from './column';
import {stringify} from '../../logic/block_utilities_logic';

class Row extends React.Component {
  constructor(props){
    super(props)

    this.cols = [];
    for ( let i = 1; i < 11; i++) {
      this.cols.push(i)
    };
  }

  componentWillReceiveProps(newProps) {
    let row_num_string = stringify(newProps.row_num);
    let col_count = 0
    // newProps.blocks.map(coordinate => {
    //   if (coordinate.slice(2,4) === row_num_string) {
    //     col_count = col_count + 1
    //   };
    // })
    for (let i = 0; i < (newProps.blocks.length); i++) {
      if (newProps.blocks[i].slice(0,2) === row_num_string) {
        col_count = col_count + 1
      };
    };
    if (col_count === 10) {
      newProps.removeRow(row_num_string)
    };
  }

  render() {
    return (
      <div>
        <ol className="Row">
          {this.cols.map( col_num => (
            <Column
              key={col_num}
              row_num={this.props.row_num}
              col_num={col_num}
              blocks={this.props.blocks}
              current_block={this.props.current_block}/>
          ))
        }
        </ol>
      </div>
    )
  }
}

export default Row;
