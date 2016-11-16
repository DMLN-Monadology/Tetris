import React from 'react';
import Column from './column';

class Row extends React.Component {
  constructor(props){
    super(props)

    this.cols = [];
    for ( let i = 1; i < 11; i++) {
      this.cols.push(i)
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
