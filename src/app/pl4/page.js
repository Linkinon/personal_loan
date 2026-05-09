"use client";

export default function Home() {

const today = new Date().toLocaleDateString("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});
  const handleClick = () => {
    window.location.href = "https://h0mlr.ttrk.io/click";
  };

  return (
    <main className="bg-[#f2f2f2] min-h-screen">

      {/* TOP STRIP */}
      <div className="bg-[#1e3a5f] text-white text-right px-4 py-1 text-[12px] font-semibold">
        ADVERTORIAL
      </div>

      <div className="max-w-225 mx-auto px-4 py-6">

        {/* HEADLINE */}
        <h1 className="text-[28px] md:text-[36px] font-sans font-bold leading-tight text-[#111]">
          Most <span className="text-red-600"> Americans</span> Are Eligible for 
          <span className="text-red-600"> PERSONAL LOAN</span> Of Up To 
          <span className="text-red-600">$35,000</span> To Help Pay For 
          The Upcoming Holidays,<span className="text-red-600"> Bills</span>, 
          <span className="text-red-600"> Credit Card </span> debt, Or Any Other <span className="text-red-600"> Personal Expenses</span>
        </h1>

        {/* DATE */}
        <div className="text-center text-[13px] text-gray-600 mt-3">
            {today}
            <div>(If They Do This)</div>
        </div>

        {/* QUIZ BOX */}
        <div className="bg-[#d9dee3] p-6 mt-6 rounded">
          <div className="text-center text-[18px] font-medium mb-4">
            To see if you qualify, take this short quiz:
          </div>

          {/* PROGRESS BAR */}
          <div className="w-full bg-gray-300 rounded-full h-4 overflow-hidden">
            <div className="bg-yellow-500 h-4 w-[65%]"></div>
          </div>

          {/* CTA */}
          <button
            onClick={handleClick}
            className="mt-6 w-full bg-red-600 hover:bg-red-700 text-white py-3 font-semibold text-[16px] rounded"
          >
            Check if You Qualify {'>>'}
          </button>
        </div>

        {/* IMAGE */}
        <div className="mt-6">
          <img
            src="/granny.png"
            alt="loan"
            className="w-full"
          />
        </div>

        {/* TEXT */}
        <p className="text-[14px] text-gray-700 mt-3 italic">
          This is part of a 2025 Loan Program to help Americans recover from the recent unstable economy
        </p>

        <p className="text-[20px] font-semibold mt-4">
          It costs nothing to check and only takes around 60 seconds. Tap the button below to get started:
        </p>

        {/* BIG CTA */}
        <div className="flex justify-center mt-6">
          <button
            onClick={handleClick}
            className="bg-orange-500 hover:bg-orange-600 text-white text-[20px] font-bold px-28 py-4 rounded-lg"
          >
            See If You Qualify {'>>'}
            <div className="text-[12px] font-normal">
              (Click here & answer this)
            </div>
          </button>
        </div>

        {/* DIVIDER */}
        <div className="border-t mt-10"></div>

      </div>

      {/* FOOTER */}
      <div className="bg-[#1e3a5f] h-10 mt-10"></div>

      <div className="text-center text-[12px] text-gray-600 py-6 px-4">
        <p>
          THIS IS AN ADVERTISEMENT AND NOT AN ACTUAL NEWS ARTICLE, BLOG, OR CONSUMER PROTECTION UPDATE
        </p>

        <p className="mt-2">
          Copyright © 2020. All Rights Reserved
        </p>

        <p className="mt-1 underline">
            <a href="/privacy " className="mr-2">Privacy</a>
            <span>|</span>
            <a href="terms" className="ml-2">Terms</a>
        </p>
      </div>

    </main>
  );
}