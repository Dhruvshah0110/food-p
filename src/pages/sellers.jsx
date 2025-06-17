import { useState } from "react";

function Sellers() {
  const [seller, setSeller] = useState({
    name: "",
    email: "",
    shopName: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    setSeller({ ...seller, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New Seller Added:", seller);
    alert("Seller added successfully!");
    setSeller({
      name: "",
      email: "",
      shopName: "",
      phone: "",
      address: "",
    });
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6">
      <h1 className="text-center text-2xl font-bold text-yellow-600 mb-6">
        Welcome to Sellers Page
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded shadow">
        <input
          type="text"
          name="name"
          placeholder="Seller Name"
          value={seller.name}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={seller.email}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="text"
          name="shopName"
          placeholder="Shop Name"
          value={seller.shopName}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={seller.phone}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <textarea
          name="address"
          placeholder="Seller Address"
          value={seller.address}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        ></textarea>

        <button
          type="submit"
          className="w-full bg-yellow-600 text-white p-2 rounded hover:bg-yellow-700"
        >
          Add Seller
        </button>
      </form>
    </div>
  );
}

export default Sellers;
