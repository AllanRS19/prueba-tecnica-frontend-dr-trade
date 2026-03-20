const FavoritesSkeleton = () => {
    return (
        <div>
            <div className="h-12 w-40 rounded-md bg-gray-400/30 animate-pulse" />
            <div className="characters-grid">
                {Array.from({ length: 8 }).map((_, i) => (
                    <div className="character-card animate-pulse" key={i}>

                        {/* This is the skeleton image */}
                        <div className="character-image bg-gray-300/20" />

                        {/* This is the skeleton body */}
                        <div className="character-card-body">

                            {/* This is the top section of the body row */}
                            <div className="w-full flex items-center">

                                {/* Name */}
                                <div className="h-5 w-2/3 bg-gray-300/20 rounded" />

                                {/* Status badge */}
                                <div className="flex items-center ml-auto border-2 rounded-lg p-1 gap-1">
                                    <div className="size-3 rounded-full bg-gray-300/20" />
                                    <div className="h-3 w-16 bg-gray-300/20 rounded" />
                                </div>
                            </div>

                            {/* Bottom tags */}
                            <div className="w-full flex flex-wrap items-center gap-2">

                                {/* Origin */}
                                <div className="border-2 rounded-lg p-1">
                                    <div className="h-3 w-24 bg-gray-300/20 rounded" />
                                </div>

                                {/* Gender */}
                                <div className="border-2 rounded-lg p-1">
                                    <div className="h-3 w-16 bg-gray-300/20 rounded" />
                                </div>

                                {/* Episodes */}
                                <div className="border-2 rounded-lg p-1">
                                    <div className="h-3 w-20 bg-gray-300/20 rounded" />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FavoritesSkeleton;