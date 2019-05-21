import React from 'react'
import { Link } from 'react-router-dom'
import { NotesContext } from '../../context/note'
import ConfirmButton from '../confirmButton'
import { notePropType } from './type'
import { Button } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'

const ListItem = ({ note }) => {
  const { t } = useTranslation()

  return  <NotesContext.Consumer>
    {({ removeNote }) => <div className="d-flex align-items-center justify-content-between">
      {note.title}
      <div>
        <Link to={`/detail/${note.id}`} className="mr-2">
          <Button variant="outline-secondary">
            {t('Detail')}
          </Button>
        </Link>
        <Link to={`/edit/${note.id}`} className="mr-2">
          <Button variant="outline-info">
            {t('Edit')}
          </Button>
        </Link>
        <ConfirmButton 
          variant="outline-danger" 
          text={t('Delete')} 
          action={() => removeNote(note.id)} />
      </div>
    </div>}
  </NotesContext.Consumer>
}

ListItem.propTypes = {
  note: notePropType
}

export default ListItem
