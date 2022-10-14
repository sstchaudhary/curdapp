  import './App.css';
 import AddUser from './components/AddUser';
 import AllUsers from './components/AllUsers';
 import CurdApp from './components/CurdApp';
 import NabBar from './components/NavBar';
 import EditUser from './components/EditUser';
 import {BrowserRouter,Routes,Route} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <NabBar/>
      <Routes>
        <Route path="/" element={<CurdApp/>}/>
        <Route path="/all" element={<AllUsers/>}/>
        <Route path="/add" element={<AddUser/>}/>
        <Route path="/edit/:id" element={<EditUser/>}/>
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
