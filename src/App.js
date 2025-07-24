import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Result from './pages/Result';
import User from './pages/User';
import Login from './pages/Login';
import Exam from './pages/Exam';
import TakeExam from './pages/TakeExam';
import Score from './pages/Score';


function App() {
  return (
    <Router>
      <Routes>
        <Route index element = {<Login/>}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/result' element={<Result />}/>
        <Route path='/user' element={<User />}/>
        <Route path='/exam' element={<Exam />}/>
        <Route path='/takeExam/:id' element={<TakeExam />}/>
        <Route path='/score' element={<Score />}/>
      </Routes>
    </Router>
  );
}

export default App;
