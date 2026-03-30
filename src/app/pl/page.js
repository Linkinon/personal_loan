import Image from "next/image";
import Link from "next/link";

export default function NewsPrelander() {
  return (
    <div className="bg-gray-100 min-h-screen md:py-6 md:px-4">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-xl overflow-hidden">

        {/* Header */}
        <div className="px-5 py-3">
          <p className="text-sm text-gray-500">
            🔴 Trending • Updated Today
          </p>
          <h1 className="text-2xl md:text-3xl font-bold mt-2 leading-tight md:leading-8">
            Residents In Your Area Are Checking This Simple Way To Get Up To $50,000 — With Lower Monthly Payments
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            By Financial Insights Desk • 2 min read
          </p>
        </div>

        {/* Hero Image */}
        <div className="w-full bg-gray-300 flex items-center justify-center text-gray-500 overflow-hidden 
                        md:max-h-[260px]">
          <Image
            alt="personal-loan image"
            src={"/personal-loan.jpeg"}
            width={800}
            height={400}
            className="object-contain md:object-cover w-full h-auto md:h-[260px]"
            priority
          />
        </div>

        {/* Content */}
        <div className="px-5 py-3 md:py-2 space-y-3 text-gray-700 text-[15px] leading-relaxed">

          <p>
            Many people across your area are quietly switching to a smarter way
            of managing their finances — and it’s helping them reduce monthly
            payments without increasing stress.
          </p>

          {/* CTA BLOCK */}
          <div className="bg-green-50 border border-green-200 rounded-lg px-2 py-2 text-center">
            <p className="text-sm mb-2">
              ✔ No credit impact • ✔ Free check • ✔ Instant results
            </p>
            <Link href="https://h0mlr.ttrk.io/click" target="_blank">
              <div className="mt-3 w-full py-3 rounded-xl bg-green-500 hover:bg-green-600 text-white text-base shadow-md text-center">
                Check My Options →
              </div>
            </Link>
          </div>

          <p>
            According to recent data, over{" "}
            <span className="font-semibold text-green-600">
              11,795 people were approved this month
            </span>{" "}
            using a quick online check that takes less than 30 seconds.
          </p>

          <p>
            This method allows users to:
          </p>

          <ul className="list-disc pl-5 space-y-1">
            <li>Combine multiple debts into one</li>
            <li>Lower monthly payments instantly</li>
            <li>Choose flexible repayment options</li>
          </ul>

          <p>
            Financial experts suggest that this approach is becoming one of the
            most preferred ways to regain control over monthly expenses.
          </p>

          {/* Social Proof */}
          <div className="bg-gray-50 border rounded-lg p-4">
            <p className="text-sm">
              ⭐ Rated 4.8/5 by users
            </p>
            <p className="text-sm mt-1">
              🔥 18 people are checking options near you right now
            </p>
          </div>

          <p>
            While not everyone qualifies, many users are surprised by how much
            they can save after checking their options.
          </p>

          {/* FINAL CTA */}
          <div className="text-center pt-2">
            <Link href="https://h0mlr.ttrk.io/click" target="_blank">
              <div className="mt-5 w-full py-3 rounded-xl bg-green-500 hover:bg-green-600 text-white text-base shadow-md text-center">
                Check My Options →
              </div>
            </Link>
            <p className="text-xs text-gray-500 mt-2">
              Takes 30 seconds • No obligation
            </p>
          </div>

        </div>

        {/* Footer */}
        <div className="text-center text-xs text-gray-300 py-4 ">
          <span>
            <Link href="/privacy" className=" text-gray-500">Privacy Policy</Link>
            <span> | </span>
            <Link href="/terms" className=" text-gray-500">Terms of Use</Link>
          </span>
        </div>

      </div>
    </div>
  );
}