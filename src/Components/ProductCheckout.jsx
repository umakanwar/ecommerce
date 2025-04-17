import React from 'react'


const ProductCheckout = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
    <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Checkout</h2>

      {/* Product Info */}
      <div className="flex items-center space-x-4 mb-4">
        <img
          src="https://api-rayashop.freetls.fastly.net/media/catalog/product/cache/4e49ac3a70c0b98a165f3fa6633ffee1/b/d/bdhzdwl_di5bumechddjj0vf.jpeg"
          alt="Product"
          className="w-20 h-20 object-cover rounded"
        />
        <div>
          <h3 className="text-lg font-semibold">Sample Product</h3>
          <p className="text-sm text-gray-600">₹4,499 each</p>
        </div>
      </div>

      {/* Quantity */}
      <div className="mb-4">
        <label className="block mb-1 font-medium">Quantity</label>
        <input
          type="number"
          value="1"
          readOnly
          className="w-full border rounded-lg px-3 py-2 bg-gray-100 cursor-not-allowed"
        />
      </div>

      {/* Name */}
      <div className="mb-4">
        <label className="block mb-1 font-medium">Full Name</label>
        <input
          type="text"
          value="John Doe"
          readOnly
          className="w-full border rounded-lg px-3 py-2 bg-gray-100 cursor-not-allowed"
        />
      </div>

      {/* Email */}
      <div className="mb-4">
        <label className="block mb-1 font-medium">Email</label>
        <input
          type="email"
          value="john@example.com"
          readOnly
          className="w-full border rounded-lg px-3 py-2 bg-gray-100 cursor-not-allowed"
        />
      </div>

      {/* Total */}
      <div className="flex justify-between font-semibold mb-4">
        <span>Total:</span>
        <span>₹499</span>
      </div>

      {/* Checkout Button */}
      <button
        
        className="w-full bg-blue-400 text-white py-2 rounded-lg cursor-not-allowed opacity-60"
      >
        Place Order
      </button>
    </div>
  </div>
  )
}

export default ProductCheckout