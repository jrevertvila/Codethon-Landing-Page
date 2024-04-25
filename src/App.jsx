import './App.css'
import { Home } from './components/Home/Home.jsx'
import { AboutUs } from './components/AboutUs/AboutUs.jsx'
import Modelos3D from './components/Modelos3D/Modelos.jsx'
import ViveExperiencia from './components/ViveLaExperiencia/ViveExperiencia.jsx'
import Modelos3D_Carrusel from './components/Modelos3D_carrusel/Modelos_Carrusel.jsx'
import { AboutProject } from './components/AboutProject/AboutProject.jsx'
import { Patrocinadores } from './components/Patronicadores/Patrocinadores.jsx'
import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'

function App() {
  const { t, i18n } = useTranslation()
  const [lang, setLang] = useState(() => JSON.parse(localStorage.getItem("lang")) || "val");

  useEffect(() => {
    // setDropdown(!dropdown)
    i18n.changeLanguage(lang)
  }, [lang]);
  return (
    <>
      <Home />
      <Patrocinadores />
      <AboutProject />
      {/* <Modelos3D /> */}
      <Modelos3D_Carrusel />
      <ViveExperiencia />
      <AboutUs />
    </>
  )
}

export default App
