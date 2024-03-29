import "./css/Admin.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./screens/admin/pages/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "./common/Layout";
import Login from "./screens/admin/pages/Login";
import Signup from "./screens/admin/pages/Signup";
import AccoutFind from "./screens/admin/pages/AccoutFind";
import Intro from "./screens/admin/pages/studio/Intro";
import IntroFunding from "./screens/admin/pages/studio/IntroFunding";
import ResetPassword from "./screens/admin/pages/ResetPassword";
import { CookiesProvider } from "react-cookie";
import IntroPlan from "./screens/admin/pages/studio/IntroPlan";
function App() {
  return (
    <BrowserRouter>
      <CookiesProvider>
        <ToastContainer />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/accountfind" element={<AccoutFind />} />
            {/* studio */}
            <Route path="/studio/intro" element={<Intro />} />
            <Route path="/studio/intro/funding" element={<IntroFunding />} />
            <Route path="/studio/intro/funding/plan" element={<IntroPlan />} />
            {/* 비밀번호 찾기 */}
            <Route
              path="/web/account/resetpassword"
              element={<ResetPassword />}
            />
          </Routes>
        </Layout>
      </CookiesProvider>
    </BrowserRouter>
  );
}

export default App;
