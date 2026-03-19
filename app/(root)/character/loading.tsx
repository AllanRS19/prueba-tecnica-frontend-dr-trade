const Loading = () => {
    return (

        <div className="min-h-[calc(100vh-80px)] animate-pulse overflow-hidden">
            <div className="grid md:grid-cols-2 h-full">

                {/* LEFT: IMAGE AREA */}
                <div className="relative border-r-4 border-black flex justify-center items-center overflow-hidden">

                    {/* Image skeleton */}
                    <div className="size-120 bg-gray-300/20" />

                </div>

                {/* RIGHT: INFO */}
                <div className="p-8 md:p-14 flex flex-col gap-8">

                    {/* Status */}
                    <div className="h-4 w-40 bg-gray-300/20" />

                    {/* Name */}
                    <div className="h-12 w-3/4 bg-gray-300/20" />

                    {/* DATA TABLE */}
                    <div className="border-2 border-black">

                        {/* Row 1 */}
                        <div className="grid grid-cols-2 border-b-2 border-black">
                            <div className="p-4 border-r-2 border-black space-y-2">
                                <div className="h-3 w-16 bg-gray-300/20" />
                                <div className="h-4 w-24 bg-gray-300/20" />
                            </div>
                            <div className="p-4 space-y-2">
                                <div className="h-3 w-16 bg-gray-300/20" />
                                <div className="h-4 w-24 bg-gray-300/20" />
                            </div>
                        </div>

                        {/* Row 2 */}
                        
                        <div>
                            <div className="p-4 space-y-2">
                                <div className="h-3 w-32 bg-gray-300/20" />
                                <div className="h-4 w-48 bg-gray-300/20" />
                            </div>
                        </div>
                    </div>

                    {/* TOGGLE FAVORITE BUTTON */}
                    <div className="h-12 w-full bg-gray-300/20" />

                    {/* GO BACK HOME BUTTON */}
                    <div className="h-10 w-full border-2 bg-gray-300/20" />
                </div>
            </div>
        </div>
    );
}

export default Loading;