import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignIN from './Account/SignIN';
import SignUP from './Account/SignUP';
import Forgot from './Account/forgot';
import Account from './Account/account'
import Edit from './Account/edit';
import Layout from './Layout'; 
import Dashboard from './menu/dashboard';
import New from './menu/new';
import My from './menu/my';
import TicketApproval from './menu/approval';
import Performance from './menu/performance';
import Details from './menu/My-ticket/detail'
import { HashRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="main">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
          <Route path="Dashboard" element={<Dashboard />} /> 
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/new" element={<New />} />
          <Route path='/my' element={<My />} />
          <Route path='/approval' element={<TicketApproval />} />
          <Route path='/performance' element={<Performance />} />
          <Route path='/My-ticket/detail' element={<Details />} />
          <Route path='/account/account' element={<Account />} />
          <Route path="/Account/Edit" element={<Edit />} />
          </Route>
          <Route path="/account/SignIN" element={<SignIN />} />
          <Route path="/account/SignUP" element={<SignUP />} />
          <Route path="/account/Forgot" element={<Forgot />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;