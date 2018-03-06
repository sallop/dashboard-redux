import { connect, Dispatch } from 'react-redux';
import MemberTable from '../../components/molecules/MemberTable';
// import { TableState, Member } from '../../types';
import { GlobalState } from '../../reducers';
import { Member } from '../../types';
import { Action, setValueToEditor, fetchMembers } from '../../actions';

const mapStateToProps = (state: GlobalState) => {
  return { members: state.table.members };
};

// const mapDispatchToProps = (dispatch: Dispatch<Action>, ownProps: IMemberTable) => {
const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
  return {
    onClick: (member: Member) => {
      dispatch(setValueToEditor(member));
    },
    onUpdate: () => {
      dispatch(fetchMembers());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MemberTable);
