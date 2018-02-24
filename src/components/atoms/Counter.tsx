import * as React from 'react';

const styles = {
  counter: {
    width: '100px',
    fontSize: '0.75rem',
    border: '1px solid black',
    backgroundColor: '#9db6dd',
  },
  counterDisplay: {
    display: 'inline',
    fontSize: '2rem',
    color: '#586272'
  },
  button: {
    display: 'inline-block',
    color: '#8f9eb7',
    backgroundColor: '#586272',
  }
};

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
    return (
      <div className="counter" style={styles.counter}>
        <div style={styles.counterDisplay}>{value}</div>
        <button onClick={onIncrement} style={styles.button}>+</button>
        <button onClick={onDecrement} style={styles.button}>-</button>
      </div>
    );
  }
}

export default Counter;