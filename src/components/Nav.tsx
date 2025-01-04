"use client"

import Link from "next/link";
import { useState } from "react";

export default function Nav() {
    const [isClaudeOpen, setIsClaudeOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="fixed w-full top-0 z-50 bg-[#FAFAF8]">
            <div className="grid grid-cols-12 gap-4 px-6 md:px-20 py-6 items-center">
                {/* Logo */}
                <div className="col-span-6 md:col-span-3">
                    <Link href="/" className="font-serene text-2xl font-serene-bold">
                        Anthropic
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <div className="col-span-6 md:hidden flex justify-end">
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="p-2 relative w-[24px] h-[24px]"
                    >
                        <span className={`absolute left-0 top-[8px] w-full h-[2px] bg-black transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-[6px]' : ''
                            }`} />
                        <span className={`absolute left-0 bottom-[8px] w-full h-[2px] bg-black transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-[6px]' : ''
                            }`} />
                    </button>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex col-span-9 items-center justify-end gap-8 font-serene text-sm font-serene-medium">
                    <div className="relative">
                        <button
                            className="flex items-center gap-1 hover:opacity-60"
                            onClick={() => setIsClaudeOpen(!isClaudeOpen)}
                        >
                            Claude
                            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                        {isClaudeOpen && (
                            <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg py-2 min-w-[160px]">
                                <Link href="#" className="block px-4 py-2 hover:bg-gray-50">API</Link>
                                <Link href="#" className="block px-4 py-2 hover:bg-gray-50">Team</Link>
                                <Link href="#" className="block px-4 py-2 hover:bg-gray-50">Pricing</Link>
                            </div>
                        )}
                    </div>
                    <Link href="#" className="hover:opacity-60">Research</Link>
                    <Link href="#" className="hover:opacity-60">Company</Link>
                    <Link href="#" className="hover:opacity-60">Careers</Link>
                    <Link href="#" className="hover:opacity-60">News</Link>
                    <button className="bg-black text-white px-6 py-3 rounded-xl hover:opacity-90">
                        Try Claude
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="fixed inset-0 top-[72px] bg-[#FAFAF8] md:hidden">
                        <div className="p-6 flex flex-col gap-8 font-serene text-lg font-serene-medium">
                            <Link href="#" className="hover:opacity-60 text-2xl">Claude</Link>
                            <Link href="#" className="hover:opacity-60 text-2xl">Research</Link>
                            <Link href="#" className="hover:opacity-60 text-2xl">Company</Link>
                            <Link href="#" className="hover:opacity-60 text-2xl">Careers</Link>
                            <Link href="#" className="hover:opacity-60 text-2xl">News</Link>
                            <button className="bg-black text-white w-full py-4 rounded-xl hover:opacity-90 text-lg mt-4">
                                Try Claude
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
} 