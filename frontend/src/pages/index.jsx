
import React, { useState } from "react";

export default function Home() {
  const [activeGoal, setActiveGoal] = useState("Cut");

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-8 flex flex-col justify-between font-sans">
      <nav className="border-b border-slate-900 pb-4 flex justify-between items-center">
        <span className="text-xl font-black tracking-wider text-lime-400">AURAFIT_CORE</span>
        <span className="text-xs bg-lime-950 text-lime-400 px-3 py-1 rounded border border-lime-900">Cloud Connected</span>
      </nav>
      
      <main className="my-auto py-12 max-w-4xl mx-auto w-full">
        <h1 className="text-5xl font-black tracking-tight mb-4 leading-tight">
          Next-Gen Metrics. <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-emerald-400">Zero Lag Architecture.</span>
        </h1>
        <p className="text-slate-400 mb-8 max-w-xl font-medium">
          Premium distributed fitness tracking application mapped cleanly to secure MongoDB Atlas cloud database matrices.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div onClick={() => setActiveGoal("Bulk")} className={`p-6 rounded-2xl border cursor-pointer transition-all ${activeGoal === "Bulk" ? "bg-slate-900 border-amber-500/50 shadow-[0_4px_20px_rgba(245,158,11,0.15)]" : "bg-slate-900/40 border-slate-900"}`}>
            <h3 className="font-bold text-slate-200">BULK PROFILE</h3>
            <p className="text-xs text-slate-500 mt-1">Caloric surplus volume tracking nodes.</p>
          </div>
          <div onClick={() => setActiveGoal("Cut")} className={`p-6 rounded-2xl border cursor-pointer transition-all ${activeGoal === "Cut" ? "bg-slate-900 border-lime-500/50 shadow-[0_4px_20px_rgba(132,204,22,0.15)]" : "bg-slate-900/40 border-slate-900"}`}>
            <h3 className="font-bold text-slate-200">SHRED METRIC</h3>
            <p className="text-xs text-slate-500 mt-1">Caloric deficit composition logic.</p>
          </div>
          <div onClick={() => setActiveGoal("Maintain")} className={`p-6 rounded-2xl border cursor-pointer transition-all ${activeGoal === "Maintain" ? "bg-slate-900 border-blue-500/50 shadow-[0_4px_20px_rgba(59,130,246,0.15)]" : "bg-slate-900/40 border-slate-900"}`}>
            <h3 className="font-bold text-slate-200">MAINTAIN BLOCK</h3>
            <p className="text-xs text-slate-500 mt-1">Homeostasis performance stability.</p>
          </div>
        </div>
      </main>

      <footer className="border-t border-slate-900 pt-4 text-xs text-slate-600 flex justify-between">
        <span>Database Engine: MongoDB Atlas</span>
        <span>Status: Production Active</span>
      </footer>
    </div>
  );
}

