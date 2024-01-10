import Create from './Components/Create';
import Read from './Components/Read';
import Update from './Components/Update';
import './App.css';
import {BrowserRouter,Route, Routes} from "react-router-dom"

function App() {
  return (
    <div className="main">
     <h2>CRUD OPERATION</h2>
     <BrowserRouter>
     <Routes>
      <Route exact path='/create' element={<Create/>}/>
      <Route exact path='/read' element={<Read/>}/>
      <Route exact path="/update" element={<Update/>}/>

      
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
