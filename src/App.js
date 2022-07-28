import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Color_Picker from './Color_Picker';

function App() {
  return (
    <div className="App">
     <Routes>
       <Route path='/' element={<Color_Picker/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
