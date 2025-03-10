import './App.css';
import Header from './Components/Header'
import Main from './Components/Main'
import Footer from './Components/Footer'

import Authorization from './Components/Authorization'
import Contacts from './Components/Contacts';
import Question from './Components/Question';
import About from './Components/About';
import BannedUsers from './Components/BannedUsers';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className='app'>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/authorization' element={<Authorization/>}/>
          <Route path='/contacts' element={<Contacts/>}/>
          <Route path='/ask-question' element={<Question/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/banned' element={<BannedUsers/>}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;