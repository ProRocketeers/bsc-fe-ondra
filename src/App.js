import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { ListPage, DetailPage, EditPage } from './pages/note'
import NotesProvider from './context/note'
import { NotesContext } from './context/note'
import { Container, Button } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import LanguageBar from './components/languageBar'

const App = () => {
  const { t } = useTranslation()

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Container className="mt-4 mb-4 d-flex justify-content-between">
            <Link to="/new">
              <Button variant="outline-primary">
                {t('New')}
              </Button>
            </Link>
            <LanguageBar/>
          </Container>
        </header>
        <main>
          <Container>
            <NotesProvider>
              <NotesContext.Consumer>
                {({ fetchNotes, fetchNote }) => <>
                    <Route exact path="/" render={props => (
                      <ListPage fetchNotes={fetchNotes} />
                    )} />
                    <Route exact path={['/new', '/edit/:noteId']} render={props => (
                      <EditPage {...props} fetchNote={fetchNote} />
                    )} />
                    <Route exact path="/detail/:noteId" render={props => (
                      <DetailPage {...props} fetchNote={fetchNote} />
                    )} />
                  </>}
              </NotesContext.Consumer>
            </NotesProvider>
          </Container>
        </main>
      </div>
    </Router>
  )
}

export default App
