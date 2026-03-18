'use client';

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { navLinks } from "@/constants";

const Navbar = () => {

    const pathname = usePathname();

    return (
        <header>
            <div className="header-container">
                <Link href="/">
                    <Image
                        src="/logo.svg"
                        alt="Rick and Morty Logo"
                        width={132}
                        height={132}
                    />
                    <h2 className="">Rick and Morty API</h2>
                </Link>

                <nav className="navbar">
                    {navLinks.map(({ label, path }) => (
                        <Link key={label} href={path} className={}>
                            {label}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    )
}

export default Navbar;