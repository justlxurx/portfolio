import { Route, Routes } from "react-router-dom";
import Main from "../pages/Main/Main";
import ShengenCountries from "../pages/ShengenCountries/ShengenCountries";
import OtherCountries from "../pages/OtherCountries/OtherCountries";
import Visa from "../pages/Visa/Visa";
import ShengenVisa from "../pages/ShengenVisas/ShengenVisas";
import Services from "../pages/Services/Services";
import FAQ from "../pages/FAQ/FAQ";
// import VisaTypes from '../components/VisaTypes';
import Contacts from "../pages/Contacts/Contacts";
import Feedback from "../pages/Feedback/Feddback";
import { AdminLayout } from "../pages/Admin/AdminLayout/AdminLayout";
import { Clients } from "../pages/Admin/Clients/Clients";
import { Login } from "../pages/Admin/Login/Login";
import { Dashboard } from "../pages/Admin/Dashboard";
import { DashboardShengen } from "../pages/Admin/Shengen";

function App() {
  return (
    <Routes>
      <Route path="*" element={<div>Not found</div>} />
      <Route path="/" exact element={<Main />} />
      <Route path="/shengen" element={<ShengenCountries />} />
      <Route path="/shengen/:id" element={<ShengenVisa />}></Route>
      {/* <Route path='/shengen/:id/guest' element={<VisaTypes type='guest' num={1} />} />
      <Route path='/shengen/:id/business' element={<VisaTypes type='business' num={2} />} />
      <Route path='/shengen/:id/tourist' element={<VisaTypes type='tourist' num={3} />} /> */}
      <Route path="/others" element={<OtherCountries />} />

      <Route path="/others/:id" element={<Visa />} />
      <Route path="/contact" element={<Contacts />} />
      <Route path="/services/*" element={<Services />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/feedback" element={<Feedback />} />

      <Route path="/admin" element={<AdminLayout />}>
        <Route path="/admin/clients" element={<Clients />} />
        <Route path="/admin/other" element={<Dashboard />} />
        <Route path="/admin/shengen" element={<DashboardShengen />} />
      </Route>
      <Route path="/admin/login" element={<Login />} />
    </Routes>
  );
}

export default App;
