import { useState } from "react";
import sunsetImage from "../../assets/homepage-hero-section-image.jpg";

// ── Destination data ─────────────────────────────────────────────────────────
const destinations = [
  { emoji: "🏝", label: "Orlando Resorts" },
  { emoji: "🏖", label: "Myrtle Beach" },
  { emoji: "🌴", label: "Las Vegas" },
  { emoji: "🏔", label: "Smoky Mountains" },
  { emoji: "🏖", label: "Cancun" },
  { emoji: "🌺", label: "Hawaii" },
];

// ── How It Works steps ────────────────────────────────────────────────────────
const steps = [
  {
    number: "01",
    title: "Submit Your Reservation",
    description: "Enter your resort details to get started.",
    details: ["Resort Name", "Check-In & Check-Out Dates", "Unit Size", "Sleeps", "Photos"],
  },
  {
    number: "02",
    title: "Get Verified",
    description: "Upload your documents and receive a Verified Listing Badge.",
    details: ["Reservation Confirmation", "Ownership Verification", "✅ Verified Listing Badge"],
  },
  {
    number: "03",
    title: "Receive Booking Requests",
    description: "Travelers discover and book your resort stay online.",
    details: ["Search your resort", "View photos", "Book online"],
  },
  {
    number: "04",
    title: "Get Paid",
    description:
      "Receive rental proceeds after reservation verification. Secure, fast, and hassle-free.",
    details: [],
  },
];

// ── Owner benefits ─────────────────────────────────────────────────────────────
const benefits = [
  "Premium Audience",
  "Secure Transactions",
  "Reservation Verification",
  "Fast Listing Approval",
  "Mobile-Friendly Dashboard",
  "Rental Tracking",
];

// ── Rental Calculator ──────────────────────────────────────────────────────────
const unitEstimates = {
  "Studio": { min: 600, max: 900 },
  "1 Bedroom": { min: 800, max: 1200 },
  "2 Bedroom": { min: 1200, max: 1800 },
  "3 Bedroom": { min: 1600, max: 2400 },
  "4 Bedroom+": { min: 2200, max: 3500 },
};

// ─────────────────────────────────────────────────────────────────────────────

