"use client";

import { useState } from "react";

export default function Home() {
//   const [selectedAmount, setSelectedAmount] = useState(null);
//   const [loading, setLoading] = useState(false);
    const [step, setStep] = useState(1);
    const [selectedAmount, setSelectedAmount] = useState(null);
    const [selectedIncome, setSelectedIncome] = useState(null);
    const [loading, setLoading] = useState(false);

  const SMALL_LOAN_URL = "https://www.lpqqmb8trk.com/7BZ2W/5L55FG/?sub1={clickid}";
  const LARGE_LOAN_URL = "https://www.lpqqmb8trk.com/7BZ2W/58DZ97/?sub1={clickid}";

  const handleAmountSelect = (value) => {
    setSelectedAmount(value);
    setStep(2);
  };

  const handleIncomeSelect = (type) => {
  setSelectedIncome(type);
  setLoading(true);

  setTimeout(() => {
    if (type === "employed") {
      if (selectedAmount === "under_5000") {
        window.location.href = SMALL_LOAN_URL;
      } else {
        window.location.href = LARGE_LOAN_URL;
      }
    } else {
      setStep(3);
      setLoading(false);
    }
  }, 600);
};

  const handleAnswer = (answer) => {
  setLoading(true);

  setTimeout(() => {
    if (answer === "yes") {
      setStep(3);
      setLoading(false);
    } else {
      if (selectedAmount === "under_5000") {
        window.location.href = SMALL_LOAN_URL;
      } else {
        window.location.href = LARGE_LOAN_URL;
      }
    }
  }, 600);
};


  return (
    <main className="bg-[#f4f1e9] min-h-screen flex justify-center">
      <div className="max-w-2xl w-full bg-[#fffdf7] shadow-xl border-x">

        {/* Topbar */}
        <div className="bg-[#0d3b66] text-white text-center text-[9px] font-bold tracking-widest py-1 uppercase">
          Consumer Finance Bulletin
        </div>

        <div className="px-4 py-2">

          {/* Header */}
          <div className="flex justify-between border-b pb-1">
            <div>
              <div className="text-[26px] font-black leading-none tracking-tight">
                Daily Loan Check
              </div>
              <div className="text-[11px] text-gray-500 mt-1">
                Personal loan options • Updated for 2026
              </div>
            </div>

            <div className="text-right text-[12px] font-bold text-gray-500">
              Advertorial Information
            </div>
          </div>

          {/* Alert */}
          <div className="bg-red-700 text-white text-[13px] font-semibold mt-2 px-2 py-1">
            Loan options can change based on the amount requested.
          </div>

          {/* Headline */}
          <h1 className="text-[29px] font-black leading-tight">
            Looking For <span className="text-red-700">$10K–$35K</span> In Personal Loan Options?
          </h1>

          <p className="text-[13px] font-semibold text-gray-700 mt-2">
            Most Americans Are Eligible - Hardship Recovery Loans Of Up To $35,000 To Help Pay For 
            The Upcoming Holidays, Bills, Groceries, Or Any Other Personal Expenses.
          </p>

          {/* Visual */}
          <div className="border mt-3  bg-white">
            <div className="relative h-29.5 md:h-65  bg-linear-to-br from-gray-200 to-gray-50 flex items-center justify-center overflow-hidden">

              <img src="/money2.png" className="w-full h-full object-cover object-bottom "/>

            </div>
          </div>

          {/* Router */}
          <div className="border-2 border-black shadow-[5px_5px_0_black] p-3 mt-3 bg-white">

      {/* STEP 1 */}
      {step === 1 && (
        <>
          <div className="font-black text-[15px] mb-2">
            How much are you looking to borrow?
          </div>

          {[
            { value: "under_5000", title: "Under $5,000" },
            { value: "5000_9999", title: "$5,000 – $9,999" },
            { value: "10000_35000", title: "$10,000 – $35,000" },
          ].map((item) => (
            <button
              key={item.value}
              onClick={() => handleAmountSelect(item.value)}
              className="w-full border-2 mb-2 p-2 flex justify-between items-center text-left border-gray-300 bg-red-600 text-white"
            >
              <div className="font-bold text-[17px]">
                {item.title}
              </div>
              <div className="text-[22px] font-black">›</div>
            </button>
          ))}
        </>
      )}

      {step === 2 && (
  <>
    <div className="font-black text-[15px] mb-2">
      Do you currently receive benefits?
    </div>

    <button
      onClick={() => handleAnswer("yes")}
      className="w-full border-2 mb-2 p-3 flex justify-between items-center border-gray-300 bg-gray-300 text-black hover:bg-gray-400"
    >
      <div className="font-bold text-[17px]">
        Yes
      </div>
      <div className="text-[22px] font-black">›</div>
    </button>

    <button
      onClick={() => handleAnswer("no")}
      className="w-full border-2 mb-2 p-3 flex justify-between items-center border-gray-300 bg-gray-300 text-black hover:bg-gray-400"
    >
      <div className="font-bold text-[17px]">
        No
      </div>
      <div className="text-[22px] font-black">›</div>
    </button>
  </>
)}

      {step === 3 && (
  <div className="text-center py-6">
    <div className="text-[20px] font-black mb-2">
      Thank You
    </div>
    <p className="text-[14px] text-gray-600">
      We are reviewing your information. Please check back later.
    </p>
  </div>
)}

      {/* LOADING */}
      {loading && (
        <div className="text-center text-[14px] mt-3">
          Checking available loan path...
        </div>
      )}


    </div>

          {/* Trust */}
          <div className="grid grid-cols-3 gap-2 mt-4 text-center">
            <div className="border p-2 bg-white">
              ⏱
              <div className="text-[10px] font-extrabold mt-1">
                Takes under a minute
              </div>
            </div>
            <div className="border p-2 bg-white">
              ✓
              <div className="text-[10px] font-extrabold mt-1">
                No obligation
              </div>
            </div>
            <div className="border p-2 bg-white">
              ↗
              <div className="text-[10px] font-extrabold mt-1">
                Amount-based path
              </div>
            </div>
          </div>

          {/* Article */}
          <div className="mt-4 pt-3 border-t text-[14px] text-gray-700">
            <h2 className="font-black text-[18px] mb-1">
              Why the amount matters
            </h2>
            <p>
              Many people looking for a small emergency amount do not need the same path as someone checking a larger personal loan.
            </p>
          </div>

          {/* Footer */}
          <div className="mt-4 pt-3 border-t text-[10px] text-gray-500 pb-3">
            <p>
              Affiliate Disclosure: This page may receive compensation when visitors click through to partner websites. 
              This is not a loan offer or approval. Availability depends on lender review, state, income, credit profile, and requested amount.
            </p>

            <div className="flex gap-3 mt-2 underline justify-center">
              <a href="/privacy">Privacy Policy</a>
              <a href="/terms">Terms</a>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}