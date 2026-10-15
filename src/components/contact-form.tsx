"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";

const schema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Enter a valid email address"),
  phone: z.string().regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit Indian phone number"),
  vertical: z.enum(["Mutual Funds", "Real Estate", "Insurance", "Loans", "General"]),
  message: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  // Prefill from a calculator link: /contact?vertical=Loans&note=...
  useEffect(() => {
    const q = new URLSearchParams(window.location.search);
    const v = q.get("vertical");
    const note = q.get("note");
    if (v && ["Mutual Funds", "Real Estate", "Insurance", "Loans"].includes(v)) {
      setValue("vertical", v as FormData["vertical"]);
    }
    if (note) setValue("message", note.slice(0, 500));
  }, [setValue]);

  const onSubmit = async (data: FormData) => {
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-surface border border-border rounded-2xl p-8 text-center">
        <h3 className="font-heading font-semibold text-lg text-primary mb-2">Thank you</h3>
        <p className="font-body text-sm text-foreground-muted">
          Your enquiry has been received. Our team will be in touch shortly.
        </p>
      </div>
    );
  }

  return (
    <form id="enquiry" onSubmit={handleSubmit(onSubmit)} className="bg-surface border border-border rounded-2xl p-6 md:p-8 space-y-5">
      <div>
        <label className="font-body text-sm font-semibold text-primary block mb-1.5">Full Name</label>
        <input
          {...register("name")}
          className="w-full rounded-md border border-border bg-background px-4 py-2.5 font-body text-sm focus:outline-none focus:ring-2 focus:ring-secondary"
        />
        {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name.message}</p>}
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="font-body text-sm font-semibold text-primary block mb-1.5">Email</label>
          <input
            type="email"
            {...register("email")}
            className="w-full rounded-md border border-border bg-background px-4 py-2.5 font-body text-sm focus:outline-none focus:ring-2 focus:ring-secondary"
          />
          {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email.message}</p>}
        </div>
        <div>
          <label className="font-body text-sm font-semibold text-primary block mb-1.5">Phone</label>
          <input
            {...register("phone")}
            placeholder="10-digit mobile number"
            className="w-full rounded-md border border-border bg-background px-4 py-2.5 font-body text-sm focus:outline-none focus:ring-2 focus:ring-secondary"
          />
          {errors.phone && <p className="text-xs text-red-600 mt-1">{errors.phone.message}</p>}
        </div>
      </div>
      <div>
        <label className="font-body text-sm font-semibold text-primary block mb-1.5">Vertical of Interest</label>
        <select
          {...register("vertical")}
          className="w-full rounded-md border border-border bg-background px-4 py-2.5 font-body text-sm focus:outline-none focus:ring-2 focus:ring-secondary"
          defaultValue="General"
        >
          <option>General</option>
          <option>Mutual Funds</option>
          <option>Real Estate</option>
          <option>Insurance</option>
          <option>Loans</option>
        </select>
      </div>
      <div>
        <label className="font-body text-sm font-semibold text-primary block mb-1.5">Message (optional)</label>
        <textarea
          {...register("message")}
          rows={4}
          className="w-full rounded-md border border-border bg-background px-4 py-2.5 font-body text-sm focus:outline-none focus:ring-2 focus:ring-secondary"
        />
      </div>
      {status === "error" && (
        <p className="text-sm text-red-600">Something went wrong. Please try again or email us directly.</p>
      )}
      <Button type="submit" size="lg" disabled={status === "submitting"} className="w-full sm:w-auto">
        {status === "submitting" ? "Submitting..." : "Submit Enquiry"}
      </Button>
    </form>
  );
}
