"use client";
import { useEffect,useState } from "react";

export default function Home() {

  const smallLoan = () => {
    window.location.href = "https://www.lpqqmb8trk.com/7BZ2W/58DZ97/?sub1={clickid}";
  };
  const largeLoan = () => {
    window.location.href = "https://www.lpqqmb8trk.com/7BZ2W/58DZ97/?sub1={clickid}";
  };

  const [count, setCount] = useState(0);
   useEffect(() => {
      // Function to generate random number
      const generateRandom = () => {
        const random = Math.floor(Math.random() * (180 - 60 + 1)) + 60; 
        // range: 60–180 (you can tweak)
        setCount(random);
      };
  
      // Initial call
      generateRandom();
  
      // Update every 5–10 sec randomly
      const interval = setInterval(() => {
        generateRandom();
      }, Math.floor(Math.random() * 5000) + 5000);
  
      return () => clearInterval(interval);
    }, []);

  return (
    <div className="bg-gray-100 min-h-screen">

      <div className="max-w-md mx-auto p-4 pb-24">

        {/* TOP HOOK */}
        <div className="bg-red-600 text-white text-center py-2 text-sm rounded-xl mb-3">
          ⚠ Limited Availability Today
        </div>

        {/* HERO */}
        <div className="bg-white p-5 rounded-2xl shadow text-center ">
          <h1 className="text-2xl font-bold mb-2">
          Struggling with Credit Card Debt? Americans with $10K+ Debt May Qualify for Debt Consolidation Options Up to $35,000 to Help Manage Bills, Reduce Balances, and Simplify Payments
 
          </h1>

          <p className="text-gray-600 mb-3">
            Takes 2 minutes • No impact on credit score
          </p>

          
        </div>

        {/* CLICKABLE CARDS */}
        <div className="mt-4 space-y-3 text-white">
          <div onClick={smallLoan}
                className="bg-green-500 py-4 px-3 rounded-xl shadow cursor-pointer flex items-center justify-between">
                <span>$1000 - $5000</span>
                <span className="text-xl">▶</span>
            </div>
            <div onClick={largeLoan}
                className="bg-green-500 py-4 px-3 rounded-xl shadow cursor-pointer flex items-center justify-between">
                <span>$5000 - $10,000</span>
                <span className="text-xl">▶</span>
            </div>

            <div onClick={largeLoan}
                className="bg-green-500 p-4 rounded-xl shadow cursor-pointer flex items-center justify-between">
                <span>$10,000 - $15,000</span>
                <span className="text-xl">▶</span>
            </div>

            <div onClick={largeLoan}
                className="bg-green-500 p-4 rounded-xl shadow cursor-pointer flex items-center justify-between">
                <span>$15,000 - $25,000</span>
                <span className="text-xl">▶</span>
            </div>

            <div onClick={largeLoan}
                className="bg-green-500 p-4 rounded-xl shadow cursor-pointer flex items-center justify-between">
                <span>$25,000 - $35,000</span>
                <span className="text-xl">▶</span>
            </div>

            <p className="text-sm md:text-base text-red-600 font-semibold ">
              🔥 {count} people are checking this right now
            </p>

        </div>
        
        {/* ✅ YOUR CHECKLIST SECTION */}
        <div className="mt-6 bg-white p-5 rounded-2xl shadow text-gray-800">
          <ul className="space-y-3 text-sm">
            <li>✓ Loan amounts from $1,000 to $35,000</li>
            <li>✓ Fast approval decisions</li>
            <li>✓ Funds may be available next business day</li>
            <li>✓ All credit types considered</li>
          </ul>
        </div>

        {/* DISCLAIMER */}
        <div className="mt-4 text-sm text-gray-600">
          <p>
            This website is not a lender. We connect users with third-party lenders.
          </p>
        </div>

      </div>

      

    </div>
  );
}

