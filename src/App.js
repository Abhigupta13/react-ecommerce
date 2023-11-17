import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

import {
  createBrowserRouter,
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
  },
  {
    path: '/login',
    element: <LoginPage></LoginPage>,
  },
  {
    path: '/signup',
    element: <SignupPage></SignupPage>,
  },
]);

function App() {
  return (
    <Router>
    <Routes>
    <Route exact path= '/' element={ <Home/>} />
    <Route exact path= '/login' element={ <LoginPage/>} />
    <Route exact path= '/signup' element={ <SignupPage/>} />
    </Routes>
    </Router>
  );
}

export default App;