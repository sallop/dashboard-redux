import * as React from 'react';
import { Member } from '../../types';
import { setValueToEditor } from '../../actions';

const styles = {
  table: {
    border: 'solid 1px black',
  },
  id: {
    display: 'inline',
    width: '2rem',
    height: '1rem',
    border: 'solid 1px black',
    margin: '2px',
  },
  group: {
    display: 'inline',
    width: '2rem',
    height: '1rem',
    border: 'solid 1px black',
    margin: '2px',
  },
  name: {
    display: 'inline',
    width: '2rem',
    height: '1rem',
    border: 'solid 1px black',
    margin: '2px',
  }
};

interface Props {
  members: Member[];
  onClick: typeof setValueToEditor;
}

const MemberTable: React.SFC<Props> = ({ members, onClick }) => {
  return (
    <div style={styles.table} className="member-table">
    {
      members.map((m, idx) => (
        <div key={idx} onClick={() => onClick(m)}>
          <div style={styles.id}>{m.id}</div>
          <div style={styles.group}>{m.group}</div>
          <div style={styles.name}>{m.name}</div>
        </div>
      ))
    }
    </div>
  );
};

export default MemberTable;
