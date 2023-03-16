
import './css/Admin.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './screens/admin/pages/Home';
import Layout from './common/Layout';
import Login from './screens/admin/pages/Login';
import Signup from './screens/admin/pages/Signup';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/signup' element={<Signup/>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
