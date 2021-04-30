import React from 'react';
import './App.css';
import firebase from 'firebase';
import SidebarComponent from "./sidebar/sidebar"
import EditorComponent from "./editor/editor"

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedNoteIndex: null,
      selectedNote: null,
      notes: null,
    };
  }

  componentDidMount = () => {
    firebase
      .firestore()
      .collection('notes')
      .onSnapshot((serverUpdate) => {
        const notes = serverUpdate.docs.map((doc) => {
          const data = doc.data();
          return data;
        });
        console.log(notes);
        this.setState({ notes });
      });
  };

  render() {
    return (
    <div>
      <SidebarComponent></SidebarComponent>
      <EditorComponent></EditorComponent>
    </div>
    );
  }
}
export default App;
