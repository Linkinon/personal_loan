"use client";

import { useState } from "react";

const OFFER_URL = "https://h0mlr.ttrk.io/click";

function Icon({ children, className = "h-5 w-5" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

function Statement({ bank, balance, due, rotate = "" }) {
  return (
    <div
      className={`rounded-[18px] border border-[#d8dde3] bg-white p-4 shadow-[0_18px_35px_rgba(38,48,58,0.10)] ${rotate}`}
    >
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-[10px] font-black uppercase tracking-[0.14em] text-[#8a9299]">
            {bank}
          </p>
          <p className="mt-1 text-[12px] font-bold text-[#505a63]">
            Credit card statement
          </p>
        </div>
        <span className="grid h-9 w-9 place-items-center rounded-full bg-[#f0f2f4] text-[#28343e]">
          <Icon className="h-4 w-4">
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="M3 10h18" />
          </Icon>
        </span>
      </div>

      <div className="mt-5 flex items-end justify-between gap-4">
        <div>
          <p className="text-[9px] font-black uppercase tracking-[0.1em] text-[#9aa1a7]">
            Current balance
          </p>
          <p className="mt-1 text-[24px] font-black tracking-[-0.045em] text-[#222d36]">
            {balance}
          </p>
        </div>
        <div className="text-right">
          <p className="text-[9px] font-black uppercase tracking-[0.1em] text-[#9aa1a7]">
            Due
          </p>
          <p className="mt-1 text-[12px] font-black text-[#d86434]">{due}</p>
        </div>
      </div>
    </div>
  );
}

export default function CreditCardConsolidationPage() {
  const [loading, setLoading] = useState(false);

  function continueToOffer() {
    if (loading) return;
    setLoading(true);

    try {
      const destination = new URL(OFFER_URL, window.location.href);
      const incoming = new URLSearchParams(window.location.search);

      incoming.forEach((value, key) => {
        destination.searchParams.set(key, value);
      });

      destination.searchParams.set(
        "prelander",
        "credit-card-consolidation-statement-concept"
      );
      destination.searchParams.set("loan_purpose", "debt_consolidation");

      window.location.assign(destination.toString());
    } catch (error) {
      console.error("Unable to open consolidation options:", error);
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#f3f1eb] font-[Arial,Helvetica,sans-serif] text-[#222d36]">
      <div className="mx-auto w-full max-w-[1160px] px-3 py-2 sm:px-5 md:py-7">
        <section className="overflow-hidden rounded-[26px] border border-[#dad8d1] bg-[#fffdf8] shadow-[0_28px_80px_rgba(45,48,52,0.11)]">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            {/* VISUAL / STATEMENT SIDE */}
            <div className="order-2 relative overflow-hidden border-t border-[#e2dfd7] bg-[#ece9e1] px-4 py-6 sm:px-7 sm:py-8 lg:order-1 lg:border-r lg:border-t-0 lg:px-8 lg:py-10">
              <div className="absolute -left-16 -top-20 h-[230px] w-[230px] rounded-full bg-[#d8e1f0]/70" />
              <div className="absolute -bottom-20 -right-14 h-[210px] w-[210px] rounded-full bg-[#f3c9b7]/60" />

              <div className="relative z-10 mx-auto max-w-[430px]">
                <div className="mb-4">
                  <p className="font-[Georgia,Times_New_Roman,serif] text-[26px] font-bold leading-tight text-[#27333c]">
                    Three statements.
                    <span className="block text-[#b9572f]">Three due dates.</span>
                  </p>
                  <p className="mt-2 max-w-[380px] text-[12px] leading-5 text-[#6b747b]">
                    Consolidation is about replacing several eligible balances
                    with one new loan—not making the debt disappear.
                  </p>
                </div>

                <div className="relative mx-auto h-[330px] max-w-[380px]">
                  <div className="absolute left-2 right-7 top-8 -rotate-[5deg]">
                    <Statement
                      bank="CARD 01"
                      balance="$7,850"
                      due="Aug 12"
                    />
                  </div>
                  <div className="absolute left-6 right-3 top-[102px] rotate-[4deg]">
                    <Statement
                      bank="CARD 02"
                      balance="$5,200"
                      due="Aug 18"
                    />
                  </div>
                  <div className="absolute left-0 right-10 top-[180px] -rotate-[2deg]">
                    <Statement
                      bank="LOAN 03"
                      balance="$4,950"
                      due="Aug 25"
                    />
                  </div>
                </div>

                <div className="mt-2 rounded-[18px] border border-[#cfd9e2] bg-white p-4 shadow-[0_14px_32px_rgba(40,51,61,0.09)]">
                  <div className="flex items-center gap-3">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#263a4d] text-white">
                      <Icon className="h-5 w-5">
                        <path d="M5 12h14" />
                        <path d="m13 6 6 6-6 6" />
                      </Icon>
                    </span>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.12em] text-[#8a949c]">
                        Example consolidation request
                      </p>
                      <p className="mt-1 text-[28px] font-black tracking-[-0.05em] text-[#263a4d]">
                        $18,000
                      </p>
                    </div>
                  </div>

                  <div className="mt-3 grid grid-cols-2 gap-2">
                    <div className="rounded-xl bg-[#f4f6f8] p-3">
                      <p className="text-[9px] font-black uppercase tracking-[0.1em] text-[#87919a]">
                        Replaces
                      </p>
                      <p className="mt-1 text-[12px] font-black text-[#293843]">
                        Multiple balances
                      </p>
                    </div>
                    <div className="rounded-xl bg-[#f8eee9] p-3">
                      <p className="text-[9px] font-black uppercase tracking-[0.1em] text-[#a57866]">
                        Becomes
                      </p>
                      <p className="mt-1 text-[12px] font-black text-[#b9572f]">
                        One loan schedule
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* COPY / CTA SIDE */}
            <div className="order-1 px-5 py-3 sm:px-8 sm:py-8 lg:order-2 lg:px-12 lg:py-12">
              <p className="text-[11px] font-black uppercase tracking-[0.18em] text-red-600 ">
                LOAN FOR  CREDIT CARD + DEBT CONSOLIDATION 
              </p>

              <h1 className="mt-1 max-w-[680px] font-[Georgia,Times_New_Roman,serif] text-[34px] font-bold leading-[0.98] tracking-[-0.045em] text-[#21313d] sm:text-[50px] md:text-[58px] lg:text-[64px]">
                Stop treating every balance like a separate problem.
              </h1>

              <p className="mt-3 max-w-[680px] text-[16px] leading-6 text-[#5d6b75] sm:text-[17px] md:text-[18px] md:leading-7">
                Compare personal loan options that may help consolidate{" "}
                <strong className="font-black text-[#21313d]">
                  credit card balances
                </strong>
                ,{" "}
                <strong className="font-black text-[#21313d]">
                  personal loans
                </strong>
                ,{" "}
                <strong className="font-black text-[#21313d]">
                  medical bills
                </strong>{" "}
                and other eligible unsecured debt into a single new loan.
              </p>

              <div className="mt-2 border-y border-[#dedfdc] py-2">
                <div className="grid gap-2 sm:grid-cols-3">
                  <div>
                    <p className="text-[9px] font-black uppercase tracking-[0.12em] text-[#969ca1]">
                      Loan request
                    </p>
                    <p className="mt-1 text-[18px] font-black text-[#233541]">
                      $100–$40,000
                    </p>
                  </div>
                  <div>
                    <p className="text-[9px] font-black uppercase tracking-[0.12em] text-[#969ca1]">
                      Purpose
                    </p>
                    <p className="mt-1 text-[18px] font-black text-[#233541]">
                      Consolidation
                    </p>
                  </div>
                  <div>
                    <p className="text-[9px] font-black uppercase tracking-[0.12em] text-[#969ca1]">
                      Better fit
                    </p>
                    <p className="mt-1 text-[18px] font-black text-[#b9572f]">
                      Regular income
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-2 rounded-[18px] bg-[#253b4c] p-4 text-white sm:p-5">
                <div className="flex items-start gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#f0b49a] text-[#253b4c]">
                    <Icon className="h-5 w-5">
                      <rect x="4" y="6" width="16" height="13" rx="2" />
                      <path d="M8 6V4h8v2M4 11h16" />
                    </Icon>
                  </span>
                  <div>
                    <p className="text-[13px] font-black leading-5">
                      Best suited to people who are currently working and
                      receive regular earned income.
                    </p>
                    {/* <p className="mt-1 text-[11px] leading-5 text-[#d8e0e6]">
                      This is a personal loan for consolidating debt—not debt
                      settlement, forgiveness, a grant or a government
                      program.
                    </p> */}
                  </div>
                </div>
              </div>

              <button
                type="button"
                disabled={loading}
                onClick={continueToOffer}
                className="mt-3 flex min-h-[64px] w-full items-center justify-center gap-3 rounded-full bg-[#b9572f] px-5 text-[16px] font-bold text-white shadow-[0_14px_30px_rgba(185,87,47,0.24)] transition hover:-translate-y-0.5 hover:bg-[#a94f2b] focus:outline-none focus:ring-4 focus:ring-[#ead3c8] disabled:cursor-default disabled:opacity-70 sm:min-h-[68px] sm:text-[20px]"
              >
                <span>
                  {loading
                    ? "Opening Consolidation Options…"
                    : "Compare Consolidation Loan Options"}
                </span>
                <span className="grid h-8 w-8 place-items-center rounded-full bg-white text-[#b9572f]">
                  <Icon className="h-4 w-4">
                    <path d="M5 12h14" />
                    <path d="m13 6 6 6-6 6" />
                  </Icon>
                </span>
              </button>

              <p className="mt-2 text-center text-[10px] leading-4 text-[#818991] sm:text-[11px]">
                Continue to the lender-matching form. Clicking does not accept a
                loan or guarantee approval, funding, an amount or a rate.
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-[16px] border border-[#dedfdc] bg-[#faf9f5] p-4">
                  <p className="text-[10px] font-black uppercase tracking-[0.12em] text-[#8c9399]">
                    Before you choose an amount
                  </p>
                  <p className="mt-2 text-[13px] leading-5 text-[#5a6872]">
                    Add the balances you actually plan to consolidate. Borrowing
                    more than you need can increase the total repayment cost.
                  </p>
                </div>

                <div className="rounded-[16px] border border-[#dedfdc] bg-[#faf9f5] p-4">
                  <p className="text-[10px] font-black uppercase tracking-[0.12em] text-[#8c9399]">
                    Before you accept a loan
                  </p>
                  <p className="mt-2 text-[13px] leading-5 text-[#5a6872]">
                    Compare APR, fees, monthly payment and total repayment—not
                    just whether the payment looks lower.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-4 rounded-[22px] border border-[#dddcd7] bg-[#fffdf8] p-5 sm:p-7">
          <div className="grid gap-5 md:grid-cols-[0.9fr_1.1fr] md:items-center">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.16em] text-[#8a9299]">
                WHAT CONSOLIDATION IS FOR
              </p>
              <h2 className="mt-2 font-[Georgia,Times_New_Roman,serif] text-[30px] font-bold leading-tight text-[#25343f] sm:text-[34px]">
                Fewer moving parts. Not magic.
              </h2>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl bg-[#f2f4f5] p-4">
                <p className="text-[12px] font-black text-[#25343f]">
                  Credit cards
                </p>
                <p className="mt-1 text-[11px] leading-5 text-[#6e7a82]">
                  Eligible revolving balances you want to replace.
                </p>
              </div>

              <div className="rounded-2xl bg-[#f2f4f5] p-4">
                <p className="text-[12px] font-black text-[#25343f]">
                  Personal loans
                </p>
                <p className="mt-1 text-[11px] leading-5 text-[#6e7a82]">
                  Existing unsecured installment balances.
                </p>
              </div>

              <div className="rounded-2xl bg-[#f8eee9] p-4">
                <p className="text-[12px] font-black text-[#b9572f]">
                  Medical + other
                </p>
                <p className="mt-1 text-[11px] leading-5 text-[#7f7069]">
                  Other eligible unsecured debt may also be considered.
                </p>
              </div>
            </div>
          </div>
        </section>

        <footer className="mx-auto max-w-[1020px] px-3 pb-7 pt-5 text-center text-[10px] leading-[1.6] text-[#7e868d]">
          <div className="mt-2 space-x-4">
          <a href="/privacy" className="underline">
            Privacy Policy
          </a>
          <a href="/terms" className="underline">
            Terms of Service
          </a>
        </div>
          <strong className="text-[#505e68]">Disclosure:</strong> This page is
          an advertisement and is not a lender or debt-relief company. It does
          not make credit decisions, settle debt or guarantee approval,
          funding, an amount, a rate or savings. Loan amounts, rates, fees,
          terms and availability vary by lender, state and applicant
          information. Personal loans must be repaid and may include interest
          and fees.
        </footer>
      </div>
    </main>
  );
}

