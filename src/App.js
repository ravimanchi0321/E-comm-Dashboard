import './App.css';
import Nav from './components/Nav'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import Home from './components/home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/addproducts' element={<h1>Add the products</h1>} />
          <Route path='/Updateproduct' element={<h1>Welcome to update products</h1>} />
          <Route path='/logout' element={<h1>loging of products</h1>} />
          <Route path='/profile' element={<h1>profile</h1>} />
          <Route path='/SignUp' element={<SignUp />} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
