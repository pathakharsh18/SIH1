import Navbaar from "./components/Navbar"
import {Routes, Route } from 'react-router-dom';
import Login from "./pages/Login";
import SkillsCard from "./pages/SkillsCard";
import Signup from "./pages/Signup";
function App(){
  return(
    <>
      <Navbaar/>
      <Routes>
        <Route path="/" element={<SkillsCard />} />
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login />} />
      </Routes>
    </>

   
  )
}
export default App