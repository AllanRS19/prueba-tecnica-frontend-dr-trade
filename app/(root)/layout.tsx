import Navbar from "@/components/shared/Navbar";

const Layout = ({
    children
}: Readonly<{
    children: React.ReactNode
}>) => {
    return (
        <main className="w-full">
            <Navbar />
            {children}
        </main>
    )
}

export default Layout;