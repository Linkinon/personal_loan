'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function PersonalLoanLander() {
  const [city, setCity] = useState('your area');
  const [count, setCount] = useState(17);

  useEffect(() => {
    fetch('https://ipapi.co/json/')
      .then(res => res.json())
      .then(data => {
        if (data.city) setCity(data.city);
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => {
        let change = Math.floor(Math.random() * 3) - 1;
        let newVal = prev + change;
        if (newVal < 12) newVal = 14;
        if (newVal > 28) newVal = 24;
        return newVal;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#f5f7fb] flex justify-center px-4 py-6">
      <div className="max-w-5xl w-full">

        {/* TOP BAR */}
        <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            <span>Verified Lending Network</span>
          </div>
          <div>Secure • Trusted • Updated Today</div>
        </div>

        {/* MAIN CARD */}
        <div className="bg-white rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.08)] p-6 md:p-10">

          {/* HERO */}
          <div className="grid md:grid-cols-2 gap-8 items-center">

            <div>
              <h1 className="text-3xl font-bold text-gray-900 leading-tight">
                Personal Loan Options Available in{' '}
                <span className="text-green-600">{city}</span>
              </h1>

              <p className="mt-3 text-gray-600">
                Check if you qualify for up to <b>$50,000</b> with lower monthly payments.
              </p>

              <div className="mt-6 space-y-3 text-sm text-gray-700">
                <div>✅ {Math.floor(Math.random()*5000)+8000} people approved this month</div>
                <div>🔒 Secure & confidential</div>
                <div>⭐ Rated 4.8/5</div>
              </div>

              <div className="mt-4 text-sm text-green-600 font-medium">
                🔥 {count} people checking in {city}
              </div>
            </div>

            {/* CTA BOX */}
            <div className="bg-gray-50 rounded-2xl p-2 shadow-sm">

              <h2 className="text-xl font-semibold text-center">
                Start Free Loan Check
              </h2>

              <p className="text-sm text-gray-500 text-center mt-1">
                Takes 30 seconds • No credit impact
              </p>

              <a href="https://h0mlr.ttrk.io/click" className="mt-5 w-full py-3 rounded-xl bg-green-500 hover:bg-green-600 text-white text-base shadow-md">
                Check My Options →
              </a>

              <div className="grid grid-cols-3 gap-2 mt-5 text-xs text-gray-500 text-center">
                <div className="bg-white py-2 rounded-lg">🔒 Secure</div>
                <div className="bg-white py-2 rounded-lg">⚡ Fast</div>
                <div className="bg-white py-2 rounded-lg">✔ Free</div>
              </div>

              <p className="text-xs text-center text-gray-400 mt-3">
                Join thousands checking today
              </p>
            </div>
          </div>

          {/* 🔥 NEW PREMIUM SECTION (NO DIVIDER, NO SPLIT) */}
          <div className="mt-4 bg-gradient-to-br from-green-50 to-white rounded-2xl p-6 md:p-8">

            <h2 className="text-xl font-semibold text-center text-gray-800 mb-6">
              A Smarter Way to Manage Your Debt
            </h2>

            {/* FEATURES GRID */}
            <div className="grid md:grid-cols-3 gap-5 mb-4">

              <div className="bg-white p-5 rounded-xl shadow-sm">
                <div className="text-xl mb-2">💳</div>
                <p className="font-medium">Consolidate Debt</p>
                <p className="text-xs text-gray-500 mt-1">
                  Replace multiple payments with one
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm">
                <div className="text-xl mb-2">📉</div>
                <p className="font-medium">Lower Payments</p>
                <p className="text-xs text-gray-500 mt-1">
                  Reduce your monthly burden
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm">
                <div className="text-xl mb-2">⚙️</div>
                <p className="font-medium">Flexible Terms</p>
                <p className="text-xs text-gray-500 mt-1">
                  Choose repayment that suits you
                </p>
              </div>

            </div>

            {/* EXTRA TRUST CONTENT */}
            <div className="text-center text-sm text-gray-600 mb-6 max-w-xl mx-auto">
              Many borrowers use personal loans to simplify finances, reduce stress,
              and regain control over monthly expenses with predictable payments.
            </div>

            {/* FINAL CTA */}
            <a href="https://h0mlr.ttrk.io/click" className="w-full py-3 rounded-xl bg-green-500 hover:bg-green-600 text-white text-base shadow-md">
              Check My Options →
            </a>

            <p className="text-center text-xs text-gray-400 mt-2">
              🔥 {count} people in {city} are checking right now
            </p>

          </div>

        </div>

        {/* FOOTER */}
        <div className="text-center text-xs text-gray-400 mt-2">
          <Link href="/privacy">Privacy</Link> • <Link href="/terms">Terms</Link>
        </div>

      </div>
    </div>
  );
}