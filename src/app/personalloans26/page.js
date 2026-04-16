'use client'

export default function Home() {
  return (
    <div className="bg-[#ece9e2] text-[#111] leading-[1.32] font-[Georgia,'Times New Roman',serif]">
      
      <div className="max-w-[840px] mx-auto bg-white min-h-screen shadow-[0_0_0_1px_rgba(0,0,0,0.08)]">
        
        <div className="max-w-[760px] mx-auto px-3 pt-3 pb-5">

          {/* EYEBROW */}
          {/* <div className="inline-block font-[Arial] text-[10px] font-bold uppercase bg-[#1b1b1b] text-white px-[6px] py-[4px] tracking-[0.35px] mb-[6px]">
            2026 Consumer Loan Watch
          </div> */}

          {/* TITLE */}
          <h1 className="text-[28px] leading-[1.01] font-bold mb-[7px] max-[700px]:text-[28px] max-[520px]:text-[24px]">
            <span className="text-red-600 font-extrabold">2026 Personal Loan</span> Trend: More Borrowers Are Comparing Fixed-Payment Options
          </h1>

          {/* DEK */}
          <div className="text-[12px] text-[#333] mb-[9px] max-[520px]:text-[14px]">
            With card balances still elevated and everyday costs staying high, more people are checking personal 
            loan options for <span className="text-red-600 font-semibold"> bills, repairs, and debt consolidation</span>.
          </div>

          {/* HERO */}
          <img
            src="/preimg.webp"
            alt="consumer reviewing finances"
            className="w-full h-[178px] object-center object-cover max-[700px]:h-[200px] max-[520px]:h-[136px] border border-[#cfcfcf] mb-[10px] contrast-[1.02] saturate-[0.92] bg-[#ddd]"
          />

          {/* CTA BOX */}
          <div className="bg-[#f7f1df] border-2 border-black p-[11px] shadow-[4px_4px_0_rgba(0,0,0,0.12)] mb-[12px]">

            <div className="font-[Arial] text-[10px] text-[#9b0000] font-bold uppercase tracking-[0.3px] mb-[5px]">
              Fast Personal Loan Check
            </div>

            <div className="text-[22px] leading-[1.03] font-semibold mb-[6px] max-[700px]:text-[20px] max-[520px]:text-[18px]">
              Compare <span className="text-red-600 font-extrabold">Personal Loan</span> Options That May Fit Your Situation
            </div>

            <div className="font-[Arial] text-[13px] text-[#333] mb-[8px] max-[520px]:text-[13px]">
              Review possible loan options for consolidation, urgent bills, repairs, or other large expenses.
            </div>

            {/* MINI ROW */}
            <div className="grid grid-cols-2 gap-[8px] mb-[9px] font-[Arial] text-[12px] max-[520px]:grid-cols-1 max-[520px]:gap-[6px]">
              
              <div className="border border-[#d8d0bc] bg-[#fffdf6] px-[8px] py-[7px]">
                <strong className="block text-[11px] uppercase mb-[2px]">
                  Why People Check
                </strong>
                Fixed payments can feel easier to manage than revolving balances.
              </div>

              <div className="border border-[#d8d0bc] bg-[#fffdf6] px-[8px] py-[7px]">
                <strong className="block text-[11px] uppercase mb-[2px]">
                  What Users Want
                </strong>
                A short form, fast results, and a simple next step on mobile.
              </div>

            </div>

            {/* CTA BUTTON */}
            <button
              onClick={() => (window.location.href = "https://h0mlr.ttrk.io/click")}
              className="w-full text-center bg-[#be1414] hover:bg-[#9f1010] text-white font-[Arial] font-bold text-[17px] max-[520px]:text-[15px] px-[10px] py-[13px] uppercase tracking-[0.3px]"
            >
              Check Available Options
            </button>

            {/* DISCLAIMER */}
            <div className="font-[Arial] text-[10px] text-[#666] mt-[7px] leading-[1.4]">
              This site is a marketing page and may connect users with lending-related offers or partners. Availability varies by state, profile, lender criteria, and other factors.
            </div>
          </div>

          {/* ARTICLE */}
          <div className="space-y-[10px] text-[15px] max-[520px]:text-[13px]">

            <p>
              For many households, the pressure is not coming from one huge purchase. It is multiple expenses arriving close together: rent gaps, medical costs, car repairs, and card balances that keep hanging around.
            </p>

            <p>
              That is one reason personal loans remain a common tool in 2026. Many borrowers use them to combine debt into one monthly payment, cover important home or vehicle expenses, or handle a large short-term need without putting up collateral.
            </p>

            <div className="border-l-[4px] border-[#9b0000] pl-[9px] italic text-[16px]">
              People are not always looking for “more debt.” Often they are looking for one clear payment, one timeline, and less month-to-month chaos.
            </div>

            <p>
              Many lenders now let borrowers start with a short pre-qualification flow, which is why these simple check pages continue to perform well on both desktop and mobile.
            </p>

          </div>
        </div>

        {/* FOOTER */}
        <div className="border-t border-[#ddd] p-[12px] font-[Arial] text-[11px] text-[#666]">
          <a href="/privacy" className="text-[#555] mr-[12px]">Privacy Policy</a>
          <a href="/terms" className="text-[#555] mr-[12px]">Terms</a>
          {/* <a href="#" className="text-[#555]">Affiliate Disclosure</a> */}
        </div>

      </div>
    </div>
  );
}