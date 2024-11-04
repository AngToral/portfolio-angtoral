import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from '@material-tailwind/react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Proyecto from './components/Proyecto.jsx'
import Bitacora from './components/Bitacora.jsx'
import Historia from './components/Historia.jsx'
import i18next from 'i18next'
import { I18nextProvider } from "react-i18next";
import home_es from "./translations/es/home.json"
import home_en from "./translations/en/home.json"
// import Inicio from './components/inicio.jsx'

i18next.init({
  interpolation: { escapeValue: false },
  lng: "es",
  resources: {
    es: {
      home: home_es,
    },
    en: {
      home: home_en,
    }
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <I18nextProvider i18n={i18next}>
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
        </I18nextProvider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
)
