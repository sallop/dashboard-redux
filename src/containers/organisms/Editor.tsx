import { connect, Dispatch } from 'react-redux';
import Editor from '../../components/molecules/Editor';
import { StoreState, Member } from '../../types';
import { Action, setValueToEditor } from '../../actions';

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
    // onChange: (name: any, value: any) => {
    //   console.log(`onChange`);
    //   // dispatch(setValueToEditor(member))
    // }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps 
)(Editor);
