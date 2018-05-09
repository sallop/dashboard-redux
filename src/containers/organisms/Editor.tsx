import { connect, Dispatch } from 'react-redux';
import Editor from '../../components/molecules/Editor';
// import { TableState, Member } from '../../types';
import { Member } from '../../types';
import { GlobalState } from '../../reducers';

import {
  Action,
  setValueToEditor,
  submitValueFromEditor,
  changeValueInEditor
} from '../../actions';

// const mapStateToProps = (state: TableState) => {
const mapStateToProps = (state: GlobalState) => {
  return {
    editor: state.table.editor
  };
};

// const mapDispatchToProps = (dispatch: Dispatch<Action>, ownProps: Props)
const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
  return {
    onClick: (member: Member) => {
      dispatch(setValueToEditor(member));
    },
    onSubmit: (member: Member) => {
      dispatch(submitValueFromEditor(member));
    },
    onChange: (key: string, value: string) => {
      dispatch(changeValueInEditor(key, value));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps 
)(Editor);
