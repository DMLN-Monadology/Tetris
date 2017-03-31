import React from 'react';

class Column extends React.Component {
  constructor(props){
    super(props)
    let x = this.props.row_num.toString();
    if (x.length === 1) { x = "0" + x}
    let y = this.props.col_num.toString();
    if (y.length === 1) { y = "0" + y}
    this.coordinate = x + y
    let all_blocks = this.props.blocks.concat(this.props.current_block)
    let occupied = all_blocks.includes(this.coordinate)
    this.state = { occupied: occupied, coordinate: this.coordinate}
  };

  componentWillReceiveProps(newProps) {
    let all_blocks = newProps.blocks.concat(newProps.current_block);
    let occupied = all_blocks.includes(this.state.coordinate)
    this.setState({ occupied: occupied, coordinate: this.state.coordinate})
  };

  render() {
    let content;
    if (this.state.occupied) {
      content = (<img className="Block" src="http://i.imgur.com/KgANR4r.png"/>)
    }
    // else {
    //   content = this.state.coordinate
    // };

    return (
      <div className="Column">
        {content}
      </div>
    )
  }
}

export default Column;
