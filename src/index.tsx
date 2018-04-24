import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
// import { History } from 'history';
import history from './history';

// import rootReducer from './reducers';
// import { StoreState } from './types';
import rootReducer, { GlobalState } from './reducers';

const store = createStore<GlobalState>(
  rootReducer,
  applyMiddleware(thunkMiddleware)
);

ReactDOM.render(
  <Provider store={store}>
    {/*
    <App />
      Type '{}' is not assignable to type 'IntrinsicAttributes & AppProps & StateProps 
      & DispatchProps & { children?: ReactNode; }'
    <App history={null} actions={null}/>
      Type '{ history: null; actions: null; }' is not assignable to type 'IntrinsicAttributes &
      AppProps & StateProps & DispatchProps & { children?: ReactNode; }'.
    */}
    <App history={history} />
  </Provider>,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();
