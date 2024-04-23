import './App.css';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Login from './components/Login'
import Signup from './components/Signup'
import Dashboard from './components/Dashboard/Dashboard';
import ManageEmployee from './components/Dashboard/ManageEmployee';
import AddEmployee from './components/Dashboard/AddEmployee';
import Update from './components/Dashboard/Update';
function App() {
  return (
    
    <BrowserRouter>
       <Routes>
        <Route path='/' element={<Signup/>}/>
       <Route path='/register' element={<Signup/>} />
       <Route path='/login' element={<Login/>} />
       <Route path='/dashboard' element={<Dashboard/>} />
       <Route path='/dashboard/manage' element={<ManageEmployee/>} />
       <Route path='/dashboard/add' element={<AddEmployee/>} />
       <Route path='/dashboard/update' element={<Update/>} />
       </Routes>
       </BrowserRouter>
  );
}

export default App;