const ListVacationStay = () => {
  const [resort, setResort] = useState("");
  const [unitSize, setUnitSize] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [estimate, setEstimate] = useState(null);

  const handleCalculate = () => {
    if (!unitSize) return;
    setEstimate(unitEstimates[unitSize]);
  };

  return (
    <div className="w-full font-sans">

      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <div className="relative w-full min-h-screen overflow-hidden flex items-center justify-center">
        <img
          src={sunsetImage}
          alt="Luxury sunset resort"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* 60% dark overlay */}
        <div className="absolute inset-0 bg-black/60" />

        <div
          className="relative z-10 text-center text-white px-4 sm:px-8 max-w-4xl mx-auto"
          style={{ animation: "fadeUp 0.9s ease-out both" }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Turn Your Unused Vacation Ownership Into Income
          </h1>
          <p className="text-xl sm:text-2xl mb-6 text-white/90 max-w-2xl mx-auto">
            List your unused vacations and connect with travelers looking for premium resort stays worldwide.
          </p>

          {/* Benefits checkmarks */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-10 max-w-2xl mx-auto text-left">
            {[
              "List Your Ownership In Minutes",
              "Reach Thousands Of Travelers",
              "Secure Booking Process",
              "Reservation Verification",
              "Online Payments",
              "Track Your Rental Income",
            ].map((b) => (
              <div key={b} className="flex items-start gap-2 text-sm sm:text-base">
                <span className="text-green-400 mt-0.5">✅</span>
                <span>{b}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-12 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl">
              🔵 List My Vacation Stay
            </button>
            <button className="bg-white/15 hover:bg-white/25 border border-white text-white font-bold py-4 px-12 rounded-lg text-lg transition-all duration-300">
              ⚪ Learn How It Works
            </button>
          </div>
        </div>
      </div>

      {/* ── HOW IT WORKS ─────────────────────────────────────────────────────── */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-blue-600 font-semibold uppercase tracking-widest text-sm mb-2">
              Simple Process
            </p>
            <h2 className="text-4xl font-bold text-gray-900">How It Works</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step) => (
              <div
                key={step.number}
                className="bg-white rounded-2xl shadow-md p-8 flex flex-col gap-4 hover:shadow-xl transition-shadow duration-300"
              >
                <span className="text-5xl font-extrabold text-blue-100 leading-none select-none">
                  {step.number}
                </span>
                <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                <p className="text-gray-500 text-sm">{step.description}</p>
                {step.details.length > 0 && (
                  <ul className="space-y-1 mt-2">
                    {step.details.map((d) => (
                      <li key={d} className="text-gray-700 text-sm flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RENTAL CALCULATOR ────────────────────────────────────────────────── */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-blue-600 font-semibold uppercase tracking-widest text-sm mb-2">
              Free Estimate
            </p>
            <h2 className="text-4xl font-bold text-gray-900">Estimate Your Rental Income</h2>
            <p className="text-gray-500 mt-3">
              See how much your resort stay could earn on the Member Rental Marketplace.
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl shadow-md p-8 space-y-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Resort Name</label>
              <input
                type="text"
                placeholder="e.g. Club Wyndham Bali Hai Villas"
                value={resort}
                onChange={(e) => setResort(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Unit Size</label>
              <select
                value={unitSize}
                onChange={(e) => { setUnitSize(e.target.value); setEstimate(null); }}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option value="">Select unit size…</option>
                {Object.keys(unitEstimates).map((u) => (
                  <option key={u} value={u}>{u}</option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Check-In</label>
                <input
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Check-Out</label>
                <input
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
            </div>

            <button
              onClick={handleCalculate}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-lg text-lg transition duration-300"
            >
              Calculate Estimate
            </button>

            {estimate && (
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 text-center mt-2">
                <p className="text-sm text-blue-600 font-semibold uppercase tracking-wide mb-1">
                  {unitSize} · {resort || "Your Resort"}
                </p>
                <p className="text-4xl font-extrabold text-blue-700">
                  ${estimate.min.toLocaleString()} – ${estimate.max.toLocaleString()}
                </p>
                <p className="text-gray-500 text-sm mt-1">Estimated Rental Value</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── FEATURED DESTINATIONS ────────────────────────────────────────────── */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-blue-600 font-semibold uppercase tracking-widest text-sm mb-2">
              Top Markets
            </p>
            <h2 className="text-4xl font-bold text-gray-900">Featured Destinations</h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {destinations.map((d) => (
              <button
                key={d.label}
                className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 p-6 flex flex-col items-center gap-3 cursor-pointer group"
              >
                <span className="text-4xl group-hover:scale-110 transition-transform duration-200">
                  {d.emoji}
                </span>
                <span className="text-sm font-semibold text-gray-700 text-center">{d.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── OWNER BENEFITS BANNER ────────────────────────────────────────────── */}
      <section className="bg-[#5634d0] py-20 px-4 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Why List With Platinum Club?</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <div key={b} className="flex items-center justify-center gap-3 bg-white/10 rounded-xl py-5 px-4">
                <span className="text-green-400 text-xl">✓</span>
                <span className="font-semibold text-base">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER CTA ───────────────────────────────────────────────────────── */}
      <section className="relative w-full py-24 px-4 overflow-hidden">
        <img
          src={sunsetImage}
          alt="Luxury sunset resort"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center text-white max-w-3xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight">
            Start Earning From Your Vacation Ownership Today
          </h2>
          <p className="text-white/80 text-lg mb-10">
            Join thousands of owners who turn unused resort stays into rental income on the Member Rental Marketplace.
          </p>
          <button className="bg-[#E5E4E2] hover:bg-white text-gray-900 font-extrabold py-4 px-16 rounded-xl text-xl transition-all duration-300 shadow-2xl hover:shadow-white/30 tracking-wide">
            LIST NOW
          </button>
        </div>
      </section>

      {/* Keyframe */}
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default ListVacationStay;
