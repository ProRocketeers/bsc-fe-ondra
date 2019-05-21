import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import cs from './assets/cs_i18n'
import en from './assets/en_i18n'
import { initReactI18next } from 'react-i18next'
import i18n from 'i18next'

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: en
      },
      cs: {
        translation: cs
      }
    },
    lng: 'en',
    fallbackLng: ['en', 'cs'],
  })


ReactDOM.render(<App />, document.getElementById('root'))
