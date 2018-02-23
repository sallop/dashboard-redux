// import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { Action, pushIncrement, pushDecrement } from '../../actions';
import { StoreState } from '../../types';
import Counter from '../../components/atoms/Counter';

const mapStateToProps = (state: StoreState) => {
  return {
    value: state.value
  };
};

// const mapDispatchToProps = (dispatch: Dispatch<Action>, ownProps: IEditor) => {
const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
  return {
    onIncrement: (value: number) => {
      console.log(`value = ${value}`);
      dispatch(pushIncrement(value));
    },
    onDecrement: (value: number) => {
      console.log(`value = ${value}`);
      dispatch(pushDecrement(value));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter as any);
