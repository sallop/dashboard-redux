import * as React from 'react';
import { Member } from '../../types';
import {
  setValueToTable,
  submitValueFromEditor,
  changeValueInEditor
} from '../../actions';
import './Editor.css';
 
interface Props {
  editor: Member;
  onClick: typeof setValueToTable;
  onSubmit: typeof submitValueFromEditor;
  onChange: typeof changeValueInEditor;
}

interface State {
  editor: Member;
}

class Editor extends React.Component<Props, State> {
  state: State = {
    editor: this.props.editor,
  };

  // handleSubmit = (event: React.FormEvent<HTMLInputElement>) => {
  // handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  handleSubmit = () => {
    this.props.onSubmit(this.props.editor);
    // this.props.onSubmit(this.state.editor); // NOTE: componet's state
  }
  // https://reactjs.org/docs/forms.html
  handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const target = event.currentTarget;
    const { name, value } = target;
    this.props.onChange(name, value);
  }

  render() {
    let editor = this.props.editor;
    return (
      <div className="editor">
        <form>
        {
          Object.keys(editor).map((key) => {
            return (
              <div key={key + '-field'} className="form-row">
                <label key={key + '-label'}>{key}:</label>
                <input
                   type="text"
                   name={key}
                   value={this.props.editor[key]}
                   onChange={e => this.handleChange(e)}
                />
              </div>
            );
          })
        }
        </form>
        <button onClick={this.handleSubmit}>
          OK
        </button>
      </div>
    );
  }
}

export default Editor;
