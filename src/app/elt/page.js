"use client";

import { useState } from "react";

const PERSONAL_LOAN_URL = "https://h0mlr.ttrk.io/click";

function Icon({ children, className = "" }) {
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

function Purpose({ label, active = false, children }) {
  return (
    <div
      className={`flex min-h-[66px] items-center gap-[9px] rounded-[12px] border p-[10px] text-[12px] font-[850] ${
        active
          ? "border-[#8ce1bb] bg-[#edfff6] shadow-[inset_0_0_0_1px_#8ce1bb]"
          : "border-[#dce9e2] bg-[#f9fcfa]"
      } text-[#315148] max-[620px]:min-h-[59px] max-[620px]:p-2 max-[620px]:text-[10.5px]`}
    >
      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-[9px] bg-[#eafff4] text-[#062f2a] max-[620px]:h-[29px] max-[620px]:w-[29px]">
        <Icon className="h-[18px] w-[18px]">{children}</Icon>
      </span>
      {label}
    </div>
  );
}

function InfoCard({ title, icon, children }) {
  return (
    <article className="rounded-2xl border border-[#062f2a]/10 bg-white p-[19px_18px] shadow-[0_13px_32px_rgba(6,47,42,0.08)] max-[620px]:p-[16px_15px]">
      <div className="mb-3 grid h-[38px] w-[38px] place-items-center rounded-[11px] bg-[#062f2a] text-[#d9ff57]">
        <Icon className="h-[21px] w-[21px]">{icon}</Icon>
      </div>
      <h2 className="m-0 text-[20px] font-[850] tracking-[-0.035em] text-[#062f2a]">
        {title}
      </h2>
      <p className="mt-[7px] text-[13px] leading-[1.55] text-[#5e706b]">
        {children}
      </p>
    </article>
  );
}

export default function Page() {
  const [loading, setLoading] = useState(false);

  function continueToOffer() {
    if (loading) return;
    setLoading(true);

    try {
      const destination = new URL(PERSONAL_LOAN_URL, window.location.href);
      const currentParams = new URLSearchParams(window.location.search);

      currentParams.forEach((value, key) => {
        destination.searchParams.set(key, value);
      });

      destination.searchParams.set(
        "prelander",
        "personal-loan-premium-single-click"
      );
      destination.searchParams.set("selected_path", "personal-loan-options");

      window.location.assign(destination.toString());
    } catch (error) {
      console.error("Unable to open the loan offer URL:", error);
      setLoading(false);
    }
  }

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-gradient-to-br from-[#f5fff9] via-[#fffaf0] to-[#f0fff7] font-[Arial,Helvetica,sans-serif] text-[#10231f] antialiased">
      <div className="pointer-events-none absolute left-[-110px] top-[-120px] h-[360px] w-[360px] rounded-full bg-[#13c98a]/20 blur-[90px]" />
      <div className="pointer-events-none absolute right-[-120px] top-[-90px] h-[340px] w-[340px] rounded-full bg-[#d9ff57]/30 blur-[90px]" />

      <header className="relative z-20 border-b-4 border-[#d9ff57] bg-[#062f2a] text-white">
        <div className="mx-auto flex h-[62px] w-full max-w-[1120px] items-center justify-between gap-4 px-5 max-[620px]:h-[52px] max-[620px]:px-[14px]">
          <div className="flex items-center gap-[10px] font-[950] tracking-[-0.02em]">
            <span className="grid h-[34px] w-[34px] place-items-center rounded-[10px] bg-[#d9ff57] text-[#062f2a] shadow-[inset_0_-4px_0_rgba(6,47,42,0.12)] max-[620px]:h-[31px] max-[620px]:w-[31px]">
              <Icon className="h-[21px] w-[21px]">
                <path d="M4 10.5 12 5l8 5.5" />
                <path d="M6.5 9.2V19h11V9.2" />
                <path d="M9.3 19v-5.4h5.4V19" />
              </Icon>
            </span>
            <span className="text-[17px] max-[620px]:text-[14px]">
              Personal Loan Options
            </span>
          </div>
        </div>
      </header>

      <main className="relative z-10 px-[14px] pb-[42px] pt-[22px] max-[620px]:px-2 max-[620px]:pb-[26px] max-[620px]:pt-[9px]">
        <section className="relative mx-auto grid w-full max-w-[1080px] grid-cols-[1.06fr_0.94fr] overflow-hidden rounded-[26px] border border-[#062f2a]/10 bg-white shadow-[0_30px_80px_rgba(6,47,42,0.18)] max-[850px]:grid-cols-1 max-[620px]:rounded-[17px]">
          <div className="absolute inset-y-0 left-0 z-20 w-2 bg-gradient-to-b from-[#d9ff57] via-[#13c98a] to-[#ff7a1a] max-[620px]:w-[5px]" />

          <div className="relative z-10 px-9 pb-8 pl-11 pt-[38px] max-[850px]:px-[26px] max-[850px]:pb-[26px] max-[850px]:pl-[34px] max-[850px]:pt-[30px] max-[620px]:pb-4 max-[620px]:pl-[19px] max-[620px]:pr-[14px] max-[620px]:pt-[19px]">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#b9f0d7] bg-[#e8fff4] px-3 py-2 text-[12px] font-[950] uppercase leading-none tracking-[0.045em] text-[#075b43] max-[620px]:px-[9px] max-[620px]:py-[7px] max-[620px]:text-[10.5px]">
              <span className="h-2 w-2 rounded-full bg-[#13c98a] shadow-[0_0_0_4px_rgba(19,201,138,0.14)]" />
              Personal loan requests from $100 to $40,000
            </div>

            <h1 className="mt-[18px] max-w-[650px] text-[70px] font-[900] leading-[0.99] tracking-[-0.064em] text-[#062f2a] max-[1100px]:text-[60px] max-[950px]:text-[52px] max-[850px]:text-[56px] max-[620px]:mt-[13px] max-[620px]:text-[34px]">
              Borrow for a real expense.{" "}
              <em className="not-italic text-[#ff7a1a]">
                Start with a payment you can handle.
              </em>
            </h1>

            <p className="mt-[19px] max-w-[650px] text-[18px] leading-[1.5] text-[#3f5750] max-[620px]:mt-3 max-[620px]:text-[16px] max-[620px]:leading-[1.42]">
              Compare <span className="text-[#ff7a1a] font-semibold">personal loan</span> options for <span className="text-[#ff7a1a] font-semibold">home repairs</span>, <span className="text-[#ff7a1a] font-semibold">debt consolidation</span>, <span className="text-[#ff7a1a] font-semibold"> moving costs</span>, a <span className="text-[#ff7a1a] font-semibold">major purchase</span> or another 
              <span className="text-[#ff7a1a] font-semibold"> planned expense</span>. See what may be available before making a decision.
            </p>

            <div className="mt-5 grid grid-cols-[auto_1fr] gap-[13px] rounded-[15px] border border-[#bfead6] bg-gradient-to-br from-[#effff7] to-[#f9fff4] p-[16px_17px] shadow-[inset_5px_0_0_#13c98a] max-[620px]:mt-[14px] max-[620px]:gap-[10px] max-[620px]:p-3">
              <div className="grid h-[42px] w-[42px] place-items-center rounded-xl bg-[#062f2a] text-[#d9ff57] max-[620px]:h-[37px] max-[620px]:w-[37px]">
                <Icon className="h-[23px] w-[23px]">
                  <rect x="4" y="6" width="16" height="13" rx="2" />
                  <path d="M8 6V4h8v2M4 11h16M9 15h6" />
                </Icon>
              </div>
              <div className="text-[14px] leading-[1.5] text-[#294840] max-[620px]:text-[12.5px]">
                <strong className="mb-0.5 block text-[15px] text-[#062f2a] max-[620px]:text-[13.5px]">
                  Best suited to people who are currently working and receive
                  regular earned income.
                </strong>
              </div>
            </div>

            <div className="mt-[22px] max-[620px]:mt-[15px]">
              <button
                type="button"
                disabled={loading}
                onClick={continueToOffer}
                className="flex min-h-[72px] w-full cursor-pointer items-center justify-center gap-3 rounded-[14px] bg-green-500 px-[18px] py-4 text-[21px] font-[950] tracking-[-0.025em] text-[#062f2a] shadow-[0_14px_28px_rgba(111,166,0,0.28),inset_0_-5px_0_rgba(6,47,42,0.13),inset_0_1px_0_rgba(255,255,255,0.7)] transition duration-150 hover:-translate-y-0.5 hover:saturate-[1.08] hover:shadow-[0_18px_35px_rgba(6,47,42,0.24),inset_0_-5px_0_rgba(6,47,42,0.13)] focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-4 focus-visible:outline-[#ff7a1a]/60 disabled:cursor-default disabled:opacity-70 disabled:hover:translate-y-0 max-[620px]:min-h-[62px] max-[620px]:px-3 max-[620px]:py-[13px] max-[620px]:text-[18px]"
              >
                <span>
                  {loading
                    ? "Opening Loan Options…"
                    : "Check Available Loan Options"}
                </span>
                <span className="grid h-[35px] w-[35px] shrink-0 place-items-center rounded-full bg-[#062f2a] text-[23px] font-[950] leading-none text-white max-[620px]:h-[31px] max-[620px]:w-[31px] max-[620px]:text-[20px]">
                  ›
                </span>
              </button>

              <p className="mx-auto mt-[10px] max-w-[560px] text-center text-[11.5px] leading-[1.45] text-[#6a7c76]">
                Continue to the lender-matching form. Clicking does not accept
                a loan or guarantee approval, funding, an amount or a rate.
              </p>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-2 max-[620px]:mt-[11px] max-[620px]:gap-[5px]">
              <div className="flex min-h-[55px] items-center justify-center gap-[7px] rounded-[11px] border border-[#e0eee7] bg-[#f5faf7] px-2 py-[10px] text-center text-[11px] font-[850] text-[#425b53] max-[620px]:min-h-[48px] max-[620px]:gap-1 max-[620px]:px-1 max-[620px]:py-2 max-[620px]:text-[9.5px]">
                <Icon className="h-[17px] w-[17px] shrink-0 text-[#13c98a] max-[620px]:h-[14px] max-[620px]:w-[14px]">
                  <path d="M12 2v20M17 6.5H9.5a3.5 3.5 0 0 0 0 7H14a3.5 3.5 0 0 1 0 7H6" />
                </Icon>
                $100–$40,000
              </div>

              <div className="flex min-h-[55px] items-center justify-center gap-[7px] rounded-[11px] border border-[#e0eee7] bg-[#f5faf7] px-2 py-[10px] text-center text-[11px] font-[850] text-[#425b53] max-[620px]:min-h-[48px] max-[620px]:gap-1 max-[620px]:px-1 max-[620px]:py-2 max-[620px]:text-[9.5px]">
                <Icon className="h-[17px] w-[17px] shrink-0 text-[#13c98a] max-[620px]:h-[14px] max-[620px]:w-[14px]">
                  <path d="m4 13 5 5L20 7" />
                </Icon>
                Takes 2 Minute
              </div>

              <div className="flex min-h-[55px] items-center justify-center gap-[7px] rounded-[11px] border border-[#e0eee7] bg-[#f5faf7] px-2 py-[10px] text-center text-[11px] font-[850] text-[#425b53] max-[620px]:min-h-[48px] max-[620px]:gap-1 max-[620px]:px-1 max-[620px]:py-2 max-[620px]:text-[9.5px]">
                <Icon className="h-[17px] w-[17px] shrink-0 text-[#13c98a] max-[620px]:h-[14px] max-[620px]:w-[14px]">
                    <rect x="2" y="5" width="20" height="14" rx="2" />
                    <path d="M2 10h20" />
                    <path d="M6 15h4" />
                </Icon>
                No Credit Impact
              </div>
            </div>
          </div>

          <div
            className="relative flex min-h-[590px] hidden md:block items-center justify-center overflow-hidden bg-gradient-to-br from-[#062f2a] to-[#0a4b40] px-[34px] py-[38px] max-[850px]:min-h-0 max-[850px]:px-[22px] max-[850px]:pb-7 max-[850px]:pt-[25px] max-[620px]:px-[13px] max-[620px]:pb-[22px] max-[620px]:pt-5"
            aria-label="Personal loan request preview"
          >
            <div className="pointer-events-none absolute right-[-180px] top-[-180px] h-[420px] w-[420px] rounded-full bg-[#d9ff57]/20" />
            <div className="pointer-events-none absolute bottom-[-160px] left-[-165px] h-[310px] w-[310px] rounded-full bg-[#13c98a]/20" />

            <div className="relative z-10 w-full max-w-[420px] max-[850px]:max-w-[560px]">
              <div className="mb-3 flex items-center justify-between text-[11px] font-extrabold uppercase tracking-[0.08em] text-[#d6eee6]">
                <span>Loan request preview</span>
                <span className="flex items-center gap-[7px] rounded-full border border-white/15 bg-white/[0.07] px-[10px] py-[7px] before:h-[7px] before:w-[7px] before:rounded-full before:bg-[#d9ff57] before:shadow-[0_0_0_4px_rgba(217,255,87,0.12)] before:content-['']">
                  Next step
                </span>
              </div>

              <div className="rounded-[20px] bg-white px-[22px] pb-5 pt-6 shadow-[0_25px_55px_rgba(0,0,0,0.28)] max-[620px]:px-4 max-[620px]:pb-4 max-[620px]:pt-[19px]">
                <div className="text-[12px] font-[850] uppercase tracking-[0.055em] text-[#6b7e77]">
                  Example requested amount
                </div>
                <div className="mt-1.5 text-[52px] font-[950] leading-none tracking-[-0.06em] text-[#062f2a] max-[620px]:text-[44px]">
                  $25,000
                </div>

                <div className="relative mb-1.5 mt-[19px] h-[11px] overflow-visible rounded-full bg-[#e4eee9]">
                  <div className="h-full w-[62%] rounded-full bg-gradient-to-r from-[#13c98a] to-[#d9ff57]" />
                  <div className="absolute left-[calc(62%_-_12px)] top-1/2 h-6 w-6 -translate-y-1/2 rounded-full border-[5px] border-[#d9ff57] bg-[#062f2a] shadow-[0_4px_10px_rgba(6,47,42,0.3)]" />
                </div>

                <div className="flex justify-between text-[10px] font-extrabold text-[#85948f]">
                  <span>$100</span>
                  <span>$40,000</span>
                </div>

                <div className="mt-[23px] text-[12px] font-[850] uppercase tracking-[0.055em] text-[#6b7e77]">
                  Common reasons people borrow
                </div>

                <div className="mt-[10px] grid grid-cols-2 gap-[9px] max-[620px]:gap-[7px]">
                  <Purpose active label="Home project">
                    <path d="M3 11.5 12 4l9 7.5" />
                    <path d="M5.5 10v10h13V10M9 20v-6h6v6" />
                  </Purpose>

                  <Purpose label="Combine balances">
                    <rect x="4" y="5" width="16" height="14" rx="2" />
                    <path d="M7 9h10M7 13h7M7 17h4" />
                  </Purpose>

                  <Purpose label="Major purchase">
                    <path d="M4 9h16l-1 11H5L4 9Z" />
                    <path d="M8 9a4 4 0 0 1 8 0" />
                  </Purpose>

                  <Purpose label="Moving costs">
                    <path d="M4 17h16M6 17V8l6-4 6 4v9M9 17v-5h6v5" />
                  </Purpose>
                </div>
              </div>

              <div className="mt-3 flex items-center gap-[10px] rounded-[14px] border border-white/10 bg-white/[0.09] px-[15px] py-[13px] text-[12px] leading-[1.4] text-[#e0f1eb] max-[620px]:text-[10.5px]">
                <span className="grid h-[34px] w-[34px] shrink-0 place-items-center rounded-[10px] bg-[#d9ff57] text-[#062f2a]">
                  <Icon className="h-[19px] w-[19px]">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
                    <path d="m9 12 2 2 4-5" />
                  </Icon>
                </span>
                <span>
                  <strong className="text-[#d9ff57]">Compare first.</strong>{" "}
                  Review any available rate, payment and repayment term before
                  accepting an offer.
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto mt-4 grid w-full max-w-[1080px] grid-cols-3 gap-3 max-[850px]:grid-cols-1 max-[620px]:mt-[9px] max-[620px]:gap-2">
          <InfoCard
            title="Regular earned income"
            icon={
              <>
                <rect x="4" y="6" width="16" height="13" rx="2" />
                <path d="M8 6V4h8v2M4 11h16" />
              </>
            }
          >
            The next step asks for employment and income details so lending
            partners can evaluate whether repayment may fit.
          </InfoCard>

          <InfoCard
            title="Planned personal expenses"
            icon={
              <>
                <path d="M4 19V9l8-5 8 5v10" />
                <path d="M8 19v-6h8v6" />
              </>
            }
          >
            Common uses include home projects, debt consolidation, moving,
            medical costs and major purchases.
          </InfoCard>

          <InfoCard
            title="A repayment decision"
            icon={
              <>
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v5l3 2" />
              </>
            }
          >
            This is borrowed money. Review the total cost and monthly payment
            before agreeing to any lender&apos;s terms.
          </InfoCard>
        </section>

        <section className="mx-auto mt-4 flex w-full max-w-[1080px] items-center justify-between gap-5 rounded-[20px] bg-gradient-to-br from-[#ff7a1a] to-[#ff9b2f] px-[26px] py-6 text-white shadow-[0_17px_42px_rgba(180,74,0,0.2)] max-[620px]:mt-[9px] max-[620px]:block max-[620px]:px-4 max-[620px]:py-[19px] max-[620px]:text-center">
          <div>
            <h2 className="m-0 max-w-[650px] text-[28px] font-[900] leading-[1.05] tracking-[-0.045em] max-[620px]:text-[24px]">
              See whether a personal loan option matches the expense you are
              planning.
            </h2>
            <p className="mt-[7px] text-[13px] text-[#fff1e6]">
              One click takes you to the lender-matching form.
            </p>
          </div>

          <button
            type="button"
            disabled={loading}
            onClick={continueToOffer}
            className="min-h-[58px] min-w-[260px] cursor-pointer rounded-xl bg-[#062f2a] px-[18px] py-[14px] font-[950] text-white shadow-[inset_0_-4px_0_rgba(0,0,0,0.22)] disabled:cursor-default disabled:opacity-70 max-[620px]:mt-[15px] max-[620px]:w-full max-[620px]:min-w-0"
          >
            {loading ? "Opening…" : "Check Loan Options →"}
          </button>
        </section>
      </main>

      <footer className="relative z-10 mx-auto mt-[17px] w-full max-w-[1080px] px-[14px] pb-[30px] text-center text-[10.5px] leading-[1.58] text-[#6b7a75] max-[620px]:text-[9.5px]">
        <div className="mt-2 space-x-4">
          <a href="/privacy" className="underline">
            Privacy Policy
          </a>
          <a href="/terms" className="underline">
            Terms of Service
          </a>
        </div>
        <strong className="text-[#3e554d]">Disclosure:</strong> This page is an
        advertisement and is not a lender. It does not make credit decisions or
        guarantee approval. Loan amounts, rates, fees, terms and availability
        vary by lender, state and applicant information. Participating lenders
        or lending partners may perform a credit inquiry. Personal loans must be
        repaid and may include interest and fees.
      </footer>
    </div>
  );
}

