import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ListEmployeeComponent from './component/ListEmployeeComponent';
import HeaderComponent from './component/HeaderComponent';
import FooterComponenet from './component/FooterComponenet';
import AddEmployeeComponent from './component/AddEmployeeComponent';

function App() {
  return (
    <div >
      <Router>
      <HeaderComponent />
      
      <div className="container">
        <Routes>
          <Route path="/" element={<ListEmployeeComponent />}> </Route>
          <Route path="/employee" element={<ListEmployeeComponent />}>   </Route>
          <Route path="/add-employee" element={<AddEmployeeComponent/>}>   </Route>
          <Route path="/edit-employee/:id" element={<AddEmployeeComponent/>}>   </Route>
        </Routes>
        
        </div>
        <FooterComponenet />
        </Router>
    </div>
  );
}

export default App;
