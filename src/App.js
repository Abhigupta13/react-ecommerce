import CartPage from './pages/CartPage';
import Checkout from './pages/Checkout';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import ProductDetailPage from './pages/ProductDetailPage';
import SignupPage from './pages/SignupPage';
import {BrowserRouter as Router,Route,Routes,} from 'react-router-dom';

function App() {
  return (
    <Router><Routes>
    <Route exact path= '/' element={ <Home/>} />
    <Route exact path= '/login' element={ <LoginPage/>} />
    <Route exact path= '/signup' element={ <SignupPage/>} />
    <Route exact path= '/cart' element={ <CartPage/>} />
    <Route exact path= '/checkout' element={ <Checkout/>} />
    <Route exact path= '/product-detail' element={ <ProductDetailPage/>} />
    </Routes></Router>
  );
}

export default App;