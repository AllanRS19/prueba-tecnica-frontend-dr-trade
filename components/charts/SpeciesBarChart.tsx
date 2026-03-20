"use client";

import {
    Bar,
    BarChart,
    ResponsiveContainer,
    XAxis,
} from "recharts";

import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";

type ChartDataItem = {
    name: string;
    value: number;
};

const chartConfig = {
    value: {
        label: "Characters",
        color: "#8b5cf6",
    },
};

export function SpeciesBarChart({
    data,
}: {
    data: ChartDataItem[];
}) {
    return (
        <ResponsiveContainer>
            <ChartContainer config={chartConfig} className="h-[300px] w-full">
                <BarChart data={data}>
                    <XAxis dataKey="name" />

                    <ChartTooltip content={<ChartTooltipContent />} />

                    <Bar dataKey="value" fill="#8b5cf6" />
                    
                </BarChart>
            </ChartContainer>
        </ResponsiveContainer>
    );
}