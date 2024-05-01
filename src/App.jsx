import './App.css'
import { Home } from './components/Home/Home.jsx'
import { AboutUs } from './components/AboutUs/AboutUs.jsx'
// import Modelos3D from './components/Modelos3D/Modelos.jsx'
import ViveExperiencia from './components/ViveLaExperiencia/ViveExperiencia.jsx'
// import Modelos3D_Carrusel from './components/Modelos3D_carrusel/Modelos_Carrusel.jsx'
import Modelos3d_2 from './components/Modelos3D_carousel_2/modelos3d_carousel.jsx'
import { AboutProject } from './components/AboutProject/AboutProject.jsx'
import { Patrocinadores } from './components/Patronicadores/Patrocinadores.jsx'
import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'
import { Header } from './components/Header/Header.jsx'

function App() {
  const { t, i18n } = useTranslation()
  const [lang, setLang] = useState(() => JSON.parse(localStorage.getItem("lang")) || "val");

  useEffect(() => {
    // setDropdown(!dropdown)
    i18n.changeLanguage(lang)
  }, [lang]);
  return (
    <>
      <Header />
      <Home />
      <Patrocinadores />
      <AboutProject />

      <Modelos3d_2/>
      {/* <ViveExperiencia /> */}
      {/* <AboutUs /> */}
    </>
  )
}

export default App
