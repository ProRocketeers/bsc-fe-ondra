import React, { useState, useEffect } from 'react'
import { Form, Button, Row, Card, Col } from 'react-bootstrap'
import { notePropType } from './type'
import { useTranslation } from 'react-i18next'

const Edit = ({ note, history, updateNote, createNote, create = false }) => {
  const { t } = useTranslation()
  const [editedNote, setNote] = useState(note)

  useEffect(() => {
    setNote(note)
  }, [note])

  const handleSubmit = (event) => {
    event.preventDefault()
    event.stopPropagation()
    if (create) {
      createNote(editedNote).then(() => { history.push('/') })
    }
    else {
      updateNote(note.id, editedNote).then(() => { history.push('/') })
    }
  }

  if (!note && !create) {
    return <div>{t('Loading...')}</div>
  }

  return <Card>
    <Card.Body>
      <Col>
        <Form onSubmit={e => handleSubmit(e)}>
          <Form.Group as={Row} controlId="formTitle">
            <Form.Label>
              {t('Title')}:
            </Form.Label>
            <Form.Control
              type="text"
              placeholder={t('Title')}
              value={editedNote && editedNote.title}
              onChange={e => setNote({ ...editedNote, title: e.currentTarget.value })}
            />
          </Form.Group>
          <Form.Group as={Row} controlId="formDescription">
            <Form.Label>
              {t('Description')}:
            </Form.Label>
            <Form.Control
              as="textarea"
              placeholder={t('Description')}
              value={editedNote && editedNote.description}
              onChange={e => setNote({ ...editedNote, description: e.currentTarget.value })}
            />
          </Form.Group>
          <Form.Group as={Row} controlId="formButtons">
            <Button variant="info" type="submit" className="mr-2">
              {t('Submit')}            
            </Button>
            <Button
              onClick={() => history.goBack()}
              variant="outline-secondary"
              type="button">
              {t('Cancel')}            
            </Button>
          </Form.Group>
        </Form>
      </Col>
    </Card.Body>
  </Card>
}

Edit.propTypes = {
  note: notePropType
}

export default Edit