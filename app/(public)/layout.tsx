"use client";
import { ChatButton } from "@/components/chat-bot/chat-button";
import Footer from "@/components/shared/footer";
import MobileNavbar from "@/components/shared/navbar/mobileNavbar";
import Navbar from "@/components/shared/navbar/navbar";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen mx-auto">
      {/* navbar */}
      <Navbar />

      {/* main content */}
      <div className="">{children}</div>
      {/* mobile navbar */}
      <MobileNavbar />
      {/* AI Assistance */}
      <ChatButton />
      {/* footer */}
      <Footer />
    </main>
  );
}
