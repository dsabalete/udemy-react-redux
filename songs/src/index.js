import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import App from './components/App'
import { songsReducer, selectedSongReducer } from './reducers'

ReactDOM.render(
  <Provider
    store={configureStore({
      reducer: {
        songs: songsReducer,
        selectedSong: selectedSongReducer
      }
    })}
  >
    <App />
  </Provider>,
  document.querySelector('#root')
)
