import React, { useEffect } from 'react'
import { NotesContext } from '../../context/note'
import { Detail } from '../../components/note'

const DetailPage = ({ match, history, fetchNote }) => {
  useEffect(() => {
    fetchNote(match.params.noteId)
  }, [fetchNote, match.params.noteId])

  return (
    <NotesContext.Consumer>
      {({ notes }) => <Detail 
        note={notes.find(note => note.id === match.params.noteId)} 
        history={history} />}
    </NotesContext.Consumer>
  )
}

export default DetailPage