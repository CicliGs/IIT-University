import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login/Login"
import Registration from "./pages/Registration/Registration"
import News from "./pages/News/News"
import Schedule from "./pages/Schedule/Schedule"
import Header from "./components/Header"

export default function App() {
  return (
    <>
      {/*<Header />*/}
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/news' element={<News />} />
          <Route path='/schedule' element={<Schedule />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Registration />} />
        </Routes>
      </main>
    </>
  )
}

