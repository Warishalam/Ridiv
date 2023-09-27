import './App.css';
import { Route,Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import BlogPost from './components/BlogPost';
import AboutPage from './components/AboutPage';
import { Navbar } from './components/Navbar';
function App() {
  return (
    <div className="App">
           <Navbar/>
          <Routes>
                <Route path='/' element={<HomePage/>}></Route>
                <Route path='/blogpage' element={<BlogPost/>}></Route>
                <Route path='/homepage' element={<AboutPage/>}></Route>
          </Routes>
    </div>
  );
}

export default App;
