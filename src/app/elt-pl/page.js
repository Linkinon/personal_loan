'use client';

export default function Page() {
  const OFFER_URL = 'https://h0mlr.ttrk.io/click';

  const go = () => {
    window.location.href = OFFER_URL;
  };

  const reasons = [
    ['Credit Cards', 'Consolidate high-interest balances'],
    ['Debt Payoff', 'Replace multiple monthly payments'],
    ['Home Repairs', 'Roof, bath, windows and repairs'],
    ['Auto Costs', 'Repairs, replacement and other costs'],
    ['Medical Bills', 'Planned or unexpected expenses'],
    ['Major Expenses', 'Moving, purchases and other needs'],
  ];

  return (
    <main className="min-h-screen bg-[#0d3550] text-white">
      <div className="bg-[#b80f12] px-4 py-2 text-center text-[11px] font-bold tracking-wide sm:text-[13px]">
        Updated: 2 Hours Ago
      </div>

      <section className="mx-auto w-full max-w-[820px] px-4 pb-8 pt-4 sm:px-6 sm:pt-7">
        <article>
          <p className="mb-2 text-center text-[10px] font-bold uppercase tracking-[0.12em] text-[#c9d9e3] sm:text-[12px]">
            Personal Loan Options From $100 To $40,000
          </p>

          <h1 className="mx-auto max-w-[760px] text-center font-sans text-[24px] font-black uppercase leading-[1.03] tracking-[-0.025em] sm:text-[46px]">
            <span className="text-[#ffd047]">AMERICANS:</span>{' '}
            Credit Card Debt, Big Bills Or A{' '}
            <span className="text-[#ff684d]">Major Expense?</span>{' '}
            Check Personal Loan Options Up To{' '}
            <span className="text-[#ffd047]">$40,000 Today.</span>
          </h1>

          <p className="mx-auto mt-2 max-w-[700px] text-center text-[13px] leading-5 text-[#e7eef3] sm:mt-4 sm:text-[17px] sm:leading-7">
            Compare options for{' '}
            <strong className="text-white">
              credit card consolidation, debt payoff, home repairs,
              car costs, medical bills, moving, major purchases
            </strong>{' '}
            and other real expenses before putting another large balance
            on a credit card.
          </p>

          <div className="relative mx-auto mt-3 overflow-hidden rounded-xl border border-white/15 shadow-2xl sm:mt-6">
            <img
              src="/elt-pl.jpeg"
              alt="Personal loan expense"
              className="block h-[160px] w-full object-cover sm:h-[300px]"
            />

            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent px-2 pb-2 pt-10 sm:px-5 sm:pb-5 sm:pt-24">
              <div className="mx-auto w-[94%] rounded-lg bg-[#df2614] px-3 py-2 text-center text-[14px] font-black uppercase tracking-tight text-white shadow-xl sm:w-[82%] sm:py-4 sm:text-[25px]">
                Check Loan Options Up To $40,000
              </div>
            </div>
          </div>

          <p className="mx-auto mt-3 max-w-[720px] text-center text-[12px] leading-5 text-[#e4edf2] sm:mt-5 sm:text-[16px] sm:leading-6">
            Americans are checking personal loan options to handle expensive
            balances, major purchases and unexpected costs. See what options
            may be available before adding more revolving debt.
          </p>

          <button
            onClick={go}
            className="mt-3 w-full rounded-lg bg-[#ffd047] px-4 py-3 text-[16px] font-black uppercase text-[#082b3e] shadow-[0_5px_0_#bd8b00] transition active:translate-y-1 active:shadow-none sm:mt-5 sm:py-4 sm:text-[20px]"
          >
            Check My Loan Options Now &gt;&gt;
          </button>

          <p className="mt-2 text-center text-[10px] leading-4 text-[#bed0da] sm:text-[11px]">
            Approval, amount, rates and terms vary by lender and applicant
            information.
          </p>

          <div className="mt-5 grid grid-cols-2 gap-2 sm:mt-8 sm:grid-cols-3 sm:gap-3">
            {reasons.map(([title, copy]) => (
              <div
                key={title}
                className="rounded-lg border border-white/10 bg-white/[0.06] p-3 sm:p-4"
              >
                <div className="text-[13px] font-bold sm:text-[14px]">
                  {title}
                </div>

                <div className="mt-1 text-[11px] leading-4 text-[#bcd0dc] sm:text-[12px]">
                  {copy}
                </div>
              </div>
            ))}
          </div>
        </article>
      </section>

      <footer className="bg-white px-4 py-6 text-center text-[#59656d]">
        <div className="mx-auto max-w-[760px] text-[10px] leading-5 sm:text-[11px]">
          <div className="mb-2 flex justify-center gap-5 font-semibold underline">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
          </div>

          <p>
            Disclosure: This page is an advertisement and is not a lender.
            It does not make credit decisions or guarantee approval, loan
            amounts, rates or funding. Personal loans must be repaid and
            may include interest and fees.
          </p>
        </div>
      </footer>
    </main>
  );
}


