import * as React from 'react';
// import { connect, Dispatch } from 'react-redux';
// import { Action, pushIncrement, pushDecrement } from '../../actions';
 
interface Props {
  value: number;
  onIncrement: any; // Function;
  onDecrement: any; // Function;
}

interface State {
}

class Counter extends React.Component<Props, State> {
  constructor(props: Props, state: State) {
    super(props);
  }

  render() {
    const { value, onIncrement, onDecrement } = this.props;
    console.log(`Counter = ${JSON.stringify(this.props)}`);
    console.log(`Counter = ${JSON.stringify(this.props.onIncrement)}`);
    console.log(`Counter = ${JSON.stringify(this.props.onDecrement)}`);

    return (
      <div className="counter">
        <div>{value}</div>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
      </div>
    );
  }
}

export default Counter;
