export default function ChartCard({
    title,
    children,
}: {
    title: string;
    children: React.ReactNode;
}) {
    return (
        <div className="bg-gray-400/30 p-6 rounded-xl shadow-md">
            <h2 className="text-lg font-semibold mb-4">{title}</h2>
            {children}
        </div>
    );
}