import { useNavigate } from 'react-router-dom';

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-green-100 p-6">
      <div className="flex flex-col md:flex-row items-center justify-center gap-6">
        
        {/* Left: Image */}
        <img
          src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
          alt="Food Delivery"
          className="w-full md:w-1/2 rounded-lg shadow-lg"
        />

        {/* Right: Text Content */}
        <div className="text-center md:text-left space-y-4">
          <h1 className="text-5xl font-serif text-brown-700">Welcome</h1>
          <h2 className="text-3xl text-blue-600">To Ultimate</h2>
          <h3 className="text-2xl font-bold text-brown-800">
            Food Delivery App Parul-Zomato
          </h3>
          <p className="text-brown-700">Good Food with Good Mindset</p>
          <button
            onClick={() => navigate('/product')}
            className="bg-purple-300 hover:bg-purple-400 text-black font-medium px-4 py-2 rounded"
          >
            Explore Now
          </button>
        </div>

      </div>
    </div>
  );
}