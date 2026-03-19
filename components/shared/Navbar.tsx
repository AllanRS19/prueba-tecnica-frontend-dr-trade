'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/constants";
import { cn } from "@/lib/utils";
import MobileNav from "./MobileNav";

const Navbar = () => {

    const pathname = usePathname();

    return (
        <header>
            <div className="header-container justify-between">
                <Link href={pathname === '/' ? '#' : '/'} className="logo">
                    Rick
                    <span>&</span>
                    Morty API
                </Link>

                <nav className="max-md:hidden">
                    {navLinks.map(({ label, path, icon: Icon }) => (
                        <Link href={path} key={label} className={cn('nav-link', {
                            'is-active': pathname === path
                        })}>
                            {Icon && <Icon className="size-4" />}
                            {label}
                        </Link>
                    ))}
                </nav>

                <div className="md:hidden">
                    <MobileNav />
                </div>
            </div>
        </header>
    )
}

export default Navbar;