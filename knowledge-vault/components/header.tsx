"use client"

import Link from "next/link"
import { useState } from "react"
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"

export function Header() {
  return (
    <header>
      <div>
        <div>

          {/* Logo */}
          <Link href="/">
            <div>
              <svg viewBox="0 0 24 24">
                <path d="M19 2H5c-1.1 0-2 .9-2 2v18l7-3 7 3V4c0-1.1-.9-2-2-2z" />
              </svg>
            </div>
            <span>Knowledge Vault</span>
          </Link>

          {/* Navigation */}
          <nav>
            {[
              { href: "/knowledge", label: "Explore" },
              { href: "/quiz", label: "Quizzes" },
              { href: "/new", label: "Add Knowledge" },
              { href: "/userall", label: "My Knowledge" },
            ].map((nav) => (
              <Link key={nav.href} href={nav.href}>
                {nav.label}
              </Link>
            ))}
          </nav>

          {/* Right Section */}
          <div>
            {/* Search Button */}
            <button>
              <svg viewBox="0 0 24 24">
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* Signed Out -> Show Sign In */}
            <SignedOut>
              <Link href="/signin">Sign In</Link>
            </SignedOut>

            {/* Signed In -> Show Profile Image + Dropdown + Logout */}
            <SignedIn>
              <UserButton afterSignOutUrl="/signin" />
            </SignedIn>
          </div>
        </div>
      </div>
    </header>
  )
}
