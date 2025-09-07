export default function Loading() {
    return (
        <div className="min-h-screen pt-24 bg-gradient-to-br from-blue-50 via-white to-purple-50">
            <div className="max-w-7xl container mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
                {/* Skeletons */}
                <div className="h-24 bg-gray-200 animate-pulse rounded-xl" />
                <div className="h-32 bg-gray-200 animate-pulse rounded-xl" />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[...Array(3)].map((_, i) => (
                        <div key={i} className="h-40 bg-gray-200 animate-pulse rounded-xl" />
                    ))}
                </div>
            </div>
        </div>
    );
}
