const CTA_URL =
  process.env.NEXT_PUBLIC_CTA_URL || "https://h0mlr.ttrk.io/click";

const HERO_IMAGE = "/elt-pl.jpeg";

/* =========================================================
   ICONS
========================================================= */

function Arrow({ className = "h-5 w-5" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CardIcon({ className = "h-4 w-4" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <rect
        x="3"
        y="5"
        width="18"
        height="14"
        rx="2.5"
        stroke="currentColor"
        strokeWidth="1.8"
      />

      <path
        d="M3 9h18"
        stroke="currentColor"
        strokeWidth="1.8"
      />

      <path
        d="M7 15h4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function BriefcaseIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path
        d="M9 7V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1m-9 3h12m-13 0h14v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* =========================================================
   NORMAL CTA
========================================================= */

function CTA({
  children = "CHECK MY OPTIONS",
  compact = false,
}) {
  return (
    <a
      href={CTA_URL}
      className={[
        "group flex w-full items-center justify-center gap-3 rounded-full bg-[#f15428] text-center font-black text-white shadow-[0_12px_28px_rgba(241,84,40,.28)] transition duration-200 hover:-translate-y-[1px] hover:bg-[#db461e]",
        compact
          ? "px-5 py-4 text-[14px]"
          : "px-5 py-[15px] text-[15px] sm:text-[16px]",
      ].join(" ")}
    >
      <span>{children}</span>

      <span
        className={[
          "flex shrink-0 items-center justify-center rounded-full bg-white text-[#f15428] transition group-hover:translate-x-1",
          compact ? "h-9 w-9" : "h-8 w-8",
        ].join(" ")}
      >
        <Arrow />
      </span>
    </a>
  );
}

/* =========================================================
   SEPARATE HERO CTA
========================================================= */

function HeroCTA() {
  return (
    <div className="mt-3 sm:mt-4">
      <a
        href={CTA_URL}
        className="
          group
          flex
          w-full
          items-center
          justify-between
          rounded-[15px]
          border-[3px]
          border-white/15
          bg-[#ff3426]
          px-5
          py-[17px]
          text-white
          shadow-[0_12px_28px_rgba(0,0,0,.22)]
          transition
          duration-200
          hover:-translate-y-[1px]
          hover:bg-[#e9291c]

          sm:px-7
          sm:py-[18px]

          lg:px-8
          lg:py-[20px]
        "
      >
        <div className="flex flex-col">
          <span className="text-[9px] font-black uppercase tracking-[0.16em] text-white/75 sm:text-[10px]">
            Check your available options
          </span>

          <span className="mt-1 text-[20px] font-black uppercase leading-none tracking-[-0.02em] sm:text-[23px] lg:text-[27px]">
            Check For Options
          </span>
        </div>

        <span
          className="
            flex
            h-12
            w-12
            shrink-0
            items-center
            justify-center
            rounded-full
            bg-white
            text-[#ff3426]
            shadow-[0_5px_14px_rgba(0,0,0,.16)]
            transition
            group-hover:translate-x-1

            sm:h-13
            sm:w-13

            lg:h-14
            lg:w-14
          "
        >
          <Arrow className="h-6 w-6 lg:h-7 lg:w-7" />
        </span>
      </a>
    </div>
  );
}

/* =========================================================
   DESKTOP HERO CARDS
========================================================= */

function DesktopSmallCard({
  label,
  title,
  className = "",
}) {
  return (
    <div
      className={[
        "absolute rounded-[15px] border border-[#d9e0e5] bg-white shadow-[0_8px_22px_rgba(0,0,0,.18)]",
        className,
      ].join(" ")}
    >
      <div className="flex h-full items-center justify-between px-5">
        <div>
          <div className="text-[9px] font-black uppercase tracking-[0.17em] text-[#718397]">
            {label}
          </div>

          <div className="mt-1 text-[13px] font-bold text-[#15364d]">
            {title}
          </div>
        </div>

        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#eef2f4] text-[#173a50]">
          <CardIcon />
        </div>
      </div>
    </div>
  );
}

function DesktopLargeCard() {
  return (
    <div className="absolute right-[4.2%] top-[40%] h-[19%] w-[35%] rounded-[16px] border border-[#d9e0e5] bg-white px-5 py-4 shadow-[0_9px_24px_rgba(0,0,0,.18)]">
      <div className="flex items-start justify-between">
        <div>
          <div className="text-[9px] font-black uppercase tracking-[0.17em] text-[#718397]">
            LOAN 03
          </div>

          <div className="mt-1 text-[13px] font-bold text-[#15364d]">
            Personal loan statement
          </div>
        </div>

        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#eef2f4] text-[#173a50]">
          <CardIcon />
        </div>
      </div>

      <div className="mt-4 flex items-end justify-between">
        <div>
          <div className="text-[8px] font-black uppercase tracking-[0.15em] text-[#8997a3]">
            Current balance
          </div>

          <div className="mt-1 text-[26px] font-black leading-none tracking-[-0.04em] text-[#15364d]">
            $4,950
          </div>
        </div>

        <div className="text-right">
          <div className="text-[8px] font-black uppercase tracking-[0.15em] text-[#8997a3]">
            Due
          </div>

          <div className="mt-1 text-[12px] font-black text-[#f04d27]">
            Aug 25
          </div>
        </div>
      </div>
    </div>
  );
}

function DesktopConsolidationCard() {
  return (
    <div className="absolute bottom-[8%] right-[3.5%] w-[36%] rounded-[17px] border border-[#dce1e5] bg-white p-2 shadow-[0_9px_24px_rgba(0,0,0,.18)]">
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0e4869] text-white">
          <Arrow />
        </div>

        <div>
          <div className="text-[9px] font-black uppercase tracking-[0.15em] text-[#81909c]">
            Example consolidation request
          </div>

          <div className="mt-1 text-[28px] font-black leading-none tracking-[-0.04em] text-[#16364c]">
            $18,000
          </div>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3">
        <div className="rounded-xl bg-[#eef2f4] p-3">
          <div className="text-[8px] font-black uppercase tracking-[0.13em] text-[#85939d]">
            Replaces
          </div>

          <div className="mt-1 text-[12px] font-black text-[#16364c]">
            Multiple balances
          </div>
        </div>

        <div className="rounded-xl bg-[#fae7df] p-3">
          <div className="text-[8px] font-black uppercase tracking-[0.13em] text-[#c47758]">
            Becomes
          </div>

          <div className="mt-1 text-[12px] font-black text-[#e34d25]">
            One loan schedule
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   DESKTOP HERO
========================================================= */

function DesktopHeroComposition() {
  return (
    <div
      className="
        relative
        hidden
        w-full
        overflow-hidden
        rounded-[18px]
        bg-[#092f48]
        shadow-[0_16px_34px_rgba(0,0,0,.28)]
        lg:block
      "
      style={{ aspectRatio: "16 / 7.5" }}
    >
      {/* IMAGE */}
      <img
        src={HERO_IMAGE}
        alt="Money representing debt pressure"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* RIGHT DARK OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent from-[36%] via-black/20 via-[52%] to-black/90" />

      {/* BOTTOM FADE */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />

     

      {/* RIGHT TITLE */}
      <div className="absolute right-[4%] top-[5%] w-[35%]">
        <div className="text-[10px] font-black uppercase tracking-[0.18em] text-[#f39b61]">
          Three balances. Three due dates.
        </div>

        <h2 className="mt-2 text-[31px] font-black leading-[1.03] tracking-[-0.03em] text-white">
          One month can get
          <br />
          crowded fast.
        </h2>
      </div>

      {/* CARDS */}
      <DesktopSmallCard
        label="CARD 01"
        title="Credit card statement"
        className="right-[2.7%] top-[25%] h-[12%] w-[34%] rotate-[1deg]"
      />

      <DesktopLargeCard />

      <DesktopConsolidationCard />
    </div>
  );
}

/* =========================================================
   MOBILE HERO CARDS
========================================================= */

function MobileSmallCard({
  label,
  title,
  className = "",
}) {
  return (
    <div
      className={[
        "absolute rounded-[8px] border border-[#d9e0e5] bg-white shadow-[0_4px_10px_rgba(0,0,0,.18)]",
        className,
      ].join(" ")}
    >
      <div className="flex h-full items-center justify-between px-2">
        <div className="min-w-0 pr-1">
          <div className="text-[5px] font-black uppercase tracking-[0.12em] text-[#718397]">
            {label}
          </div>

          <div className="mt-[1px] truncate text-[7px] font-bold leading-none text-[#15364d]">
            {title}
          </div>
        </div>

        <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#eef2f4] text-[#173a50]">
          <CardIcon className="h-[10px] w-[10px]" />
        </div>
      </div>
    </div>
  );
}

function MobileLargeCard() {
  return (
    <div className="absolute right-[3.2%] top-[43%] h-[18%] w-[39%] rounded-[9px] border border-[#d9e0e5] bg-white px-2 py-2 shadow-[0_4px_11px_rgba(0,0,0,.18)]">
      <div className="flex items-start justify-between">
        <div>
          <div className="text-[5px] font-black uppercase tracking-[0.12em] text-[#718397]">
            LOAN 03
          </div>

          <div className="mt-[1px] text-[7px] font-bold leading-none text-[#15364d]">
            Personal loan
          </div>
        </div>

        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#eef2f4] text-[#173a50]">
          <CardIcon className="h-[10px] w-[10px]" />
        </div>
      </div>

      <div className="mt-2 flex items-end justify-between">
        <div>
          <div className="text-[4px] font-black uppercase tracking-[0.1em] text-[#8997a3]">
            Current balance
          </div>

          <div className="mt-[1px] text-[14px] font-black leading-none tracking-[-0.04em] text-[#15364d]">
            $4,950
          </div>
        </div>

        <div className="text-right">
          <div className="text-[4px] font-black uppercase tracking-[0.1em] text-[#8997a3]">
            Due
          </div>

          <div className="mt-[1px] text-[7px] font-black text-[#f04d27]">
            Aug 25
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileConsolidationCard() {
  return (
    <div className="absolute bottom-[4%] right-[2.5%] w-[40%] rounded-[9px] border border-[#dce1e5] bg-white p-2 shadow-[0_5px_12px_rgba(0,0,0,.19)]">
      <div className="flex items-center gap-2">
        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#0e4869] text-white">
          <Arrow className="h-3 w-3" />
        </div>

        <div>
          <div className="text-[4px] font-black uppercase tracking-[0.11em] text-[#81909c]">
            Example consolidation request
          </div>

          <div className="mt-[1px] text-[14px] font-black leading-none tracking-[-0.04em] text-[#16364c]">
            $18,000
          </div>
        </div>
      </div>

      <div className="mt-2 grid grid-cols-2 gap-1.5">
        <div className="rounded-[6px] bg-[#eef2f4] p-1.5">
          <div className="text-[4px] font-black uppercase tracking-[0.09em] text-[#85939d]">
            Replaces
          </div>

          <div className="mt-[2px] text-[6px] font-black leading-tight text-[#16364c]">
            Multiple balances
          </div>
        </div>

        <div className="rounded-[6px] bg-[#fae7df] p-1.5">
          <div className="text-[4px] font-black uppercase tracking-[0.09em] text-[#c47758]">
            Becomes
          </div>

          <div className="mt-[2px] text-[6px] font-black leading-tight text-[#e34d25]">
            One loan schedule
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   MOBILE HERO
========================================================= */

function MobileHeroComposition() {
  return (
    <div
      className="
        relative
        w-full
        overflow-hidden
        rounded-[14px]
        bg-[#092f48]
        shadow-[0_12px_28px_rgba(0,0,0,.28)]
        lg:hidden
      "
      style={{ aspectRatio: "1.72 / 1" }}
    >
      {/* IMAGE */}
      <img
        src={HERO_IMAGE}
        alt="Money representing debt pressure"
        className="absolute inset-0 h-full w-full object-cover scale-y-115"
      />

      {/* DARK RIGHT OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent from-[34%] via-black/25 via-[52%] to-black/90" />

      {/* YELLOW LABEL */}
      <div className="absolute left-0 top-0 rounded-br-[8px] bg-[#f7d429] px-3 py-2 text-[6px] font-black uppercase tracking-[0.08em] text-[#12374d]">
        Monthly Debt Pressure
      </div>

      {/* TITLE */}
      <div className="absolute right-[3%] top-[5%] w-[40%]">
        <div className="text-[5px] font-black uppercase tracking-[0.12em] text-[#f39b61]">
          Three balances. Three due dates.
        </div>

        <h2 className="mt-1 text-[13px] font-black leading-[1.03] tracking-[-0.025em] text-white">
          One month can get
          <br />
          crowded fast.
        </h2>

        <p className="mt-1.5 text-[5px] leading-[1.45] text-white/80">
          Consolidation is about replacing eligible balances
          with one new loan.
        </p>
      </div>

      {/* CARDS */}
      <MobileSmallCard
        label="CARD 01"
        title="Credit card statement"
        className="right-[2.8%] top-[27%] h-[10.5%] w-[39%] -rotate-[1deg]"
      />

      <MobileSmallCard
        label="CARD 02"
        title="Credit card statement"
        className="right-[1.8%] top-[36%] h-[10.5%] w-[39%] rotate-[.8deg]"
      />

      <MobileLargeCard />

      <MobileConsolidationCard />
    </div>
  );
}

/* =========================================================
   PAGE
========================================================= */

export default function Page() {
  return (
    <main
      className="min-h-screen bg-[#e8ecee]"
      style={{
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      {/* UPDATE BAR */}
      <div className="bg-[#b30707] text-white">
        <div className="mx-auto max-w-[1080px] px-4 py-[7px] text-center text-[11px] font-bold">
          Updated: Today
        </div>
      </div>

      {/* PAGE WRAPPER */}
      <div className="mx-auto max-w-[1080px] overflow-hidden bg-white shadow-[0_12px_36px_rgba(12,39,56,.11)]">
        {/* HERO */}
        <section className="bg-[#0d4566] px-2 pb-5 pt-5 text-white sm:px-5 sm:pb-7 sm:pt-7 lg:px-8">
          <div className="mx-auto max-w-[1010px]">
            {/* PAGE HEADING */}
            <div className="text-center">

              <h1 className="mx-auto max-w-[790px] text-[25px] font-bold leading-[1.04] tracking-[-0.035em] sm:text-[32px] lg:text-[38px]">
                Need Help With Debt or Unexpected Expenses? You May Qualify for a Loan.
              </h1>

            </div>

            {/* HERO COMPOSITIONS */}
            <div className="mt-5 sm:mt-6">
              <DesktopHeroComposition />
              <MobileHeroComposition />

              {/* SEPARATE CTA */}
              <HeroCTA />
            </div>

            {/* SUPPORT COPY */}
            <p className="mx-auto mt-4 max-w-[720px] text-center text-[9px] leading-4 text-white/75 sm:text-[11px] sm:leading-5">
              The idea is simple: fewer separate balances
              to chase and one clearer payment schedule to review.
            </p>

            <p className="mx-auto mt-3 max-w-[960px] text-center text-[12px] leading-5 text-white/85 sm:text-[14px] sm:leading-6 lg:text-[13px]">
              Americans are being awarded loans up to $40,000 to level up their finances after the recent financial hardship. The cash will be deposited directly into your account the next day. Check how much you are eligible to receive on the next page!
              <br />
              This is part of a 2024 Hardship Recovery Plan to help Americans recover from the recent unstable economy
              <br />
              It costs nothing to check and only takes around 60 seconds. Tap the button below to get started:
            </p>
          </div>
        </section>

        {/* ELIGIBILITY */}
        <section className="border-t-[4px] border-[#f5cf2e] bg-[#faf7f1] px-3 py-5 sm:px-7 sm:py-6">
          <div className="mx-auto max-w-[720px]">
            <p className="mt-3 text-center text-[9px] leading-4 text-[#64727a] sm:text-[10px]">
              Continue to the lender-matching form.
              Clicking does not accept a loan or guarantee
              approval, funding, an amount or a rate.
            </p>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="bg-white px-4 pb-24 pt-5 text-center sm:px-7 sm:pb-8">
          <div className="flex justify-center gap-5 text-[11px] font-bold text-[#18394f]">
            <a href="/privacy">
              Privacy Policy
            </a>

            <span className="text-[#9aa5ac]">
              |
            </span>

            <a href="/terms">
              Terms of Service
            </a>
          </div>

          <p className="mx-auto mt-4 max-w-[760px] text-[9px] leading-[1.65] text-[#7a878f] sm:text-[10px]">
            Disclosure: This page is an advertisement
            and is not a lender, debt-relief company or
            financial advisor. Submitting information
            does not guarantee approval, funding, a
            particular loan amount, APR, interest rate,
            payment or savings. Loan availability, rates,
            fees and terms vary by lender, state and
            applicant information. Personal loans must
            be repaid and may include interest and fees.
            Review lender disclosures before accepting
            any loan.
          </p>
        </footer>
      </div>
    </main>
  );
}