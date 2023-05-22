
import './App.css';
import NavMenu from './component/Nav'
import Footer from './component/Footer';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import SignUp from './component/Signup';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavMenu/>
      <Routes>
        <Route path='/' element={<h1>product component</h1>}/>
        <Route path='/add' element={<h1>add component</h1>}/>
        <Route path='/update' element={<h1>update component</h1>}/>
        <Route path='/logout' element={<h1>logout component</h1>}/>
        <Route path='/profile' element={<h1>profile component</h1>}/>
        <Route path='/signup' element={<SignUp/>}/>
      </Routes>
   
      <Footer/>
      </BrowserRouter>
       
    </div>
  );
}

export default App;
