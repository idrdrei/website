"use client";

import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaFacebookMessenger,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-black/10 bg-[#FAFAF7]">
      <div className="mx-auto max-w-7xl px-8 py-20 lg:px-16">
        {/* Top */}
        <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-medium tracking-[0.3em] text-[#111]">
              iDRDREI
            </h3>

            <p className="mt-6 max-w-sm leading-8 text-neutral-600">
              Ophthalmic care, from routine eye examinations to highly
              specialized treatment for complex eye conditions.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-medium uppercase tracking-[0.25em] text-[#111]">
              Navigation
            </h4>

            <ul className="mt-6 space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-neutral-600 transition-colors hover:text-[#1F4E8C]"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  href="/services"
                  className="text-neutral-600 transition-colors hover:text-[#1F4E8C]"
                >
                  Services
                </Link>
              </li>

              <li>
                <Link
                  href="/education"
                  className="text-neutral-600 transition-colors hover:text-[#1F4E8C]"
                >
                  Education
                </Link>
              </li>

              <li>
                <Link
                  href="/clinics"
                  className="text-neutral-600 transition-colors hover:text-[#1F4E8C]"
                >
                  Clinics
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="text-neutral-600 transition-colors hover:text-[#1F4E8C]"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Clinic Locations */}
          <div>
            <h4 className="text-sm font-medium uppercase tracking-[0.25em] text-[#111]">
              Clinic Locations
            </h4>

            <ul className="mt-6 space-y-3 text-neutral-600">
              <li>St. Luke's Medical Center – Quezon City</li>
              <li>Makati Life Medical Center</li>
              <li>Fatima University Medical Center – Antipolo</li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-sm font-medium uppercase tracking-[0.25em] text-[#111]">
              Connect
            </h4>

            <div className="mt-6 flex gap-5 text-2xl text-neutral-700">
              <a
                href="https://facebook.com/idrdrei"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="transition-all duration-300 hover:-translate-y-0.5 hover:text-[#1877F2]"
              >
                <FaFacebook />
              </a>

              <a
                href="https://instagram.com/idrdrei"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="transition-all duration-300 hover:-translate-y-0.5 hover:text-[#E4405F]"
              >
                <FaInstagram />
              </a>

              <a
                href="https://youtube.com/@idrdrei"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="transition-all duration-300 hover:-translate-y-0.5 hover:text-[#FF0000]"
              >
                <FaYoutube />
              </a>

              <a
                href="https://facebook.com/idrdrei"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Messenger"
                className="transition-all duration-300 hover:-translate-y-0.5 hover:text-[#0084FF]"
              >
                <FaFacebookMessenger />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-20 flex flex-col gap-4 border-t border-black/10 pt-8 text-sm text-neutral-500 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Dr. Andrei Martin. All rights reserved.</p>

          <p>Expert care. Personalized for every patient.</p>
        </div>
      </div>
    </footer>
  );
}