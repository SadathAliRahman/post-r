"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { Sparkles, Settings, ArrowRight, Check } from "lucide-react";

export default function OnboardingTutorial() {
  const [hasSeenTutorial, setHasSeenTutorial] = useState(true); // Default to true to prevent flash
  const [currentStep, setCurrentStep] = useState(1);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const seen = localStorage.getItem("postbot_tutorial_seen");
    if (!seen && pathname !== "/login") {
      setHasSeenTutorial(false);
    }
  }, [pathname]);

  // Handle body classes for highlighting targets
  useEffect(() => {
    if (hasSeenTutorial) {
      document.body.classList.remove('tutorial-active-2', 'tutorial-active-3');
      return;
    }
    
    document.body.classList.remove('tutorial-active-2', 'tutorial-active-3');
    if (currentStep === 2 && pathname === "/settings") {
      document.body.classList.add('tutorial-active-2');
    } else if (currentStep === 3 && pathname === "/") {
      document.body.classList.add('tutorial-active-3');
    }
    
    return () => {
      document.body.classList.remove('tutorial-active-2', 'tutorial-active-3');
    };
  }, [currentStep, pathname, hasSeenTutorial]);

  if (hasSeenTutorial) return null;

  const completeTutorial = () => {
    localStorage.setItem("postbot_tutorial_seen", "true");
    setHasSeenTutorial(true);
  };

  const renderStep = () => {
    if (currentStep === 1 && pathname === "/") {
      return (
        <motion.div
          key="step1"
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: -20 }}
          className="bg-[#0F172A]/90 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(255,107,53,0.15)] rounded-2xl p-6 w-[360px] flex flex-col gap-5 relative overflow-hidden m-auto"
        >
          {/* Decorative Background Glows */}
          <div className="absolute -top-16 -right-16 w-40 h-40 bg-[#F7931E]/20 rounded-full blur-[40px]" />
          <div className="absolute -bottom-16 -left-16 w-40 h-40 bg-[#0A66C2]/20 rounded-full blur-[40px]" />
          
          <div className="relative z-10 w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FF6B35] to-[#F7931E] p-[2px] shadow-lg">
            <div className="w-full h-full bg-[#0F172A] rounded-[14px] flex items-center justify-center p-2">
              <img 
                src="/logo.png" 
                alt="Postr" 
                className="w-full h-full object-contain"
                style={{ filter: "brightness(0) invert(1)" }}
              />
            </div>
          </div>
          
          <div className="relative z-10">
            <h3 className="text-xl font-bold text-white mb-2 tracking-tight">Welcome to Post'r 🚀</h3>
            <p className="text-sm text-slate-300 leading-relaxed font-medium">
              We help you instantly publish perfectly tailored AI content across all your networks. Let's start by connecting your accounts!
            </p>
          </div>

          <button
            onClick={() => {
              setCurrentStep(2);
              router.push("/settings");
            }}
            className="relative z-10 mt-2 w-full bg-white text-slate-900 font-bold py-3 rounded-xl hover:bg-slate-100 hover:scale-[1.02] transition-all active:scale-[0.98] flex items-center justify-center gap-2 shadow-[0_4px_14px_rgba(255,255,255,0.25)]"
          >
            Go to Settings <ArrowRight size={18} strokeWidth={2.5} />
          </button>
        </motion.div>
      );
    }

    if (currentStep === 2 && pathname === "/settings") {
      return (
        <motion.div
          key="step2"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          className="bg-[#0F172A] border border-[#1E293B] shadow-2xl rounded-2xl p-6 w-[360px] flex flex-col gap-4 relative overflow-hidden ml-auto mr-12 my-auto"
        >
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0A66C2] to-[#4A90E2] flex items-center justify-center text-white shadow-lg">
            <Settings size={24} />
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-white mb-1">Your Connection Hub</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Connect multiple applications in here! Just click <strong>Connect</strong> on any platform you want the AI to write for.
            </p>
          </div>

          <button
            onClick={() => {
              setCurrentStep(3);
              router.push("/");
            }}
            className="mt-2 w-full bg-white text-slate-900 font-semibold py-2.5 rounded-xl hover:bg-slate-100 transition-colors flex items-center justify-center gap-2"
          >
            Back to Composer <ArrowRight size={16} />
          </button>
        </motion.div>
      );
    }

    if (currentStep === 3 && pathname === "/") {
      return (
        <motion.div
          key="step3"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          className="bg-[#0F172A] border border-[#1E293B] shadow-2xl rounded-2xl p-6 w-[360px] flex flex-col gap-4 relative overflow-hidden ml-auto mr-12 my-auto"
        >
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#10B981] to-[#34D399] flex items-center justify-center text-white shadow-lg">
            <Sparkles size={24} />
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-white mb-1">Now for the magic! ✨</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              1. Select platforms from the <strong>"+" Menu</strong>.<br />
              2. Type a short prompt.<br />
              3. Hit <strong>AI Assist</strong> to generate tailored posts simultaneously!
            </p>
          </div>

          <button
            onClick={completeTutorial}
            className="mt-2 w-full bg-gradient-to-r from-[#FF6B35] to-[#F7931E] text-white font-semibold py-2.5 rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
          >
            Get Started <Check size={18} />
          </button>
        </motion.div>
      );
    }

    return null;
  };

  return (
    <div className="fixed inset-0 z-[100] pointer-events-auto flex bg-black/60 backdrop-blur-[2px] transition-all">
      <AnimatePresence mode="wait">
        {renderStep()}
      </AnimatePresence>
    </div>
  );
}
