import { Route, Routes } from "react-router-dom"
import Home from './pages/Home'
import NewContact from "./pages/NewContact"
import Edit from "./pages/Edit"
import Detail from "./pages/Detail"


function App() {

  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/new-contact" element={<NewContact/>}/>
      <Route path="/edit/:id" element={<Edit/>}/>
      <Route path="/detail/:id" element={<Detail/>}/>
    </Routes>
  )
}

export default App
