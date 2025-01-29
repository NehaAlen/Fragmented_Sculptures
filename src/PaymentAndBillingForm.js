
import React, { useState } from 'react';
import Carousel from './Carousel';

function PaymentAndBillingForm() {
    const [sizes, setSizes] = useState({
        small: 0,
        medium: 0,
        large: 0,
      });
      const [selectedSizes, setSelectedSizes] = useState([]);
      const [showPaymentForm, setShowPaymentForm] = useState(true); // New state to control form visibility
      const [showCheckoutForm, setShowCheckoutForm] = useState(false);
    
      const handleCountChange = (size, increment) => {
        setSizes((prevSizes) => {
          const newCount = prevSizes[size] + increment;
          return {
            ...prevSizes,
            [size]: newCount < 0 ? 0 : newCount,
          };
        });
      };
    
      const handleSizeChange = (event) => {
        const size = event.target.value;
        if (event.target.checked) {
          setSelectedSizes((prevSizes) => [...prevSizes, size]);
        } else {
          setSelectedSizes((prevSizes) => prevSizes.filter((s) => s !== size));
        }
      };
    
      const calculateTotal = () => {
        const smallTotal = sizes.small * 10;
        const mediumTotal = sizes.medium * 20;
        const largeTotal = sizes.large * 30;
        return smallTotal + mediumTotal + largeTotal;
      };
    
      const handleCheckoutClick = () => {
        // Check if no size is selected and any size has count greater than 0
        const anySizeSelected = selectedSizes.length > 0;
        const anyCountIncreased = sizes.small > 0 || sizes.medium > 0 || sizes.large > 0;
    
        if (!anySizeSelected || !anyCountIncreased) {
          alert("Please select at least one size before proceeding to checkout.");
          return; // Prevent proceeding to the form if either condition is not met
        }
    
        setShowPaymentForm(false); // Hide the payment options form
        setShowCheckoutForm(true); // Show the checkout form
      };
    
      const handleEditClick = () => {
        // When the user clicks "Edit", return to the payment options form
        setShowCheckoutForm(false);
        setShowPaymentForm(true);
      };
    
      const getSelectedItemsSummary = () => {
        let selectedItemsSummary = [];
        if (sizes.small > 0) selectedItemsSummary.push(`${sizes.small} Small`);
        if (sizes.medium > 0) selectedItemsSummary.push(`${sizes.medium} Medium`);
        if (sizes.large > 0) selectedItemsSummary.push(`${sizes.large} Large`);
        const totalAmount = calculateTotal();
    
        return {
          summary: selectedItemsSummary.join(", "),
          total: totalAmount,
        };
      };
    
      const { summary, total } = getSelectedItemsSummary();

    return (
    <div>
         <div className="bg-gray-100 p-2 sm:p-6 md:p-6 lg:p-12">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex flex-col min-h-[500px]"> {/* Set a fixed minimum height for both forms */}
              {showPaymentForm && (
                <div className="flex-1"> {/* Ensure the payment form fills available space */}
                  <table className="min-w-full table-auto text-sm text-left text-gray-700">
                    <thead>
                      <tr>
                        <th colSpan="3" className="text-center py-2 text-3xl font-semibold border-b pb-10">
                          Payment Options
                        </th>
                      </tr>
                      <tr>
                        <th className="px-4 py-2 border-b">Sizes</th>
                        <th className="px-12 py-2 border-b">Count</th>
                        <th className="px-4 py-2 border-b">Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* Small size row */}
                      <tr>
                        <td className="px-4 py-2 border-b">
                          <label>
                            <input
                              className="m-2"
                              type="checkbox"
                              value="small"
                              checked={selectedSizes.includes('small')}
                              onChange={handleSizeChange}
                            />
                            Small
                          </label>
                        </td>
                        <td className="px-4 py-2 border-b">
                          <div className="flex items-center space-x-2">
                            <button
                              onClick={() => handleCountChange('small', -1)}
                              disabled={!selectedSizes.includes('small')}
                              className="px-3 py-1 text-2xl text-black rounded"
                            >
                              -
                            </button>
                            <span className="px-3 py-1 bg-gray-200 text-black rounded">
                              {sizes.small}
                            </span>
                            <button
                              onClick={() => handleCountChange('small', 1)}
                              disabled={!selectedSizes.includes('small')}
                              className="px-3 py-1 text-xl text-black rounded"
                            >
                              +
                            </button>
                          </div>
                        </td>
                        <td className="px-4 py-2 border-b">${sizes.small * 10}</td>
                      </tr>

                      {/* Medium size row */}
                      <tr>
                        <td className="px-4 py-2 border-b">
                          <label>
                            <input
                              className="m-2"
                              type="checkbox"
                              value="medium"
                              checked={selectedSizes.includes('medium')}
                              onChange={handleSizeChange}
                            />
                            Medium
                          </label>
                        </td>
                        <td className="px-4 py-2 border-b">
                          <div className="flex items-center space-x-2">
                            <button
                              onClick={() => handleCountChange('medium', -1)}
                              disabled={!selectedSizes.includes('medium')}
                              className="px-3 py-1 text-2xl text-black rounded"
                            >
                              -
                            </button>
                            <span className="px-3 py-1 bg-gray-200 text-black rounded">
                              {sizes.medium}
                            </span>
                            <button
                              onClick={() => handleCountChange('medium', 1)}
                              disabled={!selectedSizes.includes('medium')}
                              className="px-3 py-1 text-xl text-black rounded"
                            >
                              +
                            </button>
                          </div>
                        </td>
                        <td className="px-4 py-2 border-b">${sizes.medium * 20}</td>
                      </tr>

                      {/* Large size row */}
                      <tr>
                        <td className="px-4 py-2 border-b">
                          <label>
                            <input
                              className="m-2"
                              type="checkbox"
                              value="large"
                              checked={selectedSizes.includes('large')}
                              onChange={handleSizeChange}
                            />
                            Large
                          </label>
                        </td>
                        <td className="px-4 py-2 border-b">
                          <div className="flex items-center space-x-2">
                            <button
                              onClick={() => handleCountChange('large', -1)}
                              disabled={!selectedSizes.includes('large')}
                              className="px-3 py-1 text-2xl text-black rounded"
                            >
                              -
                            </button>
                            <span className="px-3 py-1 bg-gray-200 text-black rounded">
                              {sizes.large}
                            </span>
                            <button
                              onClick={() => handleCountChange('large', 1)}
                              disabled={!selectedSizes.includes('large')}
                              className="px-3 py-1 text-xl text-black rounded"
                            >
                              +
                            </button>
                          </div>
                        </td>
                        <td className="px-4 py-2 border-b">${sizes.large * 30}</td>
                      </tr>

                      {/* Subtotal row */}
                      <tr>
                        <td colSpan="2" className="px-4 py-2 text-2xl font-bold text-right">Subtotal</td>
                        <td className="px-4 py-2 border-b font-bold">${sizes.small * 10 + sizes.medium * 20 + sizes.large * 30}</td>
                      </tr>
                    </tbody>
                  </table>
                  <button
                    onClick={handleCheckoutClick}
                    className="mt-5 px-6 py-3 bg-orange-300 text-black font-semibold rounded-lg shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 transition duration-300"
                  >
                    Checkout
                  </button>
                </div>
              )}

              {showCheckoutForm && (
                <div className="flex-1"> {/* Ensure the checkout form fills available space */}
                <div className="w-full bg-white rounded-lg shadow-md">
                    {summary && (
                      <div className="flex justify-between flex-col sm:flex-row text-lg font-semibold text-left">
                        <p className="sm:pl-5">You selected: {summary}</p>
                        <div className="sm:mb-4">
                        <button
                          type="button"
                          onClick={handleEditClick}
                          className="px-3 bg-gray-500 text-white font-semibold rounded-lg"
                        >
                          Edit Order
                        </button>
                      </div>
                        <p className="pr-5">Total Amount: ${total}</p>
                      </div>
                    )}
                  </div>
                  <h2 className="text-2xl font-semibold mb-4 mt-5 text-center">Billing Information</h2>
                  <form>
                    {/* Form Rows with Flexbox for Layout */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                      {/* Input fields */}
                      <div>
                        <label className="pl-4 sm:pl-5 block text-sm font-medium text-left ">Full name (First and Last name)</label>
                        <input
                          type="text"
                          className="sm:mx-2  w-11/12 p-2 border border-gray-300 rounded text-sm"
                          placeholder="Enter your name"
                        />
                      </div>
                      <div>
                        <label className="pl-4 sm:pl-5 block text-sm font-medium text-left">Mobile number</label>
                        <input
                          type="text"
                          className="sm:mx-2 w-11/12 p-2 border border-gray-300 rounded text-sm"
                          placeholder="Enter your contact number"
                        />
                      </div>
                    </div>

                    {/* Email and Address Fields */}
                    <div className="mb-4">
                      <label className="pl-4 sm:pl-9 block text-sm font-medium text-left">Email</label>
                      <input
                        type="email"
                        className="  w-11/12  p-2 border border-gray-300 rounded text-sm"
                        placeholder="Enter your email"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="pl-4 sm:pl-5 block text-sm font-medium text-left">House no, Building, Apartment, Company</label>
                        <input
                          type="text"
                          className="sm:mx-2 w-11/12 p-2 border border-gray-300 rounded text-sm"
                          placeholder="Enter flat number"
                        />
                      </div>
                      <div>
                        <label className="pl-4 sm:pl-5 block text-sm font-medium text-left">Area, Street, Sector, Village</label>
                        <input
                          type="text"
                          className="sm:mx-2 w-11/12 p-2 border border-gray-300 rounded text-sm"
                          placeholder="Enter sector"
                        />
                      </div>
                    </div>

                    {/* City, State, and Pincode */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="pl-4 sm:pl-5 block text-sm font-medium text-left">Landmark</label>
                        <input
                          type="text"
                          className="sm:mx-2 w-11/12 p-2 border border-gray-300 rounded text-sm"
                          placeholder="Enter landmark"
                        />
                      </div>
                      <div>
                        <label className="pl-4 sm:pl-5 block text-sm font-medium text-left">Pincode</label>
                        <input
                          type="text"
                          className="sm:mx-2 w-11/12 p-2 border border-gray-300 rounded text-sm"
                          placeholder="Enter pincode"
                        />
                      </div>
                    </div>

                    <div className="mb-4 mt-5 flex justify-between items-center">
                      {/* Back button */}
                      <button
                        type="button"
                        onClick={handleEditClick}
                        className="px-6 py-3 bg-gray-500 text-white font-semibold rounded-lg transition duration-300 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50"
                      >
                        Back
                      </button>

                      {/* Wrapper for Submit button */}
                      <div className="flex justify-center flex-1">
                        <button
                          type="submit"
                          className="px-6 py-3 bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 text-white font-semibold rounded-lg shadow-lg hover:from-teal-500 hover:via-teal-600 hover:to-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-opacity-50 transition duration-300"
                        >
                          Proceed to Payment
                        </button>
                      </div>
                    </div>


                  </form>
                </div>
              )}
            </div>
            
          </div>
          
          <Carousel/>
        </div>  
    </div>
  )
}

export default PaymentAndBillingForm
