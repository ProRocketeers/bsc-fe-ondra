import React, { useEffect } from 'react'
import { List } from '../../components/note'
import { NotesContext } from '../../context/note'

const ListPage = ({ fetchNotes }) => {
  useEffect(() => {
    fetchNotes()
  }, [fetchNotes])

  return (<NotesContext.Consumer>
    {({ notes, fetchNotes }) => <List notes={notes} />}
  </NotesContext.Consumer>)
}

export default ListPage