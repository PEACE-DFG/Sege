import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Registerpage from "./Pages/Registerpage"
import Login from "./Pages/Login"

function App() {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/register" element={<Registerpage/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      </Routes>
    </div>
  )
}

export default App