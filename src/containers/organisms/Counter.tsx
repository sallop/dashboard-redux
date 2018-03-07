// import * as React from 'react';
// <<<<<<< HEAD
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
// // =======
// // import { connect, Dispatch } from 'react-redux';
// // import { Action, pushIncrement, pushDecrement } from '../../actions';
// // import { StoreState } from '../../types';
// import Counter from '../../components/atoms/Counter';

// const mapStateToProps = (state: StoreState) => {
//   return {
//     value: state.value
//   };
// };
// >>>>>>> 8995a0a62905eff41330cc0530051ad5e6459283

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

// export default Counter;
