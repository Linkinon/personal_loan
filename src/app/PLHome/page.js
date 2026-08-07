"use client";

import { useState } from "react";

const OFFER_URL = "https://h0mlr.ttrk.io/click";

const PROJECT_IMAGE =
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85";

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

function Feature({ icon, label }) {
  return (
    <div className="flex items-center gap-2 rounded-xl border border-[#dbe5ee] bg-white px-3 py-2.5 shadow-[0_5px_16px_rgba(31,63,92,0.05)]">
      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-[#eef6fb] text-[#176b9c]">
        {icon}
      </span>
      <span className="text-[11px] font-black leading-4 text-[#36536b]">
        {label}
      </span>
    </div>
  );
}

export default function Page() {
  const [loading, setLoading] = useState(false);

  function forwardToOffer() {
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
        "home-improvement-financing-v3"
      );
      destination.searchParams.set("loan_purpose", "home_improvement");

      window.location.assign(destination.toString());
    } catch (error) {
      console.error("Unable to open loan options:", error);
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#f8fbfd_0%,#f2f6f9_46%,#edf3f7_100%)] font-[Arial,Helvetica,sans-serif] text-[#17324a]">
      <div className="mx-auto w-full max-w-[1180px] px-3 py-3 sm:px-5 md:py-7">
        <section className="overflow-hidden rounded-[22px] border border-[#dce5ec] bg-white shadow-[0_24px_70px_rgba(29,58,84,0.12)]">
          <div className="grid lg:grid-cols-[1.08fr_0.92fr]">
            <div className="relative px-5 pb-6 pt-5 sm:px-8 sm:py-8 lg:px-12 lg:py-11">
              <div className="absolute bottom-0 left-0 top-0 w-[6px] bg-[linear-gradient(180deg,#1b6f9f_0%,#45a7cf_48%,#f36b21_100%)]" />

              <div className="inline-flex items-center gap-2 rounded-full border border-[#c9dce8] bg-[#f1f8fc] px-3 py-2 text-[10px] font-black uppercase tracking-[0.12em] text-[#17618f] sm:text-[11px]">
                <span className="grid h-5 w-5 place-items-center rounded-full bg-[#176b9c] text-white">
                  <Icon className="h-3 w-3">
                    <path d="M3 11.5 12 4l9 7.5" />
                    <path d="M5.5 10v10h13V10" />
                  </Icon>
                </span>
                Home Improvement Financing
              </div>

              <h1 className="mt-4 max-w-[700px] text-[40px] font-black leading-[0.98] tracking-[-0.06em] text-[#15344e] sm:text-[48px] md:text-[56px] lg:text-[64px]">
                The project is already expensive.
                <span className="mt-1 block text-[#f36b21]">
                  Delaying it can cost more.
                </span>
              </h1>

              <p className="mt-4 max-w-[680px] text-[16px] leading-6 text-[#536a7d] sm:text-[17px] md:text-[18px] md:leading-7">
                Compare personal loan options for{" "}
                <strong className="font-bold text-[#f36b21]">roofing</strong>,{" "}
                <strong className="font-bold text-[#f36b21]">
                  window repair
                </strong>
                ,{" "}
                <strong className="font-bold text-[#f36b21]">
                  kitchen remodeling
                </strong>
                ,{" "}
                <strong className="font-bold text-[#f36b21]">
                  bathroom upgrades
                </strong>
                ,{" "}
                <strong className="font-bold text-[#f36b21]">HVAC</strong>,{" "}
                <strong className="font-bold text-[#f36b21]">flooring</strong>{" "}
                and other planned home improvements. Loan requests may range
                from{" "}
                <strong className="rounded-md bg-[#fff0e6] px-1.5 py-0.5 font-bold text-[#e45b13]">
                  $100 to $40,000
                </strong>
                .
              </p>

              <div className="mt-4 grid grid-cols-[auto_1fr] gap-3 rounded-2xl border border-[#d7e4ec] bg-[#f8fbfd] p-3.5 sm:p-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#15344e] text-white">
                  <Icon className="h-5 w-5">
                    <rect x="4" y="6" width="16" height="13" rx="2" />
                    <path d="M8 6V4h8v2M4 11h16M9 15h6" />
                  </Icon>
                </span>
                <div>
                  <p className="text-[13px] font-black leading-5 text-[#15344e] sm:text-[14px]">
                    Best suited to people who are currently working and receive
                    regular earned income.
                  </p>
                  {/* <p className="mt-1 text-[11px] leading-5 text-[#6b7d8b] sm:text-[12px]">
                    This is a personal loan request for a home project—not a
                    grant, free repair program, contractor quote or government
                    benefit.
                  </p> */}
                </div>
              </div>

              <button
                type="button"
                disabled={loading}
                onClick={forwardToOffer}
                className="mt-4 flex min-h-[64px] w-full items-center justify-center gap-3 rounded-xl bg-[#f36b21] px-4 text-[14px] font-semibold tracking-[-0.025em] text-white shadow-[0_14px_30px_rgba(243,107,33,0.26),inset_0_-4px_0_rgba(115,40,6,0.16)] transition hover:-translate-y-0.5 hover:bg-[#e96018] focus:outline-none focus:ring-4 focus:ring-[#cce9f5] disabled:cursor-default disabled:opacity-70 sm:min-h-[68px] sm:text-[20px]"
              >
                <span>
                  {loading
                    ? "Opening Home Project Options…"
                    : "Check Home Improvement Loan Options"}
                </span>
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white text-[23px] leading-none text-[#f36b21]">
                  ›
                </span>
              </button>

              <p className="mt-2 text-center text-[10px] leading-4 text-[#7b8996] sm:text-[11px]">
                One click takes you to the lender-matching form. Clicking does
                not accept a loan or guarantee approval, funding, an amount or
                a rate.
              </p>

              <div className="mt-4 grid grid-cols-3 gap-2">
                <div className="rounded-xl border border-[#e0e7ed] bg-white px-2 py-3 text-center shadow-[0_4px_14px_rgba(30,58,83,0.04)]">
                  <p className="text-[14px] font-black text-[#15344e] sm:text-[17px]">
                    $100–$40K
                  </p>
                  <p className="mt-1 text-[8px] font-black uppercase tracking-[0.09em] text-[#80909c] sm:text-[9px]">
                    Request range
                  </p>
                </div>

                <div className="rounded-xl border border-[#e0e7ed] bg-white px-2 py-3 text-center shadow-[0_4px_14px_rgba(30,58,83,0.04)]">
                  <p className="text-[14px] font-black text-[#15344e] sm:text-[17px]">
                    Personal Loan
                  </p>
                  <p className="mt-1 text-[8px] font-black uppercase tracking-[0.09em] text-[#80909c] sm:text-[9px]">
                    Funding type
                  </p>
                </div>

                <div className="rounded-xl border border-[#e0e7ed] bg-white px-2 py-3 text-center shadow-[0_4px_14px_rgba(30,58,83,0.04)]">
                  <p className="text-[14px] font-black text-[#15344e] sm:text-[17px]">
                    Home Project
                  </p>
                  <p className="mt-1 text-[8px] font-black uppercase tracking-[0.09em] text-[#80909c] sm:text-[9px]">
                    Intended use
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-[#e4ebf0] bg-[#f7f9fb] p-4 sm:p-6 lg:border-l lg:border-t-0 lg:p-7">
              <div className="mx-auto max-w-[455px]">
                <div className="overflow-hidden rounded-[18px] border border-[#d8e2e9] bg-white shadow-[0_18px_44px_rgba(31,58,84,0.10)]">
                  <div className="relative h-[145px] overflow-hidden sm:h-[175px] lg:h-[185px]">
                    <img
                      src={PROJECT_IMAGE}
                      alt="Home renovation project"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(16,45,67,0.02)_35%,rgba(16,45,67,0.68)_100%)]" />

                    <div className="absolute bottom-3 left-3 rounded-lg bg-white/95 px-3 py-2 shadow-lg">
                      <p className="text-[9px] font-black uppercase tracking-[0.10em] text-[#798995]">
                        Example project
                      </p>
                      <p className="mt-0.5 text-[14px] font-black text-[#15344e]">
                        Kitchen + interior upgrade
                      </p>
                    </div>
                  </div>

                  <div className="p-4 sm:p-5">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-[0.11em] text-[#81909c]">
                          Example loan request
                        </p>
                        <p className="mt-1 text-[36px] font-black tracking-[-0.055em] text-[#15344e]">
                          $20,000
                        </p>
                      </div>

                      <span className="rounded-full border border-[#bfd8e7] bg-[#eef7fb] px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.08em] text-[#176b9c]">
                        Home Project
                      </span>
                    </div>

                    <div className="mt-3 rounded-xl border border-[#e4eaf0] bg-[#fbfcfd] px-4">
                      <div className="flex items-center justify-between gap-3 border-b border-[#e8edf2] py-3">
                        <span className="text-[12px] font-bold text-[#768592]">
                          Loan purpose
                        </span>
                        <span className="text-[12px] font-black text-[#15344e]">
                          Home improvement
                        </span>
                      </div>

                      <div className="flex items-center justify-between gap-3 border-b border-[#e8edf2] py-3">
                        <span className="text-[12px] font-bold text-[#768592]">
                          Funding type
                        </span>
                        <span className="text-[12px] font-black text-[#15344e]">
                          Personal loan
                        </span>
                      </div>

                      <div className="flex items-center justify-between gap-3 py-3">
                        <span className="text-[12px] font-bold text-[#768592]">
                          Applicant fit
                        </span>
                        <span className="text-[12px] font-black text-[#f36b21]">
                          Regular earned income
                        </span>
                      </div>
                    </div>

                    <div className="mt-4 rounded-xl bg-[#15344e] p-4 text-white">
                      <div className="flex items-start gap-3">
                        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-[#2f90bd]">
                          <Icon className="h-5 w-5">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
                            <path d="m9 12 2 2 4-5" />
                          </Icon>
                        </span>

                        <div>
                          <p className="text-[12px] font-black">
                            Look at the full repayment picture.
                          </p>
                          <p className="mt-1 text-[11px] leading-5 text-[#d4dee6]">
                            Review the rate, monthly payment, fees and repayment
                            term before accepting any offer.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-3 grid grid-cols-2 gap-2.5">
                  <Feature
                    label="Roofing · Windows · HVAC"
                    icon={
                      <Icon className="h-4 w-4">
                        <path d="m3 13 9-8 9 8" />
                        <path d="M5 12v8h14v-8" />
                      </Icon>
                    }
                  />
                  <Feature
                    label="Kitchen · Bath · Flooring"
                    icon={
                      <Icon className="h-4 w-4">
                        <rect x="4" y="6" width="16" height="13" rx="1" />
                        <path d="M4 12h16" />
                      </Icon>
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-4 grid gap-3 md:grid-cols-3">
          <article className="rounded-2xl border border-[#dfe7ed] bg-white p-5 shadow-[0_10px_26px_rgba(30,58,83,0.05)]">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#edf7fb] text-[#176b9c]">
              <Icon>
                <path d="M14.7 6.3a4 4 0 0 0-5-5L7 4l3 3-3 3-3-3-2.7 2.7a4 4 0 0 0 5 5L14 22l4-4-7.7-7.7" />
                <path d="m16 8 4-4" />
              </Icon>
            </span>
            <h2 className="mt-3 text-[19px] font-black tracking-[-0.035em] text-[#15344e]">
              Built around actual home work
            </h2>
            <p className="mt-2 text-[13px] leading-6 text-[#637789]">
              The page stays anchored to repair and renovation intent instead
              of generic “need cash?” language.
            </p>
          </article>

          <article className="rounded-2xl border border-[#dfe7ed] bg-white p-5 shadow-[0_10px_26px_rgba(30,58,83,0.05)]">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#fff1e8] text-[#f36b21]">
              <Icon>
                <rect x="4" y="6" width="16" height="13" rx="2" />
                <path d="M8 6V4h8v2M4 11h16" />
              </Icon>
            </span>
            <h2 className="mt-3 text-[19px] font-black tracking-[-0.035em] text-[#15344e]">
              Regular-income positioning
            </h2>
            <p className="mt-2 text-[13px] leading-6 text-[#637789]">
              The copy makes it clear this is a repayment product and is better
              suited to people currently working with regular earned income.
            </p>
          </article>

          <article className="rounded-2xl border border-[#dfe7ed] bg-white p-5 shadow-[0_10px_26px_rgba(30,58,83,0.05)]">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#edf7fb] text-[#176b9c]">
              <Icon>
                <path d="M5 12h14" />
                <path d="m13 6 6 6-6 6" />
              </Icon>
            </span>
            <h2 className="mt-3 text-[19px] font-black tracking-[-0.035em] text-[#15344e]">
              One-click forwarder
            </h2>
            <p className="mt-2 text-[13px] leading-6 text-[#637789]">
              No quiz, debt-range selector or second decision before the
              lender-matching form.
            </p>
          </article>
        </section>

        <footer className="mx-auto max-w-[1040px] px-3 pb-7 pt-5 text-center text-[10px] leading-[1.6] text-[#778692]">
          <div className="mt-2 space-x-4">
          <a href="/privacy" className="underline">
            Privacy Policy
          </a>
          <a href="/terms" className="underline">
            Terms of Service
          </a>
        </div>
          <strong className="text-[#4c6070]">Disclosure:</strong> This page is
          an advertisement and is not a lender, contractor or home-improvement
          company. It does not make credit decisions, provide repair estimates
          or guarantee approval, funding, an amount or a rate. Loan amounts,
          rates, fees, terms and availability vary by lender, state and
          applicant information. Personal loans must be repaid and may include
          interest and fees.
        </footer>
      </div>
    </main>
  );
}

