import { useContext, useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import { Context } from "./main"
import Home from "./pages/Home/Home"
import Login from "./pages/Login/Login"
import Registration from "./pages/Registration/Registration"
import News from "./pages/News/News"
import EditPost from "./pages/News/EditPost"
import IITSchedule from "./pages/Schedule/IITShedule"
import ScheduleFEIS from "./pages/Schedule/ScheduleFEIS"
import Labs from "./pages/Students/Labs/Labs"
import Materials from "./pages/Students/Materials/Materials"
import Exam from "./pages/Students/Exam/Exam"
import Teachers from "./pages/Teachers"
import UserRoute from "./utils/router/userRoute"
import TeacherRoute from "./utils/router/teacherRoute"
import Profile from "./pages/Profile"
import AdminRoute from "./utils/router/adminRoute"
import Admin from "./pages/Admin"
import Video from "./pages/Video"
import 'bootstrap/dist/css/bootstrap.min.css';
import Users from "./pages/Users/Users"

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
          <Route path='/' element={<Home />} />
          <Route path='/news' element={<News />} />
          <Route path='/schedule-feis' element={<ScheduleFEIS/>}/>
          <Route path='/schedule' element={<IITSchedule />}/>
          <Route path='/video' element={<Video />}/>
          
          <Route element={<UserRoute />}>
            <Route path='/labs' element={<Labs />} />
            <Route path='/materials' element={<Materials />} />
            <Route path='/exam' element={<Exam />} />
            <Route path='/profile' element={<Profile />} />
          </Route>

          <Route element={<TeacherRoute />}>
            <Route path='/teachers' element={< Teachers/>} />
            <Route path='/post/:id' element={< EditPost/>}/>
          </Route>

          <Route element={<AdminRoute />}>
            <Route path='/register' element={<Registration />} />
            <Route path='/admin' element={<Admin />} />
            <Route path='/admin/users' element={<Users />} />
          </Route>

          <Route path='/login' element={<Login />} />
        </Routes>
      </main>
    </>
  )
}