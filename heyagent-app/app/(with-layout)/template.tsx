import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Template({
  children,
}: {
  children: React.ReactNode;
}) {
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