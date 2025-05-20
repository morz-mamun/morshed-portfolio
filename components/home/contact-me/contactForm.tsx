"use client";

import { useRef } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { ArrowBigRight } from "lucide-react";

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
      className="space-y-[26px] w-full mx-auto"
      ref={formRef}
      onSubmit={handleSubmit}
    >
      {/* Form Fields */}
      <div className="grid grid-cols-2 gap-3 md:gap-4 items-center">
        <div>
          <label className="text-textPrimary dark:text-textPrimary text-sm font-semibold">
            Full name
          </label>
          <Input required type="text" name="name" className="mt-2" />
        </div>
        <div className="space-y-2">
          <label className="text-textPrimary dark:text-textPrimary text-sm font-semibold">
            Subject
          </label>
          <Input required type="text" name="subject" className="mt-2" />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-textPrimary dark:text-textPrimary text-sm font-semibold">
          Write your message here
        </label>
        <Textarea required name="message" className="mt-2" />
      </div>

      {/* Submit Button */}
      <div className="flex justify-center pt-5">
        <ShimmerButton className="shadow-xl">
          <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-brand dark:to-brand/50 lg:text-lg">
            Sent
            <ArrowBigRight className="inline-block ml-1" size={20} />
          </span>
        </ShimmerButton>
      </div>
    </form>
  );
}
