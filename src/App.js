import './App.css'
import { Route,Routes } from 'react-router-dom';
import NavBar from './component/NavBar'
import Home from './pages/Home.jsx'
import Profile from './pages/Profile';
import WhereTo from './pages/WhereTo';
import Add from './pages/Add';
import Report from './pages/Report'

function App() {
  return (
    <div className="app">
    <NavBar/>
      <div>
    <Routes>    
    <Route  path="/" element={<Home/>}></Route>    
      <Route  path="/Profile"  element={<Profile/>} />
      <Route  path="/WhereTo"  element={<WhereTo/>} />
      <Route path="/Add"  element={<Add />}/>
      <Route path="/Report"  element={<Report />}/>
    </Routes>
    </div>
    


    </div>
  );
}

export default App;
