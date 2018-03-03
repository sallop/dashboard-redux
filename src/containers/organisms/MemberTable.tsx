import { connect, Dispatch } from 'react-redux';
import MemberTable from '../../components/molecules/MemberTable';
import { StoreState, Member } from '../../types';
import { Action, setValueToEditor, fetchMembers } from '../../actions';

const mapStateToProps = (state: StoreState) => {
  return { members: state.members };
};

// const mapDispatchToProps = (dispatch: Dispatch<Action>, ownProps: IMemberTable) => {
const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
  return {
    onClick: (member: Member) => {
      dispatch(setValueToEditor(member));
    },
    onUpdate: () => {
      console.log(`onUpdate()`);
      dispatch(fetchMembers());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MemberTable);
