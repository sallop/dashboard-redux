import * as React from 'react';
import { Member } from '../../types';
import {
  setValueToTable,
  submitValueFromEditor,
  changeValueInEditor
} from '../../actions';
 
interface Props {
  editor: Member;
  onClick: typeof setValueToTable;
  onSubmit: typeof submitValueFromEditor;
  onChange: typeof changeValueInEditor;
}

interface State {
  editor: Member;
}

const styles = {
  editor: {
    border: 'solid 1px black',
  },
  id: {
    display: 'inline',
    border: 'solid 1px black',
    margin: '0.25rem',
    backgroundColor: '#a9b6cc',
  },
  group: {
    display: 'inline',
    border: 'solid 1px black',
    margin: '0.25rem',
    backgroundColor: '#a9b6cc',
  },

  name: {
    display: 'inline',
    border: 'solid 1px black',
    margin: '0.25rem',
    backgroundColor: '#a9b6cc',
  }
};

class Editor extends React.Component<Props, State> {
  state: State = {
    editor: this.props.editor,
  };

  handleSubmit = (event: React.FormEvent<HTMLInputElement>) => {
    console.log(`target = ${event.target}`);
    console.log(`timeStamp = ${event.timeStamp}`);
    console.log(`type = ${event.type}`);

    // console.log(`${JSON.stringify(event)}`);
  }
  handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const key = 'name';
    const value = event.currentTarget.value;
    console.log(`value = ${value}`);
    console.log(`type = ${event.type}`);
    this.props.onChange(key, value);
  }

  render() {
    let editor = this.props.editor;
    console.log(`Editor = ${JSON.stringify(editor)}`);
    return (
      <div style={styles.editor} className="editor">
        <form>
          <input type="text" value={this.props.editor.name} onChange={e => this.handleChange(e)}/>
        </form>
      </div>
    );
  }
}

export default Editor;

// <div>Editor</div>
// <div style={styles.id}>{editor.id}</div>
// <div style={styles.group}>{editor.group}</div>
// <div style={styles.name}>{editor.name}</div>
