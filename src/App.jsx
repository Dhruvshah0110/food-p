import { Routes, Route, Link } from 'react-router-dom';
import Landing from './pages/Landing';
import Product from './pages/product';
import Items from './pages/items';
import Sellers from './pages/sellers';
import Login from './pages/Login';


function App() {
  return (
    <>

      <nav className="bg-yellow-600 text-white p-4 shadow-md">
        <div className="container mx-auto flex items-center justify-between">

          {/* Left: Logo + Brand Name */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src="https://img.icons8.com/color/48/food.png"
              alt="Food App Logo"
              className="h-8 w-8"
            />
            <span className="text-lg font-bold">FoodApp</span>
          </Link>

          {/* Center: Navigation Links */}
          <div className="hidden sm:flex gap-6">
            <Link to="/product" className="hover:underline">Product</Link>
            <Link to="/items" className="hover:underline">Items</Link>
            <Link to="/sellers" className="hover:underline">Sellers</Link>
          </div>

          {/* Right: Login Button */}
          <Link
            to="/login"
            className="bg-white text-blue-600 font-semibold px-4 py-1 rounded hover:bg-gray-100 transition"
          >
            Login
          </Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/product" element={<Product />} />
        <Route path="/items" element={<Items />} />
        <Route path="/sellers" element={<Sellers />} />
        <Route path="/Login" element={<Login />} />

      </Routes>
    </>
  );
}

export default App;