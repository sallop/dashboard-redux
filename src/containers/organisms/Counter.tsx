// import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { Action, pushIncrement, pushDecrement } from '../../actions';
// import { CounterState } from '../../types';
import { GlobalState } from '../../reducers';
import Counter from '../../components/atoms/Counter';

const mapStateToProps = (state: GlobalState) => {
  return {
    value: state.counter.value
  };
};

// const mapDispatchToProps = (dispatch: Dispatch<Action>, ownProps: Props) => {
const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
  return {
    onIncrement: () => {
      dispatch(pushIncrement());
    },
    onDecrement: () => {
      dispatch(pushDecrement());
    }
  };
};

// export default connect<StateProps, DispatchProps>(
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
