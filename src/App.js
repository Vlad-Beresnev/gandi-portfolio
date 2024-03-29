import './App.scss';
import { Routes, Route } from "react-router-dom"
import Layout from './components/Layout'
import Home from "./components/Home"
import About from "./components/About"
import Work from "./components/Work"
import Tour from "./components/Tour"


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="work" element={<Work />} />
        <Route path="tour" element={<Tour />} />
      </Route>
    </Routes>
    </>
  )
}

export default App;
