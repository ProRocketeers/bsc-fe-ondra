import React from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from 'react-bootstrap'

const LanguageBar = () => {
  const { t, i18n } = useTranslation()

  const languageButtonsHTML = i18n.languages.sort().map(lang => {
    return <Button 
      variant={i18n.language === lang ? 'link': 'outline-secondary'} 
      key={lang} 
      onClick={() => i18n.changeLanguage(lang)}
      className="ml-2">
      {t(`Language ${lang.toUpperCase()}`)}
    </Button>
  })

  return <div>
    {languageButtonsHTML}
  </div>
}

export default LanguageBar