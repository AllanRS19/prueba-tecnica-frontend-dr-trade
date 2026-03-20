const loading = () => {
    return (
        <div className="px-6 md:px-16 py-6">
            <div className="h-12 w-40 rounded-md bg-gray-400/30 animate-pulse" />
            <div className="grid md:grid-cols-2 gap-10 mt-12">
                {Array.from({ length: 2 }).map((_, i) => (
                    <div className="w-full h-100 bg-gray-400/30 animate-pulse rounded-md" key={i} />
                ))}
            </div>
        </div>
    );
}

export default loading;