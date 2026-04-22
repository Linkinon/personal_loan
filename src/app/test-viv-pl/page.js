"use client";

export default function Home() {

  const goOffer = () => {
    window.location.href = "https://h0mlr.ttrk.io/click";
  };

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
            Check If You Qualify for Up to $35,000
          </h1>

          <p className="text-gray-600 mb-3">
            Takes 2 minutes • No impact on credit score
          </p>

          
        </div>

        {/* CLICKABLE CARDS */}
        <div className="mt-4 space-y-3 text-white">
          <div onClick={goOffer}
                className="bg-green-500 py-4 px-3 rounded-xl shadow cursor-pointer flex items-center justify-between">
                <span>$1000 - $5000</span>
                <span className="text-xl">▶</span>
            </div>
            <div onClick={goOffer}
                className="bg-green-500 py-4 px-3 rounded-xl shadow cursor-pointer flex items-center justify-between">
                <span>$5000 - $15000</span>
                <span className="text-xl">▶</span>
            </div>

            <div onClick={goOffer}
                className="bg-green-500 p-4 rounded-xl shadow cursor-pointer flex items-center justify-between">
                <span>$15000 - $25000</span>
                <span className="text-xl">▶</span>
            </div>

            <div onClick={goOffer}
                className="bg-green-500 p-4 rounded-xl shadow cursor-pointer flex items-center justify-between">
                <span>$25000 - $35000</span>
                <span className="text-xl">▶</span>
            </div>

            <div onClick={goOffer}
                className="bg-green-500 p-4 rounded-xl shadow cursor-pointer flex items-center justify-between">
                <span>$35000+</span>
                <span className="text-xl">▶</span>
            </div>

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

