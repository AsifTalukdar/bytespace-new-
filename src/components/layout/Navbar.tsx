"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const links = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "#courses" },
  { label: "Creators", href: "#creators" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-20 text-gray-50">
      <div className="mx-auto flex h-20 max-w-[1200px] items-center justify-between px-5 md:h-[120px] md:px-0">
        <Link href="/" className="flex items-center gap-2 font-clash text-2xl font-bold">
          <Image src="/images/logo.svg" alt="" width={29} height={32} />
          ByteSpace
        </Link>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 gap-6 md:flex">
          {links.map((l, i) => (
            <Link key={l.label} href={l.href} className={i === 0 ? "font-medium" : ""}>
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-6 md:flex">
          <Link href="/login">Sign In</Link>
          <Link href="/signup">Join Us</Link>
          <button aria-label="Cart">
            <Image src="/images/bag.svg" alt="" width={24} height={24} />
          </button>
        </div>

        <button
          className="md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span className="text-2xl">{open ? "✕" : "☰"}</span>
        </button>
      </div>

      {open && (
        <div className="flex flex-col gap-4 bg-blue-800 px-5 pb-6 md:hidden">
          {[...links, { label: "Sign In", href: "/login" }, { label: "Join Us", href: "/signup" }].map((l) => (
            <Link key={l.label} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}