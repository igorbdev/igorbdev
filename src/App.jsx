import { useEffect, useRef } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Header from './Components/Header/Header'
import Sobre from './Components/Sobre/Sobre'
import Certificados from './Components/Certificados/Certificados'
import Projetos from './Components/Projetos/Projetos'

const App = () => {

  return (
    <div className='App'>
      <Header />
      <Banner />
      <Sobre />
      <Certificados />
      <Projetos />
    </div>
  )
}

export default App
