import './App.css';
import {Routes,Route,Link} from 'react-router-dom';
import Home from './pages/Home';
import Hobby from './pages/Hobby';
import Project from './pages/Project';
import NotFound from './pages/NotFound';
function App() {
  return (
    <>
      <div>
        <Link to={"/"} className='Menu-bar' >Home </Link>
        <Link to={"/project"} className='Menu-bar'>Project</Link>
        <Link to={"/hobby"} className='Menu-bar'>Hobby</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/project" element={<Project/>}/>
        <Route path="/hobby" element={<Hobby/>}/>
        <Route path="/*" element={<NotFound/>}/>
      </Routes>
    </>
  );
}

export default App;
