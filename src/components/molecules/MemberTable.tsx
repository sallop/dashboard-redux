import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Member } from '../../types';
import { setValueToEditor, fetchMembers } from '../../actions';
import './MemberTable.css';

interface Props {
  members: Member[];
  onClick: typeof setValueToEditor;
  onUpdate: typeof fetchMembers;
}

const MemberTable: React.SFC<Props> = ({ members, onClick, onUpdate }) => {

  // https://www.typescriptlang.org/docs/handbook/functions.html
  const handleUpdate = () => {
    // this parameters
    // this.props.onUpdate();
    onUpdate();
  };

  return (
    <div className="member-table">
      <table>
        <thead>
          <tr>
            <th className="uid">id</th>
            <th className="gid">班</th>
            <th>氏名</th>
            <th>かな</th>
            <th>洗礼名</th>
            <th>生年月日</th>
            <th>郵便番号</th>
            <th>住所</th>
            <th>備考</th>
          </tr>
        </thead>
        <tbody>
        {
          members.map((m, idx) => (
            <tr key={idx} onClick={() => onClick(m)}>
              <td className="uid">{m.id}</td>
              <td className="gid">{m.group}</td>
              <td>{m.name}</td>
              <td>{m.pronounce}</td>
              <td>{m.spiritualName}</td>
              <td>{m.birthday}</td>
              <td>{m.postcode}</td>
              <td>{m.address}</td>
              <td>{m.info}</td>
            </tr>
          ))
        }
        </tbody>
      </table>
      <button onClick={() => handleUpdate()}>
        <FontAwesomeIcon icon={['fas', 'sync']} />
      </button>
    </div>
  );
};

export default MemberTable;
