// import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { Action, pushIncrement, pushDecrement } from '../../actions';
import { StoreState } from '../../types';
import Counter from '../../components/atoms/Counter';

const mapStateToProps = (state: StoreState) => {
  console.log(`mapStateToProps=`);
  console.log(`${JSON.stringify(state)}`);
  return {
    value: state.value
  };
};

// interface Props {
//   value: number;
// }

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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter as any);