import './App.css'
import React from 'react'
import Counter from './components/Counter'
import WindowResizer from './components/WindowReziser'
import LoginComponent from './components/Login'
// import { ThemeProvider } from './context/ThemeContext'
import HookClockDisplay from './components/Clock'
import { UsernameProvider } from './context/UserContext'
import HeadingsExample from './components/HeadingsExample'
import Hello from './components/Hello'
import EmojisDisplay from './components/EmojiComponent'
import { EmojiProvider } from './context/EmojiContext'
import AppRoutes from './routes/Approutes'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import { ErrorBoundary } from 'react-error-boundary'
import ErrorMessage from './components/ErrorHandler'
import { ThemeProvider } from '@mui/material/styles'
// import 'bootstrap/dist/css/bootstrap.min.css';



function App() {

  return (
    <div className="App components">

      {/* <ThemeProvider> */}
      <UsernameProvider>
        <EmojiProvider>
          <NavBar />
          <ErrorBoundary FallbackComponent={ErrorMessage}>
            <AppRoutes />
            {/* <EmojisDisplay /> */}
            {/* <Hello /> */}
            {/* <Counter /> */}
            {/* <WindowResizer /> */}
            {/* <HookClockDisplay /> */}
            {/* <HeadingsExample /> */}
            <Footer />
          </ErrorBoundary>
        </EmojiProvider>
      </UsernameProvider>
      {/* </ThemeProvider> */}






    </div>
  )
}

export default App

// create a new context UserContext which stores the value of the username from the Login form once you successfully login
// then update the Counter component to say username clicked 0 times instead of You





