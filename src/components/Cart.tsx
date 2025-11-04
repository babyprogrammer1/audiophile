import React from "react";
import { useCart } from "@/context/CartContext";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const { items, isOpen, closeCart, clearCart, updateQuantity, getTotal } = useCart();
  const navigate = useNavigate();

  // debug render
  console.debug("Cart render: isOpen=", isOpen, "items=", items);

  if (!isOpen) return null;

  const total = items.reduce((sum, item) => sum + (item.price || 0) * item.quantity, 0);

  const handleRemoveAll = () => {
    clearCart();
  };

  const handleUpdateQty = (id: string, qty: number) => {
    updateQuantity(id, qty);
  };

  const handleCheckout = () => {
    closeCart();
    navigate("/checkout");
  };

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity"
        onClick={closeCart}
      />

      <div className="fixed right-0 mt-4 mr-4 w-80 bg-white rounded-lg shadow-lg p-6 z-50">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-bold text-lg">CART ({items.length})</h2>
          <button
            onClick={handleRemoveAll}
            className="text-gray-500 text-sm hover:text-orange-500"
          >
            Remove all
          </button>
        </div>

        {/* Items */}
        <div className="space-y-4">
          {items.length === 0 ? (
            <p className="text-center text-gray-500 py-12">Your cart is empty</p>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 rounded"
                  />
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-gray-500 text-sm">${(item.price || 0).toLocaleString()}</p>
                  </div>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center space-x-2 bg-gray-100 rounded px-2 py-1">
                  <button
                    onClick={() => handleUpdateQty(item.id, item.quantity - 1)}
                    className="text-gray-500 hover:text-orange-500"
                  >
                    -
                  </button>
                  <span className="font-medium">{item.quantity}</span>
                  <button
                    onClick={() => handleUpdateQty(item.id, item.quantity + 1)}
                    className="text-gray-500 hover:text-orange-500"
                  >
                    +
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center mt-6">
          <span className="text-gray-500">TOTAL</span>
          <span className="font-bold text-lg">${total.toLocaleString()}</span>
        </div>

        <button
          onClick={handleCheckout}
          className="w-full bg-accent text-white py-3 rounded-lg mt-4 hover:bg-orange-600 transition"
        >
          CHECKOUT
        </button>
      </div>
    </>
  );
}
