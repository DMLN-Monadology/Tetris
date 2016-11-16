import { connect } from 'react-redux';
import Game from './game';
import {rotateBlock} from '../../actions/block_actions';

const mapStateToProps = (state) => ({
  game: state.game
});

const mapDispatchToProps = dispatch => ({
  rotateBlock: () => dispatch(rotateBlock())
});



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);
