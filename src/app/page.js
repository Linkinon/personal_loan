import Link from "next/link";
import React from "react";

const PersonalLoanPage = () => {
  return (
    <div className=" text-gray-900 min-h-screen font-sans">
      <div className="max-w-4xl mx-auto p-6">
        {/* Top Note */}
        <div className="text-center text-sm text-red-700 font-semibold mb-3">
          This page is a paid advertisement and referral service for personal loan options.
          It is not a government website.
        </div>

        {/* Card */}
        <div className="bg-white  rounded-2xl ">
          {/* Heading */}
          <h1 className=" text-center text-5xl font-semibold my-5 ">
            When Finances Start Feeling Hard to Juggle, Many People Look at Personal Loans
          </h1>

          {/* Sub Text */}
          <p className="text-center text-[17px] text-gray-600 max-w-4xl mx-auto mb-4 px-2">
            Credit card balances, everyday household bills, and unexpected auto repairs are putting pressure on monthly budgets.As costs continue to rise across the U.S., many people are reviewing personal loan options to see if consolidating or restructuring payments could help them stay on track moving forward.
          </p>

          {/* Hero Image */}
          <div className="border-y border-gray-200 bg-gray-200 rounded ">
            <img
              src="/preimg.webp"
              alt="Person reviewing bills and finances at home"
              className="w-full object-cover rounded"
            />
          </div>

          {/* CTA */}
          <a
            href="CTA_REDIRECT_URL"
            className="block mx-auto my-4 max-w-4xl bg-red-600 hover:bg-red-700 text-white text-center py-4 text-lg font-extrabold rounded-lg transition"
          >
            See If You Qualify →
          </a>

          {/* Section 1 */}
          <div className="p-6">
            <h2 className="text-center text-xl font-semibold mb-4">
              Common Reasons People Explore Personal Loans
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div>
                <h3 className="text-base font-semibold mb-1">
                  Credit Cards That Won’t Go Away
                </h3>
                <p className="text-md text-gray-600">
                  Carrying balances month after month can feel like running in place.
                  Many people look at loans as a way to replace revolving debt with a clear payoff plan.
                </p>
              </div>

              <div>
                <h3 className="text-base font-semibold mb-1">
                  Too Many Bills, One Paycheck
                </h3>
                <p className="text-md text-gray-600">
                  Rent, utilities, insurance, groceries — it adds up fast.
                  Some borrowers use personal loans to smooth out cash flow instead of falling behind.
                </p>
              </div>

              <div>
                <h3 className="text-base font-semibold mb-1">
                  Simplifying Their Finances
                </h3>
                <p className="text-md text-gray-600">
                  Managing multiple cards or payments can be stressful.
                  A personal loan may help consolidate things into one monthly payment.
                </p>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="p-6">
            <h2 className="text-center text-xl font-semibold mb-4">
              Other Situations Where People Consider a Loan
            </h2>

            <ul className="max-w-4xl mx-auto text-md list-disc pl-5 space-y-2">
              <li>Covering large planned expenses without draining savings</li>
              <li>Replacing short-term fixes that are no longer working</li>
              <li>Getting back on track after falling a little behind</li>
              <li>Creating a clearer monthly plan instead of guessing each month</li>
              <li>Comparing loan terms before relying more on credit cards</li>
            </ul>

            <p className="text-sm text-gray-500 mt-3 max-w-4xl mx-auto">
              Personal loans are not right for everyone. Availability, rates, and terms depend on
              lender criteria, credit profile, income, and state regulations.
            </p>
          </div>

          {/* Section 3 */}
          <div className="p-6">
            <h2 className="text-center text-xl font-semibold mb-4">
              How This Personal Loan Options Check Works
            </h2>

            <div className="space-y-2 text-md">
              <p><strong>Step 1:</strong> Click “See If You Qualify” to continue.</p>
              <p><strong>Step 2:</strong> Answer a few questions about your finances and location.</p>
              <p><strong>Step 3:</strong> Review available options and decide whether moving forward makes sense.</p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-sm text-red-900 mt-4 max-w-4xl mx-auto">
              You’re not applying for a loan on this page.
              Reviewing options does not require you to accept an offer or move forward.
            </div>

            <a
              href="CTA_REDIRECT_URL"
              className="block mx-auto my-4 max-w-4xl bg-red-600 hover:bg-red-700 text-white text-center py-4 text-lg font-extrabold rounded-lg transition"
            >
              See If You Qualify →
            </a>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-6 text-sm text-gray-600 text-center space-y-2">
          <div>
            <Link href="/privacy" className="underline mx-1 text-gray-900">Privacy Policy</Link> |
            <Link href="/terms" className="underline mx-1 text-gray-900">Terms of Use</Link> |
            <Link href="/contact" className="underline mx-1 text-gray-900">Contact</Link>
          </div>

          <p>
            <strong>Disclosure:</strong> This website is an advertising and referral service and may receive
            compensation from partners. We are not a lender, broker, or financial institution.
            Loan approval, rates, and terms vary by lender and individual circumstances.
            Content is informational only and not financial advice.
          </p>

          <p>Your Company Name · Business Address · United States</p>
        </footer>
      </div>
    </div>
  );
};

export default PersonalLoanPage;

