import './App.css';
import Nav from './components/Nav'; 
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import Home from './components/home';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/test' element={<Home />} />
        <Route path='/test/addproducts' element={<h1>Add the products</h1>} />
        <Route path='/Updateproduct' element={<h1>Welcome to update products</h1>} />
        <Route path='/logout' element={<h1>Logging out</h1>} />
        <Route path='/profile' element={<h1>Profile</h1>} />
        <Route path='/SignUp' element={<SignUp />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
