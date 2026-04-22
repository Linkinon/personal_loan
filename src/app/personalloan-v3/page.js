"use client";

export default function Page() {
  // 🔥 CHANGE THIS URL ONLY
  const CLICK_URL = "https://h0mlr.ttrk.io/click";

  return (
    <main className="bg-[#0b2f4a] min-h-screen flex flex-col justify-between">

      {/* TOP BAR */}
      <div className="bg-[#8b0000] text-white text-center text-sm py-2">
        Updated: 2 hours ago
      </div>

      {/* MAIN CONTENT */}
      <div className="flex justify-center px-4">
        <div className="max-w-3xl text-center text-white py-10">

          {/* HEADLINE */}
          <h1 className="text-xl md:text-2xl font-bold leading-snug">
            Most Americans Are Eligible - Hardship Recovery Loans Of Up To
            $35,000 To Help Pay For The Upcoming Holidays, Bills, Groceries, Or
            Any Other Personal Expenses
          </h1>

          {/* IMAGE */}
          <div className="mt-6">
            <img
              src="/money.png"
              alt="money"
              className="w-full rounded"
            />
          </div>

          {/* IMAGE TAG LINE */}
          <div className="bg-[#e53935] text-white font-bold py-2 mt-[-4px] text-sm">
            DIRECT DEPOSITS UP TO $35,000 ✅
          </div>

          {/* PARAGRAPHS */}
          <div className="text-sm text-gray-200 mt-6 space-y-4 leading-relaxed">
            <p>
              Americans are being awarded loans up to $35,000 to level up their
              finances after the recent financial hardship. The cash will be
              deposited directly into your account the next day. Check how much
              you are eligible to receive on the next page!
            </p>

            <p>
              This is part of a 2024 Hardship Recovery Plan to help Americans
              recover from the recent unstable economy
            </p>

            <p>
              It costs nothing to check and only takes around 60 seconds. Tap the
              button below to get started:
            </p>
          </div>

          {/* CTA BUTTON */}
          <a
            href={CLICK_URL}
            className="block mt-6 bg-gray-200 text-black font-semibold py-3 rounded hover:bg-gray-300 transition"
          >
            CHECK ELIGIBILITY HERE &gt;&gt;
          </a>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="bg-white text-center text-xs text-black py-6">
        <p>thethrivewallet.com © 2022</p>
        <div className="mt-2 space-x-4">
          <a href="/privacy" className="underline">
            Privacy Policy
          </a>
          <a href="/terms" className="underline">
            Terms of Service
          </a>
        </div>
        <h2 className="text-xs my-4 px-4">This website is not endorsed by Facebook in any way.</h2>
        <h3 className="text-xs my-6 px-4">This website helps users get the best information so they can make informed decisions and save money.<br/> 
            This article is for demo purposes only. By proceeding you are agreeing to our terms and conditions.</h3>
      </footer>
    </main>
  );
}