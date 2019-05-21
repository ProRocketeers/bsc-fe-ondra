import React from 'react'
import { notePropType } from './type'
import { Form, Button, Row, Col, Card } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'

const Detail = ({ note, history }) => {
  const { t } = useTranslation()
  
  if (!note) {
    return <div>{t('Loading...')}</div>
  }

  return <Card>
    <Card.Body>
      <Form>
        <Form.Group as={Row} controlId="formTitle">
          <Form.Label column sm="3" lg="2">
            {t('Title')}:
          </Form.Label>
          <Col sm="9" lg="10">
            <Form.Control
              plaintext
              defaultValue={note.title}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formDescription">
          <Form.Label column sm="3" lg="2">
            {t('Description')}:
          </Form.Label>
          <Col sm="9" lg="10">
            <p className="text-justify">{note.description}</p>
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formButtons">
          <Col>
            <Button
              onClick={() => history.goBack()}
              variant="outline-secondary"
              type="button">
              {t('Back')}
            </Button>
          </Col>
        </Form.Group>
      </Form>
    </Card.Body>
  </Card>
}

Detail.propTypes = {
  note: notePropType
}

export default Detail