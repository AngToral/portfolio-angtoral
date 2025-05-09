import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from '@material-tailwind/react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Proyecto from './components/Proyecto.jsx'
import Historia from './components/Historia.jsx'
import Mariana from './components/Mariana.jsx'
import Joshua from './components/Joshua.jsx'
import i18next from 'i18next'
import { I18nextProvider } from "react-i18next";
import home_es from "./translations/es/home.json"
import home_en from "./translations/en/home.json"
import budget_es from "./translations/es/budget.json"
import budget_en from "./translations/en/budget.json"
import story_es from "./translations/es/story.json"
import story_en from "./translations/en/story.json"
import mariana_es from "./translations/es/mariana.json"
import mariana_en from "./translations/en/mariana.json"
import joshua_es from "./translations/es/joshua.json"
import joshua_en from "./translations/en/joshua.json"


i18next.init({
  interpolation: { escapeValue: false },
  lng: "es",
  resources: {
    es: {
      home: home_es,
      budget: budget_es,
      story: story_es,
      mariana: mariana_es,
      joshua: joshua_es,
    },
    en: {
      home: home_en,
      budget: budget_en,
      story: story_en,
      mariana: mariana_en,
      joshua: joshua_en,
    }
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <I18nextProvider i18n={i18next}>
          <Routes>
            <Route
              exact
              path="/"
              element={<App />}
            />
            <Route
              exact
              path="/budget-wise"
              element={<Proyecto />}
            />
            <Route
              exact
              path="/historia"
              element={<Historia />}
            />
            <Route
              exact
              path="/mariana-mendoza"
              element={<Mariana />}
            />
            <Route
              exact
              path="/joshuas-training"
              element={<Joshua />}
            />
          </Routes>
        </I18nextProvider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
)
