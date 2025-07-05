import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignIN from './Acc/SignIN';
import SignUP from './Acc/SignUP';
import Forgot from './Acc/Forgot';
import Account from './Acc/account'
import Edit from './Acc/edit';
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
          <Route path='/Acc/account' element={<Account />} />
          <Route path="/Acc/edit" element={<Edit />} />
          </Route>
          <Route path="/Acc/SignIN" element={<SignIN />} />
          <Route path="/Acc/SignUP" element={<SignUP />} />
          <Route path="/Acc/Forgot" element={<Forgot />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;