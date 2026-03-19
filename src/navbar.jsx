import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Ejercicio1 from './exercises/ejercicio1'
import Ejercicio2 from './exercises/ejercicio2'
import Ejercicio3 from './exercises/ejercicio3'
import Ejercicio4 from './exercises/ejercicio4'
import Ejercicio5 from './exercises/ejercicio5'
import Ejercicio6 from './exercises/ejercicio6'
import Ejercicio7 from './exercises/ejercicio7'
import Ejercicio8 from './exercises/ejercicio8'
import Ejercicio9 from './exercises/ejercicio9'
import Home from './home'

export default function Navbar() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/eje1' element={<Ejercicio1 />} />
          <Route path='/eje2' element={<Ejercicio2 />} />
          <Route path='/eje3' element={<Ejercicio3 />} />
          <Route path='/eje4' element={<Ejercicio4 />} />
          <Route path='/eje5' element={<Ejercicio5 />} />
          <Route path='/eje6' element={<Ejercicio6 />} />
          <Route path='/eje7' element={<Ejercicio7 />} />
          <Route path='/eje8' element={<Ejercicio8 />} />
          <Route path='/eje9' element={<Ejercicio9 />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}