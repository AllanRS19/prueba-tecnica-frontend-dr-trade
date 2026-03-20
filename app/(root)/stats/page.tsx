import { getAllCharacters } from "@/lib/api";
import {
    getStatusData,
    getSpeciesData,
} from "@/lib/charts";

import ChartCard from "@/components/charts/ChartCard";
import StatusPieChart from "@/components/charts/StatusPieChart";
import { SpeciesBarChart } from "@/components/charts/SpeciesBarChart";

const StatsPage = async () => {

    const characters = await getAllCharacters();

    const statusData = getStatusData(characters);
    const speciesData = getSpeciesData(characters);

    return (
        <section className="stats-page-container space-y-8">
            <h1 className="text-3xl font-semibold">Statistics</h1>

            <div className="grid md:grid-cols-2 gap-6">
                <ChartCard title="Character Status">
                    <StatusPieChart data={statusData} />
                </ChartCard>

                <ChartCard title="Species Distribution">
                    <SpeciesBarChart data={speciesData} />
                </ChartCard>

                {/* <ChartCard title="Gender Distribution">
                    <StatusPieChart data={genderData} />
                </ChartCard> */}
            </div>
        </section>
    );
};

export default StatsPage;