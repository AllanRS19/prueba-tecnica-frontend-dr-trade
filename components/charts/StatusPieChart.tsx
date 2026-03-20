"use client";

import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const COLORS = ["#22c55e", "#a3a3a3", "#ef4444"];

export default function StatusPieChart({
    data,
}: {
    data: ChartDataItem[];
}) {
    return (
        <div className="h-[300px]">
            <ResponsiveContainer>
                <PieChart>
                    <Pie data={data} dataKey="value" nameKey="name">
                        {data.map((_, i) => (
                            <Cell key={i} fill={COLORS[i % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
}

// "use client";

// import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
// import { type ChartConfig, ChartContainer, ChartLegend, ChartLegendContent } from "../ui/chart";

// const COLORS = ["#22c55e", "#a3a3a3", "#ef4444"];

// const chartConfig = {
//     alive: {
//         label: "Alive",
//         color: "#22c55e"

//     },
//     dead: {
//         label: "Dead",
//         color: "#a3a3a3"

//     },
//     unknow: {
//         label: "Unknown",
//         color: "#ef4444"

//     },
    
// } satisfies ChartConfig;

// export default function StatusPieChart({
//     data,
// }: {
//     data: ChartDataItem[];
// }) {
//     return (
//         <div className="h-full">
//             <ChartContainer config={chartConfig}>
//                 <PieChart>
//                     <Pie data={data} dataKey="value" nameKey="name">
//                         {data.map((_, i) => (
//                             <Cell key={i} fill={COLORS[i % COLORS.length]} />
//                         ))}
//                     </Pie>
//                     <Tooltip />
//                     <ChartLegend
//                         content={<ChartLegendContent nameKey="alive" />}
//                         className="flex-wrap gap-2"
//                     />
//                 </PieChart>
//             </ChartContainer>
//         </div>
//     );
// }