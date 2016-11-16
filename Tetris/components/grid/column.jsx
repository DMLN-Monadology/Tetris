import React from 'react';

class Column extends React.Component {
  constructor(props){
    super(props)
    };

  render() {
    return (
      <div className="Column">
        {this.props.row_num},
        {this.props.col_num}
      </div>
    )
  }
}

export default Column;
