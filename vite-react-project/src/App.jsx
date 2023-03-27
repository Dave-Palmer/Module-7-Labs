import './App.css'
import React from 'react'
import Counter from './components/Counter'
import WindowResizer from './components/WindowReziser'
import LoginComponent from './components/Login'
import { ThemeProvider } from './context/ThemeContext'
import HookClockDisplay from './components/Clock'
import { UsernameProvider } from './context/UserContext'
import HeadingsExample from './components/HeadingsExample'
import Hello from './components/Hello'
import EmojisDisplay from './components/EmojiComponent'
import { EmojiProvider } from './context/EmojiContext'
import AppRoutes from './routes/Approutes'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
// import 'bootstrap/dist/css/bootstrap.min.css';



function App() {

  return (
    <div className="App components">

      <ThemeProvider>
        <UsernameProvider>
          <EmojiProvider>
            <NavBar />
            <AppRoutes />
            {/* <EmojisDisplay /> */}
            {/* <Hello /> */}
            {/* <Counter /> */}
            {/* <WindowResizer /> */}
            {/* <HookClockDisplay /> */}
            {/* <HeadingsExample /> */}
            <Footer />
          </EmojiProvider>
        </UsernameProvider>
      </ThemeProvider>






    </div>
  )
}

export default App

// create a new context UserContext which stores the value of the username from the Login form once you successfully login
// then update the Counter component to say username clicked 0 times instead of You



{/* <div>
<a href="https://vitejs.dev" target="_blank">
  <img src={viteLogo} className="logo" alt="Vite logo" />
</a>
<a href="https://reactjs.org" target="_blank">
  <img src={reactLogo} className="logo react" alt="React logo" />
</a>
</div>
<h1>Vite + React</h1>
<div className="card">
<button onClick={() => setCount((count) => count + 1)}>
  count is {count}
</button>
<p>
  Edit <code>src/App.jsx</code> and save to test HMR
</p>
</div>
<p className="read-the-docs">
Click on the Vite and React logos to learn more
</p> */}


