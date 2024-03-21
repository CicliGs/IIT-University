import { useContext, useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import { Context } from "./main"
import Home from "./pages/Home"
import Login from "./pages/Login/Login"
import Registration from "./pages/Registration/Registration"
import News from "./pages/News/News"
import IITSchedule from "./pages/Schedule/IITShedule"
import ScheduleFEIS from "./pages/Schedule/ScheduleFEIS"
import Labs from "./pages/Labs"
import Materials from "./pages/Materials"
import Exam from "./pages/Exam"
import Teachers from "./pages/Teachers"

export default function App() {
  const {store} = useContext(Context)

  useEffect(() => {
    if(localStorage.getItem('token')){
      store.checkAuth()
    }
  })

  return (
    <>
      {/*<Header />*/}
      <main>
        <Routes>
          <Route path='/' element={<PublicElement> <Home /> </PublicElement>} />
          <Route path='/news' element={<PublicElement> <News /> </PublicElement>} />
          <Route path='/schedule-feis' element={<ScheduleFEIS/>}/>
          <Route path='/schedule' element={<IITSchedule />}/>
          <Route path='/labs' element={<Labs />} />
          <Route path='/materials' element={<Materials />} />
          <Route path='/exam' element={<Exam />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Registration />} />
          <Route path='/teachers' element={< Teachers/>} />
        </Routes>
      </main>
    </>
  )
}

const USER_TYPES = {
  PUBLIC: 'Public user',
  USER: 'Normal user',
  TEACHER: 'Teacher',
  ADMIN: 'Admin'
}

function PublicElement({ children }){
  return <>{children}</>
}
function UserElement({ children }){
  if(CURRENT_USER_TYPE === USER_TYPES.USER || CURRENT_USER_TYPE === USER_TYPES.TEACHER || CURRENT_USER_TYPE === USER_TYPES.ADMIN){
    return <>{ children }</>
  }else{
    return <h1>У вас нет доступа к этой странице</h1>
  }
}
function TeacherElement({ children }){
  if(CURRENT_USER_TYPE === USER_TYPES.TEACHER || CURRENT_USER_TYPE === USER_TYPES.ADMIN){
    return <>{ children }</>
  }else{
    return <h1>У вас нет доступа к этой странице</h1>
  }
}
function AdminElement({ children }){
  if(CURRENT_USER_TYPE === USER_TYPES.ADMIN){
    return <>{ children }</>
  }else{
    return <h1>У вас нет доступа к этой странице</h1>
  }
}

