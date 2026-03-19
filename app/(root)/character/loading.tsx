const Loading = () => {
    return (

        <div className="min-h-[calc(100vh-80px)] animate-pulse overflow-hidden">
            <div className="grid md:grid-cols-2 h-full">

                {/* LEFT: IMAGE AREA */}
                <div className="relative border-r-4 border-black flex justify-center items-center overflow-hidden">

                    {/* Image skeleton */}
                    <div className="size-120 bg-[#F4F0E8]" />

                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40" />

                    {/* Species tag */}
                    <div className="absolute bottom-8 left-8 bg-[#C8FF00] border-2 border-black px-4 py-1">
                        <div className="h-3 w-16 bg-black/20" />
                    </div>
                </div>

                {/* RIGHT: INFO */}
                <div className="p-8 md:p-14 flex flex-col gap-8">

                    {/* Status */}
                    <div className="h-4 w-40 bg-black/20" />

                    {/* Name */}
                    <div className="h-12 w-3/4 bg-black/20" />

                    {/* DATA TABLE */}
                    <div className="border-2 border-black">

                        {/* Row 1 */}
                        <div className="grid grid-cols-2 border-b-2 border-black">
                            <div className="p-4 border-r-2 border-black space-y-2">
                                <div className="h-3 w-16 bg-black/20" />
                                <div className="h-4 w-24 bg-black/30" />
                            </div>
                            <div className="p-4 space-y-2">
                                <div className="h-3 w-16 bg-black/20" />
                                <div className="h-4 w-24 bg-black/30" />
                            </div>
                        </div>

                        {/* Row 2 */}
                        <div className="grid grid-cols-2 border-b-2 border-black">
                            <div className="p-4 border-r-2 border-black space-y-2">
                                <div className="h-3 w-16 bg-black/20" />
                                <div className="h-4 w-24 bg-black/30" />
                            </div>
                            <div className="p-4 space-y-2">
                                <div className="h-3 w-16 bg-black/20" />
                                <div className="h-4 w-24 bg-black/30" />
                            </div>
                        </div>

                        {/* Row 3 */}
                        <div className="border-b-2 border-black">
                            <div className="p-4 space-y-2">
                                <div className="h-3 w-24 bg-black/20" />
                                <div className="h-4 w-40 bg-black/30" />
                            </div>
                        </div>

                        {/* Row 4 */}
                        <div>
                            <div className="p-4 space-y-2">
                                <div className="h-3 w-32 bg-black/20" />
                                <div className="h-4 w-48 bg-black/30" />
                            </div>
                        </div>
                    </div>

                    {/* TOGGLE FAVORITE BUTTON */}
                    <div className="h-12 w-full bg-black" />

                    {/* GO BACK HOME BUTTON */}
                    <div className="h-10 w-full border-2 border-black" />
                </div>
            </div>
        </div>
    );
}

export default Loading;