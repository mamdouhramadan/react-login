import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import './../index.css'
import Dashboard from './Dashboard';
import { Routes, Route } from 'react-router-dom';
import LoginScreen from './LoginScreen';
import Error404 from './Error404';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<LoginScreen />} />
      <Route exact path="dashboard" element={<Dashboard />} />
      <Route path="*" element={<Error404 />} />
    </Routes>

  );
}

export default App;
