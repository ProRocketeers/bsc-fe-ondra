import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Button } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'

const ConfirmButton = ({ text, action, variant }) => {
  const { t } = useTranslation()
  const [clicks, incClick] = useState(0)
  const [currentText, setText] = useState(text)
  const confirmText = t('Are you sure?')

  useEffect(() => {
    switch (clicks) {
    case 1:
      setText(confirmText)
      break
    case 2:
      action()
      incClick(0)
      break
    default:
      setText(text)
    }
  }, [clicks, action, text])

  return <Button variant={variant} onClick={() => incClick(clicks + 1)}>
    {currentText}
  </Button>
}

ConfirmButton.propTypes = {
  text: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired
}

export default ConfirmButton
