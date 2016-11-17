import { connect } from 'react-redux';
import Game from './game';
import {rotateBlock,
        shiftBlockLeft,
        shiftBlockRight,
        shiftBlockDown,
        recordFallenBlock,
        removeRow
} from '../../actions/block_actions';

const mapStateToProps = (state) => ({
  game: state.game
});

const mapDispatchToProps = dispatch => ({
  rotateBlock: () => dispatch(rotateBlock()),
  shiftBlockLeft: () => dispatch(shiftBlockLeft()),
  shiftBlockRight: () => dispatch(shiftBlockRight()),
  shiftBlockDown: () => dispatch(shiftBlockDown()),
  recordFallenBlock: () => dispatch(recordFallenBlock()),
  removeRow: (row_num) => dispatch(removeRow(row_num))
});



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);
