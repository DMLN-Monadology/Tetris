import { connect } from 'react-redux';
import Game from './game';

const mapStateToProps = (state) => ({
  game: state.game
});

const mapDispatchToProps = dispatch => ({

});



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);
