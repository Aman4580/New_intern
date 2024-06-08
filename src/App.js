import './App.css';
import Navbar from './component/Navbar';
import {Routes,Route} from 'react-router-dom';
import Signup from './component/Signup';
 import Signin from './component/Signin';
function App() {
  return (
    <div className="App">
     <Navbar/>
     <Routes>
       <Route path='/signin' element={<Signin/>}/>
       <Route path='/signup' element={<Signup/>}/>
      </Routes>
    </div>
  );
}

export default App;
