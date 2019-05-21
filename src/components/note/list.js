import React from 'react'
import ListItem from './listItem'
import { PropTypes } from 'prop-types'
import { notePropType } from './type'
import { ListGroup, Card } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'

const List = ({ notes }) => {
  const { t } = useTranslation()

  if (!notes || !notes.length) {
    return <div>{t('Loading...')}</div>
  }

  const notesHTML = notes.map(note => 
    <ListGroup.Item key={note.id}>
      <ListItem note={note}/>
    </ListGroup.Item>
  )
  return <Card>
    <ListGroup>
      {notesHTML}
    </ListGroup>
  </Card>
}

List.propTypes = {
  notes: PropTypes.arrayOf(notePropType)
}

export default List
