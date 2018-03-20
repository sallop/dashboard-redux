import { connect, Dispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Action, pushIncrement, pushDecrement } from '../../actions';
import { GlobalState } from '../../reducers';
import { getIdToken } from '../../Auth/selectors';
import {
  RestrictedPage,
  RestrictedPageProps,
  StateProps,
  DispatchProps,
} from '../../components/molecules/RestrictedPage';

// https://github.com/jch254/starter-pack/blob/typescript/src/auth/RestrictedPage.tsx
const mapStateToProps = (state: GlobalState, ownProps: RestrictedPageProps): StateProps => {
  return {
    idToken: getIdToken(state),
  };
};

// const mapDispatchToProps = (dispatch: Dispatch<Action>, ownProps: Props) => {
const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
  return { //                     Function or Object
    actions: bindActionCreators({ loginRequest }, dispatch),
  };
};

// export default connect<StateProps, DispatchProps>(
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestrictedPage);
