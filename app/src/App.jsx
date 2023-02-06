import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home, Login, Recovery, Register } from './pages'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/recovery' element={<Recovery />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
