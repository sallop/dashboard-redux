import { connect, Dispatch } from 'react-redux';
import MemberTable from '../../components/molecules/MemberTable';
import { StoreState, Member } from '../../types';
import { Action, setValueToEditor } from '../../actions';

const mapStateToProps = (state: StoreState) => {
  console.log(`mapStateToProps ${JSON.stringify(state)}`);
  return { members: state.members };
};

// const mapDispatchToProps = (dispatch: Dispatch<Action>, ownProps: IMemberTable) => {
const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
  console.log(`mapDispatchToProps ${dispatch}`);
  return {
    onClick: (member: Member) => {
      dispatch(setValueToEditor(member));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MemberTable);
