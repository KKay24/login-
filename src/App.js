
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homes from './Homes';
import SignUp from './Signup';
import Login from './Login';





function Pages() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/homes" element={<Homes/>}/>
          <Route path='/' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default Pages;


