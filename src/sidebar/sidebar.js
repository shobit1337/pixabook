import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import { Divider, Button } from '@material-ui/core';
import styles from './styles';
import SidebarItemComponent from '../sidebaritem/sidebarItem';

class SidebarComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      addingNote: false,
      title: null,
    };
  }

  newNoteBtnClick = () => {
    this.setState({ title: null, addingNote: !this.state.addingNote });
    console.log('new note button clicked');
  };

  updateTitle = (txt) => {
    this.setState({ title: txt });
  };
  newNote = () => {
    this.props.newNote(this.state.title);
    this.setState({ addingNote: !this.state.addingNote });
  };
  selectNote = (note, index) => {
    this.props.selectNote(note, index);
  };
  deleteNote = (note) => {
    this.props.deleteNote(note);
    console.log('note deleted');
  };

  render() {
    const { notes, classes, selectedNoteIndex } = this.props;
    if (notes) {
      return (
        <div className={classes.sidebarContainer}>
          <Button onClick={this.newNoteBtnClick} className={classes.newNoteBtn}>
            {this.state.addingNote ? 'Cancle' : 'New Note'}
          </Button>
          {this.state.addingNote ? (
            <div>
              <input
                type="text"
                className={classes.newNoteInput}
                placeholder="Enter Note title"
                onKeyUp={(e) => this.updateTitle(e.target.value)}
              />
              <Button
                className={classes.newNoteSubmitBtn}
                onClick={this.newNote}
              >
                Submit
              </Button>
            </div>
          ) : null}
          <List>
            {notes.map((note, index) => {
              return (
                <div key={index}>
                  <SidebarItemComponent
                    note={note}
                    index={index}
                    selectedNoteIndex={selectedNoteIndex}
                    selectNote={this.selectNote}
                    deleteNote={this.deleteNote}
                  />
                  <Divider />
                </div>
              );
            })}
          </List>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

export default withStyles(styles)(SidebarComponent);
