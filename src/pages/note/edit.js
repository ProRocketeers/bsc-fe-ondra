import React, { useEffect } from 'react'
import { Edit } from '../../components/note'
import { NotesContext } from '../../context/note'

const EditPage = ({ match, history, fetchNote }) => {
  const noteId = match.params.noteId

  useEffect(() => {
    if (noteId) {
      fetchNote(noteId)
    }
  }, [noteId, fetchNote])

  return (
    <NotesContext.Consumer>
      {({ notes, updateNote, createNote }) => <Edit
        note={notes.find(note => note.id === noteId)}
        create={noteId ? false : true}
        history={history}
        updateNote={updateNote}
        createNote={createNote} />}
    </NotesContext.Consumer>
  )
}

export default EditPage