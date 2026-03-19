import Link from "next/link";

export default function NotFound() {
    return (
        <div className="not-found-container">
            <div className="z-10 text-center px-6">
                <h1 className="text-7xl font-extrabold text-green-400">
                    404
                </h1>

                <h2 className="mt-4 text-2xl md:text-3xl font-semibold">
                    Ops, seems like I forgot to build this page :(
                </h2>

                <p className="mt-4 text-gray-400 max-w-md mx-auto">
                    We were unable to find the resource you were looking for. You can go back home clicking the button below
                </p>

                <Link
                    href="/"
                    className="action-button go-home-link"
                >
                    Back to homepage
                </Link>
            </div>
        </div>
    );
}