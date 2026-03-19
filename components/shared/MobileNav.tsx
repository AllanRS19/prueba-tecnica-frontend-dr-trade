'use client'

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { navLinks } from "@/constants"
import { cn } from "@/lib/utils"

const MobileNav = () => {

    const pathname = usePathname();

    return (
        <section className="mobile-sheet">
            <Sheet>
                <SheetTrigger>
                    <Image
                        src='/icons/hamburger.svg'
                        width={36}
                        height={36}
                        alt="Menu"
                        className="cursor-pointer"
                    />
                </SheetTrigger>
                <SheetDescription className="hidden" />
                <SheetContent
                    aria-describedby="This is a mobile navigation sidebar"
                    side='left'
                    className="border-none bg-dark-400 px-4"
                >
                    <SheetTitle className="hidden">Rick&Morty</SheetTitle>
                    <SheetClose asChild>
                        <Link href={pathname === '/' ? '#' : '/'} className="logo mt-10">
                            Rick
                            <span>&</span>
                            Morty API
                        </Link>
                    </SheetClose>

                    <div>
                        <SheetClose asChild>
                            <nav className="w-full flex flex-col gap-8 mt-8">
                                {navLinks.map(({ label, path, icon: Icon }) => (
                                    <SheetClose key={label} asChild>
                                        <Link
                                            href={path}
                                            key={label}
                                            className={cn("mobile-nav-link", {
                                                'is-active': pathname === path
                                            })}
                                        >
                                            {Icon && <Icon className="size-5" />}
                                            {label}
                                        </Link>
                                    </SheetClose>
                                ))}
                            </nav>
                        </SheetClose>
                    </div>
                </SheetContent>
            </Sheet>
        </section>
    )
}

export default MobileNav;