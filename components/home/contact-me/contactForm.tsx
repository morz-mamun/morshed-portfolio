"use client";

import { useRef } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
// import toast from "react-hot-toast";
// import { ErrorSVG } from "../svg/toast/ErrorSVG";
// import { SuccessSVG } from "../svg/toast/SuccessSVG";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const router = useRouter();

  const clearParams = () => {
    router.replace("/"); // In Next.js, this replaces the current route
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData(formRef.current!);
    const name = formData.get("name") as string;
    const yourSubject = formData.get("subject") as string;
    const message = formData.get("message") as string;

    if (!name || !message) {
      toast.error("Please fill in all fields.");
      return;
    }

    toast.success("Redirecting to Gmail...");

    const recipientEmail = "morzmamun@gmail.com";
    const subject = "Contact Form Submission";
    const body =
      `Hi, I am ${name},%0A%0A` +
      `📌 Subject: ${yourSubject}%0A%0A` +
      `💬 Message: ${message}%0A%0A` +
      `Best regards,%0A${name}`;

    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=${recipientEmail}&su=${encodeURIComponent(
        subject
      )}&body=${body}`
    );

    formRef.current!.reset();
    clearParams();
  };

  return (
    <form
      className="space-y-[26px] w-full md:w-[676px] mx-auto"
      ref={formRef}
      onSubmit={handleSubmit}
    >
      {/* Form Fields */}
      <div className="grid grid-cols-2 gap-3 md:gap-4 items-center">
        <div>
          <label className="text-sm font-semibold">Full name</label>
          <Input required type="text" name="name" className="mt-2" />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold">Subject</label>
          <Input required type="text" name="subject" className="mt-2" />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-semibold">Write your message here</label>
        <Textarea required name="message" className="mt-2" />
      </div>

      {/* Submit Button */}
      <div className="flex justify-center pt-5">
        <button
          type="submit"
          className="px-5 py-3 w-[112px] h-[46px] bg-black/10 rounded-[10px] text-base text-primary-text font-bold font-gabarito leading-6 hover:text-[15px] hover:scale-90 transition-all duration-300 ease-in-out"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
