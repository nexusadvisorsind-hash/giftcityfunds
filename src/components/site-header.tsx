"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/mutual-funds", label: "Mutual Funds" },
  { href: "/real-estate", label: "Real Estate" },
  { href: "/insurance", label: "Insurance" },
  { href: "/loans", label: "Loans" },
  { href: "/blog", label: "Blog" },
  { href: "/about-us", label: "About Us" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-background/95 backdrop-blur border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
            <Image
              src="/brand/logo-icon-192.png"
              alt="Artha Vriksha Services logo"
              width={40}
              height={40}
              className="shrink-0 h-10 w-auto"
              priority
            />
            <span className="flex flex-col leading-tight">
              <span className="font-heading font-bold text-xl text-primary">Artha Vriksha</span>
              <span className="text-[11px] sm:text-xs font-body font-semibold text-foreground-muted tracking-wide">
                Rooted in Trust, Growing Your Wealth
              </span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="font-body text-sm font-medium text-foreground hover:text-secondary transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="tel:+919022958266"
              aria-label="Call us"
              className="hidden lg:inline-flex items-center gap-1.5 text-sm font-medium font-body text-foreground hover:text-secondary transition-colors mr-1"
            >
              <Phone className="h-4 w-4" /> +91 90229 58266
            </a>
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center rounded-md bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground hover:bg-accent/90 transition-colors font-body"
            >
              Contact Us
            </Link>
            <button
              type="button"
              aria-label="Toggle menu"
              onClick={() => setOpen((o) => !o)}
              className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-border text-primary"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {open && (
          <nav className="md:hidden border-t border-border py-4 flex flex-col gap-1">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-body text-sm font-medium text-foreground hover:text-secondary hover:bg-surface rounded-md px-3 py-2.5 transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-md bg-accent px-4 py-2.5 text-sm font-semibold text-accent-foreground hover:bg-accent/90 transition-colors font-body"
            >
              Contact Us
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
