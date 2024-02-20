import { Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Menu from './components/Menu';
import 'bootstrap/dist/css/bootstrap.min.css';
import {movieslist} from './data/movieslist';
import AddMovie from './pages/AddMovie';
// import DarkMode from './components/DarkMode';

function App() {
// const [darkMode,setDarkMode] = React.useState
  return (
    <div className="App">
      <header className="App-header">
          <Menu />
          {/* <DarkMode/> */}
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home  data= {movieslist} />} />
          <Route path="/add"  element={<AddMovie/>} />
          
        </Routes>
      </header>
    </div>
  );
}

export default App;
