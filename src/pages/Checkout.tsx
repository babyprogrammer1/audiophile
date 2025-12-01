import { useCart } from "@/context/CartContext";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import OrderConfirmationModal from "@/components/OrderConfirmationModal";

const VAT_RATE = 0.10;
const SHIPPING_COST = 50;

export default function Checkout() {
  const { items, getTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState("emoney");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    country: "",
    zip: "",
    emoneyNumber: "",
    emoneyPin: "",
  });

  const formRef = useRef<HTMLFormElement | null>(null);

  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderSnapshot, setOrderSnapshot] = useState<{ firstItemName?: string; otherCount?: number; grandTotal?: number } | null>(null);

  // If the cart is empty and no order was just placed, show the empty-cart message.
  if (items.length === 0 && !orderPlaced) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 flex items-center justify-center bg-white">
          <div className="text-center max-w-md mx-auto px-4">
            <h1 className="text-4xl font-bold text-black mb-4">Your Cart is Empty</h1>
            <p className="text-gray-600 mb-8">
              Add some products before proceeding to checkout.
            </p>
            <Link
              to="/"
              className="inline-block bg-accent text-white px-8 py-3 font-bold tracking-widest hover:bg-orange-600 transition"
            >
              CONTINUE SHOPPING
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    console.debug("handleSubmit called");
    e.preventDefault();
    // In a real app, this would submit to a payment processor
    // Create a snapshot of the order to show in the confirmation modal
    const grandTotal = (getTotal() + SHIPPING_COST + Math.round((getTotal() + SHIPPING_COST) * VAT_RATE));
    const firstItemName = items[0]?.name || "";
    const otherCount = Math.max(0, items.length - 1);
    setOrderSnapshot({ firstItemName, otherCount, grandTotal });
    clearCart();
    setOrderPlaced(true);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 bg-gray-50 py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="text-gray-600 hover:text-black transition text-sm font-medium mb-8 inline-block"
          >
            ← Continue Shopping
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Checkout Form */}
            <div className="md:col-span-2">
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <h1 className="text-3xl font-bold mb-8 text-black">CHECKOUT</h1>

                <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
                  {/* Billing Details */}
                  <div>
                    <h2 className="text-sm font-bold text-accent mb-6 tracking-widest">BILLING DETAILS</h2>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-medium text-gray-700 mb-2">
                            Name
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-accent text-sm"
                            placeholder="Alexei Ward"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-medium text-gray-700 mb-2">
                            Email Address
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-accent text-sm"
                            placeholder="alexei@mail.com"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-accent text-sm"
                          placeholder="+1 202-555-0136"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Shipping Info */}
                  <div>
                    <h2 className="text-sm font-bold text-accent mb-6 tracking-widest">SHIPPING INFO</h2>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-xs font-medium text-gray-700 mb-2">
                          Address
                        </label>
                        <input
                          type="text"
                          name="address"
                          value={formData.address}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-accent text-sm"
                          placeholder="1137 Williams Avenue"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-medium text-gray-700 mb-2">
                            ZIP Code
                          </label>
                          <input
                            type="text"
                            name="zip"
                            value={formData.zip}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-accent text-sm"
                            placeholder="10001"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-gray-700 mb-2">
                            City
                          </label>
                          <input
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-accent text-sm"
                            placeholder="New York"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-gray-700 mb-2">
                          Country
                        </label>
                        <input
                          type="text"
                          name="country"
                          value={formData.country}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-accent text-sm"
                          placeholder="United States"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Payment Details */}
                  <div>
                    <h2 className="text-sm font-bold text-accent mb-6 tracking-widest">PAYMENT DETAILS</h2>

                    <div className="mb-6">
                      <p className="text-xs font-medium text-gray-700 mb-4">Payment Method</p>
                      <div className="space-y-3">
                        <label className="flex items-center p-4 border-2 rounded cursor-pointer transition" style={{
                          borderColor: paymentMethod === "emoney" ? "hsl(18 71% 54%)" : "hsl(0 0% 90%)",
                          backgroundColor: paymentMethod === "emoney" ? "hsl(0 0% 98%)" : "white"
                        }}>
                          <input
                            type="radio"
                            name="paymentMethod"
                            value="emoney"
                            checked={paymentMethod === "emoney"}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                            className="w-4 h-4 accent-accent"
                          />
                          <span className="ml-4 text-sm font-medium text-black">e-Money</span>
                        </label>

                        <label className="flex items-center p-4 border-2 border-gray-300 rounded cursor-pointer hover:border-gray-400 transition">
                          <input
                            type="radio"
                            name="paymentMethod"
                            value="cash"
                            checked={paymentMethod === "cash"}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                            className="w-4 h-4 accent-accent"
                          />
                          <span className="ml-4 text-sm font-medium text-black">Cash on Delivery</span>
                        </label>
                      </div>
                    </div>

                    {paymentMethod === "emoney" && (
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-medium text-gray-700 mb-2">
                            e-Money Number
                          </label>
                          <input
                            type="text"
                            name="emoneyNumber"
                            value={formData.emoneyNumber}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-accent text-sm"
                            placeholder="238521993"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-gray-700 mb-2">
                            e-Money PIN
                          </label>
                          <input
                            type="text"
                            name="emoneyPin"
                            value={formData.emoneyPin}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-accent text-sm"
                            placeholder="6891"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="flex gap-2">
                  <span>
                    <img src="/assets/home/desktop/cash.svg" width={48} height={48} alt="" />
                  </span>
                  <p>
                    The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.
                  </p>
                  </div>
                </form>
              </div>
            </div>

            {/* Order Summary */}
            <div>
              <div className="bg-white rounded-lg p-6 shadow-sm sticky top-8">
                <h2 className="text-sm font-bold mb-6 text-black tracking-widest">SUMMARY</h2>

                <div className="space-y-4 mb-8">
                  {items.map((item) => (
                    <div key={item.id} className="flex items-start justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gray-100 rounded flex items-center justify-center text-xl flex-shrink-0">
                          {item.image}
                        </div>
                        <div>
                          <p className="font-medium text-black text-sm">{item.name}</p>
                          <p className="text-gray-600 text-xs">${(item.price || 0).toLocaleString()}</p>
                        </div>
                      </div>
                      <p className="font-semibold text-black text-sm">x{item.quantity}</p>
                    </div>
                  ))}
                </div>

                <div className="border-t border-gray-200 pt-8 space-y-4">
                  <div className="flex justify-between text-xs text-gray-600">
                    <span className="uppercase">Total</span>
                    <span className="font-bold text-black">${getTotal().toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-xs text-gray-600">
                    <span className="uppercase">Shipping</span>
                    <span className="font-bold text-black">${SHIPPING_COST}</span>
                  </div>
                  <div className="flex justify-between text-xs text-gray-600">
                    <span className="uppercase">Vat (included)</span>
                    <span className="font-bold text-black">${Math.round((getTotal() + SHIPPING_COST) * VAT_RATE).toLocaleString()}</span>
                  </div>
                  <div className="border-t border-gray-200 pt-4 flex justify-between">
                    <span className="uppercase text-xs font-bold text-black">Grand Total</span>
                    <span className="text-2xl font-bold text-accent">
                      ${(getTotal() + SHIPPING_COST + Math.round((getTotal() + SHIPPING_COST) * VAT_RATE)).toLocaleString()}
                    </span>
                  </div>
                  
                    <div className="mt-6">
                      <button
                        type="button"
                        onClick={() => {
                          const form = formRef.current;
                          console.debug("Summary CONTINUE clicked, formRef=", form);
                          if (!form) return;
                          // If the form is invalid, show native validation messages.
                          if (!form.checkValidity()) {
                            console.debug("Form invalid - reporting validity");
                            form.reportValidity();
                            return;
                          }

                          // If requestSubmit is supported, use it. Otherwise, call handleSubmit directly as a fallback.
                          if (typeof (form as any).requestSubmit === "function") {
                            console.debug("Calling form.requestSubmit()");
                            (form as any).requestSubmit();
                            return;
                          }

                          console.debug("requestSubmit not available, calling handleSubmit fallback");
                          // Create a minimal synthetic event compatible with handleSubmit
                          const evt = new Event("submit", { bubbles: true, cancelable: true }) as unknown as React.FormEvent;
                          handleSubmit(evt);
                        }}
                        className="w-full bg-accent text-white py-3 rounded-lg font-bold tracking-widest hover:bg-orange-600 transition"
                      >
                        CONTINUE &amp; PAY
                      </button>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      {orderPlaced && orderSnapshot && (
        <OrderConfirmationModal
          onClose={() => {
            setOrderPlaced(false);
            setOrderSnapshot(null);
            navigate("/");
          }}
          firstItemName={orderSnapshot.firstItemName}
          otherCount={orderSnapshot.otherCount}
          grandTotal={orderSnapshot.grandTotal}
        />
      )}
    </div>
  );
}
