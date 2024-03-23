import Home from "./pages/Home"
import Contacts from "./pages/Contacts"
import RegPage from "./pages/RegPage"
import Studentpage from "./pages/Studentpage"
import "./styles/main.css"
import { Routes, Route } from "react-router-dom"



function App() {
  return (
    <>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/news' element={<Contacts />} />
          <Route path='/login' element={<RegPage />} />
          <Route path='/register' element={<Studentpage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;

/*    <div className="App">
<body>
    <Navbar></Navbar>
    <Header></Header>


    <main className="section">
        <div className="container">

                <ul className="content-list">
                    <li className="content-list__item">
                        <h2 className="title-2">Frontend</h2>
                        <p>JavaScript, TypeScript, ReactJS, Angular, Redux, HTML, CSS, NPM, BootStrap, MaterialUI, Yarn, TailwindCSS, StyledComponents</p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Backend</h2>
                        <p>NodeJS, MySQL, MongoDB, PHP, Laravel</p>
                    </li>
                </ul>
                <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/news' element={<News />} />
          <Route path='/schedule' element={<Schedule />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Registration />} />
        </Routes>
        </div>
        
    </main>
    <Footer></Footer>
  </body>
    </div>*/
