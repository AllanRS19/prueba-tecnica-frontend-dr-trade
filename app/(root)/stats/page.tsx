import { getAllCharacters } from "@/lib/api";
import {
    getStatusData,
    getSpeciesData,
} from "@/lib/charts";

import ChartCard from "@/components/charts/ChartCard";
import StatusPieChart from "@/components/charts/StatusPieChart";
import { SpeciesBarChart } from "@/components/charts/SpeciesBarChart";
import NoResults from "@/components/NoResults";

const StatsPage = async () => {

    const characters = await getAllCharacters();

    // Gets the data that will be passed to the charts
    const statusData = getStatusData(characters);
    const speciesData = getSpeciesData(characters);

    console.log(statusData, speciesData);

    if (statusData.length === 0 || speciesData.length === 0) return <NoResults
        title="Graphics data could not be found"
        description="We were unable to find data for the graphics. Try again later"
        icon="/icons/no-results.png"
        redirectTo="/"
        redirectText="Go back to homepage"
    />

    return (
        <section className="stats-page-container space-y-8">
            <h1 className="text-3xl font-semibold">Statistics</h1>

            <div className="grid md:grid-cols-2 gap-6">
                <div className="min-w-0">
                    <ChartCard title="Character Status">
                        <StatusPieChart data={statusData} />
                    </ChartCard>
                </div>

                <div className="min-w-0">
                    <ChartCard title="Species Distribution">
                        <SpeciesBarChart data={speciesData} />
                    </ChartCard>
                </div>
            </div>
        </section>
    );
};

export default StatsPage;