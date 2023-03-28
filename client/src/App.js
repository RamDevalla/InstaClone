import './App.css';
import NavBar from './components/Nav/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home'
import SignUp from './components/screens/SignUp';
import SignIn from './components/screens/SignIn'
import Profile from './components/Profile/Profile'
import CreatePost from './components/CreatePost/CreatePost';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>

        <Route path='home' element={<Home/>} />  
        <Route path='signup' element={<SignUp/>} />     
        <Route path='signin' element={<SignIn/> } />    
        <Route path='profile' element={<Profile/>} />  
        <Route path='createpost' element={<CreatePost/>} />  

        </Routes>
        
      </BrowserRouter>

    </>
  )
}

export default App;
