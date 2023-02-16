import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Certificados from './Components/Pages/Certificados/Certificados'
import Contato from './Components/Pages/Contato/Contato'
import Experiencias from './Components/Pages/Experiencias/Experiencias'
import Header from './Components/Header/Header'
import Projetos from './Components/Pages/Projetos/Projetos'
import Sobre from './Components/Pages/Sobre/Sobre'


function App() {

  return (
    <BrowserRouter>
      <div style={{display: 'flex'}}>
        <Header />
        <Routes>
          <Route path='/igorbdev' element={<Sobre />} />
          <Route path='/Projetos' element={<Projetos />} />
          <Route path='/Certificados' element={<Certificados />} />
          <Route path='/Experiencias' element={<Experiencias />} />
          <Route path='/Contato' element={<Contato />} />
        </Routes>
      </div>

    </BrowserRouter>
  )
}

export default App
