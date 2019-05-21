import React from 'react'
import axios from '../axios'

export const NotesContext = React.createContext();

class NotesProvider extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      notes: []
    }
  }

  fetchNotes = async () => {
    axios.get('notes.json')
      .then(({ data }) => {
        const resultArray = [];

        for (let key in data) {
          resultArray.push({ ...data[key], id: key });
        }

        this.setState({
          notes: resultArray
        })
      })
  }

  removeNote = async (id) => {
    axios.delete(`notes/${id}.json`)
      .then(response => {
        this.setState({
          notes: this.state.notes.filter(note => note.id !== id)
        })
      })
  }

  fetchNote = async (id) => {
    let note = this.state.notes && this.state.notes.find(note => note.id === id)

    if (note) {
      return note
    }

    axios.get(`notes/${id}.json`)
      .then(({ data }) => {
        this.setState({
          notes: [
            ...this.state.notes, 
            { id, title: data.title, description: data.description }]
        })
      })
  }

  updateNote = async (id, { title, description }) => {
    axios.put(`notes/${id}.json`, { title, description })
      .then(({ data }) => {
        this.setState({
          notes: [
            ...this.state.notes.filter(note => note.id !== id), 
            { id, title: data.title, description: data.description }]
        })
      })
  }

  createNote = async ({ title, description }) => {
    axios.post('notes.json', { title, description })
      .then(({ data }) => {
        this.fetchNote(data.name)
      })
  }

  render() {
    return (
      <NotesContext.Provider value={{
        ...this.state,
        fetchNotes: this.fetchNotes,
        removeNote: this.removeNote,
        fetchNote: this.fetchNote,
        updateNote: this.updateNote,
        createNote: this.createNote,
      }}>
        {this.props.children}
      </NotesContext.Provider>
    )
  }
}

export default NotesProvider
