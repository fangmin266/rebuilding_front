
import './css/Admin.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './screens/admin/pages/Home';
import Layout from './common/Layout';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
            <Route path='/' element={<Home/>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
