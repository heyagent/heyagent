"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [hideLayout, setHideLayout] = useState(false);

  useEffect(() => {
    // Check if body has no-layout class
    const checkLayout = () => {
      setHideLayout(document.body.classList.contains("no-layout"));
    };

    // Initial check
    checkLayout();

    // Watch for changes
    const observer = new MutationObserver(checkLayout);
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  if (hideLayout) {
    return <>{children}</>;
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        {children}
      </div>
      <div className="mt-24">
        <Footer />
      </div>
    </>
  );
}