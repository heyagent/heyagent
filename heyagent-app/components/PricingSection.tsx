"use client";

import { useState } from "react";
import Link from "next/link";
import { FiCheck, FiX } from "react-icons/fi";

export default function PricingSection() {
  const [businessMultiplier, setBusinessMultiplier] = useState(1);
  const [professionalMultiplier, setProfessionalMultiplier] = useState(1);

  const businessBasePrice = 20;
  const professionalBasePrice = 40;

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-6 gap-6">
      {/* Free Plan */}
      <div className="relative overflow-hidden rounded-md shadow dark:shadow-gray-800">
        <div className="p-6">
          <h5 className="text-2xl leading-normal font-semibold">Free</h5>
          <p className="text-slate-400 dark:text-white/60 mt-2">
            Test HeyAgent with your team
          </p>
          <div className="flex mt-4">
            <span className="text-lg font-semibold">$</span>
            <span className="text-5xl font-semibold mb-0 ms-1">0</span>
          </div>
          <p className="text-slate-400 dark:text-white/60 uppercase text-xs">per month</p>
          
          <div className="mt-6">
            <Link 
              href="/" 
              className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-amber-400/5 hover:bg-amber-400 rounded border-amber-400/10 hover:border-amber-400 text-amber-400 hover:text-white"
            >
              Try For Free
            </Link>
            <p className="text-slate-400 dark:text-white/60 text-sm mt-3">
              No credit card required. Free 14-days trial
            </p>
          </div>
        </div>
        
        <div className="p-6 bg-gray-50 dark:bg-slate-800">
          <ul className="list-none text-slate-400 dark:text-white/60">
            <li className="font-semibold text-slate-900 dark:text-white text-sm uppercase">Features:</li>
            <li className="flex items-center mt-2">
              <FiCheck className="text-green-600 h-[18px] w-[18px] me-2" />
              <span className="text-slate-900 dark:text-white me-1 font-semibold">5 workflows/mo</span> limit
            </li>
            <li className="flex items-center mt-2">
              <FiCheck className="text-green-600 h-[18px] w-[18px] me-2" />
              <span className="text-slate-900 dark:text-white me-1 font-semibold">3 users</span> included
            </li>
            <li className="flex items-center mt-2">
              <FiCheck className="text-green-600 h-[18px] w-[18px] me-2" />
              <span className="text-slate-900 dark:text-white me-1 font-semibold">Basic</span> integrations
            </li>
            <li className="flex items-center mt-2 text-slate-400">
              <FiX className="h-[18px] w-[18px] me-2" />
              Custom workflows
            </li>
            <li className="flex items-center mt-2 text-slate-400">
              <FiX className="h-[18px] w-[18px] me-2" />
              Analytics dashboard
            </li>
          </ul>
        </div>
      </div>

      {/* Business Plan */}
      <div className="relative overflow-hidden rounded-md shadow dark:shadow-gray-800">
        <div className="p-6">
          <h5 className="text-2xl leading-normal font-semibold">Business</h5>
          <p className="text-slate-400 dark:text-white/60 mt-2">
            For teams embracing automation
          </p>
          
          <div className="relative">
            <div className="flex mt-4">
              <span className="text-lg font-semibold">$</span>
              <span>
                <p className="text-5xl font-semibold mb-0 ms-1">
                  {businessBasePrice * businessMultiplier}
                </p>
                <p className="text-slate-400 dark:text-white/60 uppercase text-xs">per month</p>
              </span>
            </div>
            
            <div className="relative mt-4">
              <input 
                type="range" 
                min="1" 
                max="10" 
                step="1"
                value={businessMultiplier}
                onChange={(e) => setBusinessMultiplier(parseInt(e.target.value))}
                className="w-full h-1 bg-gray-50 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer"
              />
              <span className="font-semibold text-lg absolute end-0 -top-5">
                <p className="inline-block">{businessMultiplier}.0</p>
                <span>X</span>
              </span>
            </div>
          </div>
          
          <div className="mt-4">
            <Link 
              href="/" 
              className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-amber-400 hover:bg-amber-500 border-amber-400 hover:border-amber-500 text-white rounded"
            >
              Subscribe Now
            </Link>
          </div>
        </div>
        
        <div className="p-6 bg-gray-50 dark:bg-slate-800">
          <ul className="list-none text-slate-400 dark:text-white/60">
            <li className="font-semibold text-slate-900 dark:text-white text-sm uppercase">Features:</li>
            <li className="flex items-center mt-2">
              <FiCheck className="text-green-600 h-[18px] w-[18px] me-2" />
              <span className="text-slate-900 dark:text-white me-1 font-semibold">Pre-built</span> workflow library
            </li>
            <li className="flex items-center mt-2">
              <FiCheck className="text-green-600 h-[18px] w-[18px] me-2" />
              <span className="text-slate-900 dark:text-white me-1 font-semibold">Custom</span> workflows
            </li>
            <li className="flex items-center mt-2">
              <FiCheck className="text-green-600 h-[18px] w-[18px] me-2" />
              <span className="text-slate-900 dark:text-white me-1 font-semibold">All</span> integrations
            </li>
            <li className="flex items-center mt-2">
              <FiCheck className="text-green-600 h-[18px] w-[18px] me-2" />
              Up to <span className="text-slate-900 dark:text-white mx-1 font-semibold">{businessMultiplier * 50}</span> employees
            </li>
            <li className="flex items-center mt-2">
              <FiCheck className="text-green-600 h-[18px] w-[18px] me-2" />
              <span className="text-slate-900 dark:text-white me-1 font-semibold">Basic</span> analytics
            </li>
          </ul>
        </div>
      </div>

      {/* Professional Plan */}
      <div className="relative overflow-hidden rounded-md shadow dark:shadow-gray-800">
        <div className="p-6">
          <h5 className="text-2xl leading-normal font-semibold">Professional</h5>
          <p className="text-slate-400 dark:text-white/60 mt-2">
            For enterprise automation
          </p>
          
          <div className="relative">
            <div className="flex mt-4">
              <span className="text-lg font-semibold">$</span>
              <span>
                <p className="text-5xl font-semibold mb-0 ms-1">
                  {professionalBasePrice * professionalMultiplier}
                </p>
                <p className="text-slate-400 dark:text-white/60 uppercase text-xs">per month</p>
              </span>
            </div>
            
            <div className="relative mt-4">
              <input 
                type="range" 
                min="1" 
                max="10" 
                step="1"
                value={professionalMultiplier}
                onChange={(e) => setProfessionalMultiplier(parseInt(e.target.value))}
                className="w-full h-1 bg-gray-50 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer"
              />
              <span className="font-semibold text-lg absolute end-0 -top-5">
                <p className="inline-block">{professionalMultiplier}.0</p>
                <span>X</span>
              </span>
            </div>
          </div>
          
          <div className="mt-4">
            <Link 
              href="/" 
              className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-amber-400 hover:bg-amber-500 border-amber-400 hover:border-amber-500 text-white rounded"
            >
              Buy Now
            </Link>
          </div>
        </div>
        
        <div className="p-6 bg-gray-50 dark:bg-slate-800">
          <ul className="list-none text-slate-400 dark:text-white/60">
            <li className="font-semibold text-slate-900 dark:text-white text-sm uppercase">Features:</li>
            <li className="flex items-center mt-2">
              <FiCheck className="text-green-600 h-[18px] w-[18px] me-2" />
              <span className="text-slate-900 dark:text-white me-1 font-semibold">Unlimited</span> workflows
            </li>
            <li className="flex items-center mt-2">
              <FiCheck className="text-green-600 h-[18px] w-[18px] me-2" />
              <span className="text-slate-900 dark:text-white me-1 font-semibold">Priority</span> support
            </li>
            <li className="flex items-center mt-2">
              <FiCheck className="text-green-600 h-[18px] w-[18px] me-2" />
              <span className="text-slate-900 dark:text-white me-1 font-semibold">SSO</span> integration
            </li>
            <li className="flex items-center mt-2">
              <FiCheck className="text-green-600 h-[18px] w-[18px] me-2" />
              <span className="text-slate-900 dark:text-white mx-1 font-semibold">Unlimited</span> employees
            </li>
            <li className="flex items-center mt-2">
              <FiCheck className="text-green-600 h-[18px] w-[18px] me-2" />
              <span className="text-slate-900 dark:text-white me-1 font-semibold">Advanced</span> analytics
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}