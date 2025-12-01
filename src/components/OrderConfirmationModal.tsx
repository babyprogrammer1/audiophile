import React from "react";

interface Props {
  onClose: () => void;
  firstItemName?: string;
  otherCount?: number;
  grandTotal?: number | string;
}

const OrderConfirmationModal: React.FC<Props> = ({ onClose, firstItemName, otherCount = 0, grandTotal }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <div>
            <img src="/assets/checkout/icon-order-confirmation.svg" width={64} height={64} alt="" />
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-xl font-bold text-center mb-2">
          THANK YOU FOR YOUR ORDER
        </h2>
        <p className="text-gray-600 text-center mb-6">
          You will receive an email confirmation shortly.
        </p>

        {/* Order Summary */}
        <div className="bg-gray-100 rounded-lg p-4 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-semibold">{firstItemName || "Item"}</p>
              <p className="text-gray-500 text-sm">{otherCount > 0 ? `and ${otherCount} other item${otherCount > 1 ? 's' : ''}` : ""}</p>
            </div>
            <div className="bg-black text-white rounded-lg px-4 py-2 text-right">
              <p className="text-sm">GRAND TOTAL</p>
              <p className="text-lg font-bold">${typeof grandTotal === 'number' ? grandTotal.toLocaleString() : grandTotal}</p>
            </div>
          </div>
        </div>

        {/* Button */}
        <button
          onClick={onClose}
          className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition"
        >
          BACK TO HOME
        </button>
      </div>
    </div>
  );
};

export default OrderConfirmationModal;
