import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from '@material-tailwind/react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Proyecto from './components/Proyecto.jsx'
import Bitacora from './components/Bitacora.jsx'
import Historia from './components/Historia.jsx'
import Inicio from './components/inicio.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          {/* <Route
            exact
            path="/"
            element={<Inicio />}
          /> */}
          <Route
            exact
            path="/"
            element={<App />}
          />
          <Route
            exact
            path="/proyecto"
            element={<Proyecto />}
          />
          <Route
            exact
            path="/bitacora"
            element={<Bitacora />}
          />
          <Route
            exact
            path="/historia"
            element={<Historia />}
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
)
