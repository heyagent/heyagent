"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NO_LAYOUT_PATHS = ["/404", "/500"]; // Add more paths as needed

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  
  // Check if current path should not have layout
  const shouldHideLayout = pathname === null || NO_LAYOUT_PATHS.includes(pathname);

  if (shouldHideLayout) {
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