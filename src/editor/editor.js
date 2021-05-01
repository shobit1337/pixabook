import React from 'react';
import ReactQuill from 'react-quill';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import debounce from '../helpers';

class EditorComponent extends React.Component {
  update = debounce(() => {
    this.props.noteUpdate(
      {
        title: this.state.title,
        body: this.state.text,
      },
      this.state.id
    );
    console.log('Updating database');
  }, 1500);

  constructor() {
    super();
    this.state = {
      text: '',
      title: '',
      id: '',
    };
  }
  updateBody = async (val) => {
    await this.setState({ text: val });
    this.update();
  };

  updateTitle = async (title) => {
    await this.setState({ title: title });
    this.update();
  };

  componentDidMount = () => {
    this.setState({
      text: this.props.selectedNote.body,
      title: this.props.selectedNote.title,
      id: this.props.selectedNote.id,
    });
  };

  componentDidUpdate = () => {
    if (this.props.selectedNote.id !== this.state.id) {
      this.setState({
        text: this.props.selectedNote.body,
        title: this.props.selectedNote.title,
        id: this.props.selectedNote.id,
      });
    }
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.editorContainer}>
        <BorderColorIcon className={classes.editIcon} />
        <input
          className={classes.titleInput}
          placeholder="Note title..."
          value={this.state.title ? this.state.title : ''}
          onChange={(e) => this.updateTitle(e.target.value)}
        />
        <ReactQuill value={this.state.text} onChange={this.updateBody} />
      </div>
    );
  }
}

export default withStyles(styles)(EditorComponent);
