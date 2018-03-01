import { connect, Dispatch } from 'react-redux';
import Editor from '../../components/molecules/Editor';
import { StoreState, Member } from '../../types';
import {
  Action,
  setValueToEditor,
  submitValueFromEditor,
  changeValueInEditor
} from '../../actions';

const mapStateToProps = (state: StoreState) => {
  console.log(`mapStateToProps`);
  return {
    editor: state.editor
  };
};

// const mapDispatchToProps = (dispatch: Dispatch<Action>, ownProps: Props)
const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
  return {
    onClick: (member: Member) => {
      console.log(`${JSON.stringify(member)}`);
      dispatch(setValueToEditor(member));
    },
    onSubmit: (member: Member) => {
      dispatch(submitValueFromEditor(member));
      // dispatch(submitValueFromEditor(member));
    },
    onChange: (key: string, value: string) => {
      console.log(`mapDispatchToProps.onChange = ${value}`);
      dispatch(changeValueInEditor(key, value));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps 
)(Editor);
