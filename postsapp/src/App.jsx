import { useState } from 'react'
import './App.css'
import DrawerAppBar from './components/NavBar'
import PostCard from './components/Post'
import PostList from './components/PostsList'
import { ThemeProvider } from '@mui/material/styles'
import { tealTheme } from './themes/tealTheme'
import { purpleTheme } from './themes/purpleTheme'
import { Routes, Route } from "react-router-dom"


function App() {

  return (
    <div className="App">
      <ThemeProvider theme={tealTheme}>
        <DrawerAppBar />
        {/* <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard /> */}
        <PostList />
      </ThemeProvider>
      <h1>Hello</h1>
    </div>
  )
}

export default App
