import React, {  } from 'react';
import PaymentAndBillingForm from './PaymentAndBillingForm';
import Carousel from './Carousel';



const Home = () => {
  
  return (
    <>
      <div className="bg-gray-100 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 pt-10">
        <div className="pt-5 sm:h-full sm:flex sm:flex-col sm:items-center sm:justify-start text-center">
          <div className="w-full sm:w-auto">
            <h1 className="text-4xl font-extrabold text-black mb-10 mt-10">
              Welcome to Our Website!
            </h1>
            <p className="text-sm sm:text-lg text-black mb-5 px-2 sm:px-0">
              This is a sample website where you can manage and customize your purchases. Explore our options and enjoy a smooth experience! Thank you for visiting our site.<br/>
              This is a sample website where you can manage and customize your purchases. Explore our options and enjoy a smooth experience! Thank you for visiting our site.<br/>
              This is a sample website where you can manage and customize your purchases. Explore our options and enjoy a smooth experience! Thank you for visiting our site.<br/>
              This is a sample website where you can manage and customize your purchases. Explore our options and enjoy a smooth experience! Thank you for visiting our site.<br/>
            </p>
          </div>
        </div>

      <PaymentAndBillingForm/>
     
      
      </div>
     
    </>
  );
};

export default Home;
