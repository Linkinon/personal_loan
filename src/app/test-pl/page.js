'use client'

import { useEffect, useState } from "react";

export default function Home() {
  const [count, setCount] = useState(21);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const counter = setInterval(() => {
      setCount((prev) => prev + Math.floor(Math.random() * 3));
    }, 4000);

    const popup = setInterval(() => {
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 3000);
    }, 8000);

    return () => {
      clearInterval(counter);
      clearInterval(popup);
    };
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    const link = e.currentTarget.href;
    setTimeout(() => {
      window.location.href = "https://h0mlr.ttrk.io/click";
    }, 500);
  };

  return (
    <div className="bg-white text-gray-900">
      <div className="max-w-xl mx-auto p-2">

        <div className="inline-block bg-indigo-100 text-indigo-700 px-3 py-1 rounded text-xs mb-3">
          Financial Guide
        </div>

        <h1 className="text-2xl font-bold leading-snug mb-2">
          Struggling With Bills or Unexpected Expenses This Month?
        </h1>

        <p className="text-gray-600 mb-3">
          Many people are exploring ways to manage short-term financial pressure and improve cash flow.
        </p>

        <img
          src="/personal-loan.jpeg"
          className="w-full  rounded-lg "
        />
        <p className="text-sm text-green-600 mb-4 mt-4">
          🔥 {count} people checked options recently
        </p>

        <div className="bg-gray-50 p-2 rounded-lg mb-4">
          <h2 className="font-semibold mb-2">What people are exploring right now</h2>
          <p>✔ Review multiple options in one place</p>
          <p>✔ Simple and secure online process</p>
          <p>✔ Check options without impacting credit score</p>
        </div>

        <a href="#" onClick={handleClick}
          className="block text-center bg-green-500 text-black font-bold py-4 rounded-lg mb-3">
          Check Available Options
        </a>

        <p className="text-xs text-gray-500 mb-1">
          Takes 2 minutes • No impact to check
        </p>

        

        <div className="border rounded-lg p-4 mb-4 shadow-sm">
          <h2 className="font-semibold mb-2">How it works</h2>
          <p>1️⃣ Enter basic details</p>
          <p>2️⃣ Get matched with lending partners</p>
          <p>3️⃣ Review and choose an option</p>
        </div>

        <a href="#" onClick={handleClick}
          className="block text-center bg-blue-600 text-white font-bold py-4 rounded-lg mb-4">
          View Options Now
        </a>

        <div className="bg-gray-50 p-4 rounded-lg mb-4">
          <h2 className="font-semibold mb-2">Important</h2>
          <p className="text-sm text-gray-600">
            We are not a direct lender. We connect users with third-party partners. Approval and terms vary.
          </p>
        </div>

        <a href="#" onClick={handleClick}
          className="block text-center bg-green-500 text-black font-bold py-4 rounded-lg mb-14">
          See If You Qualify
        </a>

        <div className="text-xs text-gray-500 mt-6">
          <p>By using this site, you agree to Terms & Privacy Policy.</p>
          <p>Contact: support@example.com</p>
        </div>
      </div>

      {/* Sticky CTA */}
      <div className="fixed bottom-0 left-0 w-full bg-white border-t p-3">
        <a href="#" onClick={handleClick}
          className="block text-center bg-green-500 text-black font-bold py-4 rounded-lg">
          Check Options Now
        </a>
      </div>

      {/* Popup */}
      {showPopup && (
        <div className="fixed bottom-20 right-3 bg-black text-white px-3 py-2 rounded text-xs">
          Someone just checked options
        </div>
      )}
    </div>
  );
}

